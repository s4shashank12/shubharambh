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


  /* ---- Hindi profiles for each variety (used in Hindi mode) ---- */
  var HV = {
    mustard: { name: "सरसों का शहद", flower: "सरसों / रेपसीड के फूल", region: "राजस्थान (भरतपुर, अलवर), हरियाणा, पंजाब, उत्तर प्रदेश, बिहार", rs: "राजस्थान", season: "दिसंबर – फ़रवरी", colour: "जमने पर सफ़ेद से हल्का क्रीम", taste: "हल्का, मक्खन जैसा, सरसों की हल्की तीखी झलक के साथ", crystal: "जल्दी (हफ़्तों में) जमकर मुलायम, फैलाने लायक़ क्रीमी शहद बन जाता है", bee: "Apis mellifera (पालतू छत्ते)", pair: "जाड़े की सुबह गुनगुना पानी, मक्के की रोटी, अदरक की चाय",
      story: "सरसों का शहद भारत की सबसे बड़ी शहद फ़सल से आता है। हर जाड़े में लाखों छत्ते उत्तर भारत के पीले खेतों में ले जाए जाते हैं। ज़्यादा ग्लूकोज़ के कारण यह हफ़्तों में सफ़ेद, क्रीमी शहद बन जाता है, जिसे ख़रीदार अक्सर मिलावट समझ लेते हैं, जबकि यह असल में असली सरसों शहद की पहचान है।" },
    litchi: { name: "लीची का शहद", flower: "लीची के फूल", region: "मुज़फ़्फ़रपुर और वैशाली (बिहार), देहरादून और रामनगर (उत्तराखंड), पठानकोट (पंजाब), पश्चिम बंगाल", rs: "मुज़फ़्फ़रपुर", season: "फ़रवरी – मार्च", colour: "हल्का सुनहरा से हल्का अंबर", taste: "नाज़ुक, फलों-फूलों जैसा, साफ़ लीची सुगंध के साथ", crystal: "धीमे से मध्यम", bee: "Apis mellifera", pair: "दही, पैनकेक, नींबू-शहद पानी, फलों का कटोरा",
      story: "मधुमक्खियों को छोटे वसंती फूलों के मौसम में मुज़फ़्फ़रपुर के लीची बाग़ों में ले जाया जाता है, जो GI टैग वाली शाही लीची का घर है। उनके काम से बाग़ों का परागण होता है और फल की पैदावार बढ़ती है, और शहद में फल की थोड़ी सुगंध बनी रहती है।" },
    eucalyptus: { name: "यूकेलिप्टस (नीलगिरी) का शहद", flower: "यूकेलिप्टस के फूल", region: "पंजाब, हरियाणा, कर्नाटक, तमिलनाडु (नीलगिरि)", rs: "पंजाब", season: "प्रजाति और क्षेत्र के अनुसार अलग", colour: "हल्का से मध्यम अंबर", taste: "तेज़ और जड़ी-बूटी जैसा, ठंडी, हल्की औषधीय अनुभूति के साथ", crystal: "मध्यम", bee: "Apis mellifera", pair: "तुलसी और अदरक के साथ गुनगुना पानी, काढ़ा, हर्बल चाय",
      story: "यूकेलिप्टस के बाग़ एक साथ भरपूर फूलते हैं, और मधुमक्खियाँ अपने छत्ते जल्दी भर लेती हैं। इस शहद में एक ख़ास ठंडक होती है, जिसे कई परिवार जाड़े के सर्दी-ज़ुकाम के मौसम के लिए बचाकर रखते हैं।" },
    jamun: { name: "जामुन का शहद", flower: "जामुन के फूल", region: "उत्तर प्रदेश, मध्य प्रदेश, झारखंड, महाराष्ट्र, गुजरात", rs: "उत्तर प्रदेश", season: "मार्च – मई", colour: "गहरा अंबर", taste: "भरपूर, हल्का खट्टा और कसैला, जामुन जैसे स्वाद के साथ", crystal: "धीमा", bee: "Apis mellifera / Apis cerana", pair: "नींबू पानी, सलाद ड्रेसिंग, हर्बल चाय",
      story: "जामुन के पेड़ मध्य भारत में सड़कों और गाँवों के किनारे लगे होते हैं। वसंत में इनके छोटे सफ़ेद फूल मधुमक्खियों से गूँजते हैं, और यह शहद भारत के सबसे पसंद किए जाने वाले एकपुष्पी शहदों में है, अपने गहरे रंग और खटास के लिए मशहूर।" },
    ajwain: { name: "अजवाइन का शहद", flower: "अजवाइन के फूल", region: "राजस्थान, गुजरात, मध्य प्रदेश", rs: "राजस्थान", season: "जनवरी – मार्च", colour: "गहरा अंबर से भूरा", taste: "तेज़, मसालेदार-जड़ी-बूटी जैसा, अजवाइन के गर्म स्वाद के साथ", crystal: "मध्यम", bee: "Apis mellifera", pair: "भोजन के बाद गुनगुना पानी, काढ़ा, जाड़े के लड्डू",
      story: "राजस्थान और गुजरात के अजवाइन के खेत जाड़े के आख़िर में छोटे सफ़ेद छतरीदार फूलों से भर जाते हैं, और मधुमक्खियाँ इनसे बहुत सुगंधित रस इकट्ठा करती हैं। परिवार पारंपरिक रूप से जाड़े के भारी भोजन के बाद अजवाइन शहद गुनगुने पानी के साथ लेते हैं।" },
    tulsi: { name: "तुलसी का शहद", flower: "तुलसी के फूल", region: "उत्तर प्रदेश, मध्य प्रदेश, राजस्थान (तुलसी के खेत)", rs: "उत्तर प्रदेश", season: "अक्टूबर – दिसंबर (मुख्य)", colour: "हल्का से मध्यम अंबर", taste: "जड़ी-बूटी और फूलों जैसा, हल्की लौंग जैसी झलक के साथ", crystal: "मध्यम", bee: "Apis mellifera", pair: "तुलसी-अदरक चाय, गुनगुना पानी, काढ़ा",
      story: "हर्बल उद्योग के लिए खेतों में उगाई गई तुलसी लंबी बैंगनी-सफ़ेद मंजरियों में फूलती है। तुलसी शहद कहलाने के लिए पराग विश्लेषण में तुलसी का पराग प्रमुख होना चाहिए, और ठीक यही ICAR-NISA जाँचता है।" },
    neem: { name: "नीम का शहद", flower: "नीम के फूल", region: "राजस्थान, गुजरात, उत्तर प्रदेश, मध्य प्रदेश, आंध्र प्रदेश", rs: "राजस्थान", season: "मार्च – मई", colour: "अंबर", taste: "हल्की मिठास के साथ मिट्टी जैसी हल्की कड़वाहट", crystal: "मध्यम", bee: "Apis mellifera / Apis cerana", pair: "सुबह गुनगुना पानी, हर्बल चाय, चटनियाँ",
      story: "जब भारत का सबसे जाना-पहचाना पेड़ वसंत में फूलता है, तो उसके शहद जैसी सुगंध वाले फूल दूर-दूर से मधुमक्खियों को खींचते हैं। नीम के शहद में पेड़ की ख़ास कड़वाहट थोड़ी-सी बनी रहती है, जो मिठास को संतुलित करती है।" },
    karanj: { name: "करंज का शहद", flower: "करंज के फूल", region: "ओडिशा, झारखंड, मध्य प्रदेश, कर्नाटक, आंध्र प्रदेश", rs: "ओडिशा", season: "मार्च – मई", colour: "हल्का अंबर", taste: "हल्का, थोड़ा मेवे और लकड़ी जैसा", crystal: "मध्यम", bee: "Apis mellifera / Apis dorsata", pair: "रोटी, दलिया, रोज़ की मिठास",
      story: "करंज उन शहदों में है जिनका नाम संस्थापक पराग प्रमाणन समझाते समय लेते हैं: अगर पराग विश्लेषण में वही फूल प्रमुख निकले, तो जार को ‘करंज शहद’ घोषित किया जा सकता है। पूर्वी और मध्य भारत में यह पेड़ गुलाबी-बैंगनी गुच्छों में भरपूर फूलता है।" },
    moringa: { name: "सहजन (मोरिंगा) का शहद", flower: "सहजन के फूल", region: "तमिलनाडु, आंध्र प्रदेश, कर्नाटक, गुजरात", rs: "तमिलनाडु", season: "जनवरी – मार्च", colour: "हल्का से मध्यम अंबर", taste: "हल्का, मीठा, थोड़ा हरी सब्ज़ी जैसा", crystal: "मध्यम", bee: "Apis cerana / Apis mellifera", pair: "स्मूदी, टोस्ट, गुनगुना पानी",
      story: "दक्षिण के सहजन के खेत मलाई जैसे सफ़ेद गुच्छों में फूलते हैं। सहजन शहद भी संस्थापक का बताया उदाहरण है: जब कम से कम 60% पराग सहजन का हो, तो ICAR-NISA इसे सहजन शहद घोषित कर सकता है, जो भारत में पहले नहीं हुआ था।" },
    acacia: { name: "कीकर (बबूल) का शहद", bot: "Vachellia (Acacia) nilotica और मिलती-जुलती प्रजातियाँ", flower: "कीकर / बबूल के फूल", region: "पंजाब, हरियाणा, राजस्थान, गुजरात, जम्मू", rs: "पंजाब", season: "मानसून (जुलाई – सितंबर)", colour: "हल्का सुनहरा, बहुत साफ़", taste: "हल्का, साफ़ और नाज़ुक", crystal: "बहुत धीमा, लंबे समय तक तरल रहता है", bee: "Apis mellifera", pair: "चाय, नींबू पानी, मिठाइयाँ, ऊपर से डालने के लिए",
      story: "उत्तर-पश्चिमी मैदानों का काँटेदार कीकर (बबूल) मानसून में गोल सुनहरे फूलों से भर जाता है। इसका शहद हल्का, साफ़ और देर से जमने वाला होता है, जो इसे ऊपर से डालने के लिए सबसे अच्छा शहद बनाता है।" },
    sidr: { name: "बेरी (सिद्र) का शहद", flower: "बेर के फूल", region: "पंजाब, हरियाणा, राजस्थान, जम्मू, गुजरात", rs: "पंजाब", season: "सितंबर – नवंबर", colour: "अंबर", taste: "भरपूर, मक्खन और कैरेमल जैसा", crystal: "धीमा", bee: "Apis mellifera", pair: "सूखे मेवे, दूध, उपहार",
      story: "बेर के पेड़ के छोटे हरे फूल मानसून के बाद आते हैं। ज़िज़िफ़स का सिद्र शहद पश्चिम एशिया में सबसे बेशक़ीमती शहदों में गिना जाता है, और भारत की बेरी पट्टी अपना संस्करण बनाती है।" },
    sunflower: { name: "सूरजमुखी का शहद", flower: "सूरजमुखी", region: "कर्नाटक, महाराष्ट्र, आंध्र प्रदेश, पंजाब, हरियाणा", rs: "कर्नाटक", season: "वसंत और ख़रीफ़ फ़सल (अलग-अलग)", colour: "चमकीला सुनहरा पीला", taste: "हल्का, थोड़ा खट्टा-मीठा और फूलों जैसा", crystal: "जल्दी, बारीक सख़्त दानों में जमता है", bee: "Apis mellifera", pair: "नाश्ते का टोस्ट, दलिया, बेकिंग",
      story: "अच्छे बीज के लिए सूरजमुखी के खेतों को मधुमक्खियों की ज़रूरत होती है, इसलिए किसान घूमते छत्तों का स्वागत करते हैं। शहद धूप जैसा सुनहरा होता है और जल्दी जमकर बारीक दानेदार शहद बन जाता है।" },
    coriander: { name: "धनिया का शहद", flower: "धनिया के फूल", region: "राजस्थान (कोटा, बारां, झालावाड़), मध्य प्रदेश (गुना), गुजरात", rs: "कोटा", season: "फ़रवरी – मार्च", colour: "अंबर", taste: "गर्म, मसालेदार, धनिये की खट्टी झलक के साथ", crystal: "मध्यम", bee: "Apis mellifera", pair: "चटनियाँ, मैरिनेड, गुनगुना पानी",
      story: "राजस्थान की हाड़ौती धनिया पट्टी जाड़े के आख़िर में छोटे फूलों से सफ़ेद हो जाती है। धनिया शहद में बीज का गर्म, खट्टा मसालापन बना रहता है।" },
    sundarbans: { name: "सुंदरबन मैंग्रोव शहद", flower: "मैंग्रोव के फूल (खलिशा, गोरान, केवड़ा, बाइन)", region: "सुंदरबन, दक्षिण 24 परगना (पश्चिम बंगाल)", rs: "सुंदरबन", season: "अप्रैल – जून", colour: "हल्का अंबर", taste: "हल्का, थोड़ा खट्टा, हल्के खारेपन के साथ", crystal: "धीमा; स्वाभाविक रूप से ज़्यादा नमी", bee: "Apis dorsata (जंगली बड़ी मधुमक्खी)", pair: "चाय, मिठाइयाँ, उपहार",
      story: "दुनिया के सबसे बड़े मैंग्रोव वन के भीतर जंगली बड़ी मधुमक्खियों के छत्तों से मौआल इसे इकट्ठा करते हैं, वे शहद-शिकारी जो हर गर्मी बाघों के इलाक़े में जाते हैं। मौसम की शुरुआत का खलिशा शहद सबसे क़ीमती होता है।" },
    coffee: { name: "कॉफ़ी फूल का शहद", flower: "कॉफ़ी के फूल", region: "कोडगु (कूर्ग) और चिकमगलूर (कर्नाटक), वायनाड (केरल), अराकू (आंध्र प्रदेश)", rs: "कूर्ग", season: "फ़रवरी – अप्रैल (‘ब्लॉसम शावर’ के बाद)", colour: "गहरा अंबर", taste: "भरपूर, कैरेमल-चॉकलेट जैसा, फूलों की ताज़गी के साथ", crystal: "धीमे से मध्यम", bee: "Apis cerana indica (भारतीय मधुमक्खी)", pair: "कॉफ़ी, मिठाइयाँ, चीज़",
      story: "जब कॉफ़ी बाग़ानों पर पहली ‘ब्लॉसम शावर’ पड़ती है, तो झाड़ियाँ कुछ ही दिनों के लिए सफ़ेद फूलों से भर जाती हैं और चमेली जैसी महकती हैं। बाग़ानों में रखी मधुमक्खियाँ उस छोटे से फूल-मौसम को गहरे, भरपूर शहद में बदल देती हैं।" },
    himalayan: { name: "हिमालयी बहुपुष्पी शहद", flower: "हिमालय के जंगली फूल और फलों के फूल", bot: "मिश्रित अल्पाइन और शीतोष्ण वनस्पति (सेब, आलूबुखारा, खुबानी, जंगली जड़ी-बूटियाँ)", region: "उत्तराखंड, हिमाचल प्रदेश, जम्मू और कश्मीर", rs: "उत्तराखंड", season: "अप्रैल – जून", colour: "हल्का से मध्यम अंबर", taste: "जटिल, फूलों और फलों जैसा", crystal: "मध्यम", bee: "Apis cerana (भारतीय मधुमक्खी)", pair: "उपहार, चाय, रोज़ का इस्तेमाल",
      story: "पहाड़ी परिवार पारंपरिक दीवार-छत्तों और बक्सों में भारतीय मधुमक्खी पालते हैं, जो बाग़ों के फूलों और पहाड़ी जंगली फूलों से रस लेती है। चूँकि हिमालय के कुछ बुरांस (रोडोडेंड्रॉन) ज़हरीला ‘मैड हनी’ देते हैं, इसलिए हर बैच का पराग जाँचा जाता है और बुरांस-प्रधान शहद अलग कर दिया जाता है।" },
    forest: { name: "जंगली वन शहद (छोटा नागपुर)", flower: "वन के फूल: साल, महुआ, करंज, पलाश, जामुन", bot: "मिश्रित वन वनस्पति", region: "झारखंड, ओडिशा, छत्तीसगढ़ के जंगल", rs: "झारखंड", season: "मार्च – जून", colour: "गहरा अंबर", taste: "तेज़, गहरा और कई परतों वाला", crystal: "मध्यम", bee: "Apis dorsata (चट्टानी मधुमक्खी)", pair: "रोज़ का शहद, गुनगुना पानी, च्यवनप्राश जैसे मिश्रण",
      story: "रांची के आसपास, जहाँ ICAR-NISA है, आदिवासी शहद संग्राहक जंगल के पेड़ों और चट्टानों पर लगे बड़े चट्टानी मधुमक्खी के छत्तों से इसे निकालते हैं। टिकाऊ तरीक़े में छत्ते का सिर्फ़ शहद वाला हिस्सा काटा जाता है और बच्चों (ब्रूड) वाला हिस्सा कॉलोनी के लिए छोड़ दिया जाता है।" }
  };
  var MISSING_HI = [
    "2020 में सेंटर फ़ॉर साइंस एंड एनवायरनमेंट की जाँच में बड़े ब्रांडों समेत <b>22 में से 17 शहद के नमूने</b> उन्नत NMR जाँच में फ़ेल हुए, जबकि वे भारत की साधारण जाँचों में पास हो गए थे। उनमें जाँच से बचने के लिए बनाए गए शुगर सिरप मिलाए गए थे।",
    "सुपरमार्केट का शहद आमतौर पर गर्म करके, अल्ट्रा-फ़िल्टर किया गया मिश्रण होता है। छानने से पराग निकल जाता है, जबकि यही बताने का एकमात्र तरीक़ा है कि शहद किस फूल से आया।",
    "घरों में माना जाता है कि जमा हुआ शहद नक़ली है और चिकना बहता शहद शुद्ध। अक्सर सच इसका उल्टा होता है।",
    "मधुमक्खी-पालक को थोक शहद से बहुत कम मिलता है, और भारत के अलग-अलग फूलों के शहद एक बेनाम जार में मिला दिए जाते हैं।"
  ];
  var NISA_HONEY_HI = "शहद शुभारंभ की पहली श्रेणी है जिसका ICAR-NISA प्रमाणन लाइव है। रांची का ICAR-NISA राष्ट्रीय मधुमक्खी पालन एवं शहद मिशन के तहत पूर्वी भारत की पहली क्षेत्रीय शहद जाँच प्रयोगशाला चलाता है। MOU के तहत यह हर बैच को FSSAI के सभी शहद मानकों पर जाँचता है, जिसमें <b>फूल का स्रोत पहचानने के लिए पराग विश्लेषण</b> भी शामिल है। कोई शहद एकपुष्पी (सहजन, तुलसी, करंज आदि) तभी घोषित होता है जब उस फूल का पराग प्रमुख हो: FSSAI कम से कम 45% माँगता है, और शुभारंभ का लक्ष्य 60% या उससे ज़्यादा है। जाँच रिपोर्ट ICAR-NISA की अपनी वेबसाइट पर प्रकाशित होती है और जार के QR कोड से जुड़ी होती है। काग़ज़ और बर्बादी से बचने के लिए बैच रिपोर्ट छापी नहीं जातीं, और सरकारी साइट पर रखी रिपोर्ट ज़्यादा भरोसेमंद है।";
  var TESTS_HI = [
    ["पराग विश्लेषण (मेलिसोपैलिनोलॉजी)", "माइक्रोस्कोप से पराग कणों को पहचानकर प्रमुख फूल पता किया जाता है। इसी से किसी जार को ‘लीची’ या ‘जामुन’ नाम मिलता है।"],
    ["नमी (≤ 20%)", "पके शहद में नमी कम होती है और वह ख़मीर नहीं उठाता। ज़्यादा नमी कच्चे या पानी मिले शहद का संकेत है।"],
    ["फ़्रुक्टोज़ : ग्लूकोज़ अनुपात (0.95 – 1.50)", "हर फूल के शहद का अपना प्राकृतिक शर्करा संतुलन होता है। सिरप इसे बदल देते हैं, और इससे यह भी पता चलता है कि शहद कितनी जल्दी जमेगा।"],
    ["सुक्रोज़ (≤ 5%)", "ज़्यादा सुक्रोज़ गन्ने के सिरप या चीनी खिलाई गई मधुमक्खियों का संकेत है।"],
    ["HMF (≤ 80 मि.ग्रा./कि.ग्रा.)", "शहद को ज़्यादा गर्म करने या बहुत पुराना होने पर हाइड्रॉक्सीमिथाइलफ़रफ़्यूरल बढ़ जाता है।"],
    ["डायस्टेज़ सक्रियता", "मधुमक्खी का एक एंज़ाइम जो गर्म करने से नष्ट हो जाता है। इसका होना कच्चे, बिना गर्म किए शहद का प्रमाण है।"],
    ["प्रोलीन (≥ 180 मि.ग्रा./कि.ग्रा.)", "मधुमक्खियों द्वारा मिलाया जाने वाला अमीनो एसिड। सिरप में यह बहुत कम होता है।"],
    ["C4 शर्करा, SMR, TMR और बाहरी ओलिगोसैकेराइड", "गन्ने, मक्के और चावल के सिरप की मिलावट के लिए FSSAI के 2020 के मार्कर।"],
    ["NMR प्रोफ़ाइलिंग", "एक उन्नत, अंतरराष्ट्रीय स्तर पर मान्य फ़िंगरप्रिंट जाँच, जो साधारण जाँचों में पास होने के लिए बनाए गए सिरप पकड़ती है।"],
    ["विद्युत चालकता, राख और अम्लता", "वानस्पतिक स्रोत और ताज़गी की पुष्टि में मदद करती हैं।"]
  ];
  function hiFor(h) {
    var v = HV[h.k];
    var bot = v.bot || h.bot;
    return {
      name: v.name,
      short: v.taste + "। " + v.flower + " से · " + v.rs + "।",
      tagline: v.flower + " से कच्चा, एक ही फूल का शहद, ICAR-NISA द्वारा पराग से पुष्ट।",
      region: v.region,
      honey: { flower: v.flower, bot: bot, region: v.region, season: v.season, colour: v.colour, taste: v.taste, crystal: v.crystal, bee: v.bee, pair: v.pair },
      about: [v.story, "शुभारंभ के हर शहद की तरह यह भी <b>कच्चा</b> है, <b>अल्ट्रा-फ़िल्टर नहीं</b> किया गया, और इसका नाम पराग विश्लेषण से फूल की पुष्टि के बाद ही रखा गया है। इसका रंग, स्वाद और जमना " + v.flower + " के लिए स्वाभाविक है और मौसम-दर-मौसम थोड़ा बदलता है।"],
      missing: MISSING_HI,
      brings: [
        "<b>" + v.season + "</b> के फूल-मौसम में " + v.rs + " और आसपास के साझेदार मधुमक्खी-पालन केंद्रों से निकाला गया एक ही फूल का शहद।",
        "<b>कच्चा और अल्ट्रा-फ़िल्टर नहीं:</b> शहद को बस हल्का छाना जाता है, ताकि पराग, एंज़ाइम और सुगंध बनी रहें।",
        "पका हुआ शहद, जिसे मधुमक्खियों ने छत्ते में ही पूरी तरह सुखाया है। ऐसा शहद बहुत लंबे समय तक चलता है; उम्र के साथ गहरा हो सकता है, पर ख़राब नहीं होता।",
        "<b>ICAR-NISA द्वारा पराग से पुष्ट:</b> ‘" + v.name + "’ का लेबल तभी लगता है जब प्रमुख पराग इसकी पुष्टि करे, और बैच रिपोर्ट QR कोड से खुलती है।"
      ],
      uses: ["इनके साथ अच्छा लगता है: " + v.pair + "।", "गुनगुने (उबलते नहीं) पानी या दूध में मिलाएँ, क्योंकि तेज़ गर्मी शहद के एंज़ाइम नष्ट कर देती है।", "अगर जम जाए, तो जार को गुनगुने पानी (45 °C से कम) के कटोरे में रखकर गर्म करें। जमना स्वाभाविक है।"],
      nisa: {
        role: NISA_HONEY_HI, tests: TESTS_HI,
        home: { title: "घर पर शहद जाँचने का सच", steps: [
          "<b>अँगूठा जाँच, पानी के गिलास की जाँच, आग की जाँच और चींटी की जाँच आज की मिलावट भरोसे से नहीं पकड़ सकतीं</b>, क्योंकि सिरप अब शहद जैसे व्यवहार के लिए बनाए जाते हैं।",
          "<b>जमना स्वाभाविक है</b> और सरसों, सूरजमुखी और कई कच्चे शहदों में आम है। यह चीनी का संकेत नहीं है।",
          "भरोसेमंद जाँच सिर्फ़ प्रयोगशाला रिपोर्ट है। ICAR-NISA की वेबसाइट पर बैच रिपोर्ट खोलने के लिए <b>जार का QR स्कैन करें</b>।"
        ] }
      },
      specs: [["फूल का स्रोत", v.flower], ["वानस्पतिक नाम", bot], ["क्षेत्र", v.region], ["फूल / कटाई का मौसम", v.season], ["रंग", v.colour], ["स्वाद", v.taste], ["जमना", v.crystal], ["मधुमक्खी", v.bee], ["प्रसंस्करण", "कच्चा, हल्का छाना गया, बोतलबंदी के लिए छत्ते के तापमान से ऊपर गर्म नहीं किया गया"]],
      caution: "1 साल से छोटे शिशुओं को शहद न दें। डायबिटीज़ वाले लोग शहद को चीनी की तरह ही मानें और डॉक्टर से सलाह लें। मधुमक्खी उत्पादों से एलर्जी संभव है।"
    };
  }

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
      tags: ["honey", "monofloral", "raw", "pollen", "nmr tested", h.k],
      hiData: hiFor(h)
    });
  });
})();
