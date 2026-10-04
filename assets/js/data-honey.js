/* Shubharambh — 17 monofloral & regional honeys of the Indian subcontinent.
   Each honey is named after the flower the bees foraged. ICAR-NISA pollen analysis
   (melissopalynology) confirms the dominant pollen before a jar is labelled. */
(function () {
  var P = (window.SR_PRODUCTS = window.SR_PRODUCTS || []);

  var H = [
    { k: "mustard", name: "Mustard (Sarson) Honey", hi: "सरसों शहद", flower: "Mustard / rapeseed blossom", bot: "Brassica juncea, B. rapa", region: "Rajasthan (Bharatpur, Alwar), Haryana, Punjab, Uttar Pradesh, Bihar", season: "December – February", colour: "White to pale cream once set", taste: "Mild, buttery, with a faint mustard pungency", crystal: "Crystallises quickly (in weeks) into a smooth, spreadable creamed honey", bee: "Apis mellifera (managed hives)", price: 349, mrp: 399,
      story: "Mustard honey comes from India’s largest honey crop. Every winter, millions of hives are moved to the yellow fields of the north. Its high glucose content makes it set into a white, creamy honey within weeks, which buyers often mistake for adulteration, when it is actually a sign of genuine mustard honey.",
      pair: "Warm water in winter mornings, makki-roti, ginger tea", aka: ["sarson", "rapeseed", "creamed honey", "white honey"] },
    { k: "litchi", name: "Litchi Honey", hi: "लीची शहद", flower: "Litchi blossom", bot: "Litchi chinensis", region: "Muzaffarpur & Vaishali (Bihar), Dehradun & Ramnagar (Uttarakhand), Pathankot (Punjab), West Bengal", season: "February – March", colour: "Pale golden to light amber", taste: "Delicate, fruity-floral, with a clear litchi aroma", crystal: "Slow to medium", bee: "Apis mellifera", price: 499, mrp: 599,
      story: "Bees are taken into the litchi orchards of Muzaffarpur, home of the GI-tagged Shahi litchi, for the short spring bloom. Their work pollinates the orchards and raises the fruit yield, and the honey keeps a little of the fruit’s fragrance.",
      pair: "Yoghurt, pancakes, lemon-honey water, fruit bowls", aka: ["lychee", "muzaffarpur", "bihar"] },
    { k: "eucalyptus", name: "Eucalyptus Honey", hi: "नीलगिरी शहद", flower: "Eucalyptus blossom", bot: "Eucalyptus spp.", region: "Punjab, Haryana, Karnataka, Tamil Nadu (Nilgiris)", season: "Varies by species and region", colour: "Light to medium amber", taste: "Bold and herbal, with a cool, slightly medicinal finish", crystal: "Medium", bee: "Apis mellifera", price: 449, mrp: 520,
      story: "Eucalyptus plantations bloom in big flushes, and bees fill their combs quickly. The honey has a distinctive cool finish that many families save for the winter cold season.",
      pair: "Warm water with tulsi & ginger, kadha, herbal tea", aka: ["nilgiri", "nilgiris", "cough", "winter"] },
    { k: "jamun", name: "Jamun Honey", hi: "जामुन शहद", flower: "Jamun (black plum) blossom", bot: "Syzygium cumini", region: "Uttar Pradesh, Madhya Pradesh, Jharkhand, Maharashtra, Gujarat", season: "March – May", colour: "Dark amber", taste: "Rich, slightly tangy and astringent, with a jamun-like finish", crystal: "Slow", bee: "Apis mellifera / Apis cerana", price: 599, mrp: 699,
      story: "Jamun trees line roads and village edges across central India. In spring their tiny white flowers hum with bees, and the honey is one of the most sought-after Indian monoflorals, prized for its deep colour and tang.",
      pair: "Lemon water, salad dressings, herbal teas", aka: ["black plum", "java plum", "jambul"] },
    { k: "ajwain", name: "Ajwain Honey", hi: "अजवाइन शहद", flower: "Ajwain (carom) flowers", bot: "Trachyspermum ammi", region: "Rajasthan, Gujarat, Madhya Pradesh", season: "January – March", colour: "Dark amber to brown", taste: "Strong, spicy-herbal, with a warm ajwain aftertaste", crystal: "Medium", bee: "Apis mellifera", price: 649, mrp: 750,
      story: "Ajwain fields in Rajasthan and Gujarat flower in late winter with small white umbels, and bees collect a strongly aromatic nectar from them. Households traditionally take ajwain honey with warm water after heavy winter meals.",
      pair: "Warm water after meals, kadha, winter laddoos", aka: ["carom", "ajowan", "digestive"] },
    { k: "tulsi", name: "Tulsi Honey", hi: "तुलसी शहद", flower: "Tulsi (holy basil) flowers", bot: "Ocimum tenuiflorum", region: "Uttar Pradesh, Madhya Pradesh, Rajasthan (tulsi farms)", season: "October – December (peak)", colour: "Light to medium amber", taste: "Herbal-floral, with gentle clove-like notes", crystal: "Medium", bee: "Apis mellifera", price: 599, mrp: 699,
      story: "Tulsi grown on farms for the herbal industry flowers in long purple-white spikes. To be labelled tulsi honey, the pollen analysis must show tulsi as the dominant source, which is exactly what ICAR-NISA verifies.",
      pair: "Tulsi-adrak chai, warm water, kadha", aka: ["holy basil", "basil", "tulsi"] },
    { k: "neem", name: "Neem Honey", hi: "नीम शहद", flower: "Neem blossom", bot: "Azadirachta indica", region: "Rajasthan, Gujarat, Uttar Pradesh, Madhya Pradesh, Andhra Pradesh", season: "March – May", colour: "Amber", taste: "Mild sweetness with a gentle, earthy-bitter finish", crystal: "Medium", bee: "Apis mellifera / Apis cerana", price: 649, mrp: 750,
      story: "When India’s most familiar tree blooms in spring, its honey-scented flowers draw bees from far around. Neem honey keeps a little of the tree’s characteristic bitterness, which balances the sweetness.",
      pair: "Morning warm water, herbal teas, chutneys", aka: ["neem", "margosa"] },
    { k: "karanj", name: "Karanj Honey", hi: "करंज शहद", flower: "Karanj (Pongamia) blossom", bot: "Millettia (Pongamia) pinnata", region: "Odisha, Jharkhand, Madhya Pradesh, Karnataka, Andhra Pradesh", season: "March – May", colour: "Light amber", taste: "Mild, slightly nutty and woody", crystal: "Medium", bee: "Apis mellifera / Apis dorsata", price: 549, mrp: 640,
      story: "Karanj is one of the honeys the founder names when explaining pollen certification: if the pollen analysis shows that flower dominates, the jar can be declared ‘karanj honey’. The tree flowers profusely in pink-lilac clusters across eastern and central India.",
      pair: "Rotis, porridge, everyday sweetening", aka: ["pongamia", "karanja", "indian beech"] },
    { k: "moringa", name: "Moringa (Sahjan) Honey", hi: "सहजन शहद", flower: "Moringa (drumstick) flowers", bot: "Moringa oleifera", region: "Tamil Nadu, Andhra Pradesh, Karnataka, Gujarat", season: "January – March", colour: "Light to medium amber", taste: "Mild, sweet, slightly vegetal", crystal: "Medium", bee: "Apis cerana / Apis mellifera", price: 699, mrp: 799,
      story: "Drumstick farms in the south flower in creamy-white clusters. Moringa honey is another the founder cites: once at least 60% of the pollen is moringa, ICAR-NISA can declare it moringa honey, something that had not been done in India before.",
      pair: "Smoothies, toast, warm water", aka: ["drumstick", "sahjan", "murungai"] },
    { k: "acacia", name: "Acacia (Kikar) Honey", hi: "कीकर / बबूल शहद", flower: "Kikar / babool blossom", bot: "Vachellia (Acacia) nilotica & allied species", region: "Punjab, Haryana, Rajasthan, Gujarat, Jammu", season: "Monsoon flush (July – September)", colour: "Light golden, very clear", taste: "Mild, clean and delicate", crystal: "Very slow, stays liquid for a long time", bee: "Apis mellifera", price: 549, mrp: 640,
      story: "The thorny kikar (babool) of the north-western plains flowers in round golden puffs during the monsoon. Its honey is light, clear and slow to crystallise, which makes it the honey for drizzling.",
      pair: "Tea, lemonade, desserts, drizzling", aka: ["kikar", "babool", "babul", "acacia"] },
    { k: "sidr", name: "Sidr (Beri) Honey", hi: "बेरी शहद", flower: "Ber / jujube blossom", bot: "Ziziphus mauritiana, Z. nummularia", region: "Punjab, Haryana, Rajasthan, Jammu, Gujarat", season: "September – November", colour: "Amber", taste: "Rich, buttery, caramel-like", crystal: "Slow", bee: "Apis mellifera", price: 799, mrp: 950,
      story: "The ber tree’s small greenish flowers appear after the monsoon. Sidr honey from Ziziphus is among the most prized honeys in West Asia, and India’s beri belt produces its own version.",
      pair: "Dry fruits, milk, gifting", aka: ["sidr", "beri", "ber", "jujube", "ziziphus"] },
    { k: "sunflower", name: "Sunflower Honey", hi: "सूरजमुखी शहद", flower: "Sunflower", bot: "Helianthus annuus", region: "Karnataka, Maharashtra, Andhra Pradesh, Punjab, Haryana", season: "Spring & kharif crops (varies)", colour: "Bright golden yellow", taste: "Mild, slightly citrusy and floral", crystal: "Fast, sets into fine firm grains", bee: "Apis mellifera", price: 449, mrp: 520,
      story: "Sunflower fields need bees for a good seed set, so farmers welcome the migratory hives. The honey is sunny-gold and crystallises quickly into a firm, fine-grained honey.",
      pair: "Breakfast toast, porridge, baking", aka: ["surajmukhi", "sunflower"] },
    { k: "coriander", name: "Coriander (Dhaniya) Honey", hi: "धनिया शहद", flower: "Coriander flowers", bot: "Coriandrum sativum", region: "Rajasthan (Kota, Baran, Jhalawar), Madhya Pradesh (Guna), Gujarat", season: "February – March", colour: "Amber", taste: "Warm, spicy, with a citrus-coriander note", crystal: "Medium", bee: "Apis mellifera", price: 599, mrp: 699,
      story: "The Hadoti coriander belt of Rajasthan turns white with tiny flowers in late winter. Coriander honey keeps the seed’s warm, citrusy spice.",
      pair: "Chutneys, marinades, warm water", aka: ["dhaniya", "dhania", "coriander", "kota"] },
    { k: "sundarbans", name: "Sundarbans Mangrove Honey", hi: "सुंदरबन शहद", flower: "Mangrove blossoms (khalisha, goran, keora, bain)", bot: "Aegiceras corniculatum, Ceriops spp., Sonneratia apetala, Avicennia spp.", region: "Sundarbans, South 24 Parganas (West Bengal)", season: "April – June", colour: "Light amber", taste: "Light, slightly tangy, with a faint briny note", crystal: "Slow; naturally higher moisture", bee: "Apis dorsata (wild giant honeybee)", price: 649, mrp: 750,
      story: "Collected from wild giant-honeybee combs deep in the world’s largest mangrove forest by the mouals, honey hunters who enter tiger country every summer. Early-season khalisha honey is the most prized.",
      pair: "Tea, desserts, gifting", aka: ["sundarban", "mangrove", "khalisha", "west bengal", "wild honey"] },
    { k: "coffee", name: "Coffee Blossom Honey", hi: "कॉफ़ी ब्लॉसम शहद", flower: "Coffee blossom", bot: "Coffea arabica, C. canephora", region: "Kodagu (Coorg) & Chikmagalur (Karnataka), Wayanad (Kerala), Araku (Andhra Pradesh)", season: "February – April (after ‘blossom showers’)", colour: "Dark amber", taste: "Rich, caramel-chocolate notes with a floral lift", crystal: "Slow to medium", bee: "Apis cerana indica (Indian hive bee)", price: 649, mrp: 750,
      story: "When the first ‘blossom showers’ fall on the coffee estates, the bushes flower white for just a few days and smell of jasmine. Bees kept on the estates turn that short bloom into a dark, rich honey.",
      pair: "Coffee (of course), desserts, cheese", aka: ["coorg", "chikmagalur", "coffee", "kodagu"] },
    { k: "himalayan", name: "Himalayan Multiflora Honey", hi: "हिमालयन बहुपुष्पी शहद", flower: "Himalayan wildflowers & fruit blossom", bot: "Mixed alpine & temperate flora (apple, plum, apricot, wild herbs)", region: "Uttarakhand, Himachal Pradesh, Jammu & Kashmir", season: "April – June", colour: "Light to medium amber", taste: "Complex, floral and fruity", crystal: "Medium", bee: "Apis cerana (Indian hive bee)", price: 749, mrp: 880,
      story: "Kept in traditional wall-hives and boxes by hill families, the Indian hive bee forages on orchard blossom and mountain wildflowers. Because some Himalayan rhododendrons yield toxic ‘mad honey’, every batch is pollen-checked and rhododendron-dominant honey is excluded.",
      pair: "Gifting, tea, everyday use", aka: ["pahadi", "mountain honey", "uttarakhand", "himachal", "kashmir", "multiflora"] },
    { k: "forest", name: "Wild Forest Honey (Chota Nagpur)", hi: "जंगली शहद (छोटा नागपुर)", flower: "Forest flora: sal, mahua, karanj, palash, jamun", bot: "Mixed forest flora", region: "Jharkhand, Odisha, Chhattisgarh forests", season: "March – June", colour: "Dark amber", taste: "Robust, deep and multi-layered", crystal: "Medium", bee: "Apis dorsata (rock bee)", price: 599, mrp: 699,
      story: "Harvested from giant rock-bee combs on forest trees and cliffs by tribal honey collectors around Ranchi, the same region as ICAR-NISA. Sustainable harvesting cuts only the honey portion of the comb and leaves the brood for the colony.",
      pair: "Everyday honey, warm water, chyawanprash-style mixes", aka: ["jungle honey", "wild honey", "jharkhand", "rock bee", "tribal", "multiflora"] }
  ];

  var MISSING = [
    "In 2020 a Centre for Science and Environment investigation found that <b>17 of 22 honey samples</b>, including big brands, failed the advanced NMR test while passing India’s routine tests. They had been mixed with sugar syrups designed to evade testing.",
    "Supermarket honey is usually a heat-processed, ultra-filtered blend. Filtering removes the pollen, which is the only way to tell which flower the honey came from.",
    "Households think crystallised honey is fake and smooth runny honey is pure. Often it is the opposite.",
    "A beekeeper earns little from bulk honey, and India’s distinct flower honeys get mixed into one anonymous jar."
  ];
  var BRINGS = function (h) {
    return [
      "Single-flower honey harvested in the <b>" + h.season + "</b> bloom from partner apiaries in " + h.region.split("(")[0].split(",")[0].trim() + " and nearby regions.",
      "<b>Raw and not ultra-filtered:</b> the honey is only gently strained, so pollen, enzymes and aroma stay intact.",
      "Ripe honey that the bees have fully dried in the comb. Such honey keeps for a very long time; it may darken with age but does not spoil.",
      "<b>Pollen-verified by ICAR-NISA:</b> labelled " + h.name.replace(" Honey", "").toLowerCase() + " only when the dominant pollen confirms it, with a batch report reachable by QR code."
    ];
  };
  var NISA_HONEY = "Honey is the first Shubharambh category with live ICAR-NISA certification. ICAR-NISA in Ranchi hosts eastern India’s first regional honey-testing laboratory under the National Beekeeping & Honey Mission. Under the MOU, it tests each batch on the full FSSAI honey parameter set, including <b>pollen analysis to identify the flower source</b>. A honey is declared monofloral (moringa, tulsi, karanj and so on) only when that flower’s pollen dominates: FSSAI requires at least 45%, and Shubharambh aims for 60% or more. The test report is published on ICAR-NISA’s own website and linked by the QR code on the jar. Batch reports are not printed on paper, to avoid bulk and waste, and a report on an official government site is more credible.";
  var TESTS = [
    ["Pollen analysis (melissopalynology)", "Pollen grains are identified under a microscope to find the dominant flower. This is how a jar earns the name ‘litchi’ or ‘jamun’."],
    ["Moisture (≤ 20%)", "Ripe honey is low in moisture and does not ferment. Higher moisture suggests unripe or diluted honey."],
    ["Fructose : glucose ratio (0.95 – 1.50)", "Each flower honey has a natural sugar balance. Syrups shift it, and it also predicts how fast a honey crystallises."],
    ["Sucrose (≤ 5%)", "High sucrose points to cane-sugar syrup or bees fed on sugar."],
    ["HMF (≤ 80 mg/kg)", "Hydroxymethylfurfural rises when honey is overheated or very old."],
    ["Diastase activity", "A bee enzyme destroyed by heating. Its presence shows raw, unheated honey."],
    ["Proline (≥ 180 mg/kg)", "An amino acid added by bees. Syrups contain very little."],
    ["C4 sugar, SMR, TMR & foreign oligosaccharides", "FSSAI’s 2020 markers for cane, corn and rice-syrup adulteration."],
    ["NMR profiling", "An advanced, internationally accepted fingerprint test that catches syrups designed to pass routine tests."],
    ["Electrical conductivity, ash & acidity", "Help confirm botanical origin and freshness."]
  ];

  H.forEach(function (h, i) {
    var p250 = Math.round(h.price * 0.56 / 10) * 10 - 1, m250 = Math.round(h.mrp * 0.56 / 10) * 10;
    var p1k = Math.round(h.price * 1.85 / 10) * 10 - 1, m1k = Math.round(h.mrp * 1.9 / 10) * 10;
    P.push({
      id: "honey-" + h.k, sku: "SR-HN-" + (801 + i), type: "organic", cat: "honey", featured: ["litchi", "jamun", "sundarbans", "moringa", "mustard", "coffee"].indexOf(h.k) > -1,
      name: h.name, hi: h.hi,
      aka: ["honey", "shahad", "madhu", "monofloral", "raw honey", "pure honey"].concat(h.aka),
      short: h.taste + ". From " + h.flower.toLowerCase() + " · " + h.region.split("(")[0].split(",")[0].trim() + ".",
      tagline: "Raw single-flower honey from " + h.flower.toLowerCase() + ", pollen-verified by ICAR-NISA.",
      variants: [{ label: "250 g", price: p250, mrp: m250 }, { label: "500 g", price: h.price, mrp: h.mrp }, { label: "1 kg", price: p1k, mrp: m1k }],
      defaultVariant: 1,
      img: "honey-" + h.k,
      region: h.region,
      honey: h,
      about: [h.story, "Like all Shubharambh honey, it is <b>raw</b>, <b>not ultra-filtered</b>, and named only after pollen analysis confirms the flower. Its colour, flavour and crystallisation are natural to " + h.flower.toLowerCase() + " and change slightly from season to season."],
      missing: MISSING,
      brings: BRINGS(h),
      uses: ["Pairs well with: " + h.pair + ".", "Add to warm (not boiling) water or milk, because high heat destroys honey’s enzymes.", "If it crystallises, warm the jar in a bowl of lukewarm water (below 45 °C). Crystallisation is natural."],
      nisa: {
        status: "live", role: NISA_HONEY, tests: TESTS,
        home: { title: "The honest truth about home honey tests", steps: [
          "The <b>thumb test, water-glass test, flame test and ant test do not reliably detect modern adulteration</b>, because syrups are now engineered to behave like honey.",
          "<b>Crystallisation is natural</b> and common in mustard, sunflower and many raw honeys. It is not a sign of sugar.",
          "The only reliable check is a laboratory report. <b>Scan the QR on the jar</b> to open the batch report on ICAR-NISA’s website."
        ] }
      },
      specs: [["Flower source", h.flower], ["Botanical name", h.bot], ["Region", h.region], ["Bloom / harvest season", h.season], ["Colour", h.colour], ["Taste", h.taste], ["Crystallisation", h.crystal], ["Bee", h.bee], ["Processing", "Raw, gently strained, not heated above hive temperature for bottling"]],
      caution: "Do not give honey to infants under 1 year. People with diabetes should treat honey as sugar and consult their doctor. Allergy to bee products is possible.",
      tags: ["honey", "monofloral", "raw", "pollen", "nmr tested", h.k]
    });
  });
})();
