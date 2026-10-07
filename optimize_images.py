#!/usr/bin/env python3
"""
Run this on your computer, next to index.html / script.js / images/.

    pip install pillow
    python optimize_images.py            # convert
    python optimize_images.py --clean    # convert, then offer to delete the old originals

What it does:
  1. Converts every menu photo named in script.js (img:'...') to a small WebP
     (max 400px, quality 78 - the photos are shown at 112px), with a safe
     lower-case file name (no capital letters, no '&').
  2. Updates the img:'...' names inside script.js to the new .webp files.
  3. Safe to run again: .webp files are never re-compressed, and the first
     backup (script.js.bak) is never overwritten.
  4. Makes images/hero.webp (1400px) from images/hero.jpg / .png if you add one.
  5. Makes images/icon-192.png and icon-512.png from images/logo.png (for the home-screen app).
images/logo.png is left as it is.

Before uploading the site to the host: do NOT upload script.js.bak or the old .png originals
(use --clean to remove the originals that were converted).
"""
import re, sys
from pathlib import Path
from PIL import Image, ImageOps

SIZE, QUALITY = 400, 78
root = Path(__file__).resolve().parent
img_dir, js = root / 'images', root / 'script.js'
if not img_dir.is_dir() or not js.is_file():
    sys.exit('Put this file next to script.js and the images folder, then run it again.')

text = js.read_text(encoding='utf-8')
# ignore comments, so examples like img:'file-name.jpg' are not treated as real photos
code = re.sub(r'/\*.*?\*/', '', text, flags=re.S)
code = re.sub(r'(?m)^\s*//.*$', '', code)
names = sorted(set(re.findall(r"\bimg:\s*['\"]([^'\"]+)['\"]", code)))

files = {p.name.lower(): p for p in img_dir.iterdir() if p.is_file()}   # case-insensitive lookup
used = {n for n in files if n.endswith('.webp')}                         # names that already exist
for n in names:                                                           # .webp names already referenced stay reserved
    if n.lower().endswith('.webp'):
        used.add(n.lower())


def safe_name(stem):
    base = re.sub(r'[^a-z0-9_-]+', '', stem.lower().replace('&', 'and')) or 'img'
    new, i = base + '.webp', 2
    while new in used:
        new, i = f'{base}-{i}.webp', i + 1
    used.add(new)
    return new


def to_rgb_or_rgba(im):
    return im.convert('RGBA') if im.mode in ('RGBA', 'LA', 'P') else im.convert('RGB')


done, originals = {}, []
for name in names:
    if name.lower().endswith('.webp'):
        print('already webp, skipped:', name); continue
    src = img_dir / name
    if not src.is_file():
        src = files.get(name.lower())
    if not src or not src.is_file():
        print('missing, skipped:', name); continue
    new = safe_name(src.stem)
    im = ImageOps.exif_transpose(Image.open(src))
    im.thumbnail((SIZE, SIZE), Image.LANCZOS)
    im = to_rgb_or_rgba(im)
    im.save(img_dir / new, 'WEBP', quality=QUALITY, method=6)
    done[name] = new
    originals.append(src)
    print(f'{name}  ->  {new}   {src.stat().st_size//1024} KB -> {(img_dir/new).stat().st_size//1024} KB')

if done:
    bak = root / 'script.js.bak'
    if not bak.exists():                       # keep the FIRST backup only
        bak.write_text(text, encoding='utf-8')
    for old, new in done.items():
        text = re.sub(r"(\bimg:\s*['\"])" + re.escape(old) + r"(['\"])", r"\g<1>" + new + r"\g<2>", text)
    js.write_text(text, encoding='utf-8')
    before = sum(p.stat().st_size for p in set(originals))
    after = sum((img_dir / n).stat().st_size for n in set(done.values()))
    print(f'\nDone: {len(done)} names converted and script.js updated. {before//1024} KB -> {after//1024} KB')
else:
    print('\nNothing new to convert.')

# ---- optional hero photo: images/hero.jpg|jpeg|png -> images/hero.webp (1400px wide) ----
for ext in ('jpg', 'jpeg', 'png'):
    h = files.get(f'hero.{ext}')
    if h:
        im = ImageOps.exif_transpose(Image.open(h)).convert('RGB')
        im.thumbnail((1400, 1400), Image.LANCZOS)
        im.save(img_dir / 'hero.webp', 'WEBP', quality=74, method=6)
        print(f'hero: {h.name} -> hero.webp ({(img_dir/"hero.webp").stat().st_size//1024} KB)')
        originals.append(h)
        break

# ---- home-screen icons from the logo ----
logo = files.get('logo.png')
if logo:
    base = Image.open(logo).convert('RGBA')
    for s in (192, 512):
        bg = Image.new('RGB', (s, s), (0, 0, 0))
        l = base.copy(); l.thumbnail((int(s * .72), int(s * .72)), Image.LANCZOS)
        bg.paste(l, ((s - l.width) // 2, (s - l.height) // 2), l)
        bg.save(img_dir / f'icon-{s}.png', optimize=True)
    print('icons: icon-192.png, icon-512.png')

# ---- optional cleanup of the converted originals (never logo.png) ----
if '--clean' in sys.argv:
    olds = [p for p in set(originals) if p.exists() and p.name.lower() != 'logo.png' and p.suffix.lower() != '.webp']
    if olds and input(f'\nDelete {len(olds)} original image files that were converted? [y/N] ').strip().lower() == 'y':
        for p in olds:
            p.unlink()
        print('Deleted. Keep script.js.bak on your computer only; do not upload it.')
