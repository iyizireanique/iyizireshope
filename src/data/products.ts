import hpenvy from '/src/assets/hpenvy.jpeg';
import hpenvy1 from '/src/assets/hpenvy1.jpg';
import hpenvyp from '/src/assets/hpenvyp.jpg';

import gamingpc from '/src/assets/gamingpc.jpeg';
import alienwareSide from '/src/assets/alienware-x14-side.jpg';
import gamingpc4 from '/src/assets/gamingpc4.jpg';
import keyboardgamingpc from '/src/assets/keyboardgamingpc.jpg';
import gamingpc3 from '/src/assets/gamingpc3.jpg';

import macbookair from '/src/assets/macbookair.jpeg';
import macbookair3 from '/src/assets/macbookair3.jpg';

import macbookpro16 from '/src/assets/macbookpro16.jpeg';
import macbookpro16_1 from '/src/assets/macbookpro16 1.jpg';
import macbookpro16_2 from '/src/assets/macbookpro16 2.jpg';
import macbookpro16_3 from '/src/assets/macbook pro 16 3.jpg';

import macbook from '/src/assets/MacBook.jpeg';
import lenovoV14 from '/src/assets/LenovoV14.jpeg';

import powerbank from '/src/assets/powerbank.jpg';
import powerbank1 from '/src/assets/powerbank1.jpg';

import smart from '/src/assets/smart.jpg';
import standerr from '/src/assets/standerr.jpg';
import stand1 from '/src/assets/stand1.jpg';
import usss from '/src/assets/usss.jpg';
import caver2 from '/src/assets/CAVER 2.jpg';
import lapg3 from '/src/assets/lapg3.jpg';
import lapg31 from '/src/assets/lapg31.jpg';
import lap32 from '/src/assets/lap32.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: 'laptops' | 'phones' | 'accessories';
  brand: string;
  inStock: boolean;
  stockCount: number;
  badge?: string;
  specifications: { [key: string]: string };
  features: string[];
}

export const products: Product[] = [
  {
    id: 'hp-Elitebook-g3',
    name: 'HP EliteBook G3',
    description: 'Intel Core i7, 8GB RAM, 256GB SSD, 15.6" Display',
    price: 380000,
    originalPrice: 450000,
    rating: 4.3,
    reviewCount: 56,
    images: [lapg3,lapg31,lap32],
    category: 'laptops',
    brand: 'HP',
    inStock: true,
    stockCount: 15,
    badge: 'Budget Pick',
    specifications: {
      'Processor': 'Intel Core i7 (6th Gen)',
      'Memory': '8GB DDR4 RAM',
      'Storage': '256GB SSD',
      'Display': '15.6" HD',
      'Graphics': 'Intel HD Graphics 520',
      'Battery': 'Up to 7 hours',
      'Weight': '1.95 kg'
    },
    features: [
      'Sturdy business design',
      'Built-in webcam',
      'HDMI & USB 3.0 ports',
      'Windows 10 Pro',
      'Numeric keypad',
      'Affordable and reliable'
    ]
  },
  
  {
    id: 'hp-envy-x360',
    name: "HP Envy x360 13\"",
    description: "Intel Core i5-1135G7, 8GB RAM, 256GB SSD, TouchScreen 2-in-1",
    price: 750000,
    originalPrice: 870000,
    rating: 4.5,
    reviewCount: 89,
    images: [hpenvy, hpenvy1, hpenvyp],
    category: 'laptops',
    brand: 'HP',
    inStock: true,
    stockCount: 20,
    badge: 'Best Deal',
    specifications: {
      'Processor': 'Intel Core i5-1135G7',
      'Memory': '8GB DDR4 RAM',
      'Storage': '256GB SSD',
      'Display': '13.3" Full HD Touchscreen',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 11 hours',
      'Weight': '1.3 kg'
    },
    features: [
      '360° hinge convertible design',
      'Backlit keyboard',
      'Windows 11 Home',
      'Fingerprint reader',
      'USB-C fast charging',
      'Lightweight & portable'
    ]
  },
  {
    id: 'alienware-x14-x16',
    name: "Alienware x14 / x16 Gaming Laptop",
    description: "High-end gaming laptop with Intel Core i7/i9, NVIDIA RTX, QHD+ display, and Cryo-Tech cooling.",
    price: 2250000,
    originalPrice: 3350000,
    rating: 4.8,
    reviewCount: 147,
    images: [gamingpc, alienwareSide, gamingpc4, keyboardgamingpc, gamingpc3],
    category: 'laptops',
    brand: 'Alienware',
    inStock: true,
    stockCount: 10,
    badge: 'Power Gaming',
    specifications: {
      'Processor': 'Intel Core i7 / i9 (13th Gen)',
      'Memory': '16GB – 32GB DDR5 RAM',
      'Storage': '1TB PCIe SSD',
      'Display': '14" or 16" QHD+ 240Hz / FHD 165Hz',
      'Graphics': 'NVIDIA GeForce RTX 4060 / 4070 / 4080',
      'Audio': 'Dolby Atmos spatial sound',
      'Cooling': 'Alienware Cryo-Tech™ advanced system',
      'Build': 'CNC aluminum & magnesium alloy',
      'Weight': '1.7 – 2.1 kg'
    },
    features: [
      'Advanced thermal cooling system',
      'Custom RGB backlit keyboard',
      'Windows 11 Home / Pro',
      'Premium build quality',
      'High refresh-rate display',
      'VR and AAA-game ready'
    ]
  },
  {
    id: 'macbook-air-13-2019',
    name: "MacBook Air 13\" (2019)",
    description: "Intel Core i5, 8GB RAM, 128GB SSD, Retina Display",
    price: 650000,
    originalPrice: 1050000,
    rating: 4.3,
    reviewCount: 72,
    images: [macbookair, macbookair3],
    category: 'laptops',
    brand: 'Apple',
    inStock: true,
    stockCount: 10,
    badge: 'Used - Excellent',
    specifications: {
      'Processor': 'Intel Core i5 Dual-Core',
      'Memory': '8GB LPDDR3 RAM',
      'Storage': '128GB SSD',
      'Display': '13.3" Retina',
      'Graphics': 'Intel UHD 617',
      'Battery': 'Up to 12 hours',
      'Weight': '1.25 kg'
    },
    features: [
      'Retina display with True Tone',
      'Lightweight design',
      'Touch ID',
      'Two Thunderbolt 3 ports'
    ]
  },
  {
    id: 'macbook-pro-16-m2',
    name: "MacBook Pro 16\" (2023, M2)",
    description: "Apple M2 Pro, 16GB RAM, 1TB SSD, Liquid Retina XDR",
    price: 3450000,
    originalPrice: 4100000,
    rating: 4.8,
    reviewCount: 56,
    images: [macbookpro16, macbookpro16_1, macbookpro16_2, macbookpro16_3],
    category: 'laptops',
    brand: 'Apple',
    inStock: true,
    stockCount: 8,
    badge: 'Hot',
    specifications: {
      'Processor': 'Apple M2 Pro (12-core)',
      'Memory': '16GB Unified Memory',
      'Storage': '1TB SSD',
      'Display': '16.2" Liquid Retina XDR',
      'Graphics': '19-core GPU',
      'Battery': 'Up to 22 hours',
      'Weight': '2.15 kg'
    },
    features: [
      'Extreme performance with M2 Pro',
      'Best-in-class XDR display',
      'Six-speaker sound system',
      'MagSafe 3 charging',
      'Multiple Thunderbolt 4 ports'
    ]
  },
  {
    id: 'macbook-generic',
    name: "MacBook 13\"",
    description: "Apple MacBook with Retina Display, 8GB RAM, 256GB SSD",
    price: 990000,
    originalPrice: 1100000,
    rating: 4.1,
    reviewCount: 45,
    images: [macbook],
    category: 'laptops',
    brand: 'Apple',
    inStock: true,
    stockCount: 12,
    badge: 'Affordable',
    specifications: {
      'Processor': 'Intel Core i5',
      'Memory': '8GB RAM',
      'Storage': '256GB SSD',
      'Display': '13.3" Retina',
      'Graphics': 'Intel Iris Plus',
      'Battery': 'Up to 10 hours',
      'Weight': '1.3 kg'
    },
    features: [
      'Retina Display',
      'Light and portable',
      'Reliable performance',
      'Long battery life'
    ]
  },
  {
    id: 'lenovo-v14-g3',
    name: "Lenovo V14 G3",
    description: "Intel Core i7, 8GB RAM, 512GB SSD, 14\" FHD, Windows 11",
    price: 670000,
    originalPrice: 720000,
    rating: 4.2,
    reviewCount: 34,
    images: [lenovoV14],
    category: 'laptops',
    brand: 'Lenovo',
    inStock: true,
    stockCount: 17,
    badge: 'Value Choice',
    specifications: {
      'Processor': 'Intel Core i7',
      'Memory': '8GB DDR4',
      'Storage': '512GB SSD',
      'Display': '14" Full HD',
      'Graphics': 'Intel UHD',
      'Battery': 'Up to 10 hours',
      'Weight': '1.6 kg'
    },
    features: [
      'Windows 11 Pro',
      'Slim business design',
      'Excellent value for performance'
    ]
  },
  {
    id: 'anker-powerbank-20000',
    name: 'Anker PowerCore 20000mAh',
    description: 'High-capacity portable charger with PowerIQ technology',
    price: 65000,
    rating: 4.5,
    reviewCount: 1234,
    images: [powerbank, powerbank1],
    category: 'accessories',
    brand: 'Anker',
    inStock: true,
    stockCount: 45,
    badge: 'Best Value',
    specifications: {
      'Capacity': '20000mAh',
      'Output': '2 USB-A ports',
      'Input': 'Micro USB + USB-C',
      'Weight': '356g',
      'Dimensions': '158 x 74 x 19mm',
      'Technology': 'PowerIQ + VoltageBoost'
    },
    features: [
      'High-speed charging',
      'Universal compatibility',
      'MultiProtect safety system',
      'Compact design',
      'LED power indicator',
      '18-month warranty'
    ]
  },
  {
    id: 'smart-watch-6bands',
    name: "Smart Watch with 6 Bands",
    description: "Modern smartwatch with interchangeable straps and fitness tracking",
    price: 55000,
    rating: 4.3,
    reviewCount: 210,
    images: [smart],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 30,
    badge: 'Trending',
    specifications: {
      'Display': '1.69" HD touch screen',
      'Compatibility': 'iOS & Android',
      'Straps': '6 color bands',
      'Battery': '7 days use / 15 days standby',
      'Waterproof': 'IP67',
      'Sensors': 'Heart rate, Sleep, Step tracker'
    },
    features: [
      'Comes with 6 colorful bands',
      'Fitness and health monitoring',
      'Message notifications',
      'Customizable watch faces'
    ]
  },
  {
    id: 'laptop-stand',
    name: "Adjustable Laptop Stand",
    description: "Ergonomic, foldable laptop stand for desk setups",
    price: 25000,
    rating: 4.4,
    reviewCount: 97,
    images: [standerr],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 40,
    badge: 'Ergonomic Pick',
    specifications: {
      'Material': 'Aluminum alloy',
      'Compatibility': 'Up to 17-inch laptops',
      'Adjustability': 'Multiple angles',
      'Portability': 'Foldable and lightweight'
    },
    features: [
      'Prevents neck and back strain',
      'Anti-slip pads',
      'Heat dissipation support',
      'Ideal for work-from-home setups'
    ]
  },
  {
    id: 'phone-stand',
    name: "Phone & Tablet Stand",
    description: "Multipurpose adjustable stand for smartphones and tablets",
    price: 12000,
    rating: 4.1,
    reviewCount: 64,
    images: [stand1],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 50,
    badge: 'Best Seller',
    specifications: {
      'Material': 'Plastic and aluminum',
      'Compatibility': 'Phones & tablets',
      'Adjustability': 'Vertical and horizontal',
      'Stability': 'Anti-slip base'
    },
    features: [
      'Adjustable viewing angles',
      'Compact & foldable',
      'Ideal for video calls and watching content'
    ]
  },
  {
    id: 'usb-extension-multi',
    name: "USB Extension Hub",
    description: "Multi-port extension for connecting multiple devices simultaneously",
    price: 18000,
    rating: 4.2,
    reviewCount: 102,
    images: [usss],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 60,
    badge: 'Multi-Port',
    specifications: {
      'Ports': '4 USB 2.0/3.0',
      'Cable Length': '50cm',
      'Power': 'Bus-powered',
      'Compatibility': 'Windows, macOS, Linux'
    },
    features: [
      'Connect mouse, keyboard, flash drives, etc.',
      'Plug and play',
      'Portable and lightweight'
    ]
  },
  {
    id: 'iphone-silicone-cover',
    name: "Silicone iPhone Cover",
    description: "Durable and soft-touch silicone case for iPhones",
    price: 8500,
    rating: 4.6,
    reviewCount: 154,
    images: [caver2],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 100,
    badge: 'Protective',
    specifications: {
      'Material': 'Soft-touch silicone',
      'Fit': 'iPhone 11 / 12 / 13 / 14 series',
      'Protection': 'Scratch and drop-resistant'
    },
    features: [
      'Slim fit design',
      'Soft interior lining',
      'Shock absorbent',
      'Available in various colors'
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.badge).slice(0, 8);
};

export const getRelatedProducts = (productId: string, category: string): Product[] => {
  return products
    .filter(product => product.category === category && product.id !== productId)
    .slice(0, 4);
};