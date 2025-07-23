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
import lap32 from '/src/assets/lapg32.jpg';
import airfeelfile from  '/src/assets/airfeelfile.jpg';
import powerrbankallinone from '/src/assets/powerrbankallinone.jpg';
import tripodstand from '/src/assets/tripodstand.jpg';
import gbl from '/src/assets/gbl.jpg';
import wirelessselfstrick from '/src/assets/wirelessselfstrick.jpg';
import ramdestop from '/src/assets/ramdestop.jpg';
import HPProBook440G1Corei34 from '/src/assets/HPProBookIntel15.6.jpg';
import HPProBookIntel1 from '/src/assets/HPProBookIntel15.6.jpg';
import DellOptiPlex from '/src/assets/delloptiplex.jpg';
import lenovethinkpadex1 from '/src/assets/lenovethinkpadex1.jpg';
import desktophd from '/src/assets/desktophd.jpg';
import laptopdesktopall from  '/src/assets/laptopdesktopall.jpg'
import vgacable from '/src/assets/vgacable.jpg';
import sandflashdisk from '/src/assets/sanflashdisk.jpg';
import webadaptor from '/src/assets/webadaptor.jpg';
import mouselog from '/src/assets/mourselog.jpg';
import hpcablesbigpin from '/src/assets/hpcablesbigpin.jpg';
import stickforpc from '/src/assets/strickforpc.jpg';
import  gbl1 from '/src/assets/gbl1.jpg';
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: 'laptops' | 'phones' | 'accessories'|'audio'|'desktops';
  brand: string;
  inStock: boolean;
  stockCount: number;
  badge?: string;
  specifications: { [key: string]: string };
  features: string[];
  
}
//uupdate
export const products: Product[] = [
  {
    id: 'hp-Elitebook-g3',
    name: 'HP EliteBook G3',
    description: 'Intel Core i7, 8GB RAM, 256GB SSD, 15.6" Display',
    price: 290000,
    originalPrice: 350000,
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
    id: 'jbl-micro-speaker',
    name: 'JBL Micro Bluetooth Speaker',
    description: 'Portable speaker with powerful sound',
    price: 29000,
    originalPrice: 39000,
    rating: 4.4,
    reviewCount: 76,
    images: [gbl1],
    category: 'audio',
    brand: 'JBL',
    inStock: true,
    stockCount: 14,
    badge: 'Compact Sound',
    specifications: {
      'Connectivity': 'Bluetooth 5.0',
      'Playtime': 'Up to 6 hours',
      'Battery': 'Rechargeable',
      'Color': 'Black',
      'Waterproof': 'Splash resistant'
    },
    features: [
      'Powerful sound in small size',
      'Great for on-the-go use',
      'Easy pairing',
      'Recharge via USB'
    ]
  },
  {
    id: 'hp-laptop-charger',
    name: 'HP Laptop Charger 65W',
    description: 'Reliable charger for HP laptops',
    price: 13500,
    originalPrice: 17000,
    rating: 4.3,
    reviewCount: 45,
    images: [hpcablesbigpin],
    category: 'accessories',
    brand: 'HP',
    inStock: true,
    stockCount: 19,
    badge: 'Power Saver',
    specifications: {
      'Power': '65W',
      'Connector': 'Big pin',
      'Voltage': '19.5V',
      'Compatibility': 'Various HP models',
      'Cable Length': '1.8m'
    },
    features: [
      'Safe charging',
      'Lightweight build',
      'Ideal for office/home use',
      'High durability'
    ]
  },
  
  {
    id: 'web-adaptor-hub',
    name: '4-in-1 Web Adaptor (USB Hub)',
    description: 'Multiple USB ports in a compact adaptor',
    price: 7000,
    originalPrice: 12000,
    rating: 4.0,
    reviewCount: 67,
    images: [webadaptor],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 33,
    badge: 'USB Hub',
    specifications: {
      'Ports': '4 x USB 2.0',
      'Connection': 'USB-A',
      'Compatibility': 'Windows, macOS, Linux',
      'Material': 'ABS Plastic',
      'Color': 'White'
    },
    features: [
      'Compact size',
      'Fast data transfer',
      'Plug & play',
      'Connect more peripherals'
    ]
  },
  
  {
    id: 'airfeelfile-stand',
    name: 'Adjustable Laptop Stand - AirFeel File',
    description: 'Ergonomic aluminum laptop stand for desks',
    price: 14500,
    originalPrice: 22000,
    rating: 4.7,
    reviewCount: 312,
    images: [airfeelfile],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 23,
    badge: 'Best Seller',
    specifications: {
      'Material': 'Aluminum Alloy',
      'Adjustable Height': 'Yes',
      'Compatible Devices': 'Laptops 10-17 inches',
      'Weight Support': 'Up to 10kg',
      'Cooling Design': 'Open structure for airflow',
      'Foldable': 'Yes, easy to carry'
    },
    features: [
      'Sleek and sturdy design',
      'Improves posture and comfort',
      'Lightweight and portable',
      'Anti-slip rubber feet',
      'Perfect for office and home use',
      'Ventilated to prevent overheating'
    ]
  },
  {
    id: 'sandisk-usb32',
    name: 'SanDisk 32GB Flash Drive',
    description: 'USB 3.0 high-speed flash storage',
    price: 8500,
    originalPrice: 13000,
    rating: 4.6,
    reviewCount: 100,
    images: [sandflashdisk],
    category: 'accessories',
    brand: 'SanDisk',
    inStock: true,
    stockCount: 40,
    badge: 'Top Seller',
    specifications: {
      'Capacity': '32GB',
      'Speed': 'USB 3.0',
      'Compatibility': 'Windows/Mac/Linux',
      'Design': 'Compact and durable',
      'Color': 'Black + Red'
    },
    features: [
      'Fast read/write',
      'Keychain design',
      'Ideal for students',
      'Secure and long-lasting'
    ]
  },
  
  {
    id: 'desktop-hdd-500',
    name: 'WD 500GB Desktop HDD',
    description: 'Reliable 3.5” Hard Disk Drive',
    price: 13500,
    originalPrice: 18000,
    rating: 4.3,
    reviewCount: 53,
    images: [desktophd],
    category: 'accessories',
    brand: 'Western Digital',
    inStock: true,
    stockCount: 25,
    badge: 'Essential',
    specifications: {
      'Type': '3.5” HDD',
      'Capacity': '500GB',
      'Speed': '7200 RPM',
      'Cache': '32MB',
      'Interface': 'SATA III',
      'Warranty': '1 Year'
    },
    features: [
      'Stable and long-life',
      'Perfect for desktop storage',
      'Quiet operation',
      'Shock-resistant design'
    ]
  },
  {
    id: 'dell-desktop-allinone',
    name: 'Dell All-in-One Desktop',
    description: 'Full HD display, Core i3, 8GB RAM, 500GB HDD',
    price: 250000,
    originalPrice: 320000,
    rating: 4.2,
    reviewCount: 38,
    images: [laptopdesktopall],
    category: 'desktops',
    brand: 'Dell',
    inStock: true,
    stockCount: 5,
    badge: 'All-in-One',
    specifications: {
      'Processor': 'Intel Core i3',
      'Display': '21.5” Full HD',
      'Memory': '8GB RAM',
      'Storage': '500GB HDD',
      'OS': 'Windows 10',
      'Keyboard/Mouse': 'Included'
    },
    features: [
      'Everything built into screen',
      'Saves desk space',
      'Good for schools & offices',
      'Plug and play setup'
    ]
  },
  {
    id: 'vga-cable',
    name: 'VGA Cable - 1.5m',
    description: 'Connect your monitor or projector with ease',
    price: 3000,
    originalPrice: 5000,
    rating: 4.1,
    reviewCount: 51,
    images: [vgacable],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 60,
    badge: 'Essential',
    specifications: {
      'Length': '1.5 meters',
      'Compatibility': 'Monitors, PCs, Projectors',
      'Connector Type': 'VGA male to male',
      'Shielding': 'Double shielded',
      'Color': 'Black'
    },
    features: [
      'Durable connectors',
      'Clear image transmission',
      'Affordable and reliable',
      'Plug and play'
    ]
  },
  {
    id: 'logitech-mouse',
    name: 'Logitech Silent Wireless Mouse',
    description: 'Smooth and quiet clicks with wireless freedom',
    price: 8500,
    originalPrice: 12000,
    rating: 4.6,
    reviewCount: 120,
    images: [mouselog],
    category: 'accessories',
    brand: 'Logitech',
    inStock: true,
    stockCount: 20,
    badge: 'Silent Click',
    specifications: {
      'Connection': '2.4GHz USB Receiver',
      'Battery Life': 'Up to 18 months',
      'Compatibility': 'Windows, Mac, Linux',
      'Color': 'Black',
      'Buttons': '3'
    },
    features: [
      'Quiet clicking',
      'Comfortable design',
      'Plug & play receiver',
      'Long battery life'
    ]
  },
  
  
  
  {
    id: 'hp-probook-440g1',
    name: 'HP ProBook 440 G1',
    description: 'Core i5, 4GB RAM, 500GB HDD, 14” Display',
    price: 185000,
    originalPrice: 220000,
    rating: 4.1,
    reviewCount: 44,
    images: [HPProBook440G1Corei34],
    category: 'laptops',
    brand: 'HP',
    inStock: true,
    stockCount: 10,
    badge: 'Budget Laptop',
    specifications: {
      'Processor': 'Intel Core i5 (4th Gen)',
      'Memory': '4GB DDR3 RAM',
      'Storage': '500GB HDD',
      'Display': '14” HD',
      'Graphics': 'Intel HD',
      'Battery': 'Up to 5 hours'
    },
    features: [
      'Lightweight and reliable',
      'Affordable business laptop',
      'Built-in webcam & ports',
      'Comfortable keyboard layout'
    ]
  },
  {
    id: 'hp-probook-intel15',
    name: 'HP ProBook 15.6” Core i5',
    description: 'Core i5, 8GB RAM, 256GB SSD, 15.6” Display',
    price: 270000,
    originalPrice: 310000,
    rating: 4.2,
    reviewCount: 63,
    images: [HPProBookIntel1],
    category: 'laptops',
    brand: 'HP',
    inStock: true,
    stockCount: 12,
    badge: 'Office Pick',
    specifications: {
      'Processor': 'Intel Core i5 (6th Gen)',
      'Memory': '8GB DDR4 RAM',
      'Storage': '256GB SSD',
      'Display': '15.6” HD',
      'Battery': 'Up to 6 hours',
      'OS': 'Windows 10'
    },
    features: [
      'Great for multitasking',
      'Modern look with numeric pad',
      'Affordable business machine'
    ]
  },
  {
    id: 'dell-optiplex-7040',
    name: 'Dell OptiPlex 7040 SFF',
    description: 'Intel Core i5, 8GB RAM, 500GB HDD, Compact Desktop',
    price: 175000,
    originalPrice: 230000,
    rating: 4.0,
    reviewCount: 28,
    images: [DellOptiPlex],
    category: 'desktops',
    brand: 'Dell',
    inStock: true,
    stockCount: 8,
    badge: 'Compact Desktop',
    specifications: {
      'Processor': 'Intel Core i5 (6th Gen)',
      'RAM': '8GB DDR4',
      'Storage': '500GB HDD',
      'Form Factor': 'Small Form',
      'Graphics': 'Intel HD',
      'Ports': 'USB, HDMI, Ethernet'
    },
    features: [
      'Space-saving desktop',
      'Good for offices & home',
      'Energy efficient and silent',
      'Upgradeable RAM & SSD'
    ]
  },
  {
    id: 'lenovo-thinkpad-x1',
    name: 'Lenovo ThinkPad X1',
    description: 'Core i5, 8GB RAM, 256GB SSD, 14” Display',
    price: 310000,
    originalPrice: 420000,
    rating: 4.6,
    reviewCount: 119,
    images: [lenovethinkpadex1],
    category: 'laptops',
    brand: 'Lenovo',
    inStock: true,
    stockCount: 9,
    badge: 'Business Premium',
    specifications: {
      'Processor': 'Intel Core i5',
      'Memory': '8GB RAM',
      'Storage': '256GB SSD',
      'Display': '14” Full HD',
      'Weight': '1.5kg',
      'OS': 'Windows 10 Pro'
    },
    features: [
      'Top-tier keyboard',
      'Sturdy build quality',
      'Lightweight and slim',
      'Fingerprint reader'
    ]
  },
  {
    id: 'laptop-cooler-pad',
    name: 'Laptop Cooling Pad with RGB Fans',
    description: 'Cooling stand with LED fans for better airflow',
    price: 12500,
    originalPrice: 17000,
    rating: 4.5,
    reviewCount: 78,
    images: [stickforpc],
    category: 'accessories',
    brand: 'Generic',
    inStock: true,
    stockCount: 29,
    badge: 'Cool Choice',
    specifications: {
      'Fans': '2 large fans',
      'LED': 'Multicolor RGB',
      'USB Powered': 'Yes',
      'Noise': 'Low noise fans',
      'Compatible': 'Up to 17” laptops'
    },
    features: [
      'Reduces overheating',
      'Boosts laptop performance',
      'Stylish lighting',
      'Adjustable tilt'
    ]
  },
   
  
  

{
  id: 'ram-desktop',
  name: '8GB DDR3 Desktop RAM',
  description: 'Fast performance DDR3 RAM for desktop PCs',
  price: 14000,
  originalPrice: 16500,
  rating: 4.5,
  reviewCount: 92,
  images: [ramdestop],
  category: 'accessories',
  brand: 'Kingston',
  inStock: true,
  stockCount: 15,
  badge: 'Hot Deal',
  specifications: {
    'Type': 'DDR3',
    'Capacity': '8GB',
    'Speed': '1600MHz',
    'Form Factor': 'DIMM',
    'Voltage': '1.5V',
    'Compatibility': 'Most desktops'
  },
  features: [
    'Boosts PC performance',
    'Easy to install',
    'Tested quality and durability',
    'Budget-friendly option',
    'Compatible with Intel and AMD'
  ]
},

{
  id: 'tripodstand-kit',
  name: 'Tripod Stand + Ring Light Kit',
  description: 'All-in-one selfie tripod with LED ring light and remote',
  price: 18500,
  originalPrice: 26000,
  rating: 4.4,
  reviewCount: 77,
  images: [tripodstand],
  category: 'accessories',
  brand: 'Generic',
  inStock: true,
  stockCount: 31,
  badge: 'Popular',
  specifications: {
    'Height': 'Adjustable up to 1.6m',
    'Light Modes': 'Cool, Warm, Natural',
    'Remote': 'Bluetooth remote included',
    'Power': 'USB-powered',
    'Compatibility': 'Phones and mini-cameras',
    'Build': 'Lightweight Aluminum'
  },
  features: [
    'Perfect for TikTok & YouTube',
    'Bright and adjustable lighting',
    'Stable and foldable tripod',
    '360° phone holder',
    'Easy setup and control'
  ]
},
{
  id: 'selfiestick-wireless',
  name: 'Wireless Selfie Stick & Tripod Combo',
  description: 'Compact selfie stick with tripod base and Bluetooth remote',
  price: 12500,
  originalPrice: 19000,
  rating: 4.3,
  reviewCount: 143,
  images: [wirelessselfstrick],
  category: 'accessories',
  brand: 'Generic',
  inStock: true,
  stockCount: 37,
  badge: 'Trending',
  specifications: {
    'Length': 'Up to 70cm',
    'Bluetooth': 'Yes, built-in',
    'Tripod Base': 'Yes',
    'Material': 'ABS + Stainless steel',
    'Charging': 'MicroUSB',
    'Phone Mount': 'Universal holder'
  },
  features: [
    'Easy one-click photo capture',
    'Foldable and pocket-friendly',
    'Stable tripod base',
    'Rechargeable Bluetooth remote',
    'Works with iOS & Android'
  ]
},


{
  id: 'powerbank-allinone',
  name: 'Power Bank 20000mAh All-in-One',
  description: 'High-capacity powerbank with Type-C, MicroUSB, and Lightning cables',
  price: 22000,
  originalPrice: 32000,
  rating: 4.6,
  reviewCount: 198,
  images: [powerrbankallinone],
  category: 'accessories',
  brand: 'Anker',
  inStock: true,
  stockCount: 48,
  badge: 'Top Pick',
  specifications: {
    'Capacity': '20000mAh',
    'Output Ports': 'USB-A, USB-C, Lightning',
    'Fast Charging': 'Yes',
    'Material': 'ABS Plastic',
    'Weight': '350g',
    'LED Indicators': 'Yes'
  },
  features: [
    'Charge 3 devices at once',
    'Compact and easy to carry',
    'LED charge level indicators',
    'Safe and fast charging tech',
    'Perfect for travel and business'
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
    id: 'jbl-speaker',
    name: 'JBL Portable Bluetooth Speaker',
    description: 'Compact wireless speaker with powerful bass',
    price: 36000,
    originalPrice: 55000,
    rating: 4.8,
    reviewCount: 412,
    images: [gbl],
    category: 'audio',
    brand: 'JBL',
    inStock: true,
    stockCount: 20,
    badge: 'Most Wanted',
    specifications: {
      'Connectivity': 'Bluetooth 5.0',
      'Play Time': 'Up to 10 hours',
      'Waterproof': 'IPX7 Rated',
      'Charging Port': 'USB-C',
      'Weight': '540g',
      'Color': 'Black'
    },
    features: [
      'Crystal clear sound',
      'Deep bass boost',
      'Water-resistant build',
      'Easy to pair and control',
      'Ideal for indoor and outdoor use'
    ]
  }
  ,
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