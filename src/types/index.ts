export type Language = 'mr' | 'hi' | 'en';

export interface Product {
  id: string;
  name: {
    mr: string;
    hi: string;
    en: string;
  };
  category: 'dairy' | 'bio_farming' | 'wellness';
  price: number;
  unit: {
    mr: string;
    hi: string;
    en: string;
  };
  image: string;
  shortDesc: {
    mr: string;
    hi: string;
    en: string;
  };
  fullDesc: {
    mr: string;
    hi: string;
    en: string;
  };
  preparationMethod: {
    mr: string[];
    hi: string[];
    en: string[];
  };
  healthBenefits: {
    mr: string[];
    hi: string[];
    en: string[];
  };
  dailyUsage: {
    mr: string;
    hi: string;
    en: string;
  };
  keyFeatures: {
    mr: string[];
    hi: string[];
    en: string[];
  };
}

export interface Blog {
  id: string;
  slug: string;
  title: {
    mr: string;
    hi: string;
    en: string;
  };
  category: {
    mr: string;
    hi: string;
    en: string;
  };
  date: string;
  readTime: {
    mr: string;
    hi: string;
    en: string;
  };
  author: {
    mr: string;
    hi: string;
    en: string;
  };
  image: string;
  excerpt: {
    mr: string;
    hi: string;
    en: string;
  };
  content: {
    mr: string[];
    hi: string[];
    en: string[];
  };
  keyTakeaways: {
    mr: string[];
    hi: string[];
    en: string[];
  };
}

export interface DonationTier {
  id: string;
  amount: number;
  title: {
    mr: string;
    hi: string;
    en: string;
  };
  description: {
    mr: string;
    hi: string;
    en: string;
  };
  impact: {
    mr: string;
    hi: string;
    en: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: {
    mr: string;
    hi: string;
    en: string;
  };
  location: {
    mr: string;
    hi: string;
    en: string;
  };
  quote: {
    mr: string;
    hi: string;
    en: string;
  };
  rating: number;
}
