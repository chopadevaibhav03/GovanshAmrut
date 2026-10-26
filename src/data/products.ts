import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'a2-bilona-ghee',
    category: 'dairy',
    name: {
      mr: 'शुद्ध देशी गिर गाय ए२ बिलोना तूप',
      hi: 'शुद्ध देशी गिर गाय ए२ बिलोना घी',
      en: 'Pure Desi Gir Cow A2 Vedic Bilona Ghee'
    },
    price: 1800,
    unit: {
      mr: '१ लिटर (काचेची बरणी)',
      hi: '१ लीटर (कांच का जार)',
      en: '1 Litre (Glass Jar)'
    },
    image: '/images/traditional_bilona_ghee_1792948906344.jpg',
    shortDesc: {
      mr: 'मातीच्या मडक्यात दही विरजून लाकडी रवीने दोन्ही बाजूंनी घुसळून मंद आचेवर कढवलेले अमृततुल्य सोनेरी तूप.',
      hi: 'मिट्टी के पात्र में दही जमाकर लकड़ी की दोतरफा मथनी से मथकर धीमी आंच पर पकाया गया सात्विक घी।',
      en: 'Handcrafted using traditional bi-directional wooden bilona churning of whole A2 curd, slow-simmered to perfection.'
    },
    fullDesc: {
      mr: 'गोवंशचे ए२ बिलोना तूप हे कोणत्याही क्रीमपासून बनवले जात नाही, तर पूर्ण दुधाचे नैसर्गिक दही लावून पारंपारिक लाकडी रवीने घुसळले जाते. लोणी (माखन) वेगळे करून गोवर्‍यांच्या मंद धगीवर पितळेच्या किंवा मातीच्या भांड्यात कढवले जाते. यामध्ये नैसर्गिक ओमेगा-३, ओमेगा-६, व्हिटॅमिन ए, डी, ई, के आणि सूर्यकेतू नाडीचे सुवर्ण क्षार मुबलक प्रमाणात असतात.',
      hi: 'गोवंश का ए२ बिलोना घी दूध की मलाई या क्रीम से नहीं, बल्कि पूरे दूध का दही जमाकर लकड़ी के बिलोने से मथकर बनाया जाता है। निकाले गए मक्खन को गोबर के कंडे की धीमी आंच पर पकाया जाता है। इसमें सुवर्ण क्षार, ओमेगा फैटी एसिड और विटामिन प्रचुर मात्रा में होते हैं जो शरीर के वात, पित्त और कफ को संतुलित करते हैं।',
      en: 'Govansh A2 Bilona Ghee is prepared strictly following the ancient 5-samskara Vedic protocol. Whole raw Gir cow milk is boiled, naturally cultured into curd, and hand-churned with a wooden bilona. The freshly separated makkhan is slow-cooked over a cow-dung cake fire to preserve live medicinal enzymes and the natural golden carotenoids synthesized by the cow’s Suryaketu Nadi.'
    },
    preparationMethod: {
      mr: [
        'चरण १ (संस्कार १): देशी गिर गायीच्या ताज्या दुधाला मातीच्या/पितळेच्या भांड्यात मंद आचेवर तापवणे.',
        'चरण २ (संस्कार २): दुधात नैसर्गिक विरजण लावून रात्रभर त्याचे घट्ट सुगंधी दही तयार करणे.',
        'चरण ३ (संस्कार ३): लाकडी रवीच्या साहाय्याने सूर्योदयापूर्वी दोन्ही दिशांनी दही घुसळणे (बिलोना मंथन).',
        'चरण ४ (संस्कार ४): दह्यातून लोणी (माखन) आणि ताक वेगळे करणे. ताक गोशाळेतील पाहुण्यांना मोफत दिले जाते.',
        'चरण ५ (संस्कार ५): वेगळे केलेले शुद्ध लोणी गोवर्‍यांच्या मंद धगीवर कढवून सोनेरी दाणेदार तूप तयार करणे.'
      ],
      hi: [
        'चरण १: देशी गिर गाय के शुद्ध दूध को मिट्टी के पात्र में धीमी आंच पर उबालना।',
        'चरण २: दूध में देसी जामन डालकर रातभर प्राकृतिक रूप से गाढ़ा दही जमाना।',
        'चरण ३: सूर्योदय से पूर्व लकड़ी की मथनी से दोतरफा मंथन (बिलोना विधि) करना।',
        'चरण ४: मथने के पश्चात ऊपर आए शुद्ध मक्खन को छाछ से अलग करना।',
        'चरण ५: अलग किए गए मक्खन को उपलों की मंद आंच पर पकाकर सुवर्ण दानेदार घी प्राप्त करना।'
      ],
      en: [
        'Step 1: Fresh grass-fed Gir cow milk is gently boiled in traditional heavy-bottom pots.',
        'Step 2: Cooled milk is inoculated with natural culture to form probiotic-rich whole curd.',
        'Step 3: Bi-directional churning before sunrise using hand-carved wooden bilona.',
        'Step 4: Separation of fresh cultured butter (Makkhan) from medicinal buttermilk.',
        'Step 5: Slow simmering over smoldering dried cow-dung cakes into crystalline golden granular ghee.'
      ]
    },
    healthBenefits: {
      mr: [
        'बुद्धिवर्धक व स्मरणशक्ती वाढवणारे: मेंदूच्या पेशींना पोषण देऊन स्मरणशक्ती व एकाग्रता वाढवते.',
        'सांधेदुखी व हाडांचे आरोग्य: सांध्यांमधील वंगण टिकवून ठेवते आणि ऑस्टिओपोरोसिसचा धोका कमी करते.',
        'हृदय व पचनक्रिया: चांगल्या कोलेस्टेरॉलला (HDL) चालना देते व बद्धकोष्ठता मुळापासून दूर करते.',
        'डोळ्यांचे तेज: नियमित सेवनाने दृष्टी सुधारते आणि डोळ्यांचा कोरडेपणा नाहीसा होतो.',
        'प्रतिकारशक्ती: बालके, गरोदर माता आणि ज्येष्ठांसाठी सर्वोत्कृष्ट रोगप्रतिकारक टॉनिक.'
      ],
      hi: [
        'मेधा एवं स्मरणशक्ति: मस्तिष्क कोशिकाओं को पोषण देकर एकाग्रता और याददाश्त को तीव्र करता है।',
        'हड्डी एवं जोड़ों का स्वास्थ्य: जोड़ों में प्राकृतिक चिकनाई बनाए रखता है और गठिया में लाभकारी है।',
        'पाचन एवं हृदय कल्याण: जठराग्नि को प्रदीप्त करता है और अच्छे कोलेस्ट्रॉल (HDL) में वृद्धि करता है।',
        'नेत्र ज्योति: नियमित सेवन से आंखों की रोशनी बढ़ती है और थकान दूर होती है।',
        'रोग प्रतिरोधक क्षमता: बच्चों और बुजुर्गों के लिए प्राकृतिक शक्तिवर्धक अमृत।'
      ],
      en: [
        'Enhances Memory & Cognition: Rich in DHA and butyric acid which nourish neurotransmitters.',
        'Lubricates Joints & Bone Density: Prevents stiffness and revitalizes synovial fluid naturally.',
        'Supports Heart & Gut Microflora: Free of inflammatory A1 BCM-7 protein and trans-fats.',
        'Improves Vision & Skin Glow: Abundant natural carotene and Vitamin A enhance eye vitality.',
        'Balances Tridoshas: Scientifically balances Vata, Pitta, and Kapha according to Charaka Samhita.'
      ]
    },
    dailyUsage: {
      mr: 'दररोज सकाळी किंवा दुपारी गरम वरण-भातावर किंवा चपातीवर १ ते २ चमचे घ्यावे. रात्री झोपताना १ कप कोमट देशी दुधात १ चमचा तूप टाकून पिणे सर्वोत्तम. डोकेदुखी अथवा शांत झोपेसाठी दोन्ही नाकपुड्यांत २-२ थेंब कोमट तूप सोडावे (नस्य कर्म).',
      hi: 'प्रतिदिन दोपहर के भोजन में दाल-रोटी के साथ १-२ चम्मच सेवन करें। रात्रि को एक गिलास गुनगुने दूध में एक चम्मच घी मिलाकर पीने से गहरी नींद आती है। सिरदर्द और माइग्रेन से मुक्ति हेतु नाक में २-२ बूंद हल्का गर्म घी डालें।',
      en: 'Consume 1-2 teaspoons daily with warm meals (dal, khichdi, or rotis). At bedtime, mix 1 teaspoon with a cup of warm milk for digestive ease and restful sleep. For chronic headaches, instill 2 drops of lukewarm ghee into each nostril.'
    },
    keyFeatures: {
      mr: ['१००% शुद्ध गिर गोवंश दूध', 'लाकडी बिलोना मंथन', 'काचेची सुरक्षित बाटली', 'कोणतेही रसायने वा प्रिझर्वेटिव्ह नाहीत'],
      hi: ['१००% शुद्ध गिर गाय का दूध', 'लकड़ी की मथनी से निर्मित', 'सुरक्षित कांच की पैकिंग', 'शून्य प्रिजर्वेटिव या मिलावट'],
      en: ['100% Gir Cow A2 Milk', 'Handcrafted Wooden Churning', 'Aroma-Sealed Glass Jar', 'Zero Chemicals or Preservatives']
    }
  },
  {
    id: 'gokrupa-amrut',
    category: 'bio_farming',
    name: {
      mr: 'गोकृपा अमृत (सेंद्रिय शेती संजीवनी)',
      hi: 'गोकृपा अमृत (प्राकृतिक कृषि संजीवनी)',
      en: 'Gokrupa Amrut (Organic Soil Bio-Enhancer Culture)'
    },
    price: 350,
    unit: {
      mr: '५ लिटर जीवाणू कल्चर',
      hi: '५ लीटर जीवाणु कल्चर',
      en: '5 Litres Active Microbial Culture'
    },
    image: '/images/organic_farm_gokrupa_1792948906345.jpg',
    shortDesc: {
      mr: 'शेतजमिनीतील गांडूळ आणि सूक्ष्म जीवाणूंना पुनरुज्जीवित करणारे, देशी गायीचे शेण-गोमूत्र व ताकापासून बनवलेले महा-कल्चर.',
      hi: 'मिट्टी में केंचुओं और मित्र जीवाणुओं को जाग्रत करने वाला, देशी गाय के गोबर, गोमूत्र और छाछ से तैयार महा-कल्चर।',
      en: 'Miracle multi-strain beneficial bacterial culture that revitalizes dead soil into fertile organic farmland.'
    },
    fullDesc: {
      mr: 'गोकृपा अमृत हे देशी गिर गायीचे ताजे शेण, गोमूत्र आणि ताक यांच्या मदतीने बनवलेले अद्वितीय सूक्ष्म जीवाणूंचे कल्चर आहे. हे शेतात दिल्यास जमिनीतील गांडुळे पुन्हा कार्यरत होतात, रासायनिक खतांचे अवशेष नष्ट होतात आणि जमिनीची पाणी साठवून ठेवण्याची क्षमता तिप्पट वाढते. एका बाटलीपासून शेतकरी आयुष्यभर घरच्या घरी स्वतःचे कल्चर वाढवू शकतात.',
      hi: 'गोकृपा अमृत देशी गिर गाय के ताजे गोबर, गोमूत्र और ताजी छाछ के पारंपरिक किण्वन से तैयार किया गया अत्यंत शक्तिशाली मित्र-जीवाणु संवर्धन है। इसके प्रयोग से रासायनिक खादों के जहरीले अंश नष्ट होते हैं, मिट्टी मुलायम बनती है और केंचुए स्वतः सक्रिय होकर भूमि को उपजाऊ बनाते हैं। किसान इसे एक बार लेकर जीवनपर्यंत अपने घर पर बढ़ा सकते हैं।',
      en: 'Gokrupa Amrut is a potent multi-strain microbial inoculant created by fermenting fresh Desi Gir cow dung, Gomutra, and sour curd buttermilk. Containing over 40+ beneficial aerobic and anaerobic microbes, it rapidly decomposes soil toxins, solubilizes locked phosphorus and potash, encourages native earthworms, and eliminates the need for urea and chemical pesticides.'
    },
    preparationMethod: {
      mr: [
        'चरण १: एका २०० लिटरच्या प्लास्टिक पिंपात १८० लिटर स्वच्छ पाणी घ्यावे.',
        'चरण २: त्यामध्ये २ लिटर मूळ गोकृपा अमृत कल्चर, २ किलो सेंद्रिय गूळ आणि २ लिटर ताजे देशी गायीचे ताक टाकावे.',
        'चरण ३: लाकडी काठीने दररोज सकाळी आणि संध्याकाळी घड्याळाच्या काट्याच्या दिशेने १ मिनिट ढवळावे.',
        'चरण ४: पिंपाचे तोंड सुती कापडाने बांधून सावलीत ठेवावे. ६ ते ७ दिवसांत २०० लिटर गोकृपा अमृत तयार होते.',
        'चरण ५: हे तयार झालेले द्रावण ठिबक सिंचनातून किंवा थेट पिकांना पाणी देताना शेतात सोडावे.'
      ],
      hi: [
        'चरण १: २०० लीटर क्षमता वाले प्लास्टिक ड्रम में १८० लीटर स्वच्छ पानी भरें।',
        'चरण २: इसमें २ लीटर गोकृपा अमृत मूल कल्चर, २ किलो जैविक गुड़ और २ लीटर देशी गाय की छाछ मिलाएं।',
        'चरण ३: लकड़ी के डंडे से प्रतिदिन सुबह-शाम १-१ मिनट दक्षिणावर्त (Clockwise) दिशा में चलाएं।',
        'चरण ४: ड्रम को सूती कपड़े से ढककर छायादार स्थान पर रखें। ६-७ दिनों में २०० लीटर अमृत तैयार हो जाता है।',
        'चरण ५: तैयार घोल को ड्रिप या खुले पानी के साथ प्रति एकड़ २०० लीटर खेत में दें।'
      ],
      en: [
        'Step 1: Fill a 200-litre plastic barrel with 180 litres of clean, non-chlorinated water.',
        'Step 2: Add 2 litres of starter Gokrupa Amrut culture, 2 kg organic jaggery, and 2 litres fresh A2 buttermilk.',
        'Step 3: Stir with a wooden staff in clockwise direction for 1 minute every morning and evening.',
        'Step 4: Cover barrel opening with breathable cotton cloth and store in ambient shade.',
        'Step 5: Within 6-7 days, 200 litres of vigorous microbial solution is ready for drip or flood application.'
      ]
    },
    healthBenefits: {
      mr: [
        'जमिनीची सुपीकता: रासायनिक खतांमुळे कडक झालेली जमीन भुसभुशीत आणि सेंद्रिय कर्बयुक्त बनते.',
        'नैसर्गिक गांडूळ निर्मिती: जमिनीतील सुप्त गांडूळ वर येऊन २४ तास शेतात सेंद्रिय खत तयार करतात.',
        'रोगांपासून संरक्षण: पिकांवर फवारल्यास बुरशीजन्य रोग आणि कीटकांचा प्रादुर्भाव रोखला जातो.',
        'विषमुक्त अन्नधान्य: शेतकर्‍यांचा उत्पादन खर्च शून्य होतो आणि मानवाला विषमुक्त, सकस अन्न मिळते.',
        'पाण्याची बचत: जमिनीचा ओलावा टिकवून राहिल्यामुळे पिकांना ३० ते ४०% कमी पाणी लागते.'
      ],
      hi: [
        'मृदा स्वास्थ्य: बंजर व कठोर हो चुकी भूमि को नर्म, भुरभुरी और कार्बन-समृद्ध बनाता है।',
        'केंचुओं का जागरण: भूमिगत देशी केंचुए सक्रिय होकर अनवरत प्राकृतिक जुताई करते हैं।',
        'रोग एवं कीट नियंत्रण: फसलों पर १०% घोल के छिड़काव से फफूंद व कीटों से प्राकृतिक बचाव होता है।',
        'विषमुक्त उत्पादन: रासायनिक लागत शून्य होती है और उपभोक्ताओं को अमृततुल्य खाद्यान्न मिलता है।',
        'जल संरक्षण: मिट्टी में नमी सोखने की क्षमता ३०-४०% तक बढ़ जाती है।'
      ],
      en: [
        'Restores Soil Carbon: Transforms compacted degraded chemical fields into porous fertile humus.',
        'Multiplies Native Earthworms: Awakens dormant subterranean worms that aerate soil 24/7.',
        'Natural Foliar Bio-Shield: Spraying a 10% dilution prevents fungal blight, aphids, and rust.',
        'Zero-Cost Farming: Eliminates recurring purchase of expensive synthetic urea and DAP.',
        'Conserves Irrigation: Enhances soil moisture retention capacity by over 35%.'
      ]
    },
    dailyUsage: {
      mr: 'शेतीसाठी: दरमहा प्रति एकर २०० लिटर गोकृपा अमृत पाण्यासोबत द्यावे. कीड नियंत्रणासाठी: १५ लिटरच्या पंपात १.५ लिटर गोकृपा अमृत + १३.५ लिटर पाणी मिसळून पिकांवर फवारावे. घरातील बागेसाठी: १ लिटर पाण्यात १०० मिली मिसळून कुंडीतील झाडांना द्यावे.',
      hi: 'कृषि में: प्रति एकड़ २०० लीटर गोकृपा अमृत महीने में एक या दो बार सिंचाई के साथ दें। कीट-रोग नियंत्रण हेतु: १५ लीटर स्प्रे पंप में १.५ लीटर घोल मिलाकर फसलों पर छिड़कें। गृह वाटिका हेतु: १ लीटर पानी में १०० मिली मिलाकर गमलों में डालें।',
      en: 'Field Application: Administer 200 litres per acre through drip irrigation or flood canal every 21 days. Foliar Spray: Mix 1.5 litres of Gokrupa Amrut per 15-litre sprayer with clean water and spray every 15 days. For home gardening: Dilute 100ml per litre of water for lush potting soil.'
    },
    keyFeatures: {
      mr: ['असंख्य उपयुक्त सूक्ष्मजीव', 'शेतकऱ्यांना कायमस्वरूपी पुनरुत्पादन करता येते', '१००% नैसर्गिक व सुरक्षित', 'कृषितज्ज्ञ प्रमाणित'],
      hi: ['अरबों मित्र सूक्ष्मजीव', 'घर पर ही अनवरत नया कल्चर तैयार करें', '१००% रासायनिक अवशेष मुक्त', 'कृषि वैज्ञानिकों द्वारा अनुशंसित'],
      en: ['40+ Live Microbial Strains', 'Self-Replicating Forever at Farm', '100% Non-Toxic & Natural', 'Agronomist Field Validated']
    }
  },
  {
    id: 'gomutra-ark',
    category: 'wellness',
    name: {
      mr: 'देशी गिर गाय गोमूत्र अर्क (शुद्ध अर्क)',
      hi: 'देशी गिर गाय गोमूत्र अर्क (औषधीय अर्क)',
      en: 'Distilled Desi Gir Cow Gomutra Ark'
    },
    price: 240,
    unit: {
      mr: '५०० मिली',
      hi: '५०० मिली',
      en: '500 ml Glass Bottle'
    },
    image: '/images/hero_gir_cow_pasture_1792948905101.jpg',
    shortDesc: {
      mr: 'निरोगी देशी गिर गायीच्या ताज्या गोमूत्राचे पारंपारिक बाष्पीभवन करून मिळवलेला गंधरहित शुद्ध आयुर्वेदिक अर्क.',
      hi: 'स्वस्थ देशी गिर गाय के ताजे गोमूत्र का पारंपरिक वाष्पीकरण विधि से निष्कर्षण कर बनाया गया दिव्य अर्क।',
      en: 'Steam-distilled pure Gomutra from grass-grazing indigenous Gir cows, enriched with 24 volatile bio-salts.'
    },
    fullDesc: {
      mr: 'गोमूत्र हे आयुर्वेदात महा-औषधी मानले गेले आहे. गोवंश गोशाळेत केवळ निरोगी आणि मोकळ्या कुरणात चरणाऱ्या देशी गिर गाईंचे सूर्योदयापूर्वीचे ताजे गोमूत्र गोळा केले जाते. तांब्याच्या वाफेच्या यंत्रातून त्याचे बाष्पीभवन (Distillation) करून रंगहीन आणि गंधरहित अर्क बनवला जातो. यामध्ये तांबे, लोह, सुवर्ण क्षार आणि युरिक अ‍ॅसिडचे संतुलन शरीरातील विषारी घटक बाहेर काढण्यास अत्यंत प्रभावी ठरते.',
      hi: 'आयुर्वेद में गोमूत्र को संजीवनी और शरीर का शोधक माना गया है। गोवंश गोशाला में केवल प्रातःकाल के समय हरी घास चरने वाली गिर गायों का पवित्र गोमूत्र एकत्र कर तांबे के पात्रों में आसवन (Distillation) कर शुद्ध अर्क बनाया जाता है। यह यकृत (Liver), गुर्दे (Kidney) और रक्त के विषैले तत्वों को साफ करने में अत्यंत कारगर है।',
      en: 'Prepared exclusively from healthy, non-pregnant indigenous Gir cows pastured on medicinal wild herbs. Through precision copper retort steam distillation, unwanted sediments are removed while concentrating volatile therapeutic salts, hippuric acid, creatinine, and bioactive enzymes that detoxify hepatic pathways.'
    },
    preparationMethod: {
      mr: [
        'चरण १: सूर्योदयापूर्वी खुल्या कुरणात चरणाऱ्या निरोगी देशी गिर गायीचे प्रथम धारेचे गोमूत्र गोळा करणे.',
        'चरण २: ८ पदरी स्वच्छ सुती कापडातून गाळून सर्व नैसर्गिक कण बाजूला करणे.',
        'चरण ३: पारंपारिक तांब्याच्या आसवन (Steam Distillation) पात्रात नियंत्रित तापमानावर मंद उकळणे.',
        'चरण ४: तयार झालेली औषधी वाफ थंड करून शुद्ध, गंधरहित पारदर्शक अर्क गोळा करणे.',
        'चरण ५: औषधी गुणधर्म टिकून राहण्यासाठी काचेच्या बाटल्यांमध्ये सुरक्षित हवाबंद पॅक करणे.'
      ],
      hi: [
        'चरण १: प्रातःकाल खुले चरागाहों में चरने वाली निरोगी गिर गायों का पवित्र गोमूत्र एकत्र करना।',
        'चरण २: आठ परतों वाले बारीक सूती वस्त्र से सावधानीपूर्वक छानना।',
        'चरण ३: शुद्ध तांबे के वाष्पीकरण यंत्र (Distiller) में नियंत्रित ताप पर उबालना।',
        'चरण ४: भाप को संघनित कर शीतल और सुगंधित पारदर्शी अर्क प्राप्त करना।',
        'चरण ५: कांच की शीशियों में औषधीय सुरक्षा हेतु एयरटाइट सील करना।'
      ],
      en: [
        'Step 1: Early dawn collection of mid-stream urine from free-grazing healthy Gir cows.',
        'Step 2: 8-fold sterile filtration through unbleached khadi muslin cloth.',
        'Step 3: Controlled low-temperature vapor distillation in a specialized copper retort vessel.',
        'Step 4: Condensation of therapeutic steam into clear, odorless distilled essence.',
        'Step 5: Hermetically sealed in amber/clear glass containers to protect volatile phytonutrients.'
      ]
    },
    healthBenefits: {
      mr: [
        'यकृत व मूत्रपिंड शुद्धीकरण: शरीरातील साठलेले घातक टॉक्सिन्स बाहेर काढून लिव्हरचे कार्य सुधारते.',
        'वजन नियंत्रण व मेदनाशक: शरीरातील अतिरिक्त चरबी घटवून मेटाबॉलिझम गतिमान करते.',
        'त्वचारोग निवारण: रक्तातील अशुद्धी दूर करून सोरायसिस, खाज व मुरुमांवर गुणकारी.',
        'कफ व दमा आराम: फुफ्फुसातील कफ सैल करून श्वसनक्रिया सुरळीत करण्यास मदत करते.',
        'रोगप्रतिकारक शक्ती: पेशींची झीज भरून काढून शरीराची नैसर्गिक रोगांशी लढण्याची ताकद वाढवते.'
      ],
      hi: [
        'लिवर व किडनी डिटॉक्स: शरीर में जमा हानिकारक विषाक्त पदार्थों को निकालकर अंगों को पुनर्जीवित करता है।',
        'मोटापा नियंत्रण: अतिरिक्त चर्बी को पिघलाकर पाचन शक्ति को सुदृढ़ बनाता है।',
        'रक्त शोधन व त्वचा रोग: रक्त को शुद्ध कर दाद, खाज, एक्जिमा और मुंहासों से राहत दिलाता है।',
        'श्वसन तंत्र सुधार: कफ दोष को शांत कर श्वास नलिकाओं को साफ रखता है।',
        'कैंसररोधी व इम्युनिटी बूस्टर: कोशिकाओं में मुक्त कणों (Free Radicals) के प्रभाव को रोकता है।'
      ],
      en: [
        'Hepatic & Renal Detoxification: Flushes metabolic toxins and aids optimal liver function.',
        'Weight & Lipid Balance: Stimulates fat metabolism and reduces stubborn water retention.',
        'Blood Purification: Clears cutaneous blemishes, eczema, and skin allergies from the root.',
        'Respiratory Ease: Liquefies chronic mucous blockages and soothes persistent cough.',
        'Antioxidant Shield: Packed with bio-enhancers that amplify cellular immunity and nutrient absorption.'
      ]
    },
    dailyUsage: {
      mr: 'सकाळी रिकाम्या पोटी १० ते १५ मिली (२-३ चमचे) गोमूत्र अर्क १ कप कोमट पाण्यात मिसळून प्यावे. चवीसाठी चिमूटभर मध किंवा लिंबू रस घालू शकता. घेतल्यानंतर अर्धा तास काहीही खाऊ नये.',
      hi: 'प्रातःकाल खाली पेट १० से १५ मिली (२-३ चम्मच) अर्क एक कप गुनगुने पानी में मिलाकर पिएं। स्वाद हेतु थोड़ा शहद भी मिला सकते हैं। सेवन के पश्चात ३० मिनट तक कुछ न खाएं।',
      en: 'Take 10 to 15 ml (approx. 2-3 teaspoons) diluted in a cup of lukewarm water first thing in the morning on an empty stomach. You may add a drop of pure honey if desired. Refrain from eating for 30 minutes thereafter.'
    },
    keyFeatures: {
      mr: ['तांब्याच्या यंत्रात बाष्पीभवन', 'गंधरहित व पारदर्शक', 'काचेची बाटली', '१००% आयुर्वेदिक व सुरक्षित'],
      hi: ['ताम्र पात्र आसुत', 'तीव्र गंध रहित व पारदर्शी', 'कांच की सुरक्षित बॉटल', '१००% प्राकृतिक शोधक'],
      en: ['Copper Retort Distilled', 'Virtually Odorless & Crystal Clear', 'Amber Glass Bottle', 'Ancient Ayurvedic Formula']
    }
  },
  {
    id: 'ghanjeevamrut-compost',
    category: 'bio_farming',
    name: {
      mr: 'घनजीवामृत व गांडूळ खत (सेंद्रिय शेणखत)',
      hi: 'घनजीवामृत एवं केंचुआ खाद (जैविक गोबर खाद)',
      en: 'Organic Ghanjeevamrut & Desi Cow Vermicompost'
    },
    price: 450,
    unit: {
      mr: '२५ किलो बॅग',
      hi: '२५ किलो बैग',
      en: '25 kg Eco Bag'
    },
    image: '/images/goshala_herd_shelter_1792948906856.jpg',
    shortDesc: {
      mr: 'देशी गिर गायीच्या शेणाचे जिवाणूंनी समृद्ध घन स्वरूप, जे पिकांच्या मुळांना संपूर्ण पोषण आणि संजीवनी देते.',
      hi: 'देशी गिर गाय के शुद्ध गोबर और जीवाणुओं से समृद्ध ठोस खाद, जो फसलों की जड़ों को दीर्घकालिक पोषण प्रदान करती है।',
      en: 'Slow-release microbial granular bio-manure enriched with humic acid, cow dung microflora, and plant enzymes.'
    },
    fullDesc: {
      mr: 'घनजीवामृत हे देशी गिर गायीचे ताजे शेण, गोमूत्र, गूळ, कडधान्याचे पीठ आणि जिवाणूयुक्त माती यांच्या मिश्रणातून सावलीत सुकवून तयार केलेले सेंद्रिय खत आहे. हे जमिनीत टाकल्यास पिकांच्या पांढऱ्या मुळांची संख्या प्रचंड वाढते आणि जमिनीत सेंद्रिय कार्बनचे प्रमाण वाढून रासायनिक खतांची आवश्यकता भासत नाही.',
      hi: 'घनजीवामृत देशी गिर गाय के ताजे गोबर, गोमूत्र, बेसन, गुड़ और पीपल/बरगद के नीचे की सजीव मिट्टी के सम्मिश्रण से छाया में सुखाकर बनाया जाता है। यह फसलों की जड़ों का तेजी से विकास करता है और भूमि में ह्यूमस की मात्रा को बढ़ाता है।',
      en: 'Ghanjeevamrut is the solid granular counterpart to Jeevamrut, crafted by culturing fresh Gir cow dung with Gomutra, pulse flour, organic jaggery, and virgin rhizosphere soil under dense tree shade. It supplies macro- and micro-nutrients while permanently fixing organic carbon in farm beds.'
    },
    preparationMethod: {
      mr: [
        'चरण १: १०० किलो देशी गायीचे ताजे शेण स्वच्छ जमिनीवर पसरवणे.',
        'चरण २: ५ लिटर गोमूत्रामध्ये १ किलो गूळ व १ किलो हरभरा डाळीचे पीठ विरघळवणे.',
        'चरण ३: हे द्रावण शेणावर शिंपडून फावड्याने एकजीव कालवणे.',
        'चरण ४: झाडाच्या सावलीत ढीग करून सुती पोत्याने झाकून ४८ तास आंबवणे.',
        'चरण ५: सावलीत पसरवून सुकवणे आणि खडे फोडून सुटसुटीत खत पोत्यात भरणे.'
      ],
      hi: [
        'चरण १: १०० किलो ताजा देशी गोबर पक्के फर्श पर फैलाएं।',
        'चरण २: ५ लीटर गोमूत्र में १ किलो गुड़ और १ किलो बेसन घोलें।',
        'चरण ३: इस तरल को गोबर पर छिड़क कर अच्छी तरह फावड़े से मिलाएं।',
        'चरण ४: छाया में ढेर बनाकर बोरियों से ढककर ४८ घंटे तक किण्वित होने दें।',
        'चरण ५: छाया में सुखाकर बारीक चूर्ण बना लें और सुरक्षित बैग में भरें।'
      ],
      en: [
        'Step 1: Spread 100 kg fresh Gir cow dung on a clean paved shade floor.',
        'Step 2: Dissolve 1 kg jaggery and 1 kg chickpea flour into 5 litres of fresh Gomutra.',
        'Step 3: Uniformly sprinkle the liquid culture over the dung and turn thoroughly.',
        'Step 4: Heap into a mound, cover with jute sacks, and incubate for 48 hours.',
        'Step 5: Shade-dry and crush into fine granules ready for field broadcasting.'
      ]
    },
    healthBenefits: {
      mr: [
        'सेंद्रिय कर्ब वृद्धी: जमिनीचा सेंद्रिय कर्ब (Organic Carbon) १% च्या वर नेण्यास मदत.',
        'मुळांचा प्रचंड विकास: पांढऱ्या मुळांची जोमदार वाढ होऊन अन्नद्रव्ये शोषण्याची क्षमता वाढते.',
        'कमी पाणी गरज: मातीची जलधारण क्षमता वाढवून दुष्काळातही पिके तग धरतात.',
        'उत्कृष्ट गुणवत्ता: फळे, भाजीपाला आणि धान्याची चव, चमक आणि टिकवणक्षमता वाढते.',
        'दीर्घकालीन सुपीकता: रासायनिक खतांप्रमाणे मातीचे आरोग्य बिघडत नाही तर दरवर्षी सुधारते.'
      ],
      hi: [
        'ऑर्गेनिक कार्बन: मिट्टी में जैविक कार्बन का स्तर तीव्र गति से बढ़ाता है।',
        'जड़ों का फैलाव: पौधों की सफेद जड़ों का जाल फैलता है जिससे पोषण अवशोषण बढ़ता है।',
        'सूखा सहनशीलता: नमी संचित रहने से कम पानी में भी फसलें हरी-भरी रहती हैं।',
        'स्वाद व चमक: फल, सब्जियों और खाद्यान्न के स्वाद व पोषण मूल्य में अभूतपूर्व वृद्धि।',
        'स्थायी उर्वरता: भूमि को दीर्घकाल तक उपजाऊ और सजीव बनाए रखता है।'
      ],
      en: [
        'Elevates Soil Organic Carbon: Elevates soil organic matter for rich microbiotic activity.',
        'Root Zone Proliferation: Promotes dense tap and lateral root hair architecture.',
        'Drought Resilience: Preserves root moisture buffer during harsh dry spells.',
        'Superior Crop Taste & Shelf-Life: Enhances natural Brix sweetness and mineral content.',
        '100% Eco-Sustainable: Completely regenerates soil ecology year after year.'
      ]
    },
    dailyUsage: {
      mr: 'पेरणी किंवा लागवडीच्या वेळी प्रति एकर १०० ते २०० किलो शेतात टाकावे. फळबागांसाठी प्रति झाड १ ते २ किलो बांगडी पद्धतीने मुळांशी देऊन मातीने झाकावे. कुंडीतील झाडांसाठी दर महिन्याला १०० ग्रॅम पुरेसे ठरते.',
      hi: 'बुवाई के समय प्रति एकड़ १०० से २०० किलो खेत में जुताई के साथ मिलाएं। फलदार वृक्षों में प्रति पेड़ १ से २ किलो तने से दूर रिंग बनाकर डालें। गमलों में प्रतिमाह १-२ मुट्ठी डालें।',
      en: 'Broadcast 100-200 kg per acre during field preparation or sowing. For orchards, ring-apply 1-2 kg around the canopy dripline and cover with mulch. For home pots, apply 1-2 handfuls per month.'
    },
    keyFeatures: {
      mr: ['संपूर्ण सेंद्रिय व जैविक', 'सावलीत वाळवलेले जिवाणू खत', 'रासायनिक खतांचा खर्च वाचवणारे', 'सर्व पिकांसाठी उपयुक्त'],
      hi: ['पूर्णतः जैविक व विषमुक्त', 'छाया-शुष्क जीवाणु युक्त', 'रासायनिक खाद का उत्तम विकल्प', 'सभी फसलों एवं बागवानी हेतु'],
      en: ['100% Chemical-Free Solid Bio-Fertilizer', 'Shade-Cured Live Microbes', 'Replaces Synthetic Urea/NPK', 'Universal for All Crops']
    }
  },
  {
    id: 'cow-dung-herbal-dhoop',
    category: 'wellness',
    name: {
      mr: 'देशी गिर गाय शेण व हवन औषधी धूप बत्ती',
      hi: 'देशी गिर गाय गोबर एवं हवन सामग्री धूप बत्ती',
      en: 'Desi Gir Cow Dung & Ayurvedic Herbal Dhoop'
    },
    price: 180,
    unit: {
      mr: '३० नगांचा बॉक्स',
      hi: '३० पीस का बॉक्स',
      en: 'Box of 30 Incense Sticks'
    },
    image: '/images/traditional_bilona_ghee_1792948906344.jpg',
    shortDesc: {
      mr: 'देशी गायीचे सुकलेले शेण, भीमसेनी कापूर, गुग्गुळ, लोबान आणि शुद्ध ए२ तुपापासून बनवलेली नैसर्गिक हवा शुद्ध करणारी धूप.',
      hi: 'देशी गाय के गोबर, भीमसेनी कपूर, गुग्गुल, लोबान और शुद्ध ए२ घी से निर्मित प्राकृतिक वातावरण शोधक धूप।',
      en: '100% charcoal-free Vedic dhoop crafted with dry Gir cow dung, pure A2 ghee, Bhimseni camphor, and Guggulu.'
    },
    fullDesc: {
      mr: 'बाजारात मिळणाऱ्या रासायनिक आणि कोळशाच्या अगरबत्त्यांमुळे फुफ्फुसांना हानी पोहोचते. गोवंशची ही धूपबत्ती प्राचीन अग्निहोत्राच्या तत्त्वावर बनवली आहे. गिर गायीच्या शेणाच्या भुकटीमध्ये शुद्ध ए२ तूप, हवन समिधा, भीमसेनी कापूर, जटामांसी आणि नागरमोथा या औषधी वनस्पती मिसळून ही धूप तयार केली जाते. ती घरात लावल्याने हवा शुद्ध होते, डास पळून जातात आणि सकारात्मक ऊर्जा निर्माण होते.',
      hi: 'रासायनिक अगरबत्तियों के जहरीले धुएं से फेफड़ों को भारी नुकसान होता है। गोवंश हर्बल धूपबत्ती पूर्णतः कोयला-मुक्त और प्राकृतिक है। इसे गाय के गोबर, शुद्ध ए२ घी, जड़ी-बूटियों, गुग्गुल और लोबान से बनाया गया है। इसे जलाने से घर में अग्निहोत्र का सात्विक वातावरण बनता है, नकारात्मकता दूर होती है और हवा शुद्ध होती है।',
      en: 'Commercial incense frequently contains toxic charcoal and synthetic fragrances. Govansh Ayurvedic Dhoop utilizes powdered Desi Gir cow dung, pure A2 ghee, Bhimseni camphor, loban, and sacred havan botanicals. Igniting one stick purifies indoor air, repels mosquitoes, emits natural negative ions, and fills the environment with peaceful temple serenity.'
    },
    preparationMethod: {
      mr: [
        'चरण १: देशी गिर गायीच्या ताज्या शेणाला सुकवून त्याची बारीक भुकटी करणे.',
        'चरण २: गुग्गुळ, लोबान, भीमसेनी कापूर, नागरमोथा आणि चंदन पावडर एकत्र करणे.',
        'चरण ३: या मिश्रणात गोवंशचे शुद्ध ए२ बिलोना तूप मिसळून मऊ गोळा तयार करणे.',
        'चरण ४: लाकडी साच्यात दाबून शंकू किंवा बत्तीचा आकार देणे.',
        'चरण ५: नैसर्गिक हवेत सुकवून सुगंधी बॉक्समध्ये पॅक करणे.'
      ],
      hi: [
        'चरण १: देशी गिर गाय के गोबर को सुखाकर सूक्ष्म चूर्ण तैयार करना।',
        'चरण २: गुग्गुल, लोबान, भीमसेनी कपूर और दुर्लभ हवन औषधियों का मिश्रण बनाना।',
        'चरण ३: इस चूर्ण में शुद्ध देशी गिर गाय का ए२ घी मिलाकर गूंथना।',
        'चरण ४: सांचे में ढालकर धूप बत्ती का स्वरूप देना।',
        'चरण ५: प्राकृतिक छाया में सुखाकर इको-फ्रेंडली बॉक्स में पैक करना।'
      ],
      en: [
        'Step 1: Sun-drying pure Gir cow dung and milling it into an ultra-fine powder.',
        'Step 2: Blending with sacred aromatics: Guggulu, Loban, Bhimseni camphor, and sandalwood.',
        'Step 3: Kneading together using warm Govansh A2 Bilona ghee as the natural binder.',
        'Step 4: Cold-pressing in wooden hand molds without any coal or binding glue.',
        'Step 5: Natural air dehydration and moisture-tight packaging.'
      ]
    },
    healthBenefits: {
      mr: [
        'वातावरण शुद्धीकरण: हवेतील हानिकारक सूक्ष्म जिवाणू नष्ट करून ऑक्सिजनची पातळी वाढवते.',
        'नैसर्गिक डास प्रतिबंधक: कोणत्याही विषारी रसायनांशिवाय डास आणि कीटक दूर पळवते.',
        'मानसिक शांतता व ध्यान: तणाव, चिंता कमी करून मन एकाग्र करण्यास मदत करते.',
        'फुफ्फुसांना सुरक्षित: कोळसा नसल्यामुळे श्वसनाचा त्रास किंवा डोळे जळजळत नाहीत.',
        'वास्तुदोष निवारण: घरात सकारात्मक ऊर्जा आणि प्रसन्न सात्विक वातावरण निर्माण करते.'
      ],
      hi: [
        'वायु शोधन: वातावरण में उपस्थित हानिकारक जीवाणुओं का नाश कर शुद्ध प्राणवायु बढ़ाता है।',
        'प्राकृतिक मच्छर निवारक: किसी भी रासायनिक कॉइल के बिना मच्छरों को दूर भगाता है।',
        'मानसिक शांति एवं ध्यान: अवसाद, चिंता और अनिद्रा को दूर कर मन को शांत करता है।',
        'फेफड़ों के लिए सुरक्षित: कोयला एवं कृत्रिम रसायन मुक्त होने से श्वास नलिकाएं सुरक्षित रहती हैं।',
        'सकारात्मक ऊर्जा: घर में यज्ञ-समान सुगंध और आध्यात्मिक शांति का संचार करता है।'
      ],
      en: [
        'Indoor Air Cleanser: Neutralizes airborne bacteria and raises ambient vitality.',
        'Non-Toxic Mosquito Repellent: Naturally repels pests without toxic synthetic coils.',
        'Calms Mind & Anxiety: Botanical vapors reduce cortisol and facilitate deep meditation.',
        'Zero Charcoal or Petrochemicals: Safe for children, asthma patients, and household pets.',
        'Sacred Temple Ambience: Emits subtle sacred frequency equivalent to a mini Agnihotra.'
      ]
    },
    dailyUsage: {
      mr: 'दररोज सकाळी किंवा संध्याकाळी पूजेच्या वेळी किंवा घरात ध्यान करताना १ धूपबत्ती लावावी. खोलीत चांगला सुवास पसरण्यासाठी खिडक्या उघड्या ठेवाव्यात.',
      hi: 'प्रतिदिन सुबह और शाम पूजा के समय अथवा विश्राम कक्ष में एक धूप बत्ती सुलगाएं। थोड़ी देर के लिए कक्ष में सुखद सुगंध और शांति का अनुभव करें।',
      en: 'Light one stick during morning or evening prayers, yoga, or study sessions on a fireproof base. Allow natural air circulation for best calming effect.'
    },
    keyFeatures: {
      mr: ['०% कोळसा किंवा रसायने', 'शुद्ध गिर गायीचे शेण व ए२ तूप', 'नैसर्गिक सुवास', 'अग्निहोत्राचा अनुभव'],
      hi: ['शून्य कोयला या कृत्रिम गोंद', 'शुद्ध गिर गोबर व ए२ घी आधारित', 'भीमसेनी कपूर व गुग्गुल युक्त', 'अग्निहोत्र सम प्रभाव'],
      en: ['100% Charcoal-Free', 'Handcrafted with Gir Cow Dung & Pure Ghee', 'Infused with Pure Camphor & Herbs', 'Non-Toxic Breathing']
    }
  },
  {
    id: 'panchagavya-growth-tonic',
    category: 'bio_farming',
    name: {
      mr: 'पंचगव्य सेंद्रिय वनस्पती टॉनिक',
      hi: 'पंचगव्य जैविक पौध पोषक टॉनिक',
      en: 'Panchagavya Organic Plant Immunity Tonic'
    },
    price: 380,
    unit: {
      mr: '१ लिटर बाटली',
      hi: '१ लीटर बॉटल',
      en: '1 Litre Concentrated Bottle'
    },
    image: '/images/organic_farm_gokrupa_1792948906345.jpg',
    shortDesc: {
      mr: 'दूध, दही, तूप, शेण आणि गोमूत्र या पाच पवित्र घटकांपासून बनवलेले पिकांची रोगप्रतिकारशक्ती आणि उत्पादन वाढवणारे टॉनिक.',
      hi: 'गाय के दूध, दही, घी, गोबर और गोमूत्र के पावन मिश्रण से निर्मित फसलों का प्राकृतिक टॉनिक।',
      en: 'Ancient Vedic bio-growth promoter synthesized from the five sacred gifts of the indigenous cow.'
    },
    fullDesc: {
      mr: 'पंचगव्य हे प्राचीन कृषीशास्त्रातील पिकांसाठीचे सर्वोत्तम अमृत मानले जाते. यामध्ये देशी गिर गायीचे दूध, दही, बिलोना तूप, शेण आणि गोमूत्र यांच्यासोबत गूळ, केळी आणि नारळपाणी यांचे पारंपरिक पद्धतीने किण्वन (Fermentation) केले जाते. पिकांवर फवारल्यास फुलांची आणि फळांची गळ थांबते आणि झाडांची नैसर्गिक प्रतिकारशक्ती दुप्पट होते.',
      hi: 'पंचगव्य प्राचीन भारतीय कृषि विज्ञान की सबसे प्रभावी जैविक औषधि है। इसमें देशी गिर गाय के दूध, दही, घी, गोबर और गोमूत्र के साथ प्राकृतिक गुड़, केला और नारियल जल मिलाकर किण्वित किया जाता है। यह पौधों में नई शाखाएं, फूल और चमकदार फल लाने में बेजोड़ है।',
      en: 'Formulated in accordance with Vrikshayurveda texts, Panchagavya blends fresh Gir cow dung, Gomutra, A2 raw milk, cultured curd, and pure bilona ghee, co-fermented with ripe organic bananas, tender coconut water, and unrefined jaggery. It acts as an organic hormonal booster producing gibberellins, auxins, and systemic acquired resistance.'
    },
    preparationMethod: {
      mr: [
        'चरण १: देशी गायीचे ५ किलो शेण आणि ५०० ग्रॅम शुद्ध ए२ तूप एकत्र करून ३ दिवस सावलीत ठेवणे.',
        'चरण २: चौथ्या दिवशी ३ लिटर गोमूत्र आणि १० लिटर स्वच्छ पाणी घालून चांगले ढवळणे.',
        'चरण ३: पुढील १५ दिवसांनंतर २ लिटर दूध, २ लिटर दही, ३ लिटर नारळ पाणी आणि ५०० ग्रॅम गूळ मिसळणे.',
        'चरण ४: दररोज सकाळ-संध्याकाळ लाकडी काठीने ३० दिवस सावलीत ढवळून किण्वन पूर्ण करणे.',
        'चरण ५: तयार झालेले अमृत द्रावण गाळून पिकांसाठी वापरणे.'
      ],
      hi: [
        'चरण १: ५ किलो ताजा गोबर और ५०० ग्राम शुद्ध ए२ घी मिलाकर ३ दिन तक छाया में रखें।',
        'चरण २: चौथे दिन ३ लीटर गोमूत्र और १० लीटर पानी मिलाकर लकड़ी से चलाएं।',
        'चरण ३: १५ दिन बाद २ लीटर दूध, २ लीटर दही, ३ लीटर नारियल पानी और ५०० ग्राम गुड़ मिलाएं।',
        'चरण ४: ३० दिनों तक प्रतिदिन सुबह-शाम घड़ी की दिशा में हिलाकर किण्वन पूर्ण करें।',
        'चरण ५: सूक्ष्म कपड़े से छानकर फसलों के छिड़काव हेतु उपयोग में लाएं।'
      ],
      en: [
        'Step 1: Thoroughly blend 5 kg fresh Gir cow dung with 500g pure A2 ghee; cure for 3 days.',
        'Step 2: On day 4, add 3 litres Gomutra and 10 litres water; stir thoroughly.',
        'Step 3: After 15 days, introduce 2 litres whole milk, 2 litres curd, 3 litres coconut water, and mashed bananas with jaggery.',
        'Step 4: Continue daily clockwise churning for 30 consecutive days under shade.',
        'Step 5: Filter through mesh to obtain a concentrated enzymatic foliar nutrient.'
      ]
    },
    healthBenefits: {
      mr: [
        'फुलगळ व फळगळ प्रतिबंध: पिकांची फुले आणि कोवळी फळे गळणे १००% रोखते.',
        'पानांचा हिरवेगारपणा: क्लोरोफिलचे प्रमाण वाढवून प्रकाशसंश्लेषण क्रिया गतिमान करते.',
        'रोगप्रतिकारक कवच: विषाणू आणि बुरशीजन्य रोगांशी लढण्याची नैसर्गिक शक्ती देते.',
        'उत्पादनात ३०% वाढ: भाजीपाला, डाळी आणि फळबागांच्या उत्पादनात लक्षणीय वाढ होते.',
        'जमिनीतील सूक्ष्मजीव: मुळांना पोषक द्रव्यांचे वहन करणाऱ्या जिवाणूंची संख्या वाढवते.'
      ],
      hi: [
        'फूल व फल झड़ने से रोकथाम: पौधों में फूलों का झड़ना रोककर भरपूर फलन लाता है।',
        'हरित लवक (Chlorophyll) में वृद्धि: पत्तियों को चौड़ा और गहरा हरा बनाकर प्रकाश संश्लेषण बढ़ाता है।',
        'प्राकृतिक सुरक्षा कवच: फफूंद जनित रोगों और वायरस के विरुद्ध रोग प्रतिरोधक क्षमता विकसित करता है।',
        'उत्पादन में २५-३५% वृद्धि: अनाज, दलहन और बागवानी में उच्च गुणवत्ता युक्त बंपर पैदावार।',
        'जड़ क्षेत्र का पोषण: सूक्ष्म पोषक तत्वों की उपलब्धता को सुगम बनाता है।'
      ],
      en: [
        'Arrests Flower & Fruit Drop: Enhances fruit set and prevents premature flower shedding.',
        'Boosts Photosynthesis: Expands leaf surface area and deepens vibrant chlorophyll density.',
        'Induces Plant Immunity: Activates phytoalexin defence proteins against leaf curl and mosaic virus.',
        '25-35% Yield Escalation: Directly amplifies farm output across vegetables, pulses, and grain.',
        'Enriches Rhizosphere Microbes: Multiplies plant-growth promoting rhizobacteria around roots.'
      ]
    },
    dailyUsage: {
      mr: 'फवारणीसाठी: १५ लिटरच्या पंपात ३०० ते ४५० मिली पंचगव्य (३%) मिसळून पिकांवर सकाळी किंवा संध्याकाळी फवारावे. दर १५ ते २० दिवसांनी फवारणी करावी.',
      hi: 'छिड़काव हेतु: १५ लीटर स्प्रे पंप में ३०० से ४५० मिली (३% घोल) मिलाकर सुबह या शाम के समय छिड़कें। १५-२० दिन के अंतराल पर दोहराएं।',
      en: 'Foliar Spray: Mix 300ml to 450ml per 15-litre backpack sprayer (3% concentration) and spray early morning or late afternoon every 15-20 days.'
    },
    keyFeatures: {
      mr: ['पाचही पवित्र गो-घटकांचा संगम', 'वृक्षायुर्वेद पद्धतीनुसार निर्मित', 'रासायनिक टॉनिकपेक्षा प्रभावी', 'सर्व प्रकारच्या पिकांसाठी'],
      hi: ['पांचों पवित्र गो-द्रव्यों का सम्मिश्रण', 'वृक्षायुर्वेद विधि आधारित', 'रासायनिक टॉनिकों से अधिक टिकाऊ', 'सब्जियों, फलों व फसलों हेतु'],
      en: ['Authentic 5 Sacred Cow Components', 'Crafted per Vrikshayurveda Science', 'Replaces Synthetic Growth Hormones', 'Universally Safe for All Crops']
    }
  }
];
