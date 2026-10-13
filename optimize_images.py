#!/usr/bin/env python3
"""Normalize referenced menu images to lowercase .webp names and update script.js.

Run beside script.js and the images/ folder:
    pip install pillow
    python optimize_images.py

Optional cleanup of converted source files:
    python optimize_images.py --clean
"""
import re
import sys
from pathlib import Path
from PIL import Image, ImageOps

SIZE, QUALITY = 400, 78
root = Path(__file__).resolve().parent
img_dir, js = root / "images", root / "script.js"
if not img_dir.is_dir() or not js.is_file():
    sys.exit("Put this file next to script.js and the images folder, then run it again.")

text = js.read_text(encoding="utf-8")
code = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
code = re.sub(r"(?m)^\s*//.*$", "", code)
names = sorted(set(re.findall(r"\bimg:\s*['\"]([^'\"]+)['\"]", code)))
files = {p.name.lower(): p for p in img_dir.iterdir() if p.is_file()}
done, originals = {}, []

def safe_stem(stem):
    return re.sub(r"[^a-z0-9_-]+", "", stem.lower().replace("&", "and")) or "img"

for name in names:
    target_name = safe_stem(Path(name).stem) + ".webp"
    src = img_dir / name
    if not src.is_file():
        src = files.get(name.lower())
    # Also find the intended normalized name if the original is already absent.
    if not src or not src.is_file():
        existing = img_dir / target_name
        if existing.is_file():
            done[name] = target_name
            print("already normalized:", name, "->", target_name)
        else:
            print("missing, skipped:", name)
        continue
    target = img_dir / target_name
    if src.resolve() == target.resolve():
        done[name] = target_name
        print("already normalized:", name)
        continue
    # If a normalized target exists already, prefer it and avoid overwriting it.
    if target.exists():
        try:
            with Image.open(target) as test:
                test.verify()
            done[name] = target_name
            print("using existing:", target_name)
            continue
        except Exception:
            pass
    try:
        with Image.open(src) as opened:
            im = ImageOps.exif_transpose(opened)
            im.thumbnail((SIZE, SIZE), Image.Resampling.LANCZOS)
            im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") else "RGB")
            im.save(target, "WEBP", quality=QUALITY, method=6)
        done[name] = target_name
        originals.append(src)
        print(f"{src.name} -> {target.name}")
    except Exception as exc:
        print(f"could not convert {src.name}: {exc}")

if done:
    backup = root / "script.js.bak"
    if not backup.exists():
        backup.write_text(text, encoding="utf-8")
    for old, new in done.items():
        text = re.sub(r"(\bimg:\s*['\"])" + re.escape(old) + r"(['\"])",
                      lambda m: m.group(1) + new + m.group(2), text)
    js.write_text(text, encoding="utf-8")
    print(f"\nUpdated {len(done)} image references in script.js.")
else:
    print("\nNo referenced images could be normalized.")

# Optional wide hero image and PWA icons
for ext in ("jpg", "jpeg", "png"):
    hero = files.get(f"hero.{ext}")
    if hero:
        with Image.open(hero) as opened:
            im = ImageOps.exif_transpose(opened).convert("RGB")
            im.thumbnail((1400, 1400), Image.Resampling.LANCZOS)
            im.save(img_dir / "hero.webp", "WEBP", quality=74, method=6)
        print("Created images/hero.webp")
        break

logo = files.get("logo.png")
if logo:
    with Image.open(logo) as opened:
        base_img = opened.convert("RGBA")
    for size in (192, 512):
        bg = Image.new("RGB", (size, size), (0, 0, 0))
        logo_img = base_img.copy()
        logo_img.thumbnail((int(size * .72), int(size * .72)), Image.Resampling.LANCZOS)
        bg.paste(logo_img, ((size - logo_img.width) // 2, (size - logo_img.height) // 2), logo_img)
        bg.save(img_dir / f"icon-{size}.png", optimize=True)
    print("Created PWA icons.")

if "--clean" in sys.argv:
    old_files = [p for p in set(originals) if p.exists() and p.name.lower() != "logo.png"
                 and p.suffix.lower() != ".webp"]
    if old_files and input(f"\nDelete {len(old_files)} converted source files? [y/N] ").strip().lower() == "y":
        for p in old_files:
            p.unlink()
        print("Deleted converted source files. Keep script.js.bak locally; do not upload it.")
