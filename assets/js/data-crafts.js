/* Shubharambh — Indian handicrafts from MSME & artisan clusters.
   Prices are indicative samples from Indian retail research (2026). */
(function () {
  var P = (window.SR_PRODUCTS = window.SR_PRODUCTS || []);

  var MISSING_COMMON = [
    "Gifts and home décor are increasingly <b>mass-produced imports</b>, cheap resin and plastic that look festive for a season and then end up in landfill.",
    "The artisan who makes the real thing earns very little, because a small workshop cannot afford marketing or reach buyers in other states.",
    "Families no longer know which state or town a craft comes from, or why it is made that way."
  ];
  function brings(c) {
    return [
      "Handmade by artisans of <b>" + c.cluster + ", " + c.state + "</b>, bought directly from the workshop or MSME unit at a fair price.",
      "A small <b>authenticity card</b> with every piece: craft, town, material and the artisan group that made it.",
      "Gift-ready packing for weddings, housewarmings, anniversaries, festivals and corporate gifting.",
      "Each purchase moves a craft from one state to a home in another, which is how cultures get shared."
    ];
  }
  function qc(extra) {
    return [
      ["Material verification", "We confirm the declared material (white metal, Makrana marble, sheesham, terracotta, cast iron, bamboo and so on) at source before listing."],
      ["Handmade check", "Small variations in colour, carving and finish are expected; machine-identical pieces are rejected."],
      ["Finish & safety", extra || "Edges, joints and fittings are checked; paints and lacquers used are non-toxic."],
      ["Packing & transit test", "Breakables are packed with paper and moulded-pulp packaging instead of thermocol where possible."]
    ];
  }
  var GIFT = ["Housewarming (griha pravesh)", "Wedding & anniversary", "Diwali & festivals", "Corporate gifting", "Return gifts"];

  function craft(o) {
    o.type = "handicraft";
    o.missing = o.missing || MISSING_COMMON;
    o.brings = o.brings || brings(o.craft);
    o.qc = o.qc || qc(o.safety);
    o.gifting = o.gifting || GIFT;
    o.aka = (o.aka || []).concat(["handicraft", "handmade", "gift", o.craft.state.toLowerCase()]);
    P.push(o);
  }

  /* ================= MINAKARI ================= */
  craft({
    id: "samai-hathi-meenakari", sku: "002471", cat: "minakari", featured: true,
    name: "Samai Hathi Diya – Meenakari 12\"", hi: "समई हाथी (मीनाकारी)",
    aka: ["samai", "hathi", "elephant diya", "peacock diya", "deepak", "oil lamp", "meenakari", "minakari", "kundan", "bells"],
    short: "A 12-inch elephant samai lamp with a peacock crown, hanging bells and red-green meenakari stone work. A statement diya for the mandir.",
    tagline: "A three-tier oil lamp with an elephant, bells and a peacock.",
    variants: [{ label: "12 inch", price: 1800, mrp: 1800 }],
    own: ["assets/img/p/own/samai-meena-0.jpg", "assets/img/p/own/samai-meena-1.jpg", "assets/img/p/own/samai-meena-2.jpg", "assets/img/p/own/samai-meena-3.jpg"],
    img: "hc-minakari-elephant",
    craft: { state: "Uttar Pradesh / Rajasthan", cluster: "Metal-craft & meenakari workshops", material: "Silver-plated white metal with meenakari (enamel & stone) inlay", size: "≈ 12 in (30 cm) tall", gi: false },
    about: [
      "The <b>samai</b> is a traditional standing oil-lamp. This one stands on an <b>elephant</b>, symbol of Ganesha, prosperity and auspicious beginnings, whose back is covered in a red-and-green mosaic of <b>meenakari</b> stones, gold beads and kundan-style flowers.",
      "Above the elephant is the lamp bowl with four hanging <b>bells</b>, and on top a peacock fanning its tail. Fill the bowl with ghee or oil and a cotton wick. Without a flame it is still a striking décor piece."
    ],
    uses: ["Mandir or entrance lamp for Diwali, griha pravesh and daily aarti.", "Wedding and anniversary gift.", "Corporate Diwali gifting."],
    care: ["Wipe with a dry, soft cloth; do not use water or polish on the meenakari stones.", "Clean oil residue from the bowl with a little warm soapy water on a cloth."],
    specs: [["Height", "≈ 12 in"], ["Material", "White metal, silver-plated; meenakari stone inlay"], ["Tiers", "Elephant base · lamp bowl with 4 bells · peacock crown"], ["Barcode / SKU", "002471"]],
    tags: ["diya", "lamp", "elephant", "peacock", "mandir", "diwali"]
  });

  craft({
    id: "samai-hathi-oxidised", sku: "SR-MK-002", cat: "minakari",
    name: "Samai Hathi Diya – Oxidised Silver Finish", hi: "समई हाथी (ऑक्सीडाइज़्ड)",
    aka: ["samai", "hathi", "elephant diya", "peacock", "oxidised", "german silver", "white metal", "deepak"],
    short: "The classic elephant-and-peacock samai in a fully hand-engraved, oxidised silver finish, with lotus petals, paisleys and a filigree base.",
    tagline: "Hand-engraving on every surface, in an oxidised silver finish.",
    variants: [{ label: "10 inch", price: 1450, mrp: 1600 }, { label: "12 inch", price: 1650, mrp: 1850 }],
    own: ["assets/img/p/own/samai-oxid-0.jpg", "assets/img/p/own/samai-oxid-1.jpg", "assets/img/p/own/samai-oxid-2.jpg", "assets/img/p/own/samai-oxid-3.jpg"],
    img: "hc-minakari-thali",
    craft: { state: "Uttar Pradesh", cluster: "White-metal craft workshops", material: "White metal, oxidised silver plating, hand-engraved", size: "10 or 12 in", gi: false },
    about: [
      "Same form, different art: this samai is cast in white metal and then <b>engraved by hand</b>, with paisleys on the elephant’s saddle, lotus petals under the lamp bowl and a patterned oval base. Oxidising darkens the recesses so that every line of engraving stands out.",
      "It suits homes that prefer the antique-silver look over colourful meenakari."
    ],
    uses: ["Mandir lamp or console décor.", "Diwali and housewarming gift."],
    care: ["Dry-dust only. Avoid silver dips, which remove the oxidised effect.", "Store in the original bag to slow tarnish."],
    specs: [["Material", "White metal, oxidised silver plating"], ["Finish", "Hand-engraved, antique"], ["Base", "Oval, engraved"]],
    tags: ["diya", "lamp", "elephant", "silver", "antique", "mandir"]
  });

  craft({
    id: "meenakari-elephant-pair", sku: "SR-MK-003", cat: "minakari",
    name: "Meenakari Ambabari Elephant Pair", hi: "मीनाकारी हाथी जोड़ा",
    aka: ["elephant pair", "hathi", "meenakari", "minakari", "enamel", "jaipur", "showpiece", "ambabari"],
    short: "A pair of trunk-up metal elephants decorated with colourful Jaipur-style meenakari enamel, a symbol of good luck for the entrance.",
    tagline: "Two trunk-up elephants for the home entrance.",
    variants: [{ label: "4 inch pair", price: 950, mrp: 1100 }, { label: "6 inch pair", price: 1450, mrp: 1650 }],
    img: "hc-minakari-elephant",
    craft: { state: "Rajasthan", cluster: "Jaipur meenakari artisans", material: "Brass / white metal with meenakari enamel", size: "4 or 6 in", gi: false },
    about: ["<b>Meenakari</b> is the art of fusing coloured enamel into engraved metal, a craft that came to India through Mughal courts and flourished in Jaipur. Each colour is fired separately, from the hardest to the softest, so a multi-coloured piece goes into the kiln several times.", "Elephants with raised trunks are placed facing the entrance for prosperity and good fortune."],
    uses: ["Entrance or living-room console.", "Housewarming and wedding gift."],
    care: ["Wipe with a dry cloth. Keep away from moisture and harsh chemicals."],
    specs: [["Craft", "Meenakari (enamel on metal)"], ["Set", "Pair of 2"]],
    tags: ["elephant", "jaipur", "enamel", "decor", "pair"]
  });

  craft({
    id: "meenakari-jewellery-box", sku: "SR-MK-004", cat: "minakari",
    name: "Meenakari Jewellery Box", hi: "मीनाकारी आभूषण डिब्बी",
    aka: ["jewellery box", "trinket box", "sindoor box", "kumkum box", "meenakari", "enamel box", "gift box"],
    short: "A velvet-lined trinket box with floral meenakari enamel on the lid, for jewellery, sindoor or as a shagun box.",
    tagline: "A shagun box that is a keepsake in its own right.",
    variants: [{ label: "Small (3 in)", price: 899, mrp: 999 }, { label: "Medium (5 in)", price: 1450, mrp: 1650 }],
    img: "hc-minakari-box",
    craft: { state: "Rajasthan / Uttar Pradesh", cluster: "Jaipur & Varanasi meenakari workshops", material: "Brass/white metal, enamel, velvet lining", size: "3 or 5 in", gi: false },
    about: ["Floral meenakari in pinks, greens and blues covers the lid of this hinged box. Varanasi’s <b>Gulabi Meenakari</b> (a GI-registered craft) is known for its pink enamel on silver, and Jaipur for its bold reds and greens.", "Lined with velvet, it is sized for rings, earrings, a mangalsutra or sindoor."],
    uses: ["Wedding shagun & ring ceremony.", "Dressing-table storage.", "Return gift for special guests."],
    care: ["Keep dry; wipe with a soft cloth."],
    specs: [["Lining", "Velvet"], ["Hinge", "Metal, with clasp"]],
    tags: ["box", "jewellery", "wedding", "shagun", "varanasi", "jaipur"]
  });

  craft({
    id: "meenakari-puja-thali", sku: "SR-MK-005", cat: "minakari",
    name: "Meenakari Puja Thali Set", hi: "मीनाकारी पूजा थाली",
    aka: ["puja thali", "pooja thali", "aarti thali", "thali set", "diya", "kumkum katori", "meenakari"],
    short: "A complete aarti thali with diya, kumkum-chawal katoris, bell and agarbatti stand, finished with meenakari enamel.",
    tagline: "Everything for aarti on one thali.",
    variants: [{ label: "8 in · 6-piece set", price: 1650, mrp: 1899 }, { label: "10 in · 7-piece set", price: 2199, mrp: 2499 }],
    img: "hc-minakari-thali",
    craft: { state: "Uttar Pradesh / Rajasthan", cluster: "Metal-craft & meenakari workshops", material: "Brass / white metal with meenakari enamel", size: "8 or 10 in thali", gi: false },
    about: ["A puja thali is the centre of every Indian festival: diya, roli, chawal, flowers and a bell. This set brings them together with meenakari work on the rim and accessories.", "Pair it with our <a href=\"product.html?id=roli\">traditional roli</a>, <a href=\"product.html?id=tikia-kapoor\">tikia kapoor</a> and <a href=\"product.html?id=dhup-sticks\">bambooless dhup</a> for a complete gift."],
    uses: ["Daily aarti and festivals (Diwali, Karva Chauth, Raksha Bandhan).", "Wedding and griha-pravesh gift."],
    care: ["Wash plain metal parts gently; wipe enamel dry; avoid scrubbers."],
    specs: [["Includes", "Thali, diya, 2 katoris, bell, agarbatti stand (+ kalash in 7-pc)"], ["Craft", "Meenakari enamel"]],
    tags: ["thali", "aarti", "puja", "festival", "karva chauth", "raksha bandhan"]
  });

  /* ================= MARBLE ================= */
  craft({
    id: "pietra-dura-plate", sku: "SR-MB-101", cat: "marble", featured: true,
    name: "Pietra Dura Inlay Plate (Parchinkari)", hi: "संगमरमर पच्चीकारी प्लेट",
    aka: ["pietra dura", "parchinkari", "parchin kari", "marble inlay", "taj mahal", "agra", "decorative plate", "marble plate"],
    short: "A white marble plate inlaid with semi-precious stones in floral patterns, using the same parchinkari technique as the Taj Mahal.",
    tagline: "The Taj Mahal’s inlay technique, on a plate for your home.",
    variants: [{ label: "8 inch", price: 2499, mrp: 2899 }, { label: "12 inch", price: 5499, mrp: 6200 }],
    img: "hc-marble-inlay",
    craft: { state: "Uttar Pradesh", cluster: "Agra parchinkari artisans", material: "White marble with semi-precious stone inlay (malachite, lapis, carnelian, mother-of-pearl)", size: "8 or 12 in", gi: false },
    about: ["<b>Parchinkari</b> (Indian pietra dura) was perfected by Mughal-era craftsmen whose descendants still work in Agra. Tiny slivers of stone are cut, shaped on a grinding wheel, and fitted into channels carved in marble so precisely that the joint is almost invisible.", "One 12-inch plate can take an artisan a couple of weeks."],
    uses: ["Wall or table display (stand included).", "Premium corporate and wedding gifts."],
    care: ["Wipe with a soft dry cloth. Avoid acidic cleaners, which etch marble.", "Not for serving food."],
    specs: [["Stone", "White marble"], ["Inlay", "Semi-precious stones"], ["Includes", "Wooden display stand"]],
    safety: "Inlay is set flush and checked for loose pieces; the stand is supplied for stable display.",
    tags: ["agra", "taj mahal", "inlay", "marble", "premium", "wall decor"]
  });

  craft({
    id: "marble-ganesha", sku: "SR-MB-102", cat: "marble",
    name: "Makrana Marble Ganesha", hi: "मकराना संगमरमर गणेश",
    aka: ["ganesh", "ganesha", "ganpati", "idol", "murti", "marble idol", "makrana", "jaipur"],
    short: "A hand-carved Ganesha in white Makrana marble with hand-painted details, for home temples and auspicious beginnings.",
    tagline: "Ganesha in the same white marble as the Taj Mahal.",
    variants: [{ label: "4 inch", price: 1299, mrp: 1499 }, { label: "6 inch", price: 2199, mrp: 2499 }, { label: "9 inch", price: 3999, mrp: 4500 }],
    img: "hc-marble-idol",
    craft: { state: "Rajasthan", cluster: "Jaipur murti-carvers (Makrana marble)", material: "White Makrana marble, hand-painted", size: "4, 6 or 9 in", gi: false },
    about: ["Makrana in Rajasthan supplied the white marble of the Taj Mahal. Jaipur’s murti-carvers shape it with chisels and files, then paint the details by hand.", "A Ganesha is the natural gift for a <b>shubharambh</b>, a new beginning: a new home, shop or marriage."],
    uses: ["Home mandir, office desk, shop counter.", "Griha-pravesh and business-opening gift."],
    care: ["Dust with a soft brush; clean with a damp cloth only."],
    specs: [["Stone", "White Makrana marble"], ["Finish", "Hand-carved, hand-painted"]],
    tags: ["ganesh", "idol", "mandir", "jaipur", "makrana", "housewarming"]
  });

  craft({
    id: "marble-jaali-lamp", sku: "SR-MB-103", cat: "marble",
    name: "Marble Jaali Tealight Lamp", hi: "संगमरमर जाली दीपक",
    aka: ["jaali", "jali", "lattice", "tealight holder", "candle holder", "marble lamp", "diya stand"],
    short: "A carved marble lantern with Mughal-style jaali latticework. A tealight inside throws star-patterns on the walls.",
    tagline: "Carved jaali that casts patterns of light.",
    variants: [{ label: "4 inch", price: 1350, mrp: 1550 }, { label: "6 inch", price: 1950, mrp: 2250 }],
    img: "hc-marble-jaali",
    craft: { state: "Uttar Pradesh / Rajasthan", cluster: "Agra & Jaipur stone carvers", material: "White marble / soapstone, hand-carved jaali", size: "4 or 6 in", gi: false },
    about: ["The <b>jaali</b> (pierced stone screen) cooled the air and softened the light in Mughal and Rajput architecture. This lamp carries the same geometric and floral latticework at tabletop scale."],
    uses: ["Diwali décor, dinner tables, balconies.", "Wedding favours and festive gifts."],
    care: ["Use tealights in a metal cup; wipe soot with a dry cloth."],
    specs: [["Includes", "1 tealight (beeswax tealights available separately)"]],
    safety: "Base is checked for stability; recommended with metal-cup tealights only.",
    tags: ["lamp", "jaali", "diwali", "candle", "marble"]
  });

  craft({
    id: "marble-coaster-set", sku: "SR-MB-104", cat: "marble",
    name: "Marble Inlay Coaster Set", hi: "संगमरमर कोस्टर सेट",
    aka: ["coasters", "coaster set", "marble inlay", "pietra dura", "tea coasters", "agra"],
    short: "Six marble coasters with floral stone inlay in a matching marble holder. A small piece of parchinkari for everyday use.",
    tagline: "Parchinkari for the tea table.",
    variants: [{ label: "Set of 6 + holder", price: 950, mrp: 1150 }],
    img: "hc-marble-inlay",
    craft: { state: "Uttar Pradesh", cluster: "Agra parchinkari artisans", material: "White marble, stone inlay, felt base", size: "4 in coasters", gi: false },
    about: ["An affordable way to bring Agra’s inlay craft home. Each coaster has a felt base to protect your table."],
    uses: ["Tea & coffee tables.", "Corporate gifting in bulk (custom engraving possible)."],
    care: ["Wipe after use; avoid leaving acidic drinks (lemon, cola) standing on marble."],
    specs: [["Pieces", "6 coasters + holder"], ["Base", "Felt-lined"]],
    tags: ["coasters", "corporate gift", "agra", "inlay"]
  });

  /* ================= WOODEN ================= */
  craft({
    id: "channapatna-toy-set", sku: "SR-WD-201", cat: "wooden", featured: true,
    name: "Channapatna Lacquer Toy Set", hi: "चन्नपटना खिलौने",
    aka: ["channapatna", "wooden toys", "lacquer toys", "stacking toy", "rattle", "kids", "karnataka", "gombegala ooru"],
    short: "Smooth, brightly coloured wooden toys from Channapatna, Karnataka’s ‘toy town’, finished with lac and natural dyes.",
    tagline: "Wooden toys safe enough for a baby to chew.",
    variants: [{ label: "Stacking ring toy", price: 699, mrp: 799 }, { label: "Rattle set of 3", price: 599, mrp: 699 }, { label: "Spinning tops ×4", price: 449, mrp: 520 }],
    img: "hc-wooden-channapatna",
    craft: { state: "Karnataka", cluster: "Channapatna (‘Gombegala Ooru’, toy town)", material: "Hale (ivory) wood, lac, vegetable dyes", size: "Varies", gi: true, giNote: "Channapatna toys & dolls are GI-registered" },
    about: ["Channapatna’s turners shape soft <b>hale wood</b> on a lathe, then press a stick of coloured <b>lac</b> against the spinning toy. Friction heats the lac and gives a glossy, child-safe lacquer.", "There is a link to our partner here: lac is exactly what ICAR-NISA began researching in 1924 as the Indian Lac Research Institute."],
    missing: ["Plastic toys made overseas, with unknown paints, dominate Indian toy shelves.", "Channapatna’s workshops have shrunk as cheap imports took over."],
    uses: ["Toys for toddlers and children.", "Return gifts for birthdays; nursery décor."],
    care: ["Wipe with a dry cloth; do not soak in water."],
    specs: [["Wood", "Hale (Wrightia tinctoria)"], ["Finish", "Lac with vegetable/food-safe colours"], ["Age", "6 months+ (rattles), 2 years+ (tops)"]],
    safety: "Lac and colours are food-safe and non-toxic; edges are rounded; small parts are checked against age labelling.",
    tags: ["toys", "kids", "lac", "karnataka", "gi", "baby", "return gift"]
  });

  craft({
    id: "saharanpur-carved-box", sku: "SR-WD-202", cat: "wooden",
    name: "Saharanpur Carved Sheesham Box", hi: "सहारनपुर नक्काशीदार डिब्बा",
    aka: ["wooden box", "sheesham", "saharanpur", "wood carving", "jewellery box", "dry fruit box", "carved box"],
    short: "A hand-carved sheesham wood box with floral and vine motifs, from Saharanpur’s centuries-old woodcarving cluster.",
    tagline: "Saharanpur’s floral carving on a sheesham box.",
    variants: [{ label: "6 × 4 in", price: 899, mrp: 1050 }, { label: "10 × 6 in (dry-fruit, 4 compartments)", price: 1599, mrp: 1850 }],
    img: "hc-wooden-carved",
    craft: { state: "Uttar Pradesh", cluster: "Saharanpur woodcarvers", material: "Sheesham (Indian rosewood)", size: "6×4 or 10×6 in", gi: true, giNote: "Saharanpur wood craft is GI-registered" },
    about: ["Saharanpur’s carvers work freehand, cutting deep vines, leaves and flowers into dense <b>sheesham</b> wood, then hand-polishing to bring out the grain."],
    uses: ["Jewellery or keepsake box; dry-fruit box for Diwali gifting.", "Desk organiser."],
    care: ["Dust regularly; occasional wax polish."],
    specs: [["Wood", "Sheesham (Dalbergia sissoo)"], ["Finish", "Hand-polished, food-safe lacquer inside"]],
    tags: ["wood", "carving", "saharanpur", "diwali", "dry fruit", "gi"]
  });

  craft({
    id: "wooden-home-mandir", sku: "SR-WD-203", cat: "wooden",
    name: "Sheesham Wood Home Mandir", hi: "लकड़ी का घर मंदिर",
    aka: ["mandir", "temple", "pooja mandir", "home temple", "wooden temple", "pooja ghar", "sheesham"],
    short: "A carved sheesham-wood home temple with a dome (shikhar), bells, a drawer for puja samagri and a shelf for idols.",
    tagline: "A permanent place for prayer in the home.",
    variants: [{ label: "Wall-mount · 18 in", price: 6500, mrp: 7500 }, { label: "Floor · 30 in (with drawer)", price: 12500, mrp: 14500 }],
    img: "hc-wooden-mandir",
    craft: { state: "Rajasthan / Uttar Pradesh", cluster: "Jodhpur & Saharanpur furniture-carvers", material: "Solid sheesham wood", size: "18 or 30 in", gi: false },
    about: ["Every Indian home has a corner for God. This mandir is carved in solid sheesham, with a shikhar dome, jaali panels and small brass bells. There is a drawer for keeping kapoor, dhoop and roli."],
    uses: ["Home or office puja corner; griha-pravesh gift from family."],
    care: ["Keep away from direct water; wipe with a dry cloth; re-polish yearly."],
    specs: [["Wood", "Solid sheesham"], ["Includes", "Bells, drawer (floor model), wall fittings (wall model)"]],
    safety: "Wall-mount fittings are load-tested; floor model base is checked for stability.",
    tags: ["mandir", "temple", "furniture", "housewarming", "puja"]
  });

  craft({
    id: "kondapalli-toys", sku: "SR-WD-204", cat: "wooden",
    name: "Kondapalli Wooden Figurines", hi: "कोंडापल्ली खिलौने",
    aka: ["kondapalli", "bommallu", "wooden dolls", "andhra", "village set", "dashavatar", "golu", "kolu"],
    short: "Light wooden figurines from Kondapalli, Andhra Pradesh, hand-painted village scenes and dolls loved for Golu displays.",
    tagline: "Village life in painted wood, from Andhra Pradesh.",
    variants: [{ label: "Village set (5 figures)", price: 899, mrp: 1050 }, { label: "Ambari elephant", price: 749, mrp: 850 }],
    img: "hc-wooden-channapatna",
    craft: { state: "Andhra Pradesh", cluster: "Kondapalli artisans", material: "Tella poniki (soft wood), natural & enamel colours", size: "3–6 in", gi: true, giNote: "Kondapalli Bommallu are GI-registered" },
    about: ["Kondapalli’s families carve soft <b>tella poniki</b> wood, join parts with tamarind-seed paste, and paint scenes of village life, gods and animals. These are the classic figures of the Navratri <b>Golu/Kolu</b> displays of the South."],
    uses: ["Navratri Golu, shelf décor, children’s storytelling."],
    care: ["Dust gently; keep dry."],
    specs: [["Wood", "Tella poniki (Givotia moluccana)"], ["Finish", "Hand-painted"]],
    tags: ["dolls", "golu", "navratri", "andhra", "gi", "figurines"]
  });

  /* ================= GLASS ================= */
  craft({
    id: "firozabad-bangles", sku: "SR-GL-301", cat: "glass", featured: true,
    name: "Firozabad Glass Bangles Set", hi: "फ़िरोज़ाबाद काँच की चूड़ियाँ",
    aka: ["bangles", "choodi", "chudi", "kanch", "glass bangles", "firozabad", "suhag", "bridal"],
    short: "Hand-made glass bangles from Firozabad, India’s ‘City of Bangles’, in festive colours with zari and stone work.",
    tagline: "Bangles from India’s Suhag Nagari.",
    variants: [{ label: "2.4 · 24 bangles", price: 349, mrp: 399 }, { label: "2.6 · 24 bangles", price: 349, mrp: 399 }, { label: "2.8 · 24 bangles", price: 349, mrp: 399 }, { label: "Bridal set (48, with kangan)", price: 899, mrp: 1050 }],
    img: "hc-glass-bangles",
    craft: { state: "Uttar Pradesh", cluster: "Firozabad (Suhag Nagari)", material: "Hand-drawn glass, zari & stone decoration", size: "Sizes 2.4 – 2.8", gi: true, giNote: "Firozabad Glass is GI-registered" },
    about: ["Firozabad has made glass for centuries, and almost every Indian bride wears bangles that began in its furnaces. The founder lists Firozabad’s glass items as a prime example of a state’s own craft.", "The glass is drawn into a spiral, cut into rings, joined over a flame, then decorated by hand, often by women working from home."],
    uses: ["Festivals, Karva Chauth, Teej, weddings.", "Return gifts for haldi/mehendi functions."],
    care: ["Store in a bangle box; avoid knocks."],
    specs: [["Count", "24 (12 per hand)"], ["Sizes", "2.4, 2.6, 2.8"]],
    safety: "Edges are fire-polished; decoration checked for loose stones.",
    tags: ["bangles", "bridal", "firozabad", "karva chauth", "teej", "gi", "wedding"]
  });

  craft({
    id: "glass-diya-set", sku: "SR-GL-302", cat: "glass",
    name: "Hand-blown Glass Diya Set", hi: "काँच के दीये",
    aka: ["glass diya", "tealight", "candle holder", "firozabad", "diwali", "votive"],
    short: "A set of six hand-blown coloured glass diyas from Firozabad. Use them with ghee, oil or tealights for a smoke-free, wind-proof glow.",
    tagline: "Diyas that glow in colour and don’t go out in the wind.",
    variants: [{ label: "Set of 6", price: 499, mrp: 599 }, { label: "Set of 12", price: 899, mrp: 1099 }],
    img: "hc-glass-lamp",
    craft: { state: "Uttar Pradesh", cluster: "Firozabad glass-blowers", material: "Hand-blown coloured glass", size: "≈ 3 in", gi: true, giNote: "Firozabad Glass is GI-registered" },
    about: ["Each diya is blown and shaped by hand, so colours and bubbles vary slightly. Glass shields the flame from the wind and is easy to wash after Diwali."],
    uses: ["Diwali, Dev Deepawali, dinner tables.", "Use with our beeswax tealights or ghee and cotton wick."],
    care: ["Hand-wash in warm soapy water once cool."],
    specs: [["Pieces", "6 or 12"], ["Use with", "Tealight / oil / ghee"]],
    tags: ["diya", "diwali", "glass", "firozabad", "gi", "candle"]
  });

  craft({
    id: "mosaic-glass-lamp", sku: "SR-GL-303", cat: "glass",
    name: "Mosaic Glass Hanging Lantern", hi: "मोज़ेक काँच लालटेन",
    aka: ["lamp", "lantern", "mosaic", "hanging lamp", "moroccan lamp", "glass lamp", "light"],
    short: "A hanging lantern of hand-cut coloured glass pieces set in a metal frame. When lit, it fills a room with coloured patterns.",
    tagline: "Hand-cut coloured glass that fills a room with patterns of light.",
    variants: [{ label: "Small (tealight)", price: 1450, mrp: 1699 }, { label: "Large (electric, E27)", price: 2499, mrp: 2899 }],
    img: "hc-glass-lamp",
    craft: { state: "Uttar Pradesh", cluster: "Firozabad & Moradabad glass-and-metal workshops", material: "Coloured glass, metal frame", size: "Small 8 in · Large 14 in", gi: false },
    about: ["Glass from Firozabad meets metalwork from Moradabad, India’s ‘brass city’. Hundreds of small glass tesserae are set by hand into a metal frame, so no two lanterns are identical."],
    uses: ["Balconies, verandas, festive décor."],
    care: ["Wipe with a dry cloth; for electric model, use LED bulbs only."],
    specs: [["Electric model", "E27 holder, 1.5 m cable, LED recommended"]],
    safety: "Electric model wired and tested; LED bulbs recommended to limit heat.",
    tags: ["lamp", "lantern", "glass", "moradabad", "decor", "light"]
  });

  craft({
    id: "reverse-glass-painting", sku: "SR-GL-304", cat: "glass",
    name: "Reverse Glass Painting – Krishna", hi: "काँच पर उल्टी चित्रकारी",
    aka: ["glass painting", "reverse painting", "tanjore", "krishna", "wall art", "painting"],
    short: "A Krishna painting done in reverse on the back of glass, with gold foil highlights, framed in teak.",
    tagline: "Painted backwards so it reads correctly from the front.",
    variants: [{ label: "8 × 10 in", price: 1800, mrp: 2100 }, { label: "12 × 15 in", price: 3200, mrp: 3700 }],
    img: "hc-glass-painting",
    craft: { state: "Tamil Nadu", cluster: "Thanjavur glass-painting artisans", material: "Glass, enamel paints, gold foil, teak frame", size: "8×10 or 12×15 in", gi: false },
    about: ["In reverse glass painting, the artist works on the back of the glass in reverse order: highlights and outlines first, then the background last. The finished picture is seen through the glass, with a jewel-like gloss. The style flourished in Thanjavur and the courts of the South."],
    uses: ["Puja room or living-room wall; Janmashtami gift."],
    care: ["Dust the glass; avoid humid walls."],
    specs: [["Frame", "Teak wood"], ["Subject", "Krishna (other deities on request)"]],
    tags: ["painting", "krishna", "wall art", "tamil nadu", "thanjavur", "glass"]
  });

  /* ================= MITTI ================= */
  craft({
    id: "terracotta-diyas", sku: "SR-MT-401", cat: "mitti", featured: true,
    name: "Hand-thrown Terracotta Diyas", hi: "मिट्टी के दीये",
    aka: ["diya", "deepak", "mitti diya", "clay lamp", "earthen lamp", "diwali", "kumhar", "terracotta"],
    short: "Wheel-thrown clay diyas made by kumhar families. They are the most traditional Diwali lamp, and they are biodegradable.",
    tagline: "Earthen diyas that also help the potter’s family through Diwali.",
    variants: [{ label: "Plain · 12 pcs", price: 199, mrp: 240 }, { label: "Hand-painted · 12 pcs", price: 349, mrp: 420 }, { label: "Plain · 51 pcs (puja)", price: 599, mrp: 720 }],
    img: "hc-mitti-diya",
    craft: { state: "Uttar Pradesh", cluster: "Kumhar (potter) families", material: "Natural river clay, sun-dried & kiln-fired", size: "≈ 3 in", gi: false },
    about: ["Every Diwali, kumhar families turn out thousands of diyas on the wheel. Buying earthen diyas instead of plastic or imported electric lights keeps that income in Indian villages, and the diyas return to the soil."],
    missing: ["Imported plastic and LED ‘diyas’ have cut deep into the kumhar’s most important season.", "Children grow up never having lit a real earthen diya."],
    uses: ["Soak in water for an hour before first use so they don’t absorb too much oil.", "Use with ghee or mustard oil and cotton wicks."],
    care: ["Biodegradable; reuse or return to the garden soil."],
    specs: [["Clay", "Natural, unglazed"], ["Paint (painted set)", "Non-toxic, water-based"]],
    tags: ["diya", "diwali", "clay", "kumhar", "eco", "biodegradable"]
  });

  craft({
    id: "bankura-horse", sku: "SR-MT-402", cat: "mitti",
    name: "Bankura Terracotta Horse (Pair)", hi: "बांकुड़ा घोड़ा",
    aka: ["bankura horse", "panchmura", "terracotta horse", "ghora", "west bengal", "bengal", "terracotta"],
    short: "The iconic long-necked terracotta horses of Panchmura, Bankura (West Bengal), once offered to village deities and now a symbol of Indian folk craft.",
    tagline: "The emblem of Indian folk craft, from Panchmura.",
    variants: [{ label: "6 in pair", price: 899, mrp: 1050 }, { label: "10 in pair", price: 2199, mrp: 2499 }],
    img: "hc-mitti-bankura",
    craft: { state: "West Bengal", cluster: "Panchmura, Bankura", material: "Terracotta, natural finish", size: "6 or 10 in", gi: true, giNote: "Bankura Panchmura terracotta craft is GI-registered" },
    about: ["The Bankura horse, with its stylised long neck, upright ears and hollow body, was traditionally offered to the village deity Dharmathakur. Potters of Panchmura still make it in parts on the wheel and assemble it by hand. The All India Handicrafts Board adopted it as its symbol."],
    uses: ["Living-room décor, entrance, garden niches."],
    care: ["Indoor use; dust gently; keep away from water."],
    specs: [["Material", "Terracotta"], ["Set", "Pair"]],
    tags: ["bankura", "terracotta", "bengal", "folk", "gi", "decor"]
  });

  craft({
    id: "kulhad-set", sku: "SR-MT-403", cat: "mitti",
    name: "Kulhad Chai Cups (Set of 6)", hi: "कुल्हड़",
    aka: ["kulhad", "kullad", "kulhar", "clay cup", "chai cup", "matka cup", "terracotta cup", "lassi"],
    short: "Kiln-fired clay kulhads for chai, lassi and kulfi. The earthy aroma they add is the taste of an Indian railway station.",
    tagline: "Chai tastes different in a kulhad.",
    variants: [{ label: "Set of 6 (150 ml)", price: 299, mrp: 360 }, { label: "Set of 12 (100 ml)", price: 449, mrp: 540 }],
    img: "hc-mitti-kulhad",
    craft: { state: "Uttar Pradesh / West Bengal", cluster: "Kumhar families", material: "Food-grade natural clay, unglazed", size: "100 / 150 ml", gi: false },
    about: ["Kulhads are unglazed, so a little of the chai soaks into the clay and gives that faint earthy aroma. Unlike paper cups with plastic lining, they go back to the earth."],
    missing: ["Paper cups lined with plastic, and plastic glasses, have replaced kulhads almost everywhere."],
    uses: ["Chai, coffee, lassi, kulfi, phirni.", "Rinse before first use; reusable at home."],
    care: ["Wash with plain water; air dry. Avoid soap, which the clay absorbs."],
    specs: [["Glaze", "None (natural clay)"], ["Food safe", "Yes, lead-free clay"]],
    safety: "Clay checked for lead-free glaze-free firing; suitable for hot beverages.",
    tags: ["kulhad", "chai", "clay", "eco", "kitchen", "plastic free"]
  });

  craft({
    id: "clay-matka", sku: "SR-MT-404", cat: "mitti",
    name: "Clay Matka with Tap", hi: "मिट्टी का मटका",
    aka: ["matka", "surahi", "ghada", "earthen pot", "water pot", "clay pot", "natural fridge", "mitti cool"],
    short: "A hand-thrown earthen water pot with a brass-finish tap, the original ‘desi fridge’ that cools water by evaporation.",
    tagline: "The original desi fridge, which cools water without electricity.",
    variants: [{ label: "10 litre", price: 649, mrp: 750 }, { label: "15 litre", price: 849, mrp: 990 }],
    img: "hc-mitti-matka",
    craft: { state: "Gujarat / Rajasthan", cluster: "Kumhar families of Kutch & Rajasthan", material: "Natural clay, tap fitting, lid", size: "10 or 15 L", gi: false },
    about: ["Water slowly seeps through the porous clay and evaporates from the surface, which cools the water inside without electricity. Matka water is cool but not ice-cold, which many families prefer in summer."],
    missing: ["Refrigerated, plastic-bottled water has replaced the matka in most homes."],
    uses: ["Soak in water for a few hours before first use. Refill daily.", "Place on a stand in a shaded, airy corner."],
    care: ["Scrub the inside with a brush and plain water weekly; never use soap."],
    specs: [["Capacity", "10 / 15 litre"], ["Includes", "Lid & tap"]],
    safety: "Tap fitting pressure-checked for leaks; natural unglazed clay.",
    tags: ["matka", "summer", "water", "clay", "eco", "kitchen"]
  });

  /* ================= IRON ================= */
  craft({
    id: "bastar-iron-figurine", sku: "SR-IR-501", cat: "iron", featured: true,
    name: "Bastar Wrought Iron Tribal Figurine", hi: "बस्तर लौह शिल्प",
    aka: ["bastar", "wrought iron", "tribal art", "lohshilp", "kondagaon", "chhattisgarh", "iron craft", "dokra"],
    short: "Elongated, hand-forged iron figures by the Lohar blacksmiths of Bastar: musicians, dancers and deer.",
    tagline: "Hand-forged on an anvil by the Lohar smiths of Bastar.",
    variants: [{ label: "Dancing couple · 10 in", price: 1150, mrp: 1350 }, { label: "Musician trio · 12 in", price: 1699, mrp: 1950 }, { label: "Deer · 8 in", price: 899, mrp: 1050 }],
    img: "hc-iron-bastar",
    craft: { state: "Chhattisgarh", cluster: "Kondagaon, Bastar (Lohar community)", material: "Recycled wrought iron, hand-forged", size: "8–12 in", gi: true, giNote: "Bastar wrought iron craft is GI-registered" },
    about: ["Bastar’s Lohars heat scrap iron in a small furnace and hammer it into shape. They use no moulds and no welding, joining pieces by hammering. The tall, thin style comes from tribal ritual figures.", "Nearby, in Jharkhand and Bengal, the related Dhokra craft casts brass by the lost-wax process. Both are on Shubharambh’s craft map."],
    uses: ["Shelf and wall décor, office desks.", "Corporate and art-lover gifts."],
    care: ["Indoor use; wipe with a dry cloth; a drop of oil prevents rust."],
    specs: [["Process", "Hand-forged, no welding"], ["Finish", "Natural, rust-protected"]],
    tags: ["bastar", "tribal", "iron", "chhattisgarh", "gi", "art"]
  });

  craft({
    id: "cast-iron-kadhai", sku: "SR-IR-502", cat: "iron",
    name: "Cast Iron Kadhai (Pre-seasoned)", hi: "लोहे की कड़ाही",
    aka: ["kadhai", "kadai", "karahi", "cast iron", "iron wok", "loha", "cookware", "non toxic"],
    short: "A heavy, pre-seasoned cast-iron kadhai that gets better with use. It is the traditional alternative to coated non-stick pans.",
    tagline: "Cookware that can last for generations.",
    variants: [{ label: "8 inch (1.2 L)", price: 999, mrp: 1250 }, { label: "10 inch (2 L)", price: 1299, mrp: 1650 }, { label: "12 inch (3 L)", price: 1699, mrp: 2100 }],
    img: "hc-iron-kadhai",
    craft: { state: "Tamil Nadu / Punjab", cluster: "Foundries & MSME cast-iron makers", material: "Cast iron, seasoned with vegetable oil", size: "8 / 10 / 12 in", gi: false },
    about: ["Indian kitchens cooked in iron for centuries. Cast iron spreads heat evenly, browns food beautifully, and once seasoned, becomes naturally non-stick. Cooking in iron can also add a little dietary iron to food."],
    missing: ["Coated non-stick pans chip and are replaced every couple of years.", "The art of seasoning and caring for iron has been lost in many homes."],
    uses: ["Sabzi, deep-frying, halwa, bhuna masala.", "Avoid storing sour foods (tamarind, tomato gravies) in it for long."],
    care: ["Wash, dry immediately on the flame, and rub a few drops of oil to prevent rust.", "If rust appears, scrub, rinse and re-season."],
    specs: [["Material", "Cast iron"], ["Coating", "None, pre-seasoned with vegetable oil"], ["Stoves", "Gas, induction (flat base), wood fire"]],
    safety: "No chemical coating; checked for casting cracks and uniform base thickness.",
    tags: ["kitchen", "cookware", "iron", "non toxic", "kadai"]
  });

  craft({
    id: "iron-tawa", sku: "SR-IR-503", cat: "iron",
    name: "Hand-forged Iron Tawa", hi: "लोहे का तवा",
    aka: ["tawa", "tava", "roti tawa", "iron griddle", "chapati", "dosa tawa", "loha"],
    short: "A hand-beaten iron tawa for phulke-soft rotis, parathas and dosas, made by blacksmiths without any coating.",
    tagline: "Phulkas need an iron tawa.",
    variants: [{ label: "10 inch (roti)", price: 699, mrp: 850 }, { label: "12 inch (dosa / paratha)", price: 899, mrp: 1099 }],
    img: "hc-iron-tawa",
    craft: { state: "Rajasthan / Punjab", cluster: "Gadia Lohar blacksmiths & MSME forges", material: "Hand-forged iron with wooden handle", size: "10 or 12 in", gi: false },
    about: ["A thick iron tawa holds steady heat, which is the secret to rotis that puff up. Many are still hammered by hand by the Gadia Lohar, the travelling blacksmiths of Rajasthan."],
    uses: ["Roti, paratha, cheela, dosa."],
    care: ["Wipe while warm, keep lightly oiled, and avoid soaking."],
    specs: [["Material", "Hand-forged iron"], ["Handle", "Wood"]],
    tags: ["tawa", "roti", "kitchen", "iron", "lohar"]
  });

  craft({
    id: "bastar-iron-diya-stand", sku: "SR-IR-504", cat: "iron",
    name: "Bastar Iron Diya Stand", hi: "बस्तर लौह दीपदान",
    aka: ["diya stand", "deepdan", "candle stand", "bastar", "wrought iron", "tribal lamp"],
    short: "A hand-forged Bastar iron lamp-stand with five diya cups and a tree-of-life design. Use it with clay diyas or tealights.",
    tagline: "A tree of lights, forged in Bastar.",
    variants: [{ label: "5-diya · 14 in", price: 1450, mrp: 1650 }],
    img: "hc-iron-bastar",
    craft: { state: "Chhattisgarh", cluster: "Kondagaon, Bastar", material: "Hand-forged wrought iron", size: "14 in", gi: true, giNote: "Bastar wrought iron craft is GI-registered" },
    about: ["A tree-of-life form with birds and five cups for diyas. It is beautiful with our <a href=\"product.html?id=terracotta-diyas\">terracotta diyas</a> at Diwali."],
    uses: ["Diwali, mandir, entrance décor."],
    care: ["Wipe soot and oil; light oiling prevents rust."],
    specs: [["Diya cups", "5"], ["Height", "14 in"]],
    tags: ["diya", "bastar", "iron", "diwali", "gi"]
  });

  /* ================= CHINI MITTI ================= */
  craft({
    id: "khurja-achaar-barni", sku: "SR-CH-601", cat: "chini", featured: true,
    name: "Khurja Ceramic Achaar Barni", hi: "खुर्जा अचार बरनी",
    aka: ["barni", "achaar jar", "pickle jar", "martaban", "ceramic jar", "khurja", "chini mitti", "storage jar"],
    short: "A glazed stoneware pickle jar from Khurja with an airtight lid. It is the traditional way to store achaar for a year.",
    tagline: "Grandmother’s pickle jar, still made in Khurja.",
    variants: [{ label: "500 ml", price: 349, mrp: 420 }, { label: "1 litre", price: 549, mrp: 650 }, { label: "2 litre", price: 799, mrp: 950 }],
    img: "hc-chini-pickle-jar",
    craft: { state: "Uttar Pradesh", cluster: "Khurja potteries (Bulandshahr)", material: "Glazed ceramic stoneware, lead-free glaze", size: "0.5 / 1 / 2 L", gi: true, giNote: "Khurja pottery is GI-registered" },
    about: ["Ceramic doesn’t react with oil, salt and acid the way plastic and some metals do. That is why pickles were always matured in <b>chini-mitti barnis</b> in the sun. Khurja in Uttar Pradesh is one of India’s oldest ceramic towns."],
    missing: ["Pickles now sit in plastic tubs, which absorb oil and odour and can leach chemicals.", "Khurja’s small potteries struggle against cheap imports."],
    uses: ["Mango, lime and chilli pickles; ghee; salt; dry snacks."],
    care: ["Dishwasher-safe; dry completely before refilling pickles."],
    specs: [["Glaze", "Lead-free, food-safe"], ["Lid", "Ceramic with gasket"]],
    safety: "Food-safe, lead-free glaze; lid fit checked for airtightness.",
    tags: ["pickle", "achaar", "kitchen", "ceramic", "khurja", "gi", "storage"]
  });

  craft({
    id: "jaipur-blue-pottery-plate", sku: "SR-CH-602", cat: "chini",
    name: "Jaipur Blue Pottery Plate", hi: "जयपुर ब्लू पॉटरी प्लेट",
    aka: ["blue pottery", "jaipur", "decorative plate", "wall plate", "persian", "quartz pottery"],
    short: "A hand-painted cobalt-and-turquoise wall plate in Jaipur’s famous blue pottery. It is made from quartz, not clay.",
    tagline: "Jaipur’s Persian-inspired pottery, made from quartz rather than clay.",
    variants: [{ label: "6 inch", price: 599, mrp: 699 }, { label: "8 inch", price: 799, mrp: 950 }, { label: "10 inch", price: 1199, mrp: 1399 }],
    img: "hc-chini-bluepottery",
    craft: { state: "Rajasthan", cluster: "Jaipur blue-pottery artisans", material: "Quartz paste, glass, multani mitti, hand-painted cobalt & turquoise", size: "6 / 8 / 10 in", gi: true, giNote: "Jaipur Blue Pottery is GI-registered" },
    about: ["Jaipur blue pottery is unusual: the body is a paste of <b>quartz, powdered glass, multani mitti and borax</b>, not clay. It is fired at low temperature and painted in cobalt blue and turquoise with Persian-style floral motifs."],
    uses: ["Wall display; serving dry snacks (decorative use recommended)."],
    care: ["Hand-wash gently; avoid knocks."],
    specs: [["Body", "Quartz-based (no clay)"], ["Colours", "Cobalt blue, turquoise, white"]],
    safety: "Lead-free glaze; decorative/dry-food use recommended.",
    tags: ["blue pottery", "jaipur", "wall plate", "decor", "gi"]
  });

  craft({
    id: "khurja-planter", sku: "SR-CH-603", cat: "chini",
    name: "Khurja Glazed Planter / Vase", hi: "खुर्जा गमला",
    aka: ["planter", "vase", "gamla", "pot", "ceramic planter", "khurja", "indoor plant"],
    short: "A hand-glazed ceramic planter with a drainage hole, from Khurja, in reactive-glaze colours for indoor plants and tulsi.",
    tagline: "A glazed Khurja pot for tulsi and indoor plants.",
    variants: [{ label: "5 inch", price: 499, mrp: 599 }, { label: "7 inch", price: 899, mrp: 1050 }],
    img: "hc-chini-khurja",
    craft: { state: "Uttar Pradesh", cluster: "Khurja potteries", material: "Glazed ceramic stoneware", size: "5 or 7 in", gi: true, giNote: "Khurja pottery is GI-registered" },
    about: ["Reactive glazes flow and pool during firing, so each Khurja planter comes out with its own pattern."],
    uses: ["Tulsi, money plant, succulents; or as a vase for fresh flowers."],
    care: ["Use the drainage hole with a saucer; wipe clean."],
    specs: [["Drainage", "Yes"], ["Glaze", "Reactive, lead-free"]],
    tags: ["planter", "garden", "tulsi", "ceramic", "khurja", "gi"]
  });

  craft({
    id: "khurja-chai-cups", sku: "SR-CH-604", cat: "chini",
    name: "Khurja Ceramic Chai Cups (Set of 6)", hi: "खुर्जा चाय कप",
    aka: ["cups", "chai cups", "tea cups", "mugs", "ceramic cups", "khurja", "cutting chai"],
    short: "Hand-glazed stoneware chai cups from Khurja, sized for ‘cutting chai’ and safe for daily use.",
    tagline: "Handmade cups for daily chai.",
    variants: [{ label: "Set of 6 (120 ml)", price: 699, mrp: 850 }, { label: "Set of 6 + kettle", price: 1499, mrp: 1799 }],
    img: "hc-chini-khurja",
    craft: { state: "Uttar Pradesh", cluster: "Khurja potteries", material: "Glazed stoneware, lead-free", size: "120 ml", gi: true, giNote: "Khurja pottery is GI-registered" },
    about: ["Thick-walled stoneware keeps chai hot longer. Each cup is hand-glazed and kiln-fired in Khurja."],
    uses: ["Chai, coffee, kadha; everyday use."],
    care: ["Microwave and dishwasher safe."],
    specs: [["Capacity", "120 ml"], ["Glaze", "Lead-free"]],
    safety: "Food-safe lead-free glaze; microwave-safe.",
    tags: ["cups", "chai", "kitchen", "ceramic", "khurja", "gi"]
  });

  /* ================= BAMBOO ================= */
  craft({
    id: "bamboo-basket", sku: "SR-BB-701", cat: "bamboo", featured: true,
    name: "Assam Bamboo Storage Basket", hi: "बाँस की टोकरी",
    aka: ["basket", "bamboo basket", "cane", "assam", "storage", "fruit basket", "laundry", "northeast"],
    short: "A tightly woven bamboo basket from Assam: strong, light and fully biodegradable, for fruit, vegetables, laundry or gifting hampers.",
    tagline: "Woven in Assam, strong and fully biodegradable.",
    variants: [{ label: "Fruit basket · 10 in", price: 549, mrp: 650 }, { label: "Storage set of 3", price: 1199, mrp: 1450 }, { label: "Laundry · 18 in with lid", price: 1499, mrp: 1799 }],
    img: "hc-bamboo-basket",
    craft: { state: "Assam", cluster: "Bamboo weavers of Barpeta & Nalbari", material: "Bamboo & cane", size: "Varies", gi: false },
    about: ["The Northeast holds much of India’s bamboo, and weaving it is everyday knowledge there. Bamboo grows back within a few years without replanting, which makes it one of the most renewable materials there is."],
    missing: ["Plastic baskets and crates have replaced woven ones, even in villages."],
    uses: ["Fruit & vegetable storage, laundry, gift hampers (try one with our organic range)."],
    care: ["Keep dry; air in the sun occasionally."],
    specs: [["Material", "Bamboo, cane"], ["Finish", "Natural, food-safe"]],
    tags: ["basket", "storage", "assam", "northeast", "eco", "plastic free", "hamper"]
  });

  craft({
    id: "bamboo-lamp", sku: "SR-BB-702", cat: "bamboo",
    name: "Tripura Bamboo Table Lamp", hi: "बाँस का लैम्प",
    aka: ["lamp", "table lamp", "bamboo light", "lantern", "tripura", "northeast", "lighting"],
    short: "A slatted bamboo table lamp from Tripura’s bamboo artisans that gives warm, striped light.",
    tagline: "Warm, striped light through bamboo slats.",
    variants: [{ label: "Table lamp · 12 in", price: 1250, mrp: 1499 }, { label: "Hanging lantern · 14 in", price: 1450, mrp: 1699 }],
    img: "hc-bamboo-lamp",
    craft: { state: "Tripura", cluster: "Agartala bamboo artisans", material: "Bamboo slats, cotton cord, E27 holder", size: "12 / 14 in", gi: false },
    about: ["Tripura’s artisans split bamboo into fine slats and weave or bind them into lampshades. The light falls through the gaps in warm stripes."],
    uses: ["Bedside, reading corner, café and homestay décor."],
    care: ["Dust with a soft brush; use LED bulbs."],
    specs: [["Electricals", "E27 holder, 1.5 m cable, switch"], ["Bulb", "LED recommended (not included)"]],
    safety: "Wiring tested; LED bulbs recommended to keep the bamboo cool.",
    tags: ["lamp", "lighting", "tripura", "northeast", "bamboo", "decor"]
  });

  craft({
    id: "bamboo-hand-fan", sku: "SR-BB-703", cat: "bamboo",
    name: "Bamboo Hand Fan (Pankha)", hi: "बाँस का पंखा",
    aka: ["pankha", "hand fan", "bijna", "vijna", "fan", "summer", "bamboo fan"],
    short: "A hand-woven bamboo pankha with a cloth border, the summer companion that needs no electricity.",
    tagline: "Cool air without electricity.",
    variants: [{ label: "Single", price: 199, mrp: 240 }, { label: "Set of 4 (return gifts)", price: 699, mrp: 899 }],
    img: "hc-bamboo-fan",
    craft: { state: "Bihar / West Bengal / Assam", cluster: "Village bamboo weavers", material: "Bamboo, cotton border", size: "≈ 12 in", gi: false },
    about: ["The woven pankha (bijna) appears in Indian rituals too: brides are fanned at weddings, and it is gifted at Chhath and Jamai Shashthi. It is cooling, weightless and fully biodegradable."],
    uses: ["Summer power cuts, puja, return gifts at weddings and festivals."],
    care: ["Keep dry."],
    specs: [["Material", "Bamboo, cotton"]],
    tags: ["pankha", "summer", "eco", "return gift", "chhath", "bamboo"]
  });

  craft({
    id: "bamboo-bottle", sku: "SR-BB-704", cat: "bamboo",
    name: "Bamboo Water Bottle", hi: "बाँस की बोतल",
    aka: ["bottle", "water bottle", "bamboo bottle", "eco bottle", "plastic free", "northeast", "assam", "tripura"],
    short: "A natural bamboo-section water bottle with a food-grade inner coating and cork-bamboo stopper, from Northeast India.",
    tagline: "A water bottle grown from bamboo.",
    variants: [{ label: "750 ml", price: 549, mrp: 650 }, { label: "1 litre", price: 699, mrp: 820 }],
    img: "hc-bamboo-bottle",
    craft: { state: "Assam / Tripura", cluster: "Bamboo MSMEs of the Northeast", material: "Bamboo culm, food-grade natural inner seal, bamboo stopper", size: "750 ml / 1 L", gi: false },
    about: ["Each bottle is one section of a bamboo culm, with the natural node as the base. It is smoothed, sealed inside with a food-grade coating, and fitted with a bamboo stopper. A plastic bottle replaced by bamboo is one less to throw away."],
    uses: ["Office, travel, school."],
    care: ["Rinse with warm water; dry upside-down; not for hot liquids or the freezer."],
    specs: [["Capacity", "750 ml / 1 L"], ["Inner", "Food-grade natural seal"]],
    safety: "Inner seal food-grade; stopper leak-tested.",
    tags: ["bottle", "eco", "plastic free", "northeast", "bamboo", "office"]
  });
})();
