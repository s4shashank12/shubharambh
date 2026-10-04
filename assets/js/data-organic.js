/* Shubharambh — organic catalogue (kapoor, dhoop, puja, shuddhi, gums, bee products, rasoi)
   Prices are indicative samples from Indian online/retail research (2026). */
(function () {
  var P = (window.SR_PRODUCTS = window.SR_PRODUCTS || []);

  /* reusable purity-test rows */
  var T = {
    rot: ["Optical rotation (polarimeter)", "Natural camphor is dextrorotatory, about +41° to +43°. Synthetic camphor made from turpentine is a racemic mix that reads close to 0°. This is the single clearest natural-vs-synthetic test."],
    mp: ["Melting point", "Pure camphor melts at roughly 175–179 °C. Wax, binders or naphthalene (80 °C) pull the value down."],
    residue: ["Non-volatile residue / ash", "Pure camphor sublimes or burns away completely. Any residue left after heating means fillers, wax or dirt."],
    gcms: ["GC-MS fingerprint", "Separates and identifies each volatile compound to confirm camphor/borneol content and detect naphthalene, paradichlorobenzene, paraffin or solvent residues."],
    sg: ["Specific gravity / float test", "Camphor (≈0.99) floats on water while naphthalene (≈1.15) sinks, so mothball-grade substitutes are easy to catch."],
    ash: ["Total & acid-insoluble ash", "High ash or acid-insoluble ash shows sand, soil, dolomite or charcoal used as cheap filler."],
    moist: ["Moisture / loss on drying", "Excess moisture adds false weight and causes mould during storage."],
    rosin: ["Liebermann–Storch test (rosin)", "A classical colour test for colophony (pine rosin), the most common cheap adulterant in costly resins such as guggul, loban and sambrani."],
    hplcGug: ["HPLC fingerprint, E- & Z-guggulsterone", "Guggulsterones are the marker compounds of true guggul (Commiphora wightii). HPLC quantifies them and exposes look-alike gums (e.g., mango-tree gum) sold as guggul."],
    frag: ["Synthetic fragrance & phthalate screen", "GC-MS screen for diethyl phthalate (DEP) and synthetic aroma chemicals often used in cheap dhoop to fake a ‘herbal’ smell."],
    fixedC: ["Charcoal / fixed-carbon test", "Detects charcoal powder, which makes cheap dhoop burn fast and smoky. Our base is cow dung, herbs and resin."],
    burn: ["Burn-time & smoke profile", "Standardised burn in a chamber: consistent burning time, low soot and no stinging smoke."],
    heavy: ["Heavy metals (ICP-MS / AAS)", "Lead, cadmium, arsenic and mercury screening, because pigments and mineral fillers can carry toxic metals."],
    micro: ["Microbial load", "Total plate count, yeast & mould and pathogens, since natural products must be clean as well as genuine."],
    starch: ["Starch / iodine test", "A blue-black colour with iodine reveals arrowroot, maida or other starch fillers."],
    dye: ["Synthetic dye screen (TLC / HPLC)", "Detects banned or non-permitted colours such as metanil yellow, Sudan dyes and Rhodamine B."]
  };

  var NISA_CAMPHOR = "Under the MOU, ICAR-NISA scientists (Namkum, Ranchi) define how genuine Bhimseni camphor is identified and run the purity tests on our batches. Shubharambh handles sourcing, packing and sales. ICAR-NISA owns quality and testing. The certification programme for camphor is under way. Batch reports will be published on ICAR-NISA’s own website and linked through the QR code on each pack, so you can check them on a government site rather than taking our word for it.";
  var NISA_RESIN = "ICAR-NISA began in 1924 as the Indian Lac Research Institute and later became the Indian Institute of Natural Resins and Gums. It has spent a century working on lac, gums and resins. Under the MOU, its scientists are standardising identity and purity tests for traditional resins (guggul, sal-resin dhuna, loban, sambrani), and Shubharambh supplies and sells the tested product. Certification for this category is in progress; batch reports will be linked by QR from the pack to ICAR-NISA’s website.";

  /* ================= KAPOOR ================= */
  P.push({
    id: "bhimseni-kapoor", sku: "002751", type: "organic", cat: "kapoor", featured: true,
    name: "Bhimseni Kapoor", hi: "भीमसेनी कपूर",
    aka: ["camphor", "bhimseni camphor", "kapur", "karpur", "karpoor", "kafoor", "borneo camphor", "natural camphor", "pachai"],
    short: "Natural crystalline camphor that burns clean and evaporates completely, with no naphthalene, wax or residue.",
    tagline: "The real ‘Bhimseni’ crystal: for aarti, for purifying the home, and as a natural replacement for naphthalene balls.",
    variants: [{ label: "50 g", price: 180, mrp: 199 }, { label: "100 g", price: 320, mrp: 360 }, { label: "250 g", price: 750, mrp: 820 }, { label: "500 g jar", price: 1400, mrp: 1400 }],
    own: ["assets/img/p/own/bhimseni-0.jpg", "assets/img/p/own/bhimseni-1.jpg", "assets/img/p/own/bhimseni-2.jpg", "assets/img/p/own/bhimseni-3.jpg"],
    img: "bhimseni-kapoor",
    region: "Natural camphor crystals, hand-sorted and packed by Shubharambh",
    about: [
      "In Ayurveda and temple tradition, <b>Bhimseni karpur</b> was the prized camphor of the Dryobalanops tree of Borneo and Sumatra, which old Indian trade lists distinguished from ordinary camphor. Today the name is used for natural, crystalline camphor obtained from the camphor tree (Cinnamomum camphora). It is very different from the cheap ‘camphor’ tablets made from turpentine in a chemical plant.",
      "Natural Bhimseni crystals are glassy, slightly translucent and brittle. They have a cooling, clean aroma and evaporate on their own at room temperature. This is why households once kept a few crystals in every wardrobe, puja room and grain store."
    ],
    missing: [
      "Most ‘kapoor’ sold loose today is <b>synthetic camphor</b> made from turpentine, or tablets pressed with wax and binders. It looks similar but leaves black soot and residue.",
      "Wardrobes rely on <b>naphthalene balls</b>. Naphthalene is toxic: it can cause haemolytic anaemia, especially in children and people with G6PD deficiency, and IARC classifies it as a possible human carcinogen.",
      "Households no longer know how to tell real kapoor from fake. In the founder’s words, people <i>compromise on quality without even knowing they are compromising</i>.",
      "The habit of deliberately diffusing camphor to freshen and purify rooms, cars and offices has been replaced by chemical aerosol sprays."
    ],
    brings: [
      "Genuine natural Bhimseni crystals with no binder, wax or naphthalene, in sizes from 50 g to a 500 g family jar.",
      "Each batch goes to ICAR-NISA for purity testing (certification in progress), with reports to be linked by QR code.",
      "Clear instructions for aarti, diffusing, wardrobe use and car use, so one jar replaces several chemical products.",
      "A base for our <a href=\"product.html?id=kapoor-freshener\">flavoured Bhimseni fresheners</a> (mogra, khas, rose, orange, pineapple, guggul, musk, oud)."
    ],
    uses: [
      "<b>Aarti & havan:</b> 1–2 crystals light instantly and burn with a bright, smokeless flame.",
      "<b>Room purification:</b> drop 3–4 crystals into a bowl of warm water or an electric camphor diffuser. The vapour spreads through the room without fire.",
      "<b>Wardrobes & grain bins:</b> tie 5–6 crystals in a muslin pouch in place of naphthalene balls. Replace when the crystals have evaporated.",
      "<b>Car, office, shoe rack:</b> keep a small perforated jar of crystals and refresh it every 3–4 weeks."
    ],
    nisa: {
      status: "progress", role: NISA_CAMPHOR,
      tests: [T.rot, T.mp, T.residue, T.gcms, T.sg],
      home: { title: "3 checks you can do at home", steps: [
        "<b>Float test:</b> drop a crystal in a glass of water. Camphor floats, while naphthalene and many fakes sink.",
        "<b>Burn test:</b> light one crystal on a steel plate. Real Bhimseni burns with a bright flame and leaves almost nothing behind. Wax-bound tablets leave black, sticky residue.",
        "<b>Evaporation test:</b> leave a crystal in an open saucer. Pure camphor shrinks and disappears in a few days without a trace."
      ] },
      research: "Traditional texts say burning or diffusing camphor ‘purifies the air’, and some say it increases oxygen. Shubharambh presents these as traditional beliefs. ICAR-NISA scientists are studying them, and we will update this page with published findings only."
    },
    specs: [["Form", "Natural crystals / flakes"], ["Botanical source", "Camphor tree (Cinnamomum camphora); traditionally Dryobalanops aromatica"], ["Naphthalene / wax / binder", "None"], ["Shelf life", "Indefinite in an airtight jar (it naturally evaporates if left open)"], ["Barcode / SKU", "002751 (500 g jar)"], ["Grade", "Puja & aroma grade. Not for eating."]],
    caution: "Keep away from children and open flames when not in use. Do not ingest: edible ‘pachai karpooram’ is a separate grade. Not for use on infants.",
    tags: ["aarti", "puja", "naphthalene alternative", "air", "diffuser", "wardrobe", "ayurveda"]
  });

  P.push({
    id: "tikia-kapoor", sku: "SR-KP-102", type: "organic", cat: "kapoor",
    name: "Tikia Kapoor (Aarti Tablets)", hi: "टिकिया कपूर",
    aka: ["camphor tablets", "kapoor goli", "kapur tablet", "aarti camphor", "karpur tikki"],
    short: "Uniform camphor tablets for daily aarti, pressed without paraffin wax so they burn clean and leave no soot.",
    tagline: "One tablet, one clean flame, for daily aarti without soot or residue.",
    variants: [{ label: "100 g (≈ 100 tablets)", price: 185, mrp: 199 }, { label: "250 g jar", price: 449, mrp: 480 }, { label: "500 g jar", price: 860, mrp: 920 }],
    img: "tikia-kapoor",
    region: "Pressed from camphor powder in an MSME unit in India",
    about: [
      "<b>Tikia</b> (tablet) kapoor is the everyday camphor of Indian homes: small round tablets that make it easy to offer a measured flame during aarti.",
      "Because tablets are pressed rather than grown as crystals, they are the easiest form to adulterate. Paraffin wax makes them cheaper and harder, and low-grade synthetic camphor makes up the rest. Our tablets use camphor powder and a minimal natural binder only."
    ],
    missing: [
      "Many tablets in the market use <b>paraffin wax</b> as a binder. It smokes, leaves black soot on the aarti thali and smells of kerosene.",
      "Some cheap ‘camphor’ is blended with naphthalene, which is toxic when burnt indoors.",
      "Buyers check the price but not the burn quality, because nobody has told them what a good tablet looks like."
    ],
    brings: [
      "Tablets that light easily, burn fully and leave a clean thali.",
      "Uniform size and weight, so roughly one tablet per aarti.",
      "Lab-tested composition (ICAR-NISA certification in progress) and clear labelling of the camphor grade."
    ],
    uses: ["Place one tablet in the aarti diya or camphor stand and light from the edge.", "Use 2–3 tablets in havan to start the fire without kerosene.", "Crushed tablets can be added to a diffuser bowl like Bhimseni crystals."],
    nisa: {
      status: "progress", role: NISA_CAMPHOR,
      tests: [T.rot, T.residue, ["Paraffin / binder detection", "Melting behaviour and FTIR spectra reveal paraffin wax and synthetic binders used to bulk up tablets."], T.gcms, ["Weight uniformity", "Each lot is checked for consistent tablet weight and hardness, so you get what the label says."]],
      home: { title: "Check your tablets", steps: [
        "<b>Thali test:</b> burn one tablet on a clean steel plate. A good tablet leaves at most a faint mark; a wax tablet leaves a black, greasy ring.",
        "<b>Smell test:</b> camphor smells cool and clean. A kerosene or ‘chemical’ smell while burning points to paraffin.",
        "<b>Float test:</b> a broken piece should float in water."
      ] }
    },
    specs: [["Form", "Round tablets, ~1 g each"], ["Binder", "No paraffin wax"], ["Burn time", "≈ 45–60 seconds per tablet (indicative)"], ["Pack", "Food-grade PET jar"]],
    caution: "Never leave a burning tablet unattended. Keep out of reach of children. Do not ingest.",
    tags: ["aarti", "puja", "daily", "havan"]
  });

  P.push({
    id: "kapur-gugal", sku: "SR-KP-103", type: "organic", cat: "kapoor",
    name: "Kapur Gugal Dhoop", hi: "कपूर गुग्गल",
    aka: ["camphor guggul", "kapoor guggal", "guggal dhoop", "kapur guggul"],
    short: "Bhimseni camphor and natural guggul resin on a cow-dung and herb base, for dhooni-style fumigation of the home.",
    tagline: "Two of the oldest purifiers, camphor and guggul, in one charcoal-free dhoop.",
    variants: [{ label: "100 g pouch", price: 149, mrp: 175 }, { label: "250 g jar", price: 329, mrp: 375 }],
    img: ["kapur-gugal", "bhimseni-kapoor"],
    region: "Blended in small batches in India",
    about: [
      "Many households once ended the evening aarti with a <b>dhooni</b>: a few pieces of guggul and kapoor on a hot cow-dung cake, carried through every room. Guggul smoke has a warm, balsamic aroma, and camphor adds a cool, sharp top note.",
      "Kapur Gugal brings that practice back in a ready-to-use form: granules of Bhimseni camphor and genuine guggul resin, bound with desi cow dung, dried herbs and a little ghee, with no charcoal and no synthetic perfume."
    ],
    missing: [
      "Guggul is expensive, so most ‘guggal dhoop’ contains very little of it. It is mostly sawdust, charcoal and synthetic fragrance.",
      "Charcoal-based dhoop produces harsh, sooty smoke that irritates the eyes and lungs. That is the opposite of the dhooni’s purpose.",
      "The evening dhooni ritual has almost disappeared from city homes."
    ],
    brings: [
      "Real guggul and real Bhimseni camphor in every pinch, with tested resin content (certification in progress).",
      "A charcoal-free, cow-dung and herb base sourced from gaushalas, which supports desi cattle.",
      "Smoke that is fragrant and gentle. Light it once in the evening and ventilate afterwards."
    ],
    uses: ["Heat a cow-dung cake or a coconut-shell piece and sprinkle half a teaspoon of Kapur Gugal on it.", "Or use an electric dhoop burner at low setting.", "Carry the dhooni through each room for 5–10 minutes, then open windows for a few minutes."],
    nisa: {
      status: "progress", role: NISA_RESIN,
      tests: [T.hplcGug, T.rot, T.ash, T.fixedC, T.frag, T.rosin],
      home: { title: "What to look for", steps: [
        "<b>Smell before burning:</b> real guggul smells balsamic and faintly bitter. A strong perfume smell means added fragrance.",
        "<b>Smoke colour:</b> genuine resin smoke is white to pale grey and fragrant. Black, choking smoke points to charcoal.",
        "<b>Ash:</b> a cow-dung base leaves light grey ash, while charcoal-based dhoop leaves heavy black char."
      ] },
      research: "A 2007 study in the Journal of Ethnopharmacology (Nautiyal et al.) found that one hour of medicinal smoke from havan samagri reduced airborne bacterial counts in a closed room by over 94%. Shubharambh is working with ICAR-NISA to study our own blends. We share these as research in progress, not as health claims."
    },
    specs: [["Ingredients", "Bhimseni camphor, guggul resin, desi cow dung, dried herbs, ghee"], ["Charcoal", "None"], ["Synthetic fragrance", "None"]],
    caution: "Smoke of any kind should be used in ventilated rooms. Keep away from infants and people with asthma.",
    tags: ["dhooni", "fumigation", "puja", "guggul", "evening aarti"]
  });

  /* ================= SHUDDHI ================= */
  P.push({
    id: "kapoor-freshener", sku: "SR-SH-201", type: "organic", cat: "shuddhi", featured: true,
    name: "Bhimseni Kapoor Freshener (8 fragrances)", hi: "भीमसेनी कपूर फ्रेशनर",
    aka: ["camphor freshener", "air freshener", "naphthalene replacement", "wardrobe freshener", "car freshener", "mogra", "khus", "khas", "rose", "orange", "pineapple", "musk", "oud", "guggul"],
    short: "Flavoured Bhimseni camphor cubes that replace naphthalene balls and chemical sprays, in mogra, khas, rose, orange, pineapple, guggul, musk and oud.",
    tagline: "Naphthalene out, Bhimseni in: eight fragrances for wardrobes, washrooms, cars and offices.",
    variants: [
      { label: "Mogra · 50 g", price: 149, mrp: 175 }, { label: "Khas · 50 g", price: 149, mrp: 175 }, { label: "Rose · 50 g", price: 149, mrp: 175 },
      { label: "Orange · 50 g", price: 149, mrp: 175 }, { label: "Pineapple · 50 g", price: 149, mrp: 175 }, { label: "Guggul · 50 g", price: 159, mrp: 185 },
      { label: "Musk · 50 g", price: 159, mrp: 185 }, { label: "Oud · 50 g", price: 179, mrp: 210 }, { label: "Assorted pack of 3", price: 399, mrp: 525 }
    ],
    img: ["kapoor-freshener", "flavoured-dhup-cone"],
    region: "Bhimseni camphor blended with fragrance oils by Shubharambh",
    about: [
      "Bhimseni camphor used to come in one aroma. Shubharambh asked a simple question: <i>why not use it to replace the naphthalene balls in every Indian wardrobe?</i> We blend natural Bhimseni camphor with fragrance oils to make eight variants: <b>Mogra, Khas, Rose, Orange, Pineapple, Guggul, Musk and Oud</b>.",
      "The cubes sit in a perforated jar or pouch and slowly sublimate. They release the cool camphor note with the chosen fragrance for 3–5 weeks, with no fire, no electricity and no aerosol."
    ],
    missing: [
      "<b>Naphthalene balls</b> in wardrobes and <b>paradichlorobenzene</b> cubes in toilets are still common, although both are classified as possible human carcinogens and are linked to poisoning in children.",
      "Aerosol room sprays release volatile organic compounds into small, closed rooms.",
      "Natural camphor was once the default wardrobe protector. That knowledge has quietly faded."
    ],
    brings: [
      "A naphthalene-free, fire-free freshener built on genuine Bhimseni camphor.",
      "Eight fragrance profiles, from the traditional (mogra, khas, guggul, oud) to modern (orange, pineapple, musk).",
      "Batch testing of the camphor base with ICAR-NISA (certification in progress) and full fragrance disclosure on the pack."
    ],
    uses: ["<b>Wardrobe:</b> one pouch per shelf, replaced every 4–5 weeks.", "<b>Washroom:</b> perforated jar on a high shelf.", "<b>Car:</b> clip-on jar or pouch under the seat. Remove it on very hot days.", "<b>Shoe rack & office drawer:</b> one small pouch."],
    nisa: {
      status: "progress", role: NISA_CAMPHOR,
      tests: [T.rot, T.gcms, ["Fragrance oil identity & allergens", "GC-MS verifies the declared fragrance oil and checks known skin allergens, so the label can list them honestly."], T.frag, T.residue],
      home: { title: "Is your wardrobe freshener camphor or naphthalene?", steps: [
        "<b>Float test:</b> a camphor cube floats in water and a naphthalene ball sinks.",
        "<b>Smell:</b> naphthalene has a sharp, tar-like ‘mothball’ smell, while camphor smells cool and medicinal.",
        "<b>Touch:</b> camphor crystals are brittle and powder easily. Naphthalene balls are hard and waxy."
      ] }
    },
    specs: [["Base", "Natural Bhimseni camphor"], ["Fragrances", "Mogra, Khas, Rose, Orange, Pineapple, Guggul, Musk, Oud"], ["Lasts", "≈ 3–5 weeks per 50 g (depends on airflow & heat)"], ["Naphthalene / PDCB", "None"]],
    caution: "Keep away from children and pets; not for ingestion. Do not place in direct sunlight in a closed car.",
    tags: ["air freshener", "wardrobe", "car", "washroom", "naphthalene alternative", "fragrance"]
  });

  P.push({
    id: "gaumutra-vaporizer", sku: "SR-SH-202", type: "organic", cat: "shuddhi",
    name: "Gaumutra Vaporizer", hi: "गौमूत्र वेपोराइज़र",
    aka: ["gomutra", "cow urine", "gaumutra ark", "go ark", "vaporiser", "room purifier", "liquid vaporizer", "panchgavya"],
    short: "Distilled desi-cow gaumutra ark with camphor, neem and tulsi oils, for a plug-in vaporizer. A chemical-free alternative for room ‘shuddhi’.",
    tagline: "The traditional shuddhi ritual, adapted for a plug-in vaporizer.",
    variants: [{ label: "Machine + 45 ml refill", price: 249, mrp: 299 }, { label: "Refill 45 ml", price: 129, mrp: 149 }, { label: "Refill pack of 3", price: 349, mrp: 447 }],
    img: "gaumutra-vaporizer",
    region: "Gaumutra ark from partner gaushalas of Gir & Sahiwal cows",
    about: [
      "In Indian tradition, sprinkling <b>gaumutra</b> (or panchgavya) in the home is a shuddhi (purification) ritual, done at griha-pravesh and after festivals. Ayurveda prepares it as <b>gomutra ark</b>, distilled so that the liquid is clear and stable.",
      "Shubharambh’s vaporizer refill combines triple-distilled ark from indigenous (Gir/Sahiwal) cows with small amounts of camphor, neem and tulsi oils. A standard plug-in vaporizer warms the liquid so that it slowly evaporates into the room."
    ],
    missing: [
      "Many bedrooms run chemical vaporizers all night. These contain synthetic insecticides (pyrethroids such as transfluthrin or allethrin) or strong synthetic fragrance.",
      "Gaushalas struggle financially. Value-added gaumutra and gobar products are one of the few ways to make indigenous cattle self-sustaining.",
      "Few families still know how or why the shuddhi ritual was done."
    ],
    brings: [
      "A refill with no synthetic insecticide, made from distilled ark and plant oils.",
      "Direct income for gaushalas caring for indigenous breeds.",
      "Process-level transparency on distillation, blending and testing, in partnership with ICAR-NISA (certification in progress)."
    ],
    uses: ["Screw the refill into the machine and plug into a socket. Use 30–60 minutes in the evening or before sleeping, with a window slightly open.", "Each 45 ml refill lasts about 30 nights at 4–6 hours/night (indicative).", "Can also be used in an ultrasonic diffuser: 10–15 drops in water."],
    nisa: {
      status: "progress",
      role: "ICAR-NISA works on value-addition from secondary agricultural produce, which includes livestock by-products. Under the MOU, its scientists provide process clarity (distillation steps, quality limits) and test our batches. Certification for this product is in progress.",
      tests: [["Distillation check (TDS, ammonia, pH)", "Properly distilled ark is clear, with low dissolved solids and controlled ammonia, unlike raw or diluted urine."], T.micro, ["Pesticide / pyrethroid screen", "Confirms there are no synthetic insecticides such as transfluthrin or allethrin in the refill."], ["Essential-oil identity (GC-MS)", "Verifies the camphor, neem and tulsi oils and their levels."]],
      home: { title: "Quick checks", steps: ["Ark should be <b>water-clear</b>, not yellow or cloudy.", "The smell should be mild and herbal-camphoric, not sharp ammonia or a heavy perfume.", "The label should name the cow breed source and the distillation method."] },
      research: "Claims about air-purifying or insect-repelling effects of gaumutra are traditional. They are being studied, and Shubharambh does not present them as proven."
    },
    specs: [["Contents", "Distilled gomutra ark (indigenous cows), camphor, neem oil, tulsi oil"], ["Insecticide", "None added"], ["Compatible with", "Standard 2-pin liquid vaporizer machines"]],
    caution: "For room use only. Do not drink the refill. Keep away from children. Switch off and ventilate if anyone feels discomfort.",
    tags: ["shuddhi", "vaporizer", "gaushala", "panchgavya", "room"]
  });

  /* ================= DHOOP & RESINS ================= */
  P.push({
    id: "gugul-cup", sku: "000615", type: "organic", cat: "dhoop", featured: true,
    name: "Gugul Cup 601", hi: "गुग्गुल कप",
    aka: ["guggul cup", "dhoop cup", "sambrani cup", "havan cup", "gobar cup", "cow dung cup", "guggal"],
    short: "Hand-pressed desi cow-dung cups filled with guggul and herbs. Light one and the cup itself becomes the dhoop, with nothing left to clean.",
    tagline: "Light, place and purify: 12 cow-dung cups of real guggul in one box.",
    variants: [{ label: "Box of 12 cups", price: 65, mrp: 65 }, { label: "Pack of 3 boxes (36 cups)", price: 185, mrp: 195 }, { label: "Pack of 6 boxes (72 cups)", price: 359, mrp: 390 }],
    own: ["assets/img/p/own/gugulcup-0.jpg", "assets/img/p/own/gugulcup-1.jpg", "assets/img/p/own/gugulcup-4.jpg", "assets/img/p/own/gugulcup-2.jpg", "assets/img/p/own/gugulcup-3.jpg"],
    img: "gugul-cup",
    region: "Made with gaushala cow dung; Shubharambh pack 601",
    about: [
      "Each Gugul Cup is a small bowl of sun-dried <b>desi cow dung</b> (the dark ring you see in the box), filled with granules of <b>guggul resin</b> and dried herbs. Light the rim and it smoulders slowly. The cup holds the burning resin, so there is no charcoal tablet or metal dhoop-dani to clean afterwards.",
      "The design follows a very old idea: cow-dung cakes were the traditional fire for dhooni, and guggul was the resin offered on them."
    ],
    missing: [
      "Most ‘dhoop cups’ in the market are pressed from charcoal powder and sawdust, soaked in synthetic perfume.",
      "Their smoke is sharp and sooty. Families end up giving up dhoop entirely, along with the habit of purifying the home with smoke.",
      "Cow dung is increasingly treated as waste, although it was once a household fuel and a ritual material."
    ],
    brings: [
      "Real guggul in a cow-dung cup, with no charcoal and no synthetic perfume.",
      "Priced at ₹65 for 12 cups (about ₹5.4 a day for daily dhoop).",
      "Income for gaushalas and rural women who hand-press the cups.",
      "Purity testing of the guggul with ICAR-NISA (certification in progress)."
    ],
    uses: ["Place one cup on a steel plate or heat-proof stand.", "Light the rim until it glows, then gently blow out the flame. It will smoulder for 10–15 minutes.", "Best used during evening aarti. Ventilate the room afterwards."],
    nisa: {
      status: "progress", role: NISA_RESIN,
      tests: [T.hplcGug, T.fixedC, T.frag, T.ash, T.burn],
      home: { title: "Spot the difference", steps: ["Break a cup: a cow-dung cup shows fibrous, earthy texture; charcoal cups are uniformly black and powdery.", "A real guggul aroma is balsamic and warm. A sweet ‘perfume’ smell is added fragrance.", "The ash should be light grey, not black."] },
      research: "Medicinal smoke from herbs and resins has been shown to reduce airborne bacteria in a closed room (Nautiyal et al., 2007). Shubharambh and ICAR-NISA are studying our own cups; until results are published, we share this as research in progress."
    },
    specs: [["Count", "12 cups per box (one cup in the photo is a foil holder)"], ["Base", "Sun-dried desi cow dung"], ["Filling", "Guggul resin, herbs"], ["Charcoal", "None"], ["Barcode / SKU", "000615"]],
    caution: "Use on a heat-proof surface away from curtains. Keep away from infants and people with asthma; ventilate after use.",
    tags: ["dhoop", "guggul", "cow dung", "gobar", "aarti", "puja"]
  });

  P.push({
    id: "sambrani", sku: "SR-DH-302", type: "organic", cat: "dhoop",
    name: "Sambrani (Benzoin)", hi: "साम्ब्राणी",
    aka: ["sambrani", "sambirani", "benzoin", "styrax", "loban sambrani", "sambrani cup", "sambrani dhoop", "kungiliyam"],
    short: "Sweet, vanilla-balsamic benzoin resin, the classic South Indian dhoop, as raw resin, powder or cow-dung cups.",
    tagline: "The fragrance of a South Indian home at dusk.",
    variants: [{ label: "Cups · 12 pcs", price: 75, mrp: 85 }, { label: "Raw resin · 100 g", price: 199, mrp: 230 }, { label: "Powder · 100 g", price: 179, mrp: 210 }],
    img: "sambrani",
    region: "Benzoin resin (Styrax spp.), cleaned and packed in India",
    about: [
      "<b>Sambrani</b> is the Tamil and Telugu name for benzoin, the resin of the Styrax tree. When warmed, it gives off a sweet, vanilla-like, balsamic smoke. In South India, sambrani smoke is part of morning and evening pooja, of drying and perfuming hair after a head bath, and of fumigating the home during the monsoon.",
      "We offer it three ways: raw resin tears for the traditional dhoop-kal (clay burner), fine powder to sprinkle on embers, and ready-to-light cow-dung cups."
    ],
    missing: [
      "Bazaar sambrani is often bulked with <b>rosin (colophony)</b> from pine trees, sugar or sawdust. It burns hot and acrid instead of sweet.",
      "Charcoal-based ‘sambrani cups’ hide poor resin under heavy perfume.",
      "Outside the South, many households have never smelt genuine benzoin."
    ],
    brings: [
      "Graded benzoin tears with tested resin content and no rosin (certification in progress).",
      "Cups made on a cow-dung base, with no charcoal.",
      "A gentle, traditional fragrance for daily pooja."
    ],
    uses: ["Sprinkle ½ tsp powder or 2–3 tears on a hot cow-dung cake or electric dhoop burner.", "Light one cup on a heat-proof plate.", "Traditional hair-drying with sambrani smoke should be done at a safe distance, never close to the scalp or face."],
    nisa: {
      status: "progress", role: NISA_RESIN,
      tests: [["Benzoic & cinnamic acid profile (HPLC)", "These aromatic acids define genuine benzoin. Their ratio also separates Siam from Sumatra benzoin."], T.rosin, T.ash, T.fixedC, T.frag],
      home: { title: "Recognising good sambrani", steps: ["Genuine tears are creamy-white to reddish-brown inside, and soften and smell sweet when warmed between fingers.", "When burnt, the smoke is sweet and vanilla-like, not sharp or turpentine-like (which suggests rosin)."] }
    },
    specs: [["Botanical source", "Styrax benzoin / Styrax tonkinensis"], ["Forms", "Cups, raw tears, powder"], ["Charcoal", "None in cups"]],
    caution: "Do not hold smoke close to infants or new mothers. Use in ventilated rooms.",
    tags: ["south india", "dhoop", "benzoin", "pooja", "monsoon"]
  });

  P.push({
    id: "dhuwan", sku: "SR-DH-303", type: "organic", cat: "dhoop", featured: true,
    name: "Dhuwan (Sal Resin Dhuna)", hi: "धुवन / धूना (साल राल)",
    aka: ["dhuna", "dhuno", "dhoona", "raal", "ral", "sal resin", "shorea robusta", "dammar", "dhunuchi", "dhuni"],
    short: "Pure resin of the Sal tree, collected by forest communities of Jharkhand and central India. This is the dhuna of the Bengali dhunuchi and the village havan.",
    tagline: "The gum of the Sal tree: an old forest purifier.",
    variants: [{ label: "100 g", price: 149, mrp: 170 }, { label: "250 g", price: 349, mrp: 390 }, { label: "500 g", price: 649, mrp: 720 }],
    img: "dhuwan",
    region: "Sal forests of Jharkhand, Odisha & Chhattisgarh, collected by tribal gatherers",
    about: [
      "<b>Dhuwan</b> (also dhuna or raal) is the resin of the <b>Sal tree</b> (Shorea robusta), the dominant tree of the Chota Nagpur forests around Ranchi. Collected by tribal families as a minor forest produce, it has been the most common ritual smoke of eastern India. It is what fills the clay dhunuchi during Durga Puja, and what villagers sprinkle on fire to drive away damp, insects and ‘bad air’.",
      "As the founder puts it, people used gums and resins (guggul, dhuna, and dhuwan from the Sal tree) to keep the environment free of germs, long before chemical disinfectants. Science has barely studied this, which is why Shubharambh took it to ICAR-NISA."
    ],
    missing: [
      "Sal resin is cheap, but market ‘dhuna’ is still adulterated with pine rosin, plastic granules, or sugar to add weight and gloss.",
      "Its role in daily home purification is forgotten outside a few festivals.",
      "Forest gatherers earn very little because they sell to middlemen without any quality grading."
    ],
    brings: [
      "Clean, graded Sal resin bought from collector groups with fair, quality-linked pricing.",
      "Purity testing by ICAR-NISA, which has decades of experience with natural resins and gums (certification in progress).",
      "Guidance for using it the traditional way: dhunuchi, dhooni, or sprinkled on havan fire."
    ],
    uses: ["Place a few pieces on glowing coconut husk or a cow-dung cake in a dhunuchi or clay burner.", "Sprinkle a pinch on havan fire.", "Fumigate stores, cowsheds and damp rooms in the monsoon, keeping doors open for a while."],
    nisa: {
      status: "progress", role: NISA_RESIN,
      tests: [["Acid value & softening point", "Characterise genuine Sal resin and separate it from rosin or synthetic resins."], T.rosin, T.ash, ["Foreign matter & plastics", "Screening for plastic granules, sugar and bark pieces added to increase weight."], T.burn],
      home: { title: "Know your dhuna", steps: ["Real Sal resin is pale yellow to light brown, brittle, and powders between the fingers.", "Burnt on embers it gives thick white, fragrant smoke. A plastic smell or black drips means adulteration."] },
      research: "Nautiyal et al. (2007) reported a 94% reduction in airborne bacteria after one hour of havan smoke from mixed herbs. Specific studies on Sal resin are part of the research Shubharambh is pursuing with ICAR-NISA."
    },
    specs: [["Botanical source", "Shorea robusta (Sal)"], ["Origin", "Jharkhand / Odisha / Chhattisgarh forests"], ["Form", "Lumps & granules"]],
    caution: "Burn only in a proper dhunuchi or burner. Smoke is dense, so keep rooms ventilated and away from infants.",
    tags: ["sal", "forest produce", "jharkhand", "durga puja", "havan", "fumigation", "tribal"]
  });

  P.push({
    id: "loban", sku: "SR-DH-304", type: "organic", cat: "dhoop",
    name: "Loban (Frankincense)", hi: "लोबान",
    aka: ["loban", "luban", "frankincense", "boswellia", "kundur", "salai guggul", "olibanum", "lobaan"],
    short: "Frankincense tears from Boswellia trees: a bright, citrus-woody smoke used in homes, temples, dargahs and churches across India.",
    tagline: "A fragrance shared by temples, dargahs and churches.",
    variants: [{ label: "50 g", price: 149, mrp: 170 }, { label: "100 g", price: 279, mrp: 320 }, { label: "250 g", price: 649, mrp: 740 }],
    img: "loban",
    region: "Indian Boswellia serrata (salai) and Arabian Boswellia sacra",
    about: [
      "<b>Loban</b> comes from the Arabic <i>luban</i>, frankincense. It is the oleo-gum resin of Boswellia trees: Indian <b>Boswellia serrata</b> (salai, kundur) from the dry forests of central India, and the prized Arabian <b>Boswellia sacra</b>. Its smoke is bright, lemony and woody, unlike the sweet sambrani.",
      "Loban burns in temples, in Sufi dargahs on Thursday evenings, and in churches. Indian homes use it at dusk to purify rooms and keep mosquitoes away."
    ],
    missing: ["Loban is one of the most adulterated resins: pine rosin, sugar crystals and even plastic are mixed into the ‘tears’.", "Few buyers know the difference between frankincense (loban) and benzoin (sambrani), which are often sold under each other’s name."],
    brings: ["Correctly named, botanically identified frankincense.", "Testing for boswellic acids and rosin (ICAR-NISA certification in progress).", "Grading by tear size and colour, so you pay for quality, not weight."],
    uses: ["Place 2–3 tears on a hot cow-dung cake, coal-free electric burner, or in a dhunuchi.", "Use at dusk; close windows for 10 minutes, then ventilate."],
    nisa: {
      status: "progress", role: NISA_RESIN,
      tests: [["Boswellic acids (HPLC, incl. AKBA)", "Marker compounds that confirm genuine Boswellia resin and its species."], ["Essential-oil content & profile", "α-pinene, limonene and other volatiles define the fresh citrus-pine aroma of good loban."], T.rosin, T.ash],
      home: { title: "Identify good loban", steps: ["Tears are translucent, pale yellow to amber and slightly dusty, and they become sticky when chewed (do not swallow).", "The smoke is lemony-pine and clean. A sweet caramel smell means sugar was added."] }
    },
    specs: [["Botanical source", "Boswellia serrata / Boswellia sacra"], ["Form", "Tears (graded)"]],
    caution: "Use in a ventilated room; keep away from infants and asthmatic family members.",
    tags: ["frankincense", "dargah", "temple", "dhoop", "mosquito"]
  });

  P.push({
    id: "gugol-imported", sku: "SR-DH-305", type: "organic", cat: "dhoop",
    name: "Gugol – Imported Guggul", hi: "गुग्गल (आयातित)",
    aka: ["guggul", "gugal", "guggal", "gugul", "commiphora", "bdellium", "myrrh", "imported guggul", "kanda guggul"],
    short: "Premium Commiphora gum-resin for havan and dhooni, imported because India’s own guggul tree is now critically endangered.",
    tagline: "Pure guggul for havan, sourced responsibly because our own guggul tree is endangered.",
    variants: [{ label: "100 g", price: 349, mrp: 399 }, { label: "250 g", price: 799, mrp: 899 }, { label: "500 g", price: 1499, mrp: 1699 }],
    img: "gugol-imported",
    region: "Commiphora gum-resin from neighbouring regions & the Horn of Africa, tested in India",
    about: [
      "Guggul (Sanskrit <i>guggulu</i>) is the gum-resin of Commiphora trees. It has been one of the most important offerings in Vedic havan and a major Ayurvedic ingredient. India’s own species, <b>Commiphora wightii</b> of Rajasthan and Gujarat, has been over-tapped to the point that it is listed as <b>Critically Endangered</b> on the IUCN Red List.",
      "Much of the guggul traded in India is therefore imported. Imports are where buyers are most easily cheated, because closely related gums and sticky mixtures look the same. Our ‘Gugol Imported’ is bought as whole lumps and checked for identity before it is sold."
    ],
    missing: ["Buyers cannot tell real guggul from look-alike gums. Even researchers note it is hard to distinguish morphologically.", "Unsustainable tapping of Indian guggul trees continues because buyers don’t ask where their guggul comes from."],
    brings: ["Identity-checked imported guggul, which also reduces pressure on wild Indian trees.", "Chemical fingerprinting (guggulsterones) through ICAR-NISA (certification in progress).", "Clear origin and grade on every pack."],
    uses: ["Offer small pieces into havan fire with ghee.", "Place on a hot cow-dung cake for dhooni.", "Grind and mix into home-made havan samagri."],
    nisa: {
      status: "progress", role: NISA_RESIN,
      tests: [T.hplcGug, ["Species identification", "Chemical profile and, where needed, DNA barcoding to confirm the Commiphora species declared on the pack."], T.ash, T.moist, T.heavy],
      home: { title: "Signs of genuine guggul", steps: ["Lumps are yellowish-brown to dark, sticky when warmed, and have a balsamic, slightly bitter smell.", "In hot water, real guggul forms a milky emulsion."] }
    },
    specs: [["Botanical source", "Commiphora spp. (declared per batch)"], ["Form", "Whole lumps"], ["Use", "Havan & dhoop (not a medicine as sold)"]],
    caution: "For havan/dhoop only. Medicinal guggul preparations should be taken only under the guidance of an Ayurvedic doctor.",
    tags: ["havan", "guggul", "resin", "ayurveda", "endangered", "imported"]
  });

  P.push({
    id: "dhup-cone", sku: "SR-DH-306", type: "organic", cat: "dhoop",
    name: "Dhup Cone – Natural", hi: "धूप कोन",
    aka: ["dhoop cone", "incense cone", "cow dung cone", "gobar cone", "havan cone"],
    short: "Charcoal-free cones of desi cow dung, guggul, loban, camphor and herbs, with the plain natural aroma of a havan.",
    tagline: "The fragrance of a havan, in a cone.",
    variants: [{ label: "Box of 40 cones", price: 99, mrp: 120 }, { label: "Pack of 3 boxes", price: 279, mrp: 360 }],
    img: "dhup-cone",
    region: "Made by women’s self-help groups with gaushala cow dung",
    about: [
      "Our natural dhup cones are made the way havan samagri is made: <b>desi cow dung</b> as the base, with <b>guggul, loban, Bhimseni camphor, neem, tulsi, sandalwood powder and a little ghee</b>, rolled and sun-dried by hand.",
      "They contain no charcoal and no perfume. They smell of the havan itself, and a cone smoulders for 15–20 minutes."
    ],
    missing: ["Most incense cones are made from charcoal powder and wood dust, dipped in synthetic perfume (often with diethyl phthalate).", "Studies of indoor incense use link smoke from such products to fine particulate matter and VOCs in closed rooms."],
    brings: ["Charcoal-free, perfume-free cones with a natural herb aroma.", "Rural livelihoods through self-help groups and gaushalas.", "Ingredient and burn testing with ICAR-NISA (certification in progress)."],
    uses: ["Light the tip, let it flame for a few seconds, blow it out, and place it on a heat-proof stand.", "One cone is enough for a 10×12 ft room. Ventilate afterwards."],
    nisa: { status: "progress", role: NISA_RESIN, tests: [T.fixedC, T.frag, T.ash, T.burn, T.heavy], home: { title: "Check your cones", steps: ["Break one: it should be brown and fibrous, not jet black.", "Unlit cones should smell earthy and herbal, not perfumed.", "The ash should be light grey and powdery."] } },
    specs: [["Ingredients", "Cow dung, guggul, loban, camphor, neem, tulsi, sandalwood, ghee"], ["Burn time", "≈ 15–20 min/cone"], ["Charcoal / synthetic perfume", "None"]],
    caution: "Burn on a heat-proof stand away from fabric. Keep away from children and pets.",
    tags: ["dhoop", "cone", "cow dung", "havan", "charcoal free"]
  });

  P.push({
    id: "flavoured-dhup-cone", sku: "SR-DH-307", type: "organic", cat: "dhoop",
    name: "Flavoured Dhup Cones", hi: "सुगंधित धूप कोन",
    aka: ["incense cones", "dhoop cone", "mogra", "rose", "chandan", "sandalwood", "khus", "oud", "lemongrass", "fragrance cone"],
    short: "Our charcoal-free cow-dung cones in six fragrances: mogra, rose, chandan, khus, oud and lemongrass.",
    tagline: "Six fragrances on a natural cow-dung and herb base.",
    variants: [
      { label: "Mogra · 40 cones", price: 129, mrp: 150 }, { label: "Rose · 40 cones", price: 129, mrp: 150 }, { label: "Chandan · 40 cones", price: 149, mrp: 175 },
      { label: "Khus · 40 cones", price: 129, mrp: 150 }, { label: "Oud · 40 cones", price: 169, mrp: 199 }, { label: "Lemongrass · 40 cones", price: 129, mrp: 150 },
      { label: "Assorted 6 × 10 cones", price: 199, mrp: 240 }
    ],
    img: "flavoured-dhup-cone",
    region: "Made by women’s self-help groups; fragrances from Indian attar & essential-oil distillers",
    about: ["The same charcoal-free base as our natural dhup cones, scented with fragrance oils sourced from Indian attar and essential-oil distillers, including traditional mogra, khus and rose from the attar town of Kannauj.", "They are made for people who want a fragrance as well as the purifying smoke."],
    missing: ["‘Fragrance’ incense in the market usually means synthetic aroma chemicals on a charcoal stick.", "India’s attar heritage (Kannauj, Tamil Nadu) loses out to cheap synthetic perfume."],
    brings: ["A natural cone base, with every fragrance declared on the pack.", "Business for traditional Indian fragrance distillers.", "Phthalate screening with ICAR-NISA (certification in progress)."],
    uses: ["Light the tip, blow out the flame and place the cone on a heat-proof stand.", "Ideal for living rooms, meditation corners and shops."],
    nisa: { status: "progress", role: NISA_RESIN, tests: [T.frag, T.fixedC, ["Fragrance identity (GC-MS)", "Confirms the declared fragrance oil and checks allergens."], T.burn], home: { title: "Natural vs synthetic fragrance", steps: ["Natural oils smell softer and change as the cone burns. Synthetic perfume smells the same from start to finish and often ‘catches’ the throat.", "Read the box: ‘perfume’ or ‘fragrance’ with no details usually means synthetic."] } },
    specs: [["Fragrances", "Mogra, Rose, Chandan, Khus, Oud, Lemongrass"], ["Base", "Cow dung + herbs + resin"], ["Charcoal", "None"]],
    caution: "Burn on a heat-proof stand; ventilate after use.",
    tags: ["fragrance", "dhoop", "attar", "kannauj", "cone"]
  });

  P.push({
    id: "dhup-sticks", sku: "SR-DH-308", type: "organic", cat: "dhoop",
    name: "Dhup Sticks – Bambooless", hi: "धूप बत्ती (बिना बाँस)",
    aka: ["dhoop sticks", "agarbatti", "incense sticks", "bambooless", "dhoop batti", "masala dhoop", "panchgavya"],
    short: "Solid dhup sticks with no bamboo core and no charcoal, rolled from cow dung, herbs and resins. Available in guggul, loban, chandan, mogra and panchgavya.",
    tagline: "Agarbatti without the bamboo and without the charcoal.",
    variants: [{ label: "Guggul · 25 sticks", price: 99, mrp: 115 }, { label: "Loban · 25 sticks", price: 99, mrp: 115 }, { label: "Chandan · 25 sticks", price: 119, mrp: 140 }, { label: "Mogra · 25 sticks", price: 99, mrp: 115 }, { label: "Panchgavya · 25 sticks", price: 109, mrp: 125 }],
    img: "dhup-sticks",
    region: "Rolled by hand by rural women’s collectives",
    about: [
      "A regular agarbatti is a <b>bamboo stick</b> coated with charcoal-and-wood paste, then dipped in perfume. Our dhup sticks are solid: herbs, resins and desi cow dung rolled into a stick with no core at all.",
      "Traditional advice says <b>bamboo should not be burnt</b>, and in the founder’s words, ‘our shastras said it, but today bamboo-core sticks are burnt everywhere because they are cheap.’ Charcoal and perfume coatings add to the smoke load in a closed puja room."
    ],
    missing: ["Daily agarbatti use is almost universal, and almost all of it is bamboo + charcoal + synthetic perfume.", "Indoor-air studies of incense have measured fine particulate matter, VOCs and benzene-family compounds from cheap sticks.", "The tradition of plain ‘masala dhoop’ made from herbs is fading."],
    brings: ["Bambooless, charcoal-free sticks that burn down to light ash.", "Herbal formulas built around guggul, loban, chandan, mogra and panchgavya.", "Ingredient testing with ICAR-NISA (certification in progress)."],
    uses: ["Light the tip, blow out the flame, and stand the stick in a dhoop-stand or a bowl of sand.", "One stick is enough for a small puja room."],
    nisa: { status: "progress", role: NISA_RESIN, tests: [T.fixedC, T.frag, T.heavy, T.burn], home: { title: "Check your agarbatti", steps: ["Snap one: no bamboo core means a solid dhoop stick.", "Black, powdery paste means charcoal. Brown and fibrous means herbs and cow dung.", "If the smoke makes your eyes water, it is not a gentle herbal dhoop."] } },
    specs: [["Core", "None (solid stick)"], ["Charcoal", "None"], ["Burn time", "≈ 25–30 min/stick"]],
    caution: "Never leave burning sticks unattended. Ventilate small rooms.",
    tags: ["agarbatti", "bambooless", "dhoop", "puja", "charcoal free"]
  });

  /* ================= PUJA ================= */
  P.push({
    id: "haldi-ashtagandh", sku: "SR-PJ-401", type: "organic", cat: "puja", featured: true,
    name: "Haldi Ashtagandh Tilak", hi: "हल्दी अष्टगंध",
    aka: ["ashtagandha", "ashtagandh", "astagandh", "tilak", "chandan", "turmeric", "haldi", "gandh", "pooja tilak"],
    short: "A turmeric-based ashtagandh of eight fragrant plant ingredients for tilak and puja, with no dye, talc, dolomite or synthetic sandalwood.",
    tagline: "Eight sacred fragrances, the way the shastras describe them.",
    variants: [{ label: "50 g", price: 149, mrp: 175 }, { label: "100 g", price: 269, mrp: 300 }, { label: "Paste-ready tin · 30 g", price: 119, mrp: 140 }],
    img: ["haldi-ashtagandh", "roli"],
    region: "Blended in India from turmeric, sandalwood and Himalayan herbs",
    about: [
      "<b>Ashtagandha</b> means ‘eight fragrances’, the tilak powder offered to deities and applied on the forehead. Recipes differ by tradition. Ours is plant-only: <b>haldi (turmeric), chandan (sandalwood), kesar (saffron), kapoor (Bhimseni camphor), agar (agarwood), nagarmotha, jatamansi and kapur-kachri</b>. Traditional animal ingredients such as musk and gorochan are replaced with plant equivalents.",
      "Turmeric gives the warm golden base, and its natural curcumin is also what turns red in roli (see our home test)."
    ],
    missing: [
      "Bazaar ashtagandh is usually <b>arrowroot, talc or dolomite powder</b> coloured with synthetic yellow dye and sprayed with ‘chandan’ perfume, as the founder points out.",
      "Turmeric itself is commonly adulterated with metanil yellow dye and, in some cases, lead chromate. Lead chromate is a serious lead-poisoning risk.",
      "We buy haldi without checking whether it contains any curcumin. That knowledge is disappearing from households."
    ],
    brings: ["Real herbs in the declared proportions, with nothing added for colour or weight.", "Tested curcumin, dye and heavy-metal levels (ICAR-NISA certification in progress).", "Fragrance that comes from the herbs themselves."],
    uses: ["Mix a pinch with a few drops of water or rose water to form a paste for tilak.", "Offer dry powder during puja as gandh.", "Add to havan samagri."],
    nisa: {
      status: "progress",
      role: "Under the MOU, ICAR-NISA defines the tests that prove a puja powder is what it claims to be and runs them on our batches. Shubharambh sources the herbs and blends, packs and sells the product. Certification for puja powders is in progress, and reports will be linked by QR code to ICAR-NISA’s website.",
      tests: [["Curcumin content (HPLC / UV)", "Confirms real turmeric and its strength. Dye-coloured powders have little or none."], T.dye, ["Lead chromate test", "Lead and chromium screening by ICP-MS, because lead chromate has been found in adulterated turmeric in South Asia."], T.starch, T.ash, T.heavy],
      home: { title: "The founder’s haldi test (and two more)", steps: [
        "<b>Chuna + nimbu test:</b> rub a little haldi with chuna (edible lime) and a few drops of lemon juice and keep it in the sun. Within half an hour <b>real turmeric turns from yellow to red</b>, because curcumin changes colour in an alkaline medium. This is exactly how traditional roli is made.",
        "<b>Water test:</b> stir a pinch into a glass of water. Pure haldi settles slowly and leaves the water pale yellow. A bright yellow streak that stays suspended suggests added dye.",
        "<b>HCl test (for metanil yellow):</b> a few drops of dilute hydrochloric acid on a pinch of turmeric turns pink-violet if metanil yellow is present. Do this only with adult supervision."
      ] }
    },
    specs: [["Ingredients", "Haldi, chandan, kesar, kapoor, agar, nagarmotha, jatamansi, kapur-kachri"], ["Dye / talc / dolomite", "None"], ["Animal ingredients", "None"]],
    caution: "For external use. Do a patch test if you have sensitive skin.",
    tags: ["tilak", "puja", "turmeric", "haldi", "chandan", "ashtagandha"]
  });

  P.push({
    id: "roli", sku: "SR-PJ-402", type: "organic", cat: "puja", featured: true,
    name: "Roli – Traditional Haldi-Chuna Kumkum", hi: "रोली (कुमकुम)",
    aka: ["kumkum", "kumkuma", "roli", "tilak", "sindoor", "red powder", "chandlo", "kunkum"],
    short: "Roli made the old way, from turmeric, lime and lemon. It has no synthetic dye, no lead and no arrowroot or dolomite base.",
    tagline: "Its red comes from turmeric.",
    variants: [{ label: "50 g", price: 59, mrp: 70 }, { label: "100 g", price: 99, mrp: 120 }, { label: "250 g", price: 229, mrp: 260 }],
    img: ["roli", "haldi-ashtagandh"],
    region: "Prepared in small batches from Indian turmeric",
    about: [
      "Traditional roli or kumkum was never a dye. It was made by treating <b>turmeric with chuna (lime)</b> and a natural acid such as lemon juice or alum. Curcumin, the yellow pigment of turmeric, turns a deep red-maroon in alkaline conditions. The result was a red powder that was gentle on the skin and mildly antiseptic.",
      "Shubharambh’s roli follows this process exactly. As the founder explains, if you mix haldi with chuna and lemon and keep it in the sun, it turns red within half an hour, with no chemicals."
    ],
    missing: [
      "Market roli usually starts with an <b>arrowroot or dolomite powder</b> base, because it is cheap, coloured with synthetic red dyes (Rhodamine B, Sudan dyes) that are not meant for skin.",
      "Some red kumkum and sindoor has been found to contain <b>lead</b>, a serious toxin, particularly for children and pregnant women.",
      "Allergic dermatitis on the forehead from cheap tilak is common, and nobody connects it to the powder."
    ],
    brings: ["A turmeric-and-lime roli with no dye and no lead.", "Batch testing for dyes and heavy metals (ICAR-NISA certification in progress).", "The traditional knowledge of how roli was made, printed on every pack."],
    uses: ["Tilak on the forehead and offering during puja.", "Rangoli accents, swastik and shubh-labh marks.", "Thali decoration for festivals and weddings."],
    nisa: {
      status: "progress",
      role: "ICAR-NISA verifies that our roli’s colour comes from turmeric chemistry and screens every batch for synthetic dyes, starch fillers and heavy metals. Certification for puja powders is in progress.",
      tests: [T.dye, ["Lead & mercury (ICP-MS)", "Screens for red lead and mercury compounds sometimes found in red ritual powders."], T.starch, T.ash, ["Curcumin marker", "Confirms the red colour comes from turmeric."]],
      home: { title: "Test any roli in 1 minute", steps: [
        "<b>Lemon test:</b> put a pinch on a white saucer and add a drop of lemon juice. Turmeric-based roli fades towards orange-yellow because curcumin is a natural pH indicator. Dye-based roli stays bright red.",
        "<b>Water test:</b> shake a pinch in water. Synthetic dyes bleed instantly into bright pink or red water.",
        "<b>Iodine test:</b> a drop of iodine tincture turns starch-based roli blue-black."
      ] }
    },
    specs: [["Ingredients", "Turmeric, edible lime (chuna), lemon / alum"], ["Synthetic dye / lead", "None"], ["Base", "No arrowroot, dolomite or talc"]],
    caution: "For external use. Store dry; the colour can shift if it gets damp.",
    tags: ["kumkum", "tilak", "puja", "turmeric", "wedding", "festival"]
  });

  /* ================= GUMS ================= */
  P.push({
    id: "gond-katira", sku: "SR-GD-501", type: "organic", cat: "gond", featured: true,
    name: "Gond Katira", hi: "गोंद कतीरा",
    aka: ["gond katira", "katira gond", "tragacanth", "gum karaya", "kateera", "badam pisin", "summer gum", "cooling gum", "kullu gum"],
    short: "A cooling summer gum. Soak it overnight and it swells into a clear jelly to take with honey or mishri. Grade-1 forest crystals.",
    tagline: "The traditional Indian defence against summer heat and dehydration.",
    variants: [{ label: "100 g", price: 129, mrp: 150 }, { label: "250 g", price: 299, mrp: 340 }, { label: "500 g", price: 549, mrp: 620 }],
    img: "gond-katira",
    region: "Forest gum from central & eastern India (Sterculia), graded and sorted by hand",
    about: [
      "<b>Gond katira</b> has a ‘thandi taseer’ (cooling nature). The founder describes how it was used: soak it overnight, and in the morning take it with honey, mishri or anything sweet, and the summer brings no dehydration. The dry crystals swell many times their size into a soft, translucent jelly.",
      "Botanically, the ‘katira’ traded in India is mostly <b>gum karaya</b>, the exudate of the <b>Sterculia urens</b> tree of central and eastern India’s dry forests (also called Indian tragacanth). True tragacanth comes from Astragalus shrubs of Iran and Turkey. ICAR-NISA (formerly the Indian Institute of Natural Resins and Gums) has done extensive work on gum karaya tapping and quality."
    ],
    missing: [
      "Today very few people know this gum exists, and summer cooling has been replaced by sugary bottled drinks.",
      "With falling demand, <b>farmers and forest collectors have stopped producing it</b>, which loses both an income and a tradition.",
      "Low-grade katira carries bark, grit and sand. Buyers cannot judge the grade."
    ],
    brings: ["Hand-sorted grade-1 crystals with no bark and no grit.", "Fair, quality-linked prices for forest collectors, to revive collection.", "Identity and quality testing via ICAR-NISA (certification in progress), plus recipes on the pack."],
    uses: [
      "<b>Classic:</b> soak 1 tsp in a glass of water overnight; in the morning add honey or mishri and eat or drink.",
      "<b>Gond katira sharbat:</b> soaked katira + lemon juice + sabja seeds + mint + jaggery syrup or honey.",
      "Add to falooda, kulfi, milk and rose-sherbet in summer."
    ],
    nisa: {
      status: "progress",
      role: "This is the institute’s home ground. ICAR-NISA began as the Indian Lac Research Institute and became the Indian Institute of Natural Resins and Gums, with decades of work on gum karaya and other Indian gums. Under the MOU it verifies identity and grade, and Shubharambh buys from collectors and sells to you. Certification is in progress.",
      tests: [["Swelling index & viscosity", "Good katira absorbs many times its weight in water and forms a thick, uniform gel. Low grades swell poorly."], ["Volatile acidity", "A characteristic of gum karaya (it releases acetic acid). It helps identify the gum and its freshness."], T.ash, ["Foreign organic matter", "Bark, wood and dirt are sorted to grade-1 limits."], T.micro, T.heavy],
      home: { title: "The overnight test", steps: ["Soak 1 tsp in a glass of water overnight. Good katira becomes a clear-to-milky jelly that fills most of the glass.", "No sand or grit should settle at the bottom.", "The smell is neutral; a faint vinegar note is normal for karaya."] }
    },
    specs: [["Botanical source", "Sterculia urens (gum karaya), declared per batch"], ["Grade", "Grade-1, hand-sorted crystals"], ["Taste", "Neutral"]],
    caution: "Always soak fully before eating and drink enough water, because unsoaked gum swells. Not for children under 5 without advice. Consult a doctor if pregnant or on medication.",
    tags: ["summer", "cooling", "dehydration", "sharbat", "forest produce", "edible gum"]
  });

  P.push({
    id: "dhawda-gond", sku: "SR-GD-502", type: "organic", cat: "gond",
    name: "Dhawda Gond (Laddoo Gond)", hi: "धावड़ा गोंद",
    aka: ["dhawda gond", "dhavda", "gum ghatti", "anogeissus", "laddoo gond", "gond laddu", "panjiri gond", "edible gum", "dink"],
    short: "The strengthening ‘laddoo gond’ for winter gond-laddoo and panjiri, traditionally given to new mothers for strength.",
    tagline: "The gond of grandmother’s winter laddoos.",
    variants: [{ label: "250 g", price: 279, mrp: 320 }, { label: "500 g", price: 529, mrp: 600 }],
    img: ["gond-katira"],
    region: "Gum of the Dhawda tree (Anogeissus latifolia), central Indian forests",
    about: [
      "Where gond katira cools, <b>dhawda gond</b> (gum ghatti, from the Anogeissus latifolia tree) is a winter gum. It is fried in ghee until it puffs up, then folded into <b>gond ke laddoo</b> and panjiri. As the founder says, gond does work in many things in our body and gives strength.",
      "It is a natural forest gum collected from tree bark, in the same tradition of minor forest produce that ICAR-NISA has studied for a century."
    ],
    missing: ["Home-made gond laddoos are disappearing, and so is demand for the gum that forest collectors depend on.", "Edible gums are sold loose and ungraded, often mixed with inedible gums."],
    brings: ["Clean, edible-grade dhawda gond with declared botanical identity.", "Quality testing with ICAR-NISA (certification in progress).", "Our family recipe for gond laddoo on the pack."],
    uses: ["Fry small pieces in hot ghee until they puff up like popcorn, crush, and mix into laddoo or panjiri with atta, dry fruits and jaggery.", "Traditionally given to new mothers in the weeks after delivery (follow family/doctor advice)."],
    nisa: { status: "progress", role: "ICAR-NISA verifies identity (gum ghatti vs other gums) and food-safety parameters. Certification in progress.", tests: [["Identity (gum ghatti)", "Physico-chemical profile separates gum ghatti from acacia and karaya gums."], T.moist, T.ash, T.micro], home: { title: "Check before cooking", steps: ["Pieces should be glassy, pale amber and free of bark.", "A test piece in hot ghee should puff up white and crisp."] } },
    specs: [["Botanical source", "Anogeissus latifolia (gum ghatti)"], ["Use", "Laddoo, panjiri, winter recipes"]],
    caution: "Food use after frying in ghee as per recipe. Consult a doctor for specific health conditions.",
    tags: ["winter", "laddoo", "new mother", "edible gum", "forest produce"]
  });

  /* ================= BEE PRODUCTS ================= */
  P.push({
    id: "beepolyn", sku: "SR-BE-601", type: "organic", cat: "bee", featured: true,
    name: "Beepolyn – Bee Pollen Granules", hi: "बी-पॉलिन (मधुमक्खी पराग)",
    aka: ["bee pollen", "pollen", "parag", "beepollen", "superfood", "protein"],
    short: "Multicolour pollen pellets collected from the legs of honeybees: a protein-rich superfood and a valuable by-product for Indian beekeepers.",
    tagline: "The most protein-rich food a beehive produces.",
    variants: [{ label: "100 g", price: 299, mrp: 349 }, { label: "250 g", price: 649, mrp: 749 }, { label: "500 g", price: 1199, mrp: 1399 }],
    img: "beepolyn",
    region: "Indian apiaries (mustard, sunflower & multiflora seasons)",
    about: [
      "When a honeybee visits a flower, pollen sticks to its legs and it packs it into tiny pellets. A gentle <b>pollen trap</b> at the hive entrance collects part of these pellets as the bees walk in, which is exactly the process the founder describes. The colours tell you the flowers: golden for mustard, orange for sunflower, and greens and browns from wild flowers.",
      "Bee pollen is one of nature’s richest whole foods, roughly a fifth to a third protein by weight, with all essential amino acids, B-vitamins, minerals and antioxidants. Good pollen sells for several thousand rupees a kilo, which makes it one of the most valuable by-products a beekeeper can harvest."
    ],
    missing: ["Indian families know honey but have rarely heard of bee pollen.", "Most beekeepers sell only honey, the cheapest product of the hive, and miss pollen, wax, royal jelly and propolis income.", "Imported pollen dominates the premium shelf."],
    brings: ["Indian bee pollen, dried at low temperature and cleaned.", "Higher income for beekeepers by harvesting by-products, as ICAR-NISA’s secondary-agriculture mission recommends.", "Testing for moisture, protein, pollen origin and contaminants (ICAR-NISA certification in progress)."],
    uses: ["Start with a few granules a day and increase to 1 tsp.", "Sprinkle on curd, smoothies, oats, fruit bowls or honey.", "Do not cook or heat it, so the nutrients are preserved."],
    nisa: {
      status: "progress",
      role: "ICAR-NISA’s secondary-agriculture mandate is to raise farmers’ income from by-products. Bee pollen, wax and royal jelly are prime examples. Under the MOU, ICAR-NISA tests our pollen and trains partner beekeepers in harvesting and drying.",
      tests: [["Moisture", "Properly dried pollen keeps for months; moist pollen grows mould."], ["Protein (Kjeldahl)", "Confirms nutritional value."], ["Pollen analysis (palynology)", "Identifies the flower sources of the pellets."], T.micro, ["Pesticide residues", "Multi-residue screening, since bees forage on crops."], T.heavy],
      home: { title: "Signs of good bee pollen", steps: ["Mixed colours (not one uniform colour) indicate natural multi-floral pollen.", "Pellets should be dry and crumbly, not sticky or clumped.", "The smell is sweet and floral. A musty smell means poor drying."] }
    },
    specs: [["Form", "Dried granules"], ["Protein", "≈ 20–30% (varies by flora)"], ["Storage", "Airtight, cool & dry; refrigerate after opening"]],
    caution: "<b>Not for people allergic to pollen or bee products</b>, and not for infants. Pregnant/nursing women and those on medication should consult a doctor.",
    tags: ["superfood", "protein", "beekeeping", "bee", "by-product"]
  });

  P.push({
    id: "beeswax", sku: "SR-BE-602", type: "organic", cat: "bee",
    name: "Pure Beeswax – Blocks, Diyas & Lip Balm", hi: "शुद्ध मधुमोम",
    aka: ["beeswax", "bees wax", "madhumom", "mom", "wax candle", "lip balm", "natural wax", "petroleum free"],
    short: "Natural beeswax from Indian hives as a craft block, smokeless tealight diyas, or a petroleum-free lip balm.",
    tagline: "Natural wax with no petroleum.",
    variants: [{ label: "Wax block · 100 g", price: 249, mrp: 290 }, { label: "Tealight diyas · 6 pcs", price: 349, mrp: 399 }, { label: "Lip balm · 2 × 10 g", price: 199, mrp: 240 }],
    img: ["beeswax", "honey-generic"],
    region: "Wax from Indian beekeepers, filtered and cast by Shubharambh partners",
    about: [
      "When honeycombs are harvested, the wax caps and old combs are melted and filtered into <b>beeswax</b>. The founder lists what it can become: foundation sheets that help bees build comb faster, candles, a natural ‘vaseline’, and lip balms. It is 100% natural, with no petroleum, and essential oils can give each product its own fragrance.",
      "Beeswax tealights burn slowly with a warm, honey-scented flame. Our lip balm combines beeswax with cold-pressed oils."
    ],
    missing: ["Paraffin candles and petroleum-jelly balms are made from crude-oil by-products.", "Beekeepers often sell wax at throwaway prices or waste it."],
    brings: ["Petroleum-free candles and balms made from Indian beeswax.", "Extra income for beekeepers from a by-product they usually throw away.", "Adulteration testing (ICAR-NISA certification in progress)."],
    uses: ["Tealights: burn on a heat-proof plate and trim the wick to 5 mm.", "Lip balm: apply as needed.", "Block: for home-made balms, wood polish, thread waxing and crafts."],
    nisa: { status: "progress", role: "ICAR-NISA checks that the wax is genuine beeswax and supports beekeeper training in wax processing.", tests: [["Melting point", "Pure beeswax melts at about 62–65 °C. Paraffin and stearin shift this value."], ["Acid & ester values", "Classical pharmacopoeia tests that reveal paraffin, stearic acid or tallow adulteration."], ["FTIR / GC profile", "Confirms the natural composition of beeswax."]], home: { title: "Is it real beeswax?", steps: ["It smells faintly of honey and feels slightly tacky when warm.", "It burns with little or no soot, while paraffin candles blacken a glass held above them."] } },
    specs: [["Source", "Apis mellifera & Apis cerana hives, India"], ["Petroleum ingredients", "None"]],
    caution: "Never leave candles unattended. Lip balm: discontinue if irritation occurs (bee-product allergy).",
    tags: ["beeswax", "candle", "lip balm", "petroleum free", "by-product", "beekeeping"]
  });

  /* ================= RASOI ================= */
  P.push({
    id: "sendha-namak", sku: "SR-RS-701", type: "organic", cat: "rasoi", featured: true,
    name: "Sendha Namak (Rock Salt)", hi: "सेंधा नमक",
    aka: ["sendha namak", "saindhava lavana", "rock salt", "himalayan salt", "pink salt", "upvas salt", "vrat salt", "lahori namak", "halite"],
    short: "Unrefined mineral rock salt from ancient salt beds, the ‘saindhava lavana’ that Ayurveda ranks first among salts and the salt of every vrat.",
    tagline: "The salt your grandparents used, still full of minerals.",
    variants: [{ label: "Powder · 500 g", price: 89, mrp: 99 }, { label: "Powder · 1 kg", price: 159, mrp: 180 }, { label: "Crystals (khada) · 1 kg", price: 169, mrp: 190 }],
    img: "sendha-namak",
    region: "Rock-salt deposits of the Salt Range & Himalayan foothills; ground in India",
    about: [
      "<b>Sendha namak</b> is halite: salt from ancient sea beds that dried millions of years ago and now lies in the Salt Range and the Himalayan foothills (including Mandi in Himachal Pradesh). It is mined, washed and ground, and never refined, so it keeps traces of potassium, magnesium, calcium and iron, which give it its pale pink to white colour.",
      "Ayurveda calls it <i>saindhava lavana</i> and ranks it as the best salt. It is the salt of every Indian vrat (fast)."
    ],
    missing: [
      "Ask children today if they know sendha namak, and most don’t, as the founder notes, although it is ‘full of minerals’.",
      "Fake ‘pink salt’ is common: ordinary salt crystals tinted pink, or sea salt sold as sendha.",
      "Refined table salt is ~99% sodium chloride with anti-caking agents, and households have lost the habit of keeping different salts for different uses."
    ],
    brings: ["Genuine rock salt with a declared source.", "No anti-caking agents and no added colour.", "Testing for purity, insolubles and heavy metals (ICAR-NISA certification in progress)."],
    uses: ["Vrat cooking, fruit chaat, raitas and sherbets.", "As everyday salt alongside iodised salt (see note).", "Warm sendha-namak water gargles; crystals for salt lamps and bath soaks."],
    nisa: {
      status: "progress",
      role: "Under the MOU, ICAR-NISA verifies identity and purity, and FSSAI norms apply because this is a food. Shubharambh sources, packs and sells. Certification in progress.",
      tests: [["Sodium chloride content", "Confirms rock salt is within food-grade limits."], ["Water-insoluble matter", "Detects clay, sand and grit."], ["Mineral profile (K, Mg, Ca, Fe)", "Separates genuine rock salt from refined salt dressed up as sendha."], ["Colour bleed / added colour", "Screens for dye used to make fake ‘pink salt’."], T.heavy, T.moist],
      home: { title: "Is it real sendha?", steps: ["Dissolve a crystal in a glass of water. Natural pink salt gives clear brine with a little fine sediment. Dyed salt turns the water pink.", "Real crystals are hard and glassy, not soft or chalky.", "The taste is milder and less sharp than table salt."] }
    },
    specs: [["Type", "Unrefined rock salt (halite)"], ["Additives", "None (no anti-caking agent)"], ["Iodine", "Not iodised (natural)"]],
    caution: "Sendha namak is not iodised. India’s iodine-deficiency programme recommends iodised salt for daily use, so keep both in your kitchen and use sendha for vrat and specific dishes.",
    tags: ["vrat", "fasting", "ayurveda", "salt", "minerals", "kitchen"]
  });

  P.push({
    id: "kala-namak", sku: "SR-RS-702", type: "organic", cat: "rasoi",
    name: "Kala Namak (Kiln-fired Black Salt)", hi: "काला नमक",
    aka: ["kala namak", "black salt", "sanchal", "sauvarchala lavana", "chaat salt", "himalayan black salt"],
    short: "Rock salt fired in clay pots with harad and herbs. That is where its sulphurous ‘chaat’ flavour comes from, with no chemical shortcuts.",
    tagline: "The taste of chaat, made by the traditional kiln process.",
    variants: [{ label: "Powder · 200 g", price: 59, mrp: 70 }, { label: "Powder · 500 g", price: 119, mrp: 135 }, { label: "Crystals · 500 g", price: 129, mrp: 145 }, { label: "Powder · 1 kg", price: 219, mrp: 250 }],
    img: "kala-namak",
    region: "Traditional kiln process, North India",
    about: [
      "Kala namak, Ayurveda’s <i>sauvarchala lavana</i>, is made by <b>firing sendha namak in sealed clay pots with harad (Terminalia chebula) and other herbs</b> for many hours. The heat and plant matter reduce some of the salt’s sulphates to sulphides. That gives the dark violet-brown crystals, the pinkish powder, and the eggy, savoury aroma that makes chaat, jaljeera and raita.",
      "Industrial kala namak skips the kiln and the herbs: common salt is mixed with sodium sulphate or bisulphate and processed chemically."
    ],
    missing: ["Most packets in the market are the chemical version, and the label rarely tells you.", "The kiln-firing tradition and its artisans are disappearing."],
    brings: ["Kala namak made by the traditional fired process, with nothing added.", "Purity and heavy-metal testing (ICAR-NISA certification in progress)."],
    uses: ["Chaat, fruit chaat, jaljeera, chaach, raita, shikanji and chutneys.", "A pinch on cut fruit or salad.", "Ayurvedic home digestives (with ajwain, saunf)."],
    nisa: { status: "progress", role: "ICAR-NISA verifies process markers and food-safety limits on each batch. Certification in progress.", tests: [["Sulphide & sulphate content", "Natural kiln-fired salt has characteristic sulphide levels. Excess sulphate suggests chemical mixing."], ["Iron content", "Iron sulphide gives the natural colour."], ["Insoluble matter", "Detects soot, clay and grit."], T.heavy], home: { title: "Know your kala namak", steps: ["Crystals are dark violet-brown and glassy, and the powder is pinkish-grey, not black.", "A strong sulphur aroma when you open the jar is normal and genuine."] } },
    specs: [["Process", "Kiln-fired with harad & herbs"], ["Added chemicals", "None"]],
    caution: "High in sodium, so use in moderation, especially with high blood pressure.",
    tags: ["chaat", "salt", "ayurveda", "digestive", "kitchen"]
  });

  P.push({
    id: "hing-pure", sku: "SR-RS-703", type: "organic", cat: "rasoi",
    name: "Hing – Pure Asafoetida Resin", hi: "हींग (शुद्ध)",
    aka: ["hing", "heeng", "asafoetida", "ferula", "pure hing", "hathras hing", "kabuli hing", "hingu"],
    short: "Pure asafoetida resin, not ‘compounded’ hing. Imported from Afghanistan, Uzbekistan and Iran and processed in Hathras, the hing capital of India.",
    tagline: "A pinch of pure hing does what a spoonful of compounded hing can’t.",
    variants: [{ label: "10 g", price: 249, mrp: 280 }, { label: "25 g", price: 549, mrp: 620 }, { label: "50 g", price: 999, mrp: 1150 }],
    img: ["hing-pure", "sendha-namak"],
    region: "Ferula resin from Afghanistan / Uzbekistan / Iran; processed in Hathras, UP",
    about: [
      "Hing is a <b>gum-resin</b> from the roots of Ferula plants. As the founder explains, it hardly grows in India. It comes from <b>Afghanistan, Uzbekistan, Turkmenistan and Iran</b> and is imported and processed, mostly in <b>Hathras</b> in Uttar Pradesh. Only recently have Indian scientists begun trial cultivation in the cold deserts of Himachal Pradesh.",
      "Almost every hing in a shop is <b>‘compounded asafoetida’</b>, which Indian food rules permit: resin mixed with gum arabic and edible starch or flour. Companies print this in the ingredients, but in such small letters that nobody reads it. People think they are buying hing when they are mostly buying flour."
    ],
    missing: ["Consumers don’t know that their ‘hing’ may be mostly wheat flour, which also matters for anyone avoiding gluten.", "The flavour of pure hing (strong, so you need only a grain) has been forgotten."],
    brings: ["Pure resin hing with nothing compounded in, and a clear label.", "Testing via ICAR-NISA, which specialises in natural gums and resins (certification in progress).", "Usage guidance, because pure hing is several times stronger."],
    uses: ["Use a grain the size of a rice grain: dissolve in a spoon of warm water and add to tadka.", "Dal, kadhi, sambar, pickles and vegetables.", "Traditional hing-water rub on the stomach (a home remedy; consult a doctor for children)."],
    nisa: { status: "progress", role: "Gum-resins are ICAR-NISA’s specialist area. Under the MOU, it confirms resin identity and checks for fillers. Certification in progress.", tests: [T.starch, ["Gum arabic / foreign gum", "Separates pure resin from compounded mixtures."], T.rosin, ["Volatile oil & alcohol-soluble extract", "Measures the sulphurous volatiles that give hing its strength."], T.ash], home: { title: "Pure hing vs compounded", steps: ["Stir a pinch into water: pure hing turns it milky-white. Compounded hing leaves starchy sediment.", "Hold a tiny piece to a flame on a spoon: pure resin burns brightly. Flour-based hing chars and doesn’t catch.", "Pure hing is so strong that a grain flavours a whole dal."] } },
    specs: [["Type", "Pure resin (not compounded)"], ["Wheat / starch", "None"], ["Origin", "Imported Ferula resin, processed in Hathras"]],
    caution: "Very strong: use a tiny amount. Store in an airtight container away from other spices.",
    tags: ["spice", "tadka", "gluten", "hathras", "digestive", "kitchen", "resin"]
  });

  P.push({
    id: "a2-ghee", sku: "SR-RS-704", type: "organic", cat: "rasoi", featured: true,
    name: "A2 Desi Cow Ghee – Bilona", hi: "A2 देसी गाय घी (बिलोना)",
    aka: ["ghee", "desi ghee", "a2 ghee", "bilona ghee", "gir cow ghee", "sahiwal", "cow ghee", "clarified butter", "vedic ghee"],
    short: "Ghee from the milk of indigenous Gir and Sahiwal cows, made the slow bilona way: curd, hand-churned makkhan, and slow heating on a low flame.",
    tagline: "Curd, churned butter and slow fire: ghee the way it used to be made.",
    variants: [{ label: "250 ml", price: 549, mrp: 620 }, { label: "500 ml", price: 999, mrp: 1150 }, { label: "1 litre", price: 1899, mrp: 2200 }],
    img: "a2-ghee",
    region: "Partner gaushalas & farms rearing Gir / Sahiwal cows",
    about: [
      "Bilona ghee is made the old way. Whole milk is set into <b>curd</b>, the curd is churned with a wooden bilona to separate <b>makkhan</b> (butter), and the butter is simmered slowly until it turns into fragrant, granular ghee. It takes roughly 25–30 litres of milk for one litre of ghee.",
      "‘A2’ refers to the A2 type of beta-casein protein found in the milk of indigenous Indian breeds like <b>Gir and Sahiwal</b>. Ghee is almost pure fat, so honestly speaking the A2 label tells you <b>which cows and which farms</b> the ghee comes from, rather than how much protein is in it. (In 2024 FSSAI briefly asked brands to drop A1/A2 claims on dairy, then withdrew the advisory for further consultation.) We verify the herd, and ICAR-NISA verifies the fat."
    ],
    missing: ["Most ghee today is made from <b>separated cream</b> (malai) by machine, not from cultured curd.", "Adulteration with vanaspati, refined vegetable oils and even animal body fat is a recurring problem.", "‘A2’ is printed on many labels with no herd verification behind it."],
    brings: ["Bilona-process ghee from verified indigenous-breed herds.", "Batch testing of fat purity against FSSAI ghee standards via ICAR-NISA (certification in progress).", "Support for gaushalas keeping Gir and Sahiwal breeds viable."],
    uses: ["Tadka, roti, rice and dal.", "Diyas, havan and puja (a spoon of ghee on dhoop cups makes the fragrance richer).", "Traditional home remedies like warm milk with ghee."],
    nisa: {
      status: "progress",
      role: "Ghee is a food, so FSSAI standards apply. Under the MOU, ICAR-NISA tests each batch against those parameters and documents the process. Shubharambh sources the ghee from partner farms and handles packing and sales. Certification in progress.",
      tests: [["Butyro-refractometer (BR) reading at 40 °C", "Pure cow ghee falls in a narrow band (about 40–43). Vegetable oils and body fats push it up."], ["Reichert-Meissl (RM) & Polenske values", "Measure the short-chain fatty acids unique to milk fat. Adulteration lowers them."], ["Baudouin test", "The official FSSAI test for vanaspati (which must contain sesame oil). A pink-red colour means vanaspati is present."], ["Phytosterol (β-sitosterol) test", "Plant sterols should not be present in pure milk fat."], ["GC fatty-acid profile", "Fingerprints the fat to catch blended oils."], ["Herd / breed verification", "Breed records and A2 beta-casein genotyping of the herd, which is what actually backs the A2 label."]],
      home: { title: "Simple ghee checks", steps: ["Heat a spoonful in a pan: pure ghee melts quickly, smells nutty and turns golden-brown. Adulterated ghee melts slowly and may stay pale.", "Melt some in a glass jar and refrigerate it. If it separates into distinct layers, a different fat may have been mixed in.", "Bilona ghee is naturally granular (danedar) when it sets."] }
    },
    specs: [["Breed", "Gir / Sahiwal (indigenous)"], ["Process", "Curd → hand-churned makkhan → slow-heated"], ["Pack", "Glass jar"], ["Shelf life", "9–12 months (sealed)"]],
    caution: "A rich fat: use in moderation as part of a balanced diet.",
    tags: ["ghee", "dairy", "gir", "sahiwal", "bilona", "a2", "kitchen", "havan"]
  });
})();
