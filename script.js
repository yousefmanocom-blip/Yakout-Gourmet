/* =====================================================================
   CONFIG: every setting that used to be repeated in many places.
   Change it HERE only (phone, hours, address, links, optional services).
   ===================================================================== */
const CONFIG = {
  name: { ar: 'قرية ياقوت', en: 'Yakout Gourmet' },
  waNumber: '201286553359',          // WhatsApp + phone, international format, no +
  phoneLocal: '01286553359',
  email: 'karemzain@icloud.com',
  siteUrl: 'https://YOUR-DOMAIN.com', // no trailing slash. Also replace it inside index.html (og:image / og:url)

  /* EDIT: the restaurant address (shown in "Visit us" + Google search data) */
  address: { ar: '', en: '' },
  /* EDIT: address or "lat,lng" to show a real Google map. Leave '' to keep the decorative map + button */
  mapQuery: '',
  mapsLink: 'https://maps.app.goo.gl/h5xDfeZ2utX4FMaMA',

  /* opening hours (Cairo time). close < open means it closes after midnight.
     For Ramadan change ONLY this block. */
  hours: {
    open: 12, close: 3,
    ar: 'من ١٢ ظهرًا حتى ٣ فجرًا',               en: '12 PM to 3 AM',
    openNowAr: 'مفتوح الآن حتى ٣ فجرًا',          openNowEn: 'Open now until 3 AM',
    closedNowAr: 'مغلق حاليًا، نفتح ١٢ ظهرًا',     closedNowEn: 'Closed now, opens at 12 PM'
  },

  social: {
    facebook: 'https://www.facebook.com/share/1ChkLFtqp8/',
    tiktok: 'https://www.tiktok.com/@yakout.seafood'
  },

  /* items shown in the "Most ordered" section (ids from MENU) */
  popularIds: ['m1', 'm6', 'm2', 'f2'],
  /* hero background: put a wide photo at images/hero.jpg and run optimize_images.py (makes hero.webp).
     If it is missing, the photo of heroItem is used. */
  heroImage: 'hero.webp',
  heroItem: 'm1',

  /* OPTIONAL: price list from a Google Sheet (File > Share > Publish to web > CSV).
     Columns: id, price, off   (off = نفذ / 1 / yes). Leave '' to use the MENU below only. */
  sheetCsvUrl: '',
  /* OPTIONAL: Cloudflare Web Analytics token (visits). */
  cfToken: '',
  /* OPTIONAL: URL (e.g. Google Apps Script web app) that receives a tiny POST every time someone taps "Send order / booking". */
  trackUrl: ''
};
/* =====================================================================
   EDIT HERE: menu categories and items (prices in EGP). Sample data only.
   Photos: put the picture inside the  images  folder, then add  img:'file-name.jpg'
   to the item (file name ONLY, without "images/"). If the photo is missing or
   fails to load, the icon is shown automatically.
   Sold out today? add  off:true  to the item and it shows as unavailable.
   ===================================================================== */
const MENU = {
  cats: [
    {id:'meal',  ar:'وجبات',            en:'Meals'},
    {id:'grill',  ar:'اسماك طازجة',            en:'Fresh fish'},
    {id:'plates',  ar:'اطباق',    en:'Plates'},
    {id:'rice',   ar:'الارز', en:'Rice'},
    {id:'sandwitch',   ar:'سندوتشات',    en:'Sandwiches'},
    {id:'family',   ar:'الصوانى',     en:'Trays'},
    {id:'appetizers',  ar:'المقبلات',           en:'Appetizers'},
    {id:'pasta',  ar:'المكرونات',           en:'Pasta'},
    {id:'soups',  ar:'الشوربة',           en:'Soups'},
    {id:'drink',  ar:'المشروبات',           en:'Drinks'},
    {id:'juice',  ar:'العصائر',            en:'Juices'}
  ],
  items: [
    {id:'g1',cat:'grill',img:'b.WebP',unit:'kg',ar:'بورى',en:'Mullet',dAr:'بالوزن',dEn:'By weight' ,price:380},
    {id:'g2',cat:'grill',img:'d.WebP',unit:'kg',ar:'دنيس',en:'Sea Bream',dAr:'بالوزن',dEn:'By weight',price:850},
    {id:'g3',cat:'grill',img:'p.WebP',unit:'kg',ar:'بربون',en:'Red Mullet',dAr:'بالوزن',dEn:'By weight',price:850},
    {id:'g4',cat:'grill',img:'mos.WebP',unit:'kg',ar:'موسى',en:'Sole',dAr:'بالوزن',dEn:'By weight',price:1200},
    {id:'g5',cat:'grill',img:'w.WebP',unit:'kg',ar:'وقار',en:'Waqar',dAr:'بالوزن',dEn:'By weight',price:1100},
    {id:'g6',cat:'grill',img:'ka.WebP',unit:'kg',ar:'كابوريا',en:'Crab',dAr:'بالوزن',dEn:'By weight',price:750},
    {id:'g7',cat:'grill',img:'k.WebP',unit:'kg',ar:'كابوريا',en:'Crab',dAr:'بالوزن',dEn:'By weight',price:850},
    {id:'g8',cat:'grill',img:'mo.WebP',unit:'kg',ar:'مرجان',en:'Marjan',dAr:'بالوزن',dEn:'By weight',price:850},
    {id:'g9',cat:'grill',img:'bo.WebP',unit:'kg',ar:'بلطى',en:'Tilapia',dAr:'بالوزن',dEn:'By weight',price:180},
    {id:'g10',cat:'grill',img:'m.WebP',unit:'kg',ar:'مياس',en:'Mayas',dAr:'بالوزن',dEn:'By weight',price:850},
    {id:'g11',cat:'grill',img:'s.WebP',unit:'kg',ar:'جمبرى',en:'Shrimp',dAr:'بالوزن',dEn:'By weight',price:1200},
    {id:'g12',cat:'grill',img:'s.WebP',unit:'kg',ar:'جمبرى',en:'Shrimp',dAr:'بالوزن',dEn:'By weight',price:1400},
    {id:'g13',cat:'grill',img:'s.WebP',unit:'kg',ar:'جمبرى',en:'Shrimp',dAr:'بالوزن',dEn:'By weight',price:1900},
    {id:'g14',cat:'grill',img:'so.WebP',unit:'kg',ar:'سبيط',en:'Squid',dAr:'بالوزن',dEn:'By weight',price:850},
    {id:'g15',cat:'grill',img:'bs.WebP',unit:'kg',ar:'بيض سبيط',en:'Squid Roe',dAr:'بالوزن',dEn:'By weight',price:900},
    {id:'g16',cat:'grill',img:'bt.WebP',unit:'kg',ar:'بطارخ',en:'Fish Roe',dAr:'بالوزن',dEn:'By weight',price:1200},
    {id:'g17',cat:'grill',img:'esh.WebP',unit:'kg',ar:'قشر بياض',en:'Nile Perch',dAr:'بالوزن',dEn:'By weight',price:650},
    {id:'g18',cat:'grill',img:'l.WebP',unit:'kg',ar:'لوط',en:'Lout fish',dAr:'بالوزن',dEn:'By weight',price:650},
    {id:'g19',cat:'grill',img:'q.WebP',unit:'kg',ar:'قاروص',en:'Qaroos',dAr:'بالوزن',dEn:'By weight',price:750},

    {id:'m1',cat:'meal',img:'mix.WebP',ar:'وجبة ميكس',en:'Mix Meal',dAr:'وجبة جمبرى +سبيط+فيليه+ارز+بطاطس/بساريا+2 صوص',dEn:'Shrimp + squid + fish fillet meal with rice, fries/basarya, and 2 sauces',price:345},
    {id:'m2',cat:'meal',img:'shrimp.WebP',ar:'وجبة جمبرى',en:'Shrimp Meal',dAr:'جمبرى +ارز+بطاطس/بساريا+2 صوص',dEn:'Shrimp with rice, fries/basarya, and 2 sauces',price:325},
    {id:'m3',cat:'meal',img:'squid.WebP',ar:'وجبة سبيط',en:'Squid Meal',dAr:'سبيط+ارز+بطاطس/بساريا+2 صوص',dEn:'Squid with rice, fries/basarya, and 2 sauces',price:320},
    {id:'m4',cat:'meal',img:'bulty.WebP',ar:'وجبة بلطى',en:'Tilapia Meal',dAr:'بلطى+جمبرى +سبيط +ارز+بطاطس/بساريا+2 صوص',dEn:'Tilapia + shrimp + squid with rice, fries/basarya, and 2 sauces',price:280},
    {id:'m5',cat:'meal',img:'bory.WebP',ar:'وجبة بورى',en:'Mullet Meal',dAr:'بورى+جمبرى +سبيط +ارز+بطاطس/بساريا+2 صوص',dEn:'Mullet + shrimp + squid with rice, fries/basarya, and 2 sauces',price:330},
    {id:'m6',cat:'meal',img:'dnis.WebP',ar:'وجبة دنيس',en:'Seabream Meal',dAr:'دنيس +جمبرى +سبيط+ارز+بطاطس/بساريا+2 صوص',dEn:'Seabream + shrimp + squid with rice, fries/basarya, and 2 sauces',price:435},
    {id:'m7',cat:'meal',img:'qaroos.WebP',ar:'وجبة قاروص',en:'Seabass Meal',dAr:'قاروص+جمبرى +سبيط +ارز+بطاطس/بساريا+2 صوص',dEn:'Seabass + shrimp + squid with rice, fries/basarya, and 2 sauces',price:425},
    {id:'m8',cat:'meal',img:'feleh.WebP',ar:'وجبة فيليه',en:'Fillet Meal',dAr:'فيليه +ارز+بطاطس/بساريا+2 صوص',dEn:'Fish fillet with rice, fries/basarya, and 2 sauces',price:275},

    {id:'d1',cat:'plates',img:'plainrice.WebP',ar:'طبق سبيط',en:'Calamari Plate',dAr:'سبيط+بطاطس+صوص',dEn:'Calamari + fries + sauce',price:250},
    {id:'d2',cat:'plates',img:'shrimprice.WebP',ar:'طبق جمبرى',en:'Shrimp Plate',dAr:'جمبرى+بطاطس+صوص',dEn:'Shrimp + fries + sauce',price:260},
    {id:'d3',cat:'plates',img:'seafoodrice.WebP',ar:'طبق ميكس',en:'Mixed Seafood Plate',dAr:'جمبري+سبيط+بطاطس+صوص',dEn:'Shrimp + calamari + fries + sauce',price:275},

    {id:'r1',cat:'rice',img:'sayadiehrice.WebP',ar:'ارز سادة',en:'Sayadieh Rice',dAr:'ارز صيادية',dEn:'Sayadieh Rice',price:40},
    {id:'r2',cat:'rice',img:'shrimprice2.WebP',ar:'ارز جمبرى',en:'Shrimp Rice',dAr:'أرز صيادية بالجمبري ',dEn:'Sayadieh Rice with shrimp',price:120},
    {id:'r3',cat:'rice',img:'seafoodrice2.WebP',ar:'ارز سى فود',en:'Seafood Rice',dAr:'ارز  صيادية بالجمبري والسبيط',dEn:'Sayadieh Rice With Seafood',price:140},

    {id:'s1',cat:'sandwitch',img:'shrimpsandwitch.WebP',ar:'سندوتش جمبرى',en:'Shrimp Sandwich',dAr:'سندوتش جمبري مقلى او مشوي',dEn:'Shrimp Sandwich (Fried or Grilled)',price:150},
    {id:'s2',cat:'sandwitch',img:'squeedsandwitch.WebP',ar:'سندوتش سبيط',en:'Calamari Sandwich',dAr:'سندوتش سبيط مقلي او مشوى',dEn:'Squid Sandwich (Fried or Grilled)',price:145},
    {id:'s3',cat:'sandwitch',img:'felehsandwitch.WebP',ar:'سندوتش فليه',en:'Fillet Sandwich',dAr:'سندوتش فليه مقلى او مشوى',dEn:'Fish Fillet Sandwich (Fried or Grilled)',price:110},
    {id:'s4',cat:'sandwitch',img:'mixsandwitch.WebP',ar:'سندوتش ميكس',en:'Mix Sandwich',dAr:'سندوتش جمبرى وسبيط مشويين او مقليين',dEn:'Shrimp & Squid Sandwich (Fried or Grilled)',price:150},
    {id:'s5',cat:'sandwitch',img:'fishroesandwitch.WebP',ar:'سندوتش بطارخ',en:'Fish Roe Sandwich',dAr:'سندوتش بطارخ مشوية او مقلية',dEn:'Fish Roe Sandwich (Fried or Grilled)',price:150},

    {id:'f1',cat:'family',img:'harifa.WebP',ar:'صنية الحريفة',en:'Harifa Spicy Tray',dAr:'سمكتين بورى +جندوفلى+سبيط+بطاطس+بساريا+6صوص+ارز',dEn:'Two Mullet Fish + Clams + Squid + French Fries + Basarya + 6 Sauces + Rice',price:800},
    {id:'f2',cat:'family',img:'monsters.WebP',ar:'صنية الوحوش',en:'El-Wohoush Tray (Monster Tray)',dAr:'4 بورى+جمبرى+سبيط+جندوفلى+بطاطس او بساريا+ارز+8صوص',dEn:'4 Mullet Fish + Shrimp + Squid + Clams + French Fries or Basarya + Rice + 8 Sauces',price:1590},
    
    {id:'a1',cat:'appetizers',img:'bsarya.WebP',ar:'بساريا',en:'Basarya (Whitebait)',dAr:'',dEn:'',price:50},
    {id:'a2',cat:'appetizers',img:'gan.WebP',ar:'جندوفلى',en:'Clams',dAr:'',dEn:'',price:125},
    {id:'a3',cat:'appetizers',img:'fc.WebP',ar:'فيش اند شيبس',en:'Fish&Chips',dAr:'',dEn:'',price:120},
    {id:'a4',cat:'appetizers',img:'btats.WebP',ar:'بطاطس',en:'French Fries',dAr:'',dEn:'',price:45},

    {id:'p1',cat:'pasta',img:'mg.WebP',ar:'مكرونة جمبرى',en:'Shrimp pasta',dAr:'مكرونة بالجمبرى',dEn:'Pasta with shrimp',price:240},
    {id:'p2',cat:'pasta',img:'ms.WebP',ar:'مكرونة ميكس',en:'Mix pasta',dAr:'مكرونة جمبرى وسبيط',dEn:'Pasta with shrimp and squid',price:240},
    {id:'p3',cat:'pasta',img:'bkbk.WebP',ar:'مبكبكة جمبرى (1)',en:'Shrimp Mbakbaka (1)',dAr:'فرد واحد',dEn:'For one person',price:220},
    {id:'p4',cat:'pasta',img:'bkbk.WebP',ar:'مبكبكة جمبرى (2)',en:'Shrimp Mbakbaka (2)',dAr:'فردين',dEn:'For two persons',price:410},
    {id:'p5',cat:'pasta',img:'bkbk.WebP',ar:'مبكبكة جمبرى (4)',en:'Shrimp Mbakbaka (4)',dAr:'اربع افراد',dEn:'For four persons',price:750},

    {id:'so1',cat:'soups',img:'soup.WebP',ar:'شوربة سى فود',en:'Seafood Soup',dAr:'وايت صوص او ريد صوص',dEn:'White sauce or red sauce',price:150},
    {id:'so2',cat:'soups',img:'soup.WebP',ar:'شوربة جمبرى',en:'Shrimp Soup',dAr:'وايت صوص او ريد صوص',dEn:'White sauce or red sauce',price:120},
    
    {id:'k1',cat:'drink',img:'tea.WebP',ar:'شاى',en:'Tea',dAr:'',dEn:'',price:25},
    {id:'k2',cat:'drink',img:'coffee.WebP',ar:'قهوة',en:'Coffee',dAr:'',dEn:'',price:30},
    {id:'k3',cat:'drink',img:'french.WebP',ar:'قهوة فرنساوى',en:'French coffee',dAr:'',dEn:'',price:55},
    {id:'k4',cat:'drink',img:'Nicafe.WebP',ar:'نسكافيه',en:'Nescafe',dAr:'',dEn:'',price:55},
    {id:"k5",cat:'drink',img:'cappucino.WebP',ar:'كابتشينو',en:'Cappuccino',dAr:'',dEn:'',price:65},
    {id:"k6",cat:'drink',img:'latte.WebP',ar:'لاتيه',en:'Latte',dAr:'',dEn:'',price:60},
    {id:"k7",cat:'drink',img:'Espresso.WebP',ar:'اسبرسو',en:'Espresso',dAr:'',dEn:'',price:40},
    {id:"k8",cat:'drink',img:'Miccato.WebP',ar:'ميكاتو',en:'Macchiato',dAr:'',dEn:'',price:55},
    {id:"k9",cat:'drink',img:'Anise.WebP',ar:'ينسون',en:'Anise',dAr:'',dEn:'',price:25},
    {id:"k10",cat:'drink',img:'mint.WebP',ar:'نعناع',en:'Mint',dAr:'',dEn:'',price:25},
    {id:"k11",cat:'drink',img:'Cinnamon.WebP',ar:'قرفة',en:'Cinnamon',dAr:'',dEn:'',price:25},
    {id:"k12",cat:'drink',img:'Hibiscus.WebP',ar:'كركديه',en:'Hibiscus',dAr:'',dEn:'',price:25},
    {id:"k13",cat:'drink',img:'Sahlab.WebP',ar:'سحلب',en:'Sahlab',dAr:'',dEn:'',price:65},

    {id:'j1',cat:'juice',img:'Mango.WebP',ar:'مانجو',en:'Mango',dAr:'',dEn:'',price:70},
    {id:'j2',cat:'juice',img:'Guava.WebP',ar:'جوافة',en:'Guava',dAr:'',dEn:'',price:60},
    {id:'j3',cat:'juice',img:'Orange.WebP',ar:'برتقال',en:'Orange',dAr:'',dEn:'',price:60},
    {id:'j4',cat:'juice',img:'Banana.WebP',ar:'موز',en:'Banana',dAr:'',dEn:'',price:60},
    {id:'j5',cat:'juice',img:'Lemon.WebP',ar:'ليمون',en:'Lemon',dAr:'',dEn:'',price:50},
    {id:'j6',cat:'juice',img:'HoneyYogurt.WebP',ar:'زبادى عسل',en:'Honey Yogurt',dAr:'',dEn:'',price:50},
    {id:'j7',cat:'juice',img:'FruitYogurt.WebP',ar:'زبادى فواكه',en:'Fruit Yogurt',dAr:'',dEn:'',price:70},
    {id:'j8',cat:'juice',img:'Cocktail.WebP',ar:'كوكتيل',en:'Cocktail',dAr:'',dEn:'',price:70},
  ]
};
const WA = CONFIG.waNumber;

/* =====================================================================
   EDIT HERE: choices that appear when the customer taps "Add".
   (ids are the item ids from MENU above)
   ===================================================================== */
// grilled or fried
const COOK_IDS = ['m1','m2','m3','m4','m5','m6','m7','m8','d1','d2','d3','s1','s2','s3','s4','s5'];
const COOK  = [{id:'grill',ar:'مشوي',en:'Grilled'},{id:'fry',ar:'مقلي',en:'Fried'}];
// fries or basarya
const SIDE_IDS = ['m1','m2','m3','m4','m5','m6','m7','m8','f2'];
const SIDES = [{id:'fries',ar:'بطاطس',en:'Fries'},{id:'basarya',ar:'بساريا',en:'Basarya'}];
// white or red sauce for the soups
const SOUP_IDS = ['so1','so2'];
const SOUP = [{id:'white',ar:'وايت صوص',en:'White sauce'},{id:'red',ar:'ريد صوص',en:'Red sauce'}];
// sauces: how many the customer picks per item. Trays are optional (empty = the kitchen picks a mix).
// EDIT the sauce names to match your real sauces.
const SAUCES = [
  {id:'tahini', ar:'طحينة',  en:'Tahini'},
  {id:'SpicyTomatoes', ar:'طماطم حارة', en:'Spicy Tomatoes'},
  {id:'GreenSalad', ar:'سلطة خضراء',  en:'Green Salad'},
  {id:'BabaGhanoush',  ar:'بابا غنوج', en:'Baba Ghanoush'},
  {id:'BeetrootSalad',  ar:'بنجر', en:'Beetroot Salad'},
  {id:'Pickles',   ar:'مخلل', en:'Pickles'},
  {id:'MonksEggplant',   ar:'بتنجان راهب', en:'Monks Eggplant'},
  {id:'FriedEggplant',   ar:'بتنجان مقلى', en:'Fried Eggplant'}
];
const SAUCE_N = { m1:2,m2:2,m3:2,m4:2,m5:2,m6:2,m7:2,m8:2, d1:1,d2:1,d3:1, f1:6, f2:8 };
const SAUCE_OPTIONAL = ['f1','f2'];
// drinks: sugar + milk choice / sugar only choice (one size only, no sizes)
const SUGAR_MILK_IDS = ['k1','k2','k4','k9','k11'];
const SUGAR_ONLY_IDS = ['k3','k5','k6','k7','k8','k10','k12','k13','j1','j2','j3','j4','j5','j8'];
const SUGAR = [{id:'none',ar:'بدون سكر',en:'No sugar'},{id:'light',ar:'سكر خفيف',en:'Light sugar'},{id:'med',ar:'سكر مظبوط',en:'Medium sugar'},{id:'extra',ar:'سكر زيادة',en:'Extra sugar'}];
const MILK  = [{id:'no',ar:'بدون لبن',en:'No milk'},{id:'yes',ar:'بلبن',en:'With milk'}];
const MIN_KG = 0.1, MAX_KG = 20;   // allowed weight range
/* EDIT HERE: delivery fee (EGP) added to delivery orders, and minimum order for delivery.
   0 = no fee / no minimum. feeByArea:true shows "fee depends on the area, confirmed on WhatsApp" while fee is 0. */
const ORDER = { deliveryFee: 0, minDelivery: 0, feeByArea: true };

function optsOf(it){
  const o = {};
  if (it.unit === 'kg') o.weight = true;
  if (COOK_IDS.includes(it.id)) o.cook = true;
  if (SIDE_IDS.includes(it.id)) o.side = true;
  if (SOUP_IDS.includes(it.id)) o.soup = true;
  if (FISH_PICK[it.id]) o.fish = FISH_PICK[it.id];
  if (SAUCE_N[it.id]) o.sauce = { n: SAUCE_N[it.id], opt: SAUCE_OPTIONAL.includes(it.id) };
  if (SUGAR_MILK_IDS.includes(it.id)) { o.sugar = true; o.milk = true; }
  else if (SUGAR_ONLY_IDS.includes(it.id)) o.sugar = true;
  return Object.keys(o).length ? o : null;
}
const inList = (list, id) => list.some(x => x.id === id);
function optLabel(it, o, l){
  l = l || lang; o = o || {};
  const T = L[l];
  const lab = (list, id) => ((list.find(x => x.id === id)) || {})[l] || '';
  const labs = (list, ids) => (Array.isArray(ids) ? ids : []).map(id => lab(list, id)).filter(Boolean).join(' + ');
  return [
    o.cook && lab(COOK, o.cook),
    o.side && lab(SIDES, o.side),
    o.soup && lab(SOUP, o.soup),
    o.fish && labs(FISH, o.fish),
    Array.isArray(o.sauce) && (o.sauce.length ? T.sauce_w + ': ' + labs(SAUCES, o.sauce) : T.sauce_mix),
    o.sugar && lab(SUGAR, o.sugar),
    o.milk && lab(MILK, o.milk)
  ].filter(Boolean).join(' • ');
}

const L = {
 ar:{
  brand1:CONFIG.name.ar,brand2:'Seafood Gourmet',
  tag:'ياقوت لكل أنواع المأكولات البحرية الطازجة',tag2:'جاهزين للعزومات',
  cta_order:'اطلب الآن',cta_book:'احجز طاولة',
  open_now:CONFIG.hours.openNowAr,closed_now:CONFIG.hours.closedNowAr,
  nav_about:'عن المطعم',nav_menu:'المنيو',nav_book:'احجز طاولة',nav_visit:'زورنا',
  about_title:'من البحر إلى مائدتك',
  about_p1:'في قرية ياقوت نقدّم لك أنواع المأكولات البحرية الطازجة، مطهوة بعناية على أصولها، سواء جلست معنا أو طلبتها لبيتك.',
  about_p2:'وإذا كانت عندك عزومة أو مناسبة، نجهّز لك الأطباق جاهزة في موعدها.',
  s1:'أسماك طازجة، مشوية أو مقلية',s2:'جمبري وكابوريا وسبيط',s3:'أطباق عزومات جاهزة في موعدها',s4:'توصيل لحد باب البيت',
  menu_title:'المنيو',menu_note:'الأسعار بالجنيه المصري',add:'أضف',cur:'ج.م',
  ev_title:'عزومة؟ إحنا جاهزين',ev_p:'أطباق مشكّلة للعائلات والمناسبات، نجهزها طازجة وتصلك في الموعد الذي تحدده.',ev_cta:'اسأل عن العزومات',
  book_title:'احجز طاولتك',book_p:'املأ البيانات وسنؤكد الحجز معك على واتساب.',
  f_name:'الاسم',f_phone:'رقم الموبايل',f_date:'التاريخ',f_time:'الوقت',f_guests:'عدد الأفراد',f_notes:'ملاحظات',book_send:'أرسل الحجز على واتساب',
  visit_title:'زورنا',visit_map:'افتح الموقع على الخريطة',hours:'مواعيد العمل',hours_v:CONFIG.hours.ar,contact:'تواصل معنا',follow:'تابعنا',call:'اتصل',whats:'واتساب',
  cart:'سلتك',cart_empty:'السلة فارغة',cart_empty_p:'اختر أطباقك من المنيو وستظهر هنا.',browse:'تصفح المنيو',total:'الإجمالي',
  o_del:'توصيل',o_pick:'استلام',f_addr:'العنوان بالتفصيل',send_order:'أرسل الطلب على واتساب',
  order_note:'هيفتحلك واتساب والرسالة جاهزة. اضغط «إرسال» جوه واتساب عشان الطلب يوصلنا.',
  added:'تمت الإضافة',seasonal:'حسب الموسم',kg:'كجم',total_plus:'+ أسماك بسعر اليوم',total_tbd:'يتحدد بعد تأكيد السعر',cart_fish_note:'أسعار الأسماك حسب الموسم والوزن الفعلي، وهنأكدها معاك على واتساب قبل التجهيز.',err_req:'من فضلك أكمل هذا الحقل',err_phone:'اكتب رقم موبايل مصري صحيح (مثال: 01012345678)',sent:'جهزنا رسالتك، اضغط «إرسال» في واتساب',rights:'جميع الحقوق محفوظة',guest1:'فرد',guestN:'أفراد',lang:'EN',
  ev_msg:'مرحبًا قرية ياقوت، عايز أستفسر عن عزومة.',
  dev_role:'تصميم وتطوير الموقع',dev_name:'يوسف محمود حسين',dev_cta:'عايز موقع احترافي لمشروعك؟ كلمني'
 },
 en:{
  brand1:'Seafood Gourmet',brand2:CONFIG.name.ar,
  tag:'Yakout, for every kind of fresh seafood',tag2:'Ready for your gatherings',
  cta_order:'Order now',cta_book:'Book a table',
  open_now:CONFIG.hours.openNowEn,closed_now:CONFIG.hours.closedNowEn,
  nav_about:'About',nav_menu:'Menu',nav_book:'Book a table',nav_visit:'Visit us',
  about_title:'From the sea to your table',
  about_p1:'At Yakout Gourmet we serve fresh seafood of every kind, cooked with care the traditional way, whether you dine with us or order it home.',
  about_p2:'Planning a gathering or an occasion? We prepare your platters ready, right on time.',
  s1:'Fresh fish, grilled or fried',s2:'Shrimp, crab and calamari',s3:'Gathering platters, ready on time',s4:'Delivery to your door',
  menu_title:'Menu',menu_note:'Prices in Egyptian pounds',add:'Add',cur:'EGP',
  ev_title:'Hosting a gathering? We are ready',ev_p:'Mixed platters for families and occasions, prepared fresh and delivered at the time you choose.',ev_cta:'Ask about gatherings',
  book_title:'Book your table',book_p:'Fill in the details and we will confirm your booking on WhatsApp.',
  f_name:'Name',f_phone:'Mobile number',f_date:'Date',f_time:'Time',f_guests:'Guests',f_notes:'Notes',book_send:'Send booking on WhatsApp',
  visit_title:'Visit us',visit_map:'Open location on the map',hours:'Opening hours',hours_v:CONFIG.hours.en,contact:'Contact',follow:'Follow us',call:'Call',whats:'WhatsApp',
  cart:'Your cart',cart_empty:'Your cart is empty',cart_empty_p:'Pick your dishes from the menu and they will appear here.',browse:'Browse the menu',total:'Total',
  o_del:'Delivery',o_pick:'Pickup',f_addr:'Full address',send_order:'Send order on WhatsApp',
  order_note:'WhatsApp opens with your message ready. Tap Send inside WhatsApp so the order reaches us.',
  added:'Added to cart',seasonal:'Seasonal price',kg:'kg',total_plus:'+ fish at today\'s price',total_tbd:'Confirmed after pricing',cart_fish_note:'Fish prices are seasonal and based on actual weight. We confirm them on WhatsApp before preparing.',err_req:'Please fill in this field',err_phone:'Enter a valid Egyptian mobile (e.g. 01012345678)',sent:'Message ready: tap Send in WhatsApp',rights:'All rights reserved',guest1:'guest',guestN:'guests',lang:'ع',
  ev_msg:'Hello Yakout Gourmet, I would like to ask about a gathering.',
  dev_role:'Website design & development',dev_name:'Youssef Mahmoud Hussein',dev_cta:'Need a professional website for your business? Let’s talk'
 }
};

Object.assign(L.ar, {
  unit_g:'جرام', o_weight:'الوزن المطلوب', w_ph:'مثال: 800', w_hint:'اكتب الوزن بالظبط، جرام أو كيلو (مثلًا 300 جرام أو 1.5 كجم)',
  o_cook:'طريقة التحضير', o_fish:'نوع السمك', choose:'اختر', o_sugar:'السكر', o_milk:'اللبن',
  o_side:'الجنب', o_soup:'نوع الصوص', o_sauce:'الصوصات',
  sauce_w:'صوص', sauce_mix:'صوصات: تشكيلة من المطعم',
  sauce_hint_exact:'اختر {n} من الصوصات', sauce_hint_up:'اختر لحد {n} (أو سيبها وهنختار لك تشكيلة)',
  err_sauce_n:'من فضلك اختر {n} من الصوصات', err_max:'أقصى عدد {n}',
  add_cart:'أضف إلى السلة', err_weight:'اكتب وزن صحيح (من ١٠٠ جرام لحد ٢٠ كجم)', err_pick:'من فضلك اختر',
  cart_fish_note:'الأسعار على حسب الوزن المطلوب، والوزن النهائي ممكن يختلف شوية بعد التجهيز، وهنأكد معاك على واتساب قبل التحضير.',
  fee:'رسوم التوصيل', err_min:'الحد الأدنى لطلبات التوصيل {n}', err_past:'اختر موعدًا قادمًا',
  del_note:'رسوم التوصيل حسب المنطقة، وبنأكدها معاك على واتساب.',
  closed_cart:'المطعم مقفول دلوقتي. ابعت طلبك عادي وهنرد عليك أول ما نفتح.',
  soldout:'غير متاح حاليًا',
  sent_p:'جهزنا رسالتك. لازم تضغط «إرسال» جوه واتساب عشان الطلب يوصل للمطعم. لو واتساب ماتفتحش اضغط الزر تحت أو انسخ الطلب وابعته على الرقم.',
  inapp:'لو بتفتح الموقع من جوه فيسبوك أو تيك توك وواتساب مابيفتحش، افتح الرابط من المتصفح العادي أو انسخ الطلب.',
  open_wa:'افتح واتساب', copy_order:'انسخ الطلب', copied:'تم نسخ الطلب ✓', clear_cart:'مسح السلة',
  f_when:'موعد التجهيز', when_asap:'أقرب وقت', when_30:'بعد ٣٠ دقيقة', when_custom:'وقت محدد',
  send_loc:'📍 ابعت موقعي', loc_wait:'جاري تحديد الموقع…', loc_ok:'تم تحديد موقعك ✓ (هيتضاف للرسالة)', loc_err:'مقدرناش نحدد موقعك، اكتب العنوان بالتفصيل',
  note_ph:'ملاحظة للصنف (بدون ثوم، حار...)',
  allergy:'لو عندك حساسية من المأكولات البحرية أو أي مكوّن، اكتبها في الملاحظات قبل الإرسال.',
  view_cart:'عرض السلة', reorder:'اطلب نفس آخر طلب', reordered:'رجّعنا آخر طلب للسلة ✓',
  pop_title:'الأكثر طلبًا', address:'العنوان',
  confirm_remove:'تحذف الصنف من السلة؟',
  sound_off:'كتم الصوت', sound_on:'تشغيل الصوت',
  after_mid:'بعد منتصف الليل', mid_hint:'ده ميعاد بعد منتصف الليل، يعني فجر {d}',
  date_hint:'الحجز بعد منتصف الليل بيتحسب على نفس الليلة.',
  night_of:'ليلة', sent_ok_book:'جهزنا رسالة الحجز، اضغط «إرسال» في واتساب',
  noscript_msg:'الموقع محتاج JavaScript عشان يعرض المنيو. تقدر تطلب مباشرة على الرقم:'
});
Object.assign(L.en, {
  unit_g:'g', o_weight:'Weight needed', w_ph:'e.g. 800', w_hint:'Enter the exact weight in grams or kg (e.g. 300 g or 1.5 kg)',
  o_cook:'How to cook', o_fish:'Fish type', choose:'Choose', o_sugar:'Sugar', o_milk:'Milk',
  o_side:'Side', o_soup:'Sauce type', o_sauce:'Sauces',
  sauce_w:'Sauce', sauce_mix:'Sauces: kitchen\'s mix',
  sauce_hint_exact:'Pick {n} sauces', sauce_hint_up:'Pick up to {n} (or leave empty and we pick a mix)',
  err_sauce_n:'Please pick {n} sauces', err_max:'Maximum {n}',
  add_cart:'Add to cart', err_weight:'Enter a valid weight (100 g to 20 kg)', err_pick:'Please choose',
  cart_fish_note:'Prices follow the weight you ordered. The final weight may differ slightly after preparation, and we confirm it on WhatsApp first.',
  fee:'Delivery fee', err_min:'Minimum delivery order is {n}', err_past:'Please choose a future time',
  del_note:'Delivery fee depends on your area. We confirm it on WhatsApp.',
  closed_cart:'We are closed right now. You can still send your order and we will reply as soon as we open.',
  soldout:'Currently unavailable',
  sent_p:'Your message is ready. You must tap Send inside WhatsApp for the order to reach us. If WhatsApp did not open, tap the button below or copy the order and send it to our number.',
  inapp:'If you opened this site inside Facebook or TikTok and WhatsApp does not open, open the link in your normal browser or copy the order.',
  open_wa:'Open WhatsApp', copy_order:'Copy order', copied:'Order copied ✓', clear_cart:'Clear cart',
  f_when:'Preparation time', when_asap:'As soon as possible', when_30:'In 30 minutes', when_custom:'Specific time',
  send_loc:'📍 Send my location', loc_wait:'Getting your location…', loc_ok:'Location captured ✓ (added to the message)', loc_err:'Could not get your location, please write the full address',
  note_ph:'Item note (no garlic, spicy...)',
  allergy:'If you have a seafood or ingredient allergy, write it in the notes before sending.',
  view_cart:'View cart', reorder:'Order the same as last time', reordered:'Last order restored ✓',
  pop_title:'Most ordered', address:'Address',
  confirm_remove:'Remove this item from the cart?',
  sound_off:'Mute sound', sound_on:'Turn sound on',
  after_mid:'after midnight', mid_hint:'This is after midnight, i.e. early morning of {d}',
  date_hint:'A booking after midnight counts for the same evening.',
  night_of:'Evening of', sent_ok_book:'Booking message ready: tap Send in WhatsApp',
  noscript_msg:'This site needs JavaScript to show the menu. You can order directly on:'
});

let lang = 'ar', cat = MENU.cats[0].id, cart = [];
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const t = k => L[lang][k] ?? k;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt = n => n.toLocaleString(lang==='ar'?'ar-EG':'en-US') + ' ' + t('cur');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const name = it => lang==='ar' ? it.ar : it.en;
/* sizes like 40*50 are reversed inside Arabic (RTL) text: keep them left-to-right.
   nameH = for HTML, fixNum = for plain text / WhatsApp */
const nameH = it => esc(name(it)).replace(/\d+\*\d+/g, m => `<bdi dir="ltr">${m}</bdi>`);
const fixNum = s => String(s).replace(/\d+\*\d+/g, m => '\u2066' + m + '\u2069');
const desc = it => lang==='ar' ? it.dAr : it.dEn;
const askPrice = it => it.price == null;
const loc = () => lang==='ar' ? 'ar-EG' : 'en-US';
const round3 = x => Math.round(x*1000)/1000;
function wTxt(q, l, plain){
  l = l || lang;
  const g = Math.round(q*1000), kg = Math.floor(g/1000), r = g % 1000, T = L[l];
  const n = x => plain ? String(x) : x.toLocaleString(l==='ar'?'ar-EG':'en-US');
  if (!kg) return `${n(r)} ${T.unit_g}`;
  if (!r) return `${n(kg)} ${T.kg}`;
  return l==='ar' ? `${n(kg)} ${T.kg} و${n(r)} ${T.unit_g}` : `${n(kg)} ${T.kg} ${n(r)} ${T.unit_g}`;
}
const qtyTxt = (it,q) => it.unit ? wTxt(q) : q.toLocaleString(loc());
const lineTotal = (it,q) => Math.round(it.price*q*100)/100;
const priceTxt = it => askPrice(it) ? t('seasonal') : fmt(it.price) + (it.unit ? ' / ' + t(it.unit) : '');
const byId = id => MENU.items.find(i => i.id === id);
const FALLBACK_ICON = '🍽️';
const iconOf = it => it.icon || FALLBACK_ICON;
/* photo if the item has img:'...', otherwise the emoji icon. If the photo fails to load -> icon */
const media = (it, alt='', lazy=false) => it.img
  ? `<img src="images/${encodeURIComponent(it.img)}" alt="${esc(alt)}"${lazy?' loading="lazy"':''} decoding="async" data-fallback="${iconOf(it)}">`
  : iconOf(it);
document.addEventListener('error', e => {
  const im = e.target;
  if (!(im instanceof HTMLImageElement) || !im.dataset.fallback) return;
  /* some hosts are case-sensitive: retry once with a lower-case file name */
  let file = ''; try { file = decodeURIComponent((im.getAttribute('src')||'').split('/').pop()); } catch(_){}
  if (!im.dataset.retry && file && file !== file.toLowerCase()){
    im.dataset.retry = '1'; im.src = 'images/' + encodeURIComponent(file.toLowerCase()); return;
  }
  const box = im.parentElement;
  if (box) box.classList.remove('photo');
  im.replaceWith(document.createTextNode(im.dataset.fallback));
}, true);

/* ---------- saved cart: versioned, expires after 24h, every line is validated ---------- */
const CART_KEY = 'yk_cart3', CART_TTL = 24*3600*1000, LAST_KEY = 'yk_last';
function validLine(l){
  if (!l || typeof l !== 'object') return false;
  const it = byId(l.id); if (!it || it.off) return false;
  const q = +l.q; if (!isFinite(q) || q <= 0) return false;
  const nd = optsOf(it) || {}, o = (l.o && typeof l.o === 'object') ? l.o : {};
  if (!Object.keys(o).every(k => k !== 'weight' && k in nd)) return false;
  if (nd.weight && !(q >= MIN_KG - 1e-6 && q <= MAX_KG)) return false;
  if (nd.cook && !inList(COOK, o.cook)) return false;
  if (nd.side && !inList(SIDES, o.side)) return false;
  if (nd.soup && !inList(SOUP, o.soup)) return false;
  if (nd.fish && !(Array.isArray(o.fish) && o.fish.length === nd.fish && o.fish.every(id => inList(FISH, id)))) return false;
  if (nd.sauce){
    if (!Array.isArray(o.sauce) || !o.sauce.every(id => inList(SAUCES, id)) || o.sauce.length > nd.sauce.n) return false;
    if (!nd.sauce.opt && o.sauce.length !== nd.sauce.n) return false;
  }
  if (nd.sugar && !inList(SUGAR, o.sugar)) return false;
  if (nd.milk && !inList(MILK, o.milk)) return false;
  return true;
}
const mkLine = l => ({k: l.id + '|' + JSON.stringify(l.o || {}), id:l.id, q:+l.q, o:l.o || {}, note:String(l.note || '').slice(0,80)});
function loadCart(){
  try {
    localStorage.removeItem('yk_cart2');
    const s = JSON.parse(localStorage.getItem(CART_KEY) || 'null');
    if (!s || s.v !== 3 || !Array.isArray(s.items) || !(Date.now() - s.t < CART_TTL)) return;
    s.items.forEach(l => { if (validLine(l)) cart.push(mkLine(l)); });
  } catch(e){ cart.length = 0; }
}
const saveCart = () => { try {
  if (cart.length) localStorage.setItem(CART_KEY, JSON.stringify({v:3, t:Date.now(), items:cart}));
  else localStorage.removeItem(CART_KEY);
} catch(e){} };

/* ---------- time helpers (Cairo) ---------- */
const pad2 = n => String(n).padStart(2, '0');
function cairoNow(){
  try {
    const p = {};
    new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Cairo',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'})
      .formatToParts(new Date()).forEach(x => p[x.type] = x.value);
    return {date:`${p.year}-${p.month}-${p.day}`, mins:(+p.hour)*60 + (+p.minute)};
  } catch(e){
    const d = new Date();
    return {date:`${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`, mins:d.getHours()*60 + d.getMinutes()};
  }
}
const dnum = s => { const [y,m,d] = s.split('-').map(Number); return Date.UTC(y, m-1, d) / 86400000; };
const dstr = n => { const d = new Date(n*86400000); return `${d.getUTCFullYear()}-${pad2(d.getUTCMonth()+1)}-${pad2(d.getUTCDate())}`; };
const isAfterMid = h => h < CONFIG.hours.close;          // slot like 01:00 belongs to the evening of the previous date
const slotAbs = (ds, h, m) => (dnum(ds) + (isAfterMid(h) ? 1 : 0)) * 1440 + h*60 + m;
const nowAbs = () => { const n = cairoNow(); return dnum(n.date) * 1440 + n.mins; };
/* the "service day": between 00:00 and closing time we are still in yesterday's evening */
function serviceToday(){ const n = cairoNow(); return Math.floor(n.mins/60) < CONFIG.hours.close ? dstr(dnum(n.date) - 1) : n.date; }
function isOpenNow(){
  const h = Math.floor(cairoNow().mins / 60), {open, close} = CONFIG.hours;
  return open < close ? (h >= open && h < close) : (h >= open || h < close);
}
function fmtSlot(h, m, l, plain){
  const h12 = h % 12 || 12, n = x => plain ? String(x) : x.toLocaleString(l==='ar'?'ar-EG':'en-US');
  const mm = plain ? pad2(m) : (m < 10 ? n(0) + n(m) : n(m));
  return `${n(h12)}:${mm} ${l==='ar' ? (h<12 ? 'ص' : 'م') : (h<12 ? 'AM' : 'PM')}`;
}
function dayLabel(n, l, plain){
  const loc2 = l==='ar' ? (plain ? 'ar-EG-u-nu-latn' : 'ar-EG') : 'en-GB';
  try { return new Intl.DateTimeFormat(loc2, {weekday:'long', day:'2-digit', month:'2-digit', timeZone:'UTC'}).format(new Date(n*86400000)); }
  catch(e){ return dstr(n); }
}

/* ---------- config -> page (links, address, map, schema, fonts, analytics) ---------- */
function bindConfig(){
  const map = {
    wa:'https://wa.me/' + CONFIG.waNumber, tel:'tel:+' + CONFIG.waNumber, mail:'mailto:' + CONFIG.email,
    fb:CONFIG.social.facebook, tt:CONFIG.social.tiktok, map:CONFIG.mapsLink
  };
  $$('[data-link]').forEach(a => { const u = map[a.dataset.link]; if (u) a.href = u; });
  $$('[data-phone]').forEach(e => { e.textContent = CONFIG.phoneLocal; });
  if (CONFIG.mapQuery){
    const box = $('#mapBox');
    const f = document.createElement('iframe');
    f.className = 'mapframe'; f.loading = 'lazy'; f.title = 'Google Maps'; f.referrerPolicy = 'no-referrer-when-downgrade';
    f.src = 'https://www.google.com/maps?q=' + encodeURIComponent(CONFIG.mapQuery) + '&output=embed';
    box.prepend(f); box.classList.add('live');
  }
  /* structured data for Google (built from CONFIG so hours/phone are never out of sync) */
  const H = CONFIG.hours, ld = {
    '@context':'https://schema.org', '@type':'Restaurant',
    name: CONFIG.name.ar + ' | ' + CONFIG.name.en, url: CONFIG.siteUrl + '/', image: CONFIG.siteUrl + '/images/logo.png',
    servesCuisine:'Seafood', telephone:'+' + CONFIG.waNumber, priceRange:'$$', acceptsReservations:true, menu: CONFIG.siteUrl + '/#menu',
    openingHoursSpecification:[{'@type':'OpeningHoursSpecification',
      dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens:pad2(H.open)+':00', closes:pad2(H.close)+':00'}],
    sameAs:[CONFIG.social.facebook, CONFIG.social.tiktok]
  };
  if (CONFIG.address.ar) ld.address = {'@type':'PostalAddress', streetAddress:CONFIG.address.ar, addressCountry:'EG'};
  const s = document.createElement('script'); s.type = 'application/ld+json'; s.textContent = JSON.stringify(ld); document.head.appendChild(s);
  if (CONFIG.cfToken){
    const c = document.createElement('script'); c.defer = true; c.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    c.setAttribute('data-cf-beacon', JSON.stringify({token:CONFIG.cfToken})); document.head.appendChild(c);
  }
}
let enFonts = false;
function loadEnFonts(){
  if (enFonts) return; enFonts = true;
  const l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500&display=swap';
  document.head.appendChild(l);
}
/* usage counters: Google Analytics / Plausible if present, plus an optional own endpoint */
function track(ev, data){
  try {
    if (window.gtag) gtag('event', ev, data || {});
    if (window.plausible) plausible(ev);
    if (CONFIG.trackUrl && navigator.sendBeacon)
      navigator.sendBeacon(CONFIG.trackUrl, new Blob([JSON.stringify({ev, ref:(data||{}).ref || '', t:Date.now()})], {type:'text/plain'}));
  } catch(e){}
}
const inApp = /FBAN|FBAV|FB_IAB|Instagram|musical_ly|BytedanceWebview|TikTok|Line\//i.test(navigator.userAgent || '');

/* ---------- language ---------- */
function applyLang(l){
  lang = l;
  const h = document.documentElement;
  h.lang = l; h.dir = l==='ar' ? 'rtl' : 'ltr';
  if (l === 'en') loadEnFonts();
  document.title = l==='ar' ? 'قرية ياقوت | Seafood Gourmet' : 'Seafood Gourmet | قرية ياقوت';
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $('#langBtn').textContent = t('lang');
  $('#langBtn').setAttribute('aria-label', l==='ar' ? 'Switch to English' : 'التبديل إلى العربية');
  const ad = CONFIG.address[l] || CONFIG.address.ar || CONFIG.address.en;
  $('#addrBox').hidden = !ad; $('#addrTxt').textContent = ad || '';
  buildSelects(); renderTabs(); renderMenu(); renderPopular(); renderCart(); updateOpen(); setSoundUi();
  try { localStorage.setItem('yk_lang', l); } catch(e){}
}

/* ---------- open now (Cairo time) ---------- */
function updateOpen(){
  const open = isOpenNow();
  $('#dot').classList.toggle('off', !open);
  $('#openTxt').textContent = open ? t('open_now') : t('closed_now');
  const cn = $('#closedNote'); if (cn) cn.hidden = open;
}

/* ---------- menu ---------- */
function renderTabs(){
  $('#tabs').innerHTML = MENU.cats.map(c =>
    `<button class="tab" role="tab" type="button" data-cat="${c.id}" aria-selected="${c.id===cat}">${lang==='ar'?c.ar:c.en}</button>`).join('');
  /* centre the active tab INSIDE the strip only (horizontal), never scroll the page itself */
  const bar = $('#tabs'), a = $('.tab[aria-selected=true]', bar);
  if (a){ const dx = (a.getBoundingClientRect().left + a.offsetWidth/2) - (bar.getBoundingClientRect().left + bar.clientWidth/2); if (Math.abs(dx) > 2) bar.scrollBy({left: dx}); }
}
function renderMenu(){
  const items = MENU.items.filter(i => i.cat===cat);
  $('#list').classList.toggle('has-photo', items.some(i => i.img));
  const note = MENU.cats.find(c => c.id===cat);
  const noteTxt = note && (lang==='ar' ? note.noteAr : note.noteEn);
  $('#list').innerHTML = (noteTxt ? `<p class="catnote">${noteTxt}</p>` : '') + items.map(i => `
    <article class="dish${i.off?' off':''}">
      <div class="medal${i.img?' photo':''}"${i.img?'':' aria-hidden="true"'}>${media(i, name(i), true)}</div>
      <div>
        <div class="row"><h3>${nameH(i)}</h3><span class="leader"></span><span class="price">${priceTxt(i)}</span></div>
        ${desc(i) ? `<p>${esc(desc(i))}</p>` : '<p></p>'}
        ${i.off ? `<button class="add" type="button" disabled>${t('soldout')}</button>` : `<button class="add" type="button" data-add="${i.id}">${t('add')} +</button>`}
      </div>
    </article>`).join('');
}
function renderPopular(){
  const ids = CONFIG.popularIds.filter(id => { const it = byId(id); return it && !it.off; });
  $('#popular').hidden = !ids.length;
  $('#popList').innerHTML = ids.map(id => { const it = byId(id); return `
    <article class="pcard">
      <div class="pimg${it.img?' photo':''}">${media(it, name(it), true)}</div>
      <h3>${nameH(it)}</h3><p class="price">${priceTxt(it)}</p>
      <button class="add" type="button" data-add="${id}">${t('add')} +</button>
    </article>`; }).join('');
}
function setHero(){
  const hero = $('.hero'), it = byId(CONFIG.heroItem);
  const tryList = [CONFIG.heroImage && 'images/' + CONFIG.heroImage, it && it.img && 'images/' + encodeURIComponent(it.img)].filter(Boolean);
  (function next(){
    const src = tryList.shift(); if (!src) return;
    const im = new Image();
    im.onload = () => { hero.style.setProperty('--hero-img', `url("${src}")`); hero.classList.add('has-img'); };
    im.onerror = next; im.src = src;
  })();
}
$('#tabs').addEventListener('click', e => {
  const b = e.target.closest('.tab'); if (!b) return;
  cat = b.dataset.cat; renderTabs(); renderMenu();
  const m = $('#menu'), top = m.getBoundingClientRect().top;
  if (top < 0) window.scrollTo({top: window.scrollY + top + 40, behavior: reduce ? 'auto' : 'smooth'});
});

/* ---------- sound (can be muted) + fly-to-cart ---------- */
let muted = false; try { muted = localStorage.getItem('yk_mute') === '1'; } catch(e){}
function setSoundUi(){
  const b = $('#soundBtn'); if (!b) return;
  $('.son', b).hidden = muted; $('.soff', b).hidden = !muted;
  b.setAttribute('aria-pressed', String(muted));
  b.setAttribute('aria-label', muted ? t('sound_on') : t('sound_off'));
}
$('#soundBtn').addEventListener('click', () => {
  muted = !muted; try { localStorage.setItem('yk_mute', muted ? '1' : '0'); } catch(e){}
  setSoundUi(); if (!muted){ unlockAudio(); chime(); }
});
let ac;
function unlockAudio(){ try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state==='suspended') ac.resume(); } catch(e){} }
function chime(){
  if (!ac || muted) return;
  try {
    const t0 = ac.currentTime;
    [[784,0],[1174.7,.09],[1568,.18]].forEach(([f,d]) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(.0001, t0+d);
      g.gain.exponentialRampToValueAtTime(.22, t0+d+.015);
      g.gain.exponentialRampToValueAtTime(.0001, t0+d+.45);
      o.connect(g); g.connect(ac.destination);
      o.start(t0+d); o.stop(t0+d+.5);
    });
  } catch(e){}
}
let toastT;
function toast(title, sub){
  const el = $('#toast');
  $('b', el).textContent = title; $('small', el).textContent = sub || '';
  el.classList.add('on'); clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('on'), 1900);
}
function landed(it){
  chime();
  const b = $('#badge'); b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  toast(t('added') + ' ✓', name(it));
}
function fly(from, it){
  const a = from.getBoundingClientRect(), b = $('#cartBtn').getBoundingClientRect();
  if (reduce) { landed(it); return; }
  const el = document.createElement('div');
  el.className = 'fly'; el.innerHTML = media(it);
  el.style.left = (a.left + a.width/2 - 24) + 'px';
  el.style.top  = (a.top + a.height/2 - 24) + 'px';
  document.body.appendChild(el);
  const dx = (b.left + b.width/2) - (a.left + a.width/2);
  const dy = (b.top + b.height/2) - (a.top + a.height/2);
  const anim = el.animate([
    {transform:'translate(0,0) scale(1) rotate(0)', opacity:1, offset:0},
    {transform:`translate(${dx*.45}px,${Math.min(dy*.45,0)-110}px) scale(1.3) rotate(160deg)`, opacity:1, offset:.45},
    {transform:`translate(${dx}px,${dy}px) scale(.3) rotate(360deg)`, opacity:.7, offset:1}
  ], {duration:900, easing:'cubic-bezier(.55,.05,.4,1)'});
  anim.onfinish = () => { el.remove(); landed(it); };
}
function addToCart(it, o, q, from){
  const k = it.id + '|' + JSON.stringify(o);
  const ex = cart.find(l => l.k === k);
  if (ex) ex.q = round3(ex.q + q);
  else cart.push({k, id:it.id, q, o, note:''});
  saveCart(); renderCart();
  const sb = $('#sentBox'); if (sb) sb.hidden = true;
  fly(from, it);
}
function onAddClick(e){
  const b = e.target.closest('[data-add]'); if (!b) return;
  unlockAudio();
  const it = byId(b.dataset.add); if (!it || it.off) return;
  if (optsOf(it)) openOpts(it, b);
  else addToCart(it, {}, it.step||1, b);
}
$('#list').addEventListener('click', onAddClick);
$('#popList').addEventListener('click', onAddClick);

/* ---------- cart ---------- */
const count = () => cart.reduce((a,l) => a + (byId(l.id).unit ? 1 : l.q), 0);
const sum = () => cart.reduce((a,l) => { const it = byId(l.id); return a + (askPrice(it) ? 0 : lineTotal(it, l.q)); }, 0);
const hasAsk = () => cart.some(l => askPrice(byId(l.id)));
const feeNow = () => { const r = $('input[name=ot]:checked'); return r && r.value === 'del' ? (ORDER.deliveryFee||0) : 0; };
const isDel = () => { const r = $('input[name=ot]:checked'); return !r || r.value === 'del'; };
const hasWeight = () => cart.some(l => byId(l.id).unit);
const grand = () => sum() + feeNow();
const totalTxt = () => hasAsk() ? (sum() ? fmt(grand()) + ' ' + t('total_plus') : t('total_tbd')) : fmt(grand());
function renderCart(){
  const n = count(), badge = $('#badge');
  badge.textContent = n.toLocaleString(loc()); badge.hidden = n===0;
  const bar = $('#cartBar');
  bar.hidden = n===0; document.body.classList.toggle('hasbar', n>0);
  if (n){
    const bt = hasAsk() ? (sum() ? fmt(sum()) + '+' : t('seasonal')) : fmt(sum());
    $('.bl', bar).textContent = `${t('view_cart')} (${n.toLocaleString(loc())})`; $('.br', bar).textContent = bt;
  }
  const box = $('#cartItems'), form = $('#orderForm');
  if (!cart.length){
    let last = null; try { last = JSON.parse(localStorage.getItem(LAST_KEY) || 'null'); } catch(e){}
    const canRe = last && Array.isArray(last.items) && last.items.some(validLine);
    box.innerHTML = `<div class="empty"><b>${t('cart_empty')}</b>${t('cart_empty_p')}<br>
      ${canRe ? `<button class="btn" type="button" data-reorder>${t('reorder')}</button><br>` : ''}
      <button class="btn ghost" type="button" data-browse>${t('browse')}</button></div>`;
    form.hidden = true; return;
  }
  form.hidden = false;
  box.innerHTML = cart.map((l,i) => { const it = byId(l.id), ol = optLabel(it, l.o); return `
    <div class="ci">
      <div class="em" aria-hidden="true">${media(it)}</div>
      <div><h4>${nameH(it)}</h4><small>${priceTxt(it)}${it.unit && !askPrice(it) ? ' = ' + fmt(lineTotal(it,l.q)) : ''}</small>${ol ? `<div class="co">${esc(ol)}</div>` : ''}
      </div>
      <div class="qty"><button type="button" data-dec="${i}" aria-label="-">&minus;</button><span class="qv">${qtyTxt(it,l.q)}</span><button type="button" data-inc="${i}" aria-label="+">+</button></div>
    </div>`; }).join('');
  $('#total').textContent = totalTxt();
  let fn = $('#fishNote'); if (!fn){ fn = document.createElement('p'); fn.id = 'fishNote'; fn.className = 'hint'; $('#orderForm .tot').after(fn); }
  fn.hidden = !(hasAsk() || hasWeight()); fn.textContent = t('cart_fish_note');
  $('#feeRow').hidden = !feeNow(); $('#feeV').textContent = fmt(feeNow());
  $('#delNote').hidden = !(isDel() && ORDER.feeByArea && !(ORDER.deliveryFee > 0));
  $('#closedNote').hidden = isOpenNow();
}

function reorder(){
  let last = null; try { last = JSON.parse(localStorage.getItem(LAST_KEY) || 'null'); } catch(e){}
  if (!last || !Array.isArray(last.items)) return;
  last.items.forEach(l => { if (validLine(l)) cart.push(mkLine(l)); });
  saveCart(); renderCart(); toast(t('reordered'));
}
$('#cartItems').addEventListener('click', e => {
  const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]');
  if (inc || dec){
    const i = +(inc ? inc.dataset.inc : dec.dataset.dec), l = cart[i]; if (!l) return;
    const it = byId(l.id);
    if (it.unit){
      if (inc) l.q = Math.min(MAX_KG, round3(l.q + 0.1));
      else {
        const nq = round3(l.q - 0.1);
        if (nq >= MIN_KG - 1e-6) l.q = nq;                         // normal step down
        else if (l.q > MIN_KG + 1e-6) l.q = MIN_KG;                // e.g. 150 g -> 100 g, never a silent delete
        else if (confirm(t('confirm_remove'))) cart.splice(i,1);   // already at the minimum: ask first
      }
    } else {
      const st = it.step||1;
      if (inc) l.q = round3(l.q + st);
      else { const nq = round3(l.q - st); if (nq <= 0.001) cart.splice(i,1); else l.q = nq; }
    }
  }
  else if (e.target.closest('[data-reorder]')){ reorder(); return; }
  else if (e.target.closest('[data-browse]')){ closeCart(); $('#menu').scrollIntoView({behavior: reduce ? 'auto' : 'smooth'}); return; }
  else return;
  saveCart(); renderCart();
});

/* ---------- dialogs: back button closes them instead of leaving the site ---------- */
const layerPush = n => { try { history.pushState({yk:n}, ''); } catch(e){} };
const layerPop  = n => { try { if (history.state && history.state.yk === n) history.back(); } catch(e){} };
let lastFocus;
function openCart(){ lastFocus = document.activeElement; $('#drawer').inert = false; $('#drawer').classList.add('on'); $('#scrim').classList.add('on'); $('#drawer').setAttribute('aria-hidden','false'); $('#closeCart').focus(); syncLock(); layerPush('cart'); }
function closeCart(fromPop){
  if (!$('#drawer').classList.contains('on')) return;
  $('#drawer').inert = true; $('#drawer').classList.remove('on'); $('#scrim').classList.remove('on'); $('#drawer').setAttribute('aria-hidden','true'); syncLock();
  if (lastFocus) lastFocus.focus();
  if (fromPop !== true) layerPop('cart');
}
$('#cartBtn').addEventListener('click', openCart);
$('#cartBar').addEventListener('click', openCart);
$('#closeCart').addEventListener('click', () => closeCart());
$('#scrim').addEventListener('click', () => closeCart());
$('#drawer').inert = true;
document.addEventListener('keydown', e => { if (e.key==='Escape' && $('#drawer').classList.contains('on') && !$('#omodal').classList.contains('on')) closeCart(); });
window.addEventListener('popstate', () => {
  if ($('#omodal').classList.contains('on')) closeOpts(true);
  else if ($('#drawer').classList.contains('on')) closeCart(true);
});

function onTypeChange(){
  const del = isDel();
  $('#addrField').hidden = !del; $('#orderErr').textContent = ''; renderCart();
}
$$('input[name=ot]').forEach(r => r.addEventListener('change', onTypeChange));
$('#otime').addEventListener('change', () => { $('#otimeC').hidden = $('#otime').value !== 'custom'; });

/* "send my location" (delivery) */
let locLink = '';
$('#locBtn').addEventListener('click', () => {
  const st = $('#locSt');
  if (!navigator.geolocation){ st.textContent = t('loc_err'); return; }
  st.textContent = t('loc_wait');
  navigator.geolocation.getCurrentPosition(p => {
    locLink = `https://maps.google.com/?q=${p.coords.latitude.toFixed(6)},${p.coords.longitude.toFixed(6)}`;
    st.textContent = t('loc_ok');
  }, () => { locLink = ''; st.textContent = t('loc_err'); }, {enableHighAccuracy:true, timeout:12000, maximumAge:60000});
});

/* ---------- options modal ---------- */
const toNum = v => {
  const x = String(v).trim().replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[٫,،]/g, '.');
  return /^\d+(\.\d+)?$/.test(x) ? parseFloat(x) : NaN;
};
let optIt = null, optFocus;
function pickHTML(label, nm, list){
  return `<div class="og" data-g="${nm}"><span class="ol">${label}</span><div class="pick">` +
    list.map((x,i) => `<span><input type="radio" name="${nm}" id="${nm}${i}" value="${x.id}"><label for="${nm}${i}">${x[lang]}</label></span>`).join('') +
    `</div><span class="err"></span></div>`;
}
function multiHTML(label, nm, list, n, opt){
  const hint = t(opt ? 'sauce_hint_up' : 'sauce_hint_exact').replace('{n}', n.toLocaleString(loc()));
  return `<div class="og" data-g="${nm}"><span class="ol">${label}</span><small class="hint2" style="margin:0 0 8px">${hint}</small><div class="pick">` +
    list.map((x,i) => `<span><input type="checkbox" name="${nm}" id="${nm}${i}" value="${x.id}"><label for="${nm}${i}">${x[lang]}</label></span>`).join('') +
    `</div><span class="err"></span></div>`;
}
function openOpts(it, from){
  const o = optsOf(it); optIt = it; optFocus = from;
  $('#optTitle').textContent = name(it);
  $('#optDesc').textContent = desc(it) || ''; $('#optDesc').hidden = !desc(it);
  let h = '';
  if (o.weight){
    h += `<div class="og" data-g="weight"><label class="ol" for="ow">${t('o_weight')}</label>
      <div class="wrow">
        <input class="in" id="ow" inputmode="decimal" autocomplete="off" placeholder="${t('w_ph')}" style="direction:ltr;text-align:start">
        <div class="pick"><span><input type="radio" name="ou" id="ou0" value="g" checked><label for="ou0">${t('unit_g')}</label></span><span><input type="radio" name="ou" id="ou1" value="kg"><label for="ou1">${t('kg')}</label></span></div>
      </div>
      <div class="wch">${[.25,.5,1,1.5,2].map(k => `<button type="button" class="wchip" data-kg="${k}">${wTxt(k)}</button>`).join('')}</div>
      <small class="hint2">${t('w_hint')}</small><span class="err"></span></div>`;
  }
  if (o.cook) h += pickHTML(t('o_cook'), 'q_cook', COOK);
  if (o.side) h += pickHTML(t('o_side'), 'q_side', SIDES);
  if (o.soup) h += pickHTML(t('o_soup'), 'q_soup', SOUP);
  if (o.fish) for (let i=0; i<o.fish; i++){
    h += `<div class="og" data-g="fish${i}"><label class="ol" for="of${i}">${t('o_fish')}${o.fish>1 ? ' ' + (i+1).toLocaleString(loc()) : ''}</label>
      <select class="in" id="of${i}"><option value="">${t('choose')}</option>${FISH.map(f => `<option value="${f.id}">${f[lang]}</option>`).join('')}</select><span class="err"></span></div>`;
  }
  if (o.sauce) h += multiHTML(t('o_sauce'), 'q_sauce', SAUCES, o.sauce.n, o.sauce.opt);
  if (o.sugar) h += pickHTML(t('o_sugar'), 'q_sugar', SUGAR);
  if (o.milk)  h += pickHTML(t('o_milk'), 'q_milk', MILK);
  $('#optBody').innerHTML = h;
  if (o.sugar) $('#q_sugar2').checked = true;
  if (o.milk)  $('#q_milk0').checked = true;
  updOpt();
  const m = $('#omodal'); m.inert = false; m.classList.add('on'); $('#mscrim').classList.add('on'); m.setAttribute('aria-hidden','false');
  m.scrollTop = 0; $('#optClose').focus(); syncLock(); layerPush('opt');
}
function closeOpts(fromPop){
  const m = $('#omodal');
  if (!m.classList.contains('on')) return;
  m.inert = true; m.classList.remove('on'); $('#mscrim').classList.remove('on'); m.setAttribute('aria-hidden','true');
  if (optFocus && document.contains(optFocus)) optFocus.focus();
  optIt = null; syncLock();
  if (fromPop !== true) layerPop('opt');
}
function readWeight(){
  const w = $('#ow'); if (!w) return 1;
  const v = toNum(w.value); if (!isFinite(v) || v <= 0) return NaN;
  const kg = $('#ou1').checked ? v : v/1000;
  return round3(kg);
}
function updOpt(){
  if (!optIt) return;
  const q = readWeight();
  $('#oprice').textContent = askPrice(optIt) ? t('seasonal') : (isNaN(q) ? fmt(optIt.price) + (optIt.unit ? ' / ' + t('kg') : '') : fmt(lineTotal(optIt, q)));
}
$('#optForm').addEventListener('input', e => {
  const cb = e.target.closest('input[type=checkbox]');
  if (cb && optIt){
    const g = cb.closest('.og'), o = optsOf(optIt), er = g.querySelector('.err');
    if ($$('input:checked', g).length > o.sauce.n){ cb.checked = false; er.textContent = t('err_max').replace('{n}', o.sauce.n.toLocaleString(loc())); }
    else er.textContent = '';
    return;
  }
  const g = e.target.closest('.og'); if (g){ const er = g.querySelector('.err'); if (er) er.textContent = ''; }
  updOpt();
});
$('#optForm').addEventListener('click', e => {
  const c = e.target.closest('.wchip'); if (!c) return;
  const kg = +c.dataset.kg;
  if (kg < 1){ $('#ou0').checked = true; $('#ow').value = String(Math.round(kg*1000)); }
  else { $('#ou1').checked = true; $('#ow').value = String(kg); }
  const er = c.closest('.og').querySelector('.err'); if (er) er.textContent = '';
  updOpt();
});
$('#optForm').addEventListener('submit', e => {
  e.preventDefault();
  const it = optIt; if (!it) return;
  const o = optsOf(it), sel = {}, form = e.target;
  let ok = true, q = 1;
  const fail = (g, msg, n) => { ok = false; const er = form.querySelector(`[data-g="${g}"] .err`); if (er) er.textContent = t(msg).replace('{n}', n != null ? n.toLocaleString(loc()) : ''); };
  const val = n => { const r = form.querySelector(`input[name=${n}]:checked`); return r ? r.value : ''; };
  $$('.og .err', form).forEach(x => x.textContent = '');
  if (o.weight){
    q = readWeight();
    if (!isFinite(q) || q < MIN_KG || q > MAX_KG){ fail('weight', 'err_weight'); q = 1; }
  }
  if (o.cook){ sel.cook = val('q_cook'); if (!sel.cook) fail('q_cook', 'err_pick'); }
  if (o.side){ sel.side = val('q_side'); if (!sel.side) fail('q_side', 'err_pick'); }
  if (o.soup){ sel.soup = val('q_soup'); if (!sel.soup) fail('q_soup', 'err_pick'); }
  if (o.fish){
    sel.fish = [];
    for (let i=0; i<o.fish; i++){ const v = $('#of'+i).value; if (!v) fail('fish'+i, 'err_pick'); sel.fish.push(v); }
  }
  if (o.sauce){
    sel.sauce = $$('input[name=q_sauce]:checked', form).map(x => x.value);
    if (!o.sauce.opt && sel.sauce.length !== o.sauce.n) fail('q_sauce', 'err_sauce_n', o.sauce.n);
  }
  if (o.sugar) sel.sugar = val('q_sugar');
  if (o.milk)  sel.milk  = val('q_milk');
  if (!ok) return;
  unlockAudio();
  addToCart(it, sel, q, $('#optAdd'));
  closeOpts();
});
$('#optClose').addEventListener('click', () => closeOpts());
$('#mscrim').addEventListener('click', () => closeOpts());
$('#omodal').inert = true;
document.addEventListener('keydown', e => { if (e.key==='Escape' && $('#omodal').classList.contains('on')) closeOpts(); });

/* ---------- scroll lock + keyboard focus trap for the dialogs ---------- */
function syncLock(){
  document.documentElement.classList.toggle('lock', $('#drawer').classList.contains('on') || $('#omodal').classList.contains('on'));
}
document.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const box = $('#omodal').classList.contains('on') ? $('#omodal') : ($('#drawer').classList.contains('on') ? $('#drawer') : null);
  if (!box) return;
  const f = $$('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])', box).filter(x => !x.hidden && x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length-1];
  if (!box.contains(document.activeElement)){ e.preventDefault(); first.focus(); }
  else if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
});

/* ---------- helpers: validation + whatsapp ---------- */
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
/* Egyptian mobile: 010 / 011 / 012 / 015 + 8 digits. Accepts +20 / 0020 and Arabic digits. */
function normPhone(v){
  let d = String(v).replace(/[٠-٩]/g, x => AR_DIGITS.indexOf(x)).replace(/\D/g, '');
  if (d.startsWith('0020')) d = '0' + d.slice(4);
  else if (d.startsWith('20') && d.length === 12) d = '0' + d.slice(2);
  else if (/^1[0125]\d{8}$/.test(d)) d = '0' + d;
  return d;
}
const phoneOk = v => /^01[0125]\d{8}$/.test(normPhone(v));
function need(input, test, msg){
  const v = input.value.trim();
  const empty = !v, bad = empty || (test ? !test(v) : false);
  input.classList.toggle('bad', bad);
  const err = input.parentElement.querySelector('.err'); if (err) err.textContent = bad ? t(empty ? 'err_req' : (msg || 'err_req')) : '';
  return !bad;
}
function openWA(text, okKey){
  const url = `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
  const a = document.createElement('a');
  a.href = url; a.target = '_blank'; a.rel = 'noopener';
  document.body.appendChild(a); a.click(); a.remove();
  toast(t(okKey || 'sent'));
  return url;
}
/* stop double sends: disable that button for a few seconds */
function guardSend(btn){
  if (btn.disabled) return false;
  btn.disabled = true;
  setTimeout(() => { btn.disabled = false; }, 4000);
  return true;
}
const nf = n => String(n);
const SEP = '- - - - - - - - -';
const stamp = () => { try {
  return new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Cairo',day:'2-digit',month:'2-digit',year:'numeric',hour:'numeric',minute:'2-digit',hour12:true})
    .format(new Date()).replace(',', '  •').replace(/am/i,'ص').replace(/pm/i,'م');
} catch(e){ return ''; } };
/* short order number so the restaurant can track it, e.g. YK-1007-A4K */
function orderRef(){
  const ch = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let r = '';
  for (let i=0; i<3; i++) r += ch[Math.floor(Math.random()*ch.length)];
  return 'YK-' + cairoNow().date.slice(5).replace('-', '') + '-' + r;
}
let lastMsg = '';

function buildOrder(compact, ref){
  const del = isDel(), fish = hasAsk(), fee = feeNow();
  const items = cart.map((l, i) => {
    const it = byId(l.id), q = l.q, ol = optLabel(it, l.o, 'ar');
    const qt = it.unit ? wTxt(q, 'ar', true) : nf(q);
    let h = `*${i+1}.* ${fixNum(it.ar)}${(askPrice(it) || q>1 || it.unit) ? ` — ${qt}` : ''}`;
    if (ol) h += `\n   ▫️ ${ol}`;
    if (l.note) h += `\n   📝 ${l.note}`;
    if (!compact){
      let det;
      if (askPrice(it)) det = '⏳ السعر حسب سعر اليوم';
      else if (it.unit) det = `${nf(it.price)} ج.م/كجم × ${qt} = ${nf(lineTotal(it,q))} ج.م`;
      else if (q === 1) det = `${nf(it.price)} ج.م`;
      else det = `${nf(it.price)} × ${nf(q)} = ${nf(lineTotal(it,q))} ج.م`;
      h += `\n   ↳ ${det}`;
    }
    return h;
  });
  const totalLine = fish
    ? `💰 *الإجمالي: ${sum() ? nf(grand()) + ' ج.م + ' : ''}الأسماك بسعر اليوم*`
    : `💰 *الإجمالي: ${nf(grand())} ج.م*`;
  const wv = $('#otime').value;
  const when = wv === 'asap' ? 'أقرب وقت' : wv === '30' ? 'بعد ٣٠ دقيقة'
    : (() => { const [h, m] = ($('#otimeC').value || '0:0').split(':').map(Number); return 'الساعة ' + fmtSlot(h, m, 'ar', true); })();
  return [
    `🔱 *${CONFIG.name.ar}* | طلب *${ref}*`,
    stamp() ? `🕒 ${stamp()}` : null,
    !isOpenNow() ? '⚠️ الطلب وصل خارج ساعات العمل' : null,
    SEP,
    `👤 ${$('#on').value.trim()}   📞 ${normPhone($('#op').value)}`,
    `${del ? '🛵 *توصيل*' : '🏪 *استلام من المطعم*'}   ⏱️ ${when}`,
    del ? `📍 ${$('#oa').value.trim()}` : null,
    del && locLink ? `🗺️ ${locLink}` : null,
    SEP,
    items.join('\n'),
    SEP,
    del ? (fee ? `🛵 رسوم التوصيل: ${nf(fee)} ج.م` : (ORDER.feeByArea ? '🛵 رسوم التوصيل: حسب المنطقة' : null)) : null,
    totalLine,
    (fish || hasWeight()) ? '⚠️ _السعر والوزن النهائي يتأكدوا مع العميل._' : null,
    $('#oc').value.trim() ? `📝 *ملاحظات:* ${$('#oc').value.trim()}` : null
  ].filter(x => x !== null).join('\n');
}

$('#orderForm').addEventListener('submit', e => {
  e.preventDefault();
  const del = isDel();
  const errBox = $('#orderErr'); errBox.textContent = '';
  let ok = [need($('#on')), need($('#op'), phoneOk, 'err_phone')].every(Boolean);
  if (del) ok = need($('#oa')) && ok;
  if ($('#otime').value === 'custom') ok = need($('#otimeC')) && ok;
  if (!ok || !cart.length) return;
  if (del && ORDER.minDelivery && sum() < ORDER.minDelivery){
    errBox.textContent = t('err_min').replace('{n}', fmt(ORDER.minDelivery)); return;
  }
  const submitBtn = $('#orderForm button[type=submit]');
  if (!guardSend(submitBtn)) return;
  const ref = orderRef();
  let msg = buildOrder(false, ref);
  /* very long messages can be cut by some browsers/apps: fall back to a compact version */
  if (encodeURIComponent(msg).length > 3200) msg = buildOrder(true, ref);
  lastMsg = msg;
  const url = openWA(msg);
  $('#sentLink').href = url; $('#sentBox').hidden = false; $('#inappP').hidden = !inApp;
  try { localStorage.setItem(LAST_KEY, JSON.stringify({t:Date.now(), items:cart.map(l => ({id:l.id, q:l.q, o:l.o, note:l.note||''}))})); } catch(err){}
  track('order_send', {ref});
});
$('#copyOrder').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(lastMsg); }
  catch(e){
    const ta = document.createElement('textarea'); ta.value = lastMsg; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch(_){} ta.remove();
  }
  toast(t('copied'));
});
$('#clearCart').addEventListener('click', () => { cart.length = 0; saveCart(); renderCart(); $('#sentBox').hidden = true; closeCart(); });

/* ---------- booking ---------- */
const SLOTS = (() => { const a = [], {open, close} = CONFIG.hours; for (let h=open; h<24; h++) a.push([h,0],[h,30]); for (let h=0; h<close; h++) a.push([h,0],[h,30]); return a; })();
function updHint(){
  const v = $('#bt').value, ds = $('#bd').value, hint = $('#btHint');
  if (!v || !ds){ hint.textContent = ''; return; }
  const h = +v.split(':')[0];
  hint.textContent = isAfterMid(h) ? t('mid_hint').replace('{d}', dayLabel(dnum(ds) + 1, lang)) : '';
}
function refreshTimes(){
  const bd = $('#bd'), min = serviceToday();
  if (!bd.value || bd.value < min) bd.value = min;
  bd.min = min;
  const ts = $('#bt'), prev = ts.value, ds = bd.value, na = nowAbs();
  ts.innerHTML = SLOTS.map(([h,m]) => {
    const past = slotAbs(ds, h, m) < na + 30;
    const lab = fmtSlot(h, m, lang) + (isAfterMid(h) ? ' · ' + t('after_mid') : '');
    return `<option value="${pad2(h)}:${pad2(m)}"${past ? ' disabled' : ''}>${lab}</option>`;
  }).join('');
  const opts = [...ts.options], first = opts.find(o => !o.disabled);
  if (opts.some(o => o.value === prev && !o.disabled)) ts.value = prev;
  else if (first) ts.value = first.value;
  else { bd.value = dstr(dnum(ds) + 1); refreshTimes(); return; }   /* nothing left tonight -> next day */
  updHint();
}
function buildSelects(){
  const gs = $('#bg'), gv = gs.value;
  gs.innerHTML = Array.from({length:20},(_,i) => i+1).map(n => `<option value="${n}">${n.toLocaleString(loc())} ${n===1?t('guest1'):t('guestN')}</option>`).join('') + `<option value="20+">+20</option>`;
  if (gv) gs.value = gv; else gs.value = '2';
  refreshTimes();
}
$('#bd').addEventListener('change', refreshTimes);
$('#bt').addEventListener('change', updHint);
$('#bookForm').addEventListener('submit', e => {
  e.preventDefault();
  const ds = $('#bd').value, tv = $('#bt').value;
  const [h, m] = (tv || '0:0').split(':').map(Number);
  const dateOk = need($('#bd'), v => v >= serviceToday(), 'err_past');
  /* re-check against the real clock now: the page may have been open for hours */
  const timeOk = !!tv && !!ds && slotAbs(ds, h, m) >= nowAbs() + 30;
  const terr = $('#bt').parentElement.querySelector('.err'); if (terr) terr.textContent = timeOk ? '' : t('err_past');
  if (!timeOk) refreshTimes();
  const ok = [need($('#bn')), need($('#bp'), phoneOk, 'err_phone'), dateOk, timeOk].every(Boolean);
  if (!ok) return;
  if (!guardSend($('#bookForm button[type=submit]'))) return;
  const ref = orderRef(), after = isAfterMid(h), real = dnum(ds) + (after ? 1 : 0);
  const msg = [
    `🔱 *${CONFIG.name.ar}* | حجز طاولة *${ref}*`,
    SEP,
    `👤 ${$('#bn').value.trim()}   📞 ${normPhone($('#bp').value)}`,
    `🗓️ التاريخ: *${dayLabel(real, 'ar', true)}*`,
    `⏰ الوقت: *${fmtSlot(h, m, 'ar', true)}*` + (after ? ` (بعد منتصف الليل، ضمن ليلة ${dayLabel(dnum(ds), 'ar', true)})` : ''),
    `👥 عدد الأفراد: *${$('#bg').value}*`,
    $('#bm').value.trim() ? `📝 ملاحظات: ${$('#bm').value.trim()}` : null,
    SEP,
    '🙏 برجاء تأكيد الحجز'
  ].filter(x => x !== null).join('\n');
  openWA(msg, 'sent_ok_book');
  track('book_send', {ref});
});
$('#evBtn').addEventListener('click', () => openWA(L.ar.ev_msg));

/* ---------- optional: prices / "sold out" from a published Google Sheet ---------- */
function parseCSV(s){
  const rows = []; let r = [], c = '', q = false;
  for (let i=0; i<s.length; i++){
    const ch = s[i];
    if (q){ if (ch === '"'){ if (s[i+1] === '"'){ c += '"'; i++; } else q = false; } else c += ch; }
    else if (ch === '"') q = true;
    else if (ch === ','){ r.push(c); c = ''; }
    else if (ch === '\n'){ r.push(c); rows.push(r); r = []; c = ''; }
    else if (ch !== '\r') c += ch;
  }
  if (c || r.length){ r.push(c); rows.push(r); }
  return rows;
}
async function loadSheet(){
  if (!CONFIG.sheetCsvUrl) return;
  try {
    const ctl = new AbortController(), to = setTimeout(() => ctl.abort(), 7000);
    const res = await fetch(CONFIG.sheetCsvUrl, {signal:ctl.signal, cache:'no-store'}); clearTimeout(to);
    if (!res.ok) return;
    const rows = parseCSV(await res.text()); if (rows.length < 2) return;
    const head = rows.shift().map(x => x.trim().toLowerCase());
    const ix = n => head.indexOf(n);
    rows.forEach(c => {
      const it = byId((c[ix('id')] || '').trim()); if (!it) return;
      if (ix('price') > -1){ const p = toNum(c[ix('price')] || ''); if (isFinite(p) && p > 0) it.price = p; }
      if (ix('off') > -1) it.off = ['1','yes','y','true','نفذ','نعم'].includes((c[ix('off')] || '').trim().toLowerCase());
    });
    for (let i = cart.length - 1; i >= 0; i--) if (!validLine(cart[i])) cart.splice(i, 1);
    saveCart(); renderMenu(); renderPopular(); renderCart();
  } catch(e){}
}

/* ---------- nav ---------- */
$('#langBtn').addEventListener('click', () => applyLang(lang==='ar' ? 'en' : 'ar'));
$('#burger').addEventListener('click', () => { const on = $('#nav').classList.toggle('on'); $('#burger').setAttribute('aria-expanded', on); });
$$('#nav a').forEach(a => a.addEventListener('click', () => { $('#nav').classList.remove('on'); $('#burger').setAttribute('aria-expanded','false'); }));
$$('input.in, textarea.in').forEach(i => i.addEventListener('input', () => { i.classList.remove('bad'); const er = i.parentElement.querySelector('.err'); if (er) er.textContent=''; }));
/* the page can stay open for hours on a phone: refresh the clock-based parts when the customer comes back */
document.addEventListener('visibilitychange', () => { if (!document.hidden){ refreshTimes(); updateOpen(); } });

/* ---------- init ---------- */
bindConfig();
loadCart();
(function(){ let l = 'ar'; try { l = localStorage.getItem('yk_lang') || 'ar'; } catch(e){} applyLang(l === 'en' ? 'en' : 'ar'); })();
setHero();
loadSheet();
setInterval(updateOpen, 60000);
