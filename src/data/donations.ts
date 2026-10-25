import { DonationTier } from '../types';

export const donationTiers: DonationTier[] = [
  {
    id: 'fodder-day',
    amount: 250,
    title: {
      mr: '१ दिवसाचा हिरवा चारा व गूळ',
      hi: '१ दिन का हरा चारा एवं गुड़ आहार',
      en: '1 Day Green Fodder & Jaggery Nutrition'
    },
    description: {
      mr: 'एका देशी गिर गायीसाठी ताज्या पौष्टिक गवताची आणि गुळाची सोय.',
      hi: 'एक देशी गिर गाय के लिए पौष्टिक हरी घास एवं गुड़ की व्यवस्था।',
      en: 'Provides fresh nutritious green grass and organic jaggery for 1 cow.'
    },
    impact: {
      mr: '१ गोमातेचे संपूर्ण १ दिवसाचे पोटभर पोषण',
      hi: '१ गाय का पूर्ण १ दिन का पौष्टिक भोजन',
      en: '1 full day complete nourishment for 1 cow'
    }
  },
  {
    id: 'medical-care',
    amount: 1100,
    title: {
      mr: 'वैद्यकीय उपचार व औषधोपचार',
      hi: 'चिकित्सा, टीकाकरण एवं औषधि सेवा',
      en: 'Veterinary Care & Medical Support'
    },
    description: {
      mr: 'वृद्ध व आजारी गाईंसाठी जंतनाशक, जीवनसत्त्वे व वैद्यकीय तपासणी.',
      hi: 'वृद्ध एवं अस्वस्थ गायों हेतु नियमित टीकाकरण और आवश्यक औषधियां।',
      en: 'Covers essential deworming, mineral tonics, and veterinary visits.'
    },
    impact: {
      mr: 'आजारी गोवंशासाठी औषधोपचार व डॉक्टरी तपासणी',
      hi: 'अस्वस्थ गायों हेतु संपूर्ण चिकित्सकीय देखभाल',
      en: 'Medical relief and health checkups for recovering cows'
    }
  },
  {
    id: 'farmer-kits',
    amount: 2500,
    title: {
      mr: 'गोकृपा अमृत शेतकरी मोफत वाटप',
      hi: 'गोकृपा अमृत किसान निशुल्क वितरण',
      en: 'Free Gokrupa Amrut Kits for Farmers'
    },
    description: {
      mr: '५ गरीब शेतकर्‍यांना सेंद्रिय शेतीसाठी गोकृपा अमृत मोफत देणे.',
      hi: '५ छोटे किसानों को प्राकृतिक खेती अपनाने हेतु निशुल्क जैविक कल्चर प्रदान करना।',
      en: 'Sponsors active starter cultures for 5 local farmers transitioning to organic farming.'
    },
    impact: {
      mr: '५ शेतकरी कुटुंबांची रासायनिक खतांच्या खर्चातून कायमची मुक्ती',
      hi: '५ कृषक परिवारों को रसायन-मुक्त खेती की प्रेरणा',
      en: 'Empowers 5 farmer families with zero-cost soil rejuvenation'
    }
  },
  {
    id: 'foster-month',
    amount: 5100,
    title: {
      mr: '१ महिना एका गोमातेचे संपूर्ण संगोपन',
      hi: '१ माह के लिए १ गोमाता का पूर्ण संरक्षण',
      en: '1 Month Complete Foster Care'
    },
    description: {
      mr: 'दुध न देणाऱ्या किंवा म्हातार्‍या एका गोमातेचा संपूर्ण महिन्याचा चारा व निवारा.',
      hi: 'दूध न देने वाली वृद्ध गोमाता की एक माह की संपूर्ण भोजन, सेवा एवं आवास व्यवस्था।',
      en: 'Complete 30-day shelter, fodder, mineral feed, and personal care for a senior cow.'
    },
    impact: {
      mr: 'भाकड गोमातेला सन्मानाने जगण्याचे संपूर्ण महिनाभराचे कवच',
      hi: 'निराश्रित गोमाता को ३० दिनों तक मातृत्व सम्मान और सुरक्षा',
      en: 'Guarantees dignity and holistic sanctuary care for 1 elderly cow'
    }
  }
];
