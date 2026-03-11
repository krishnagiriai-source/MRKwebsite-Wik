import { Product, Brand } from './types';

export const BRANDS: Brand[] = [
  {
    id: '1',
    name: 'Lee Kum Kee',
    logo: 'https://images.unsplash.com/photo-1610662660123-5e921f00842e?auto=format&fit=crop&q=80&w=200',
    description: 'The global leader in authentic Chinese sauces and condiments.',
    origin: 'Hong Kong'
  },
  {
    id: '2',
    name: 'Felchlin',
    logo: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=200',
    description: 'Premier Swiss chocolate for professional chefs and pâtissiers.',
    origin: 'Switzerland'
  },
  {
    id: '3',
    name: 'Urbani Truffles',
    logo: 'https://images.unsplash.com/photo-1598460670067-c0e665ba5d16?auto=format&fit=crop&q=80&w=200',
    description: 'World renowned Italian truffles and truffle-based delicacies.',
    origin: 'Italy'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Lee Kum Kee Premium Oyster Sauce',
    slug: 'lee-kum-kee-oyster-sauce',
    brand: 'Lee Kum Kee',
    category: 'Sauces',
    price: 850,
    wholesalePrice: 680,
    description: 'A rich, thick sauce made from the finest oyster extracts. Used by Michelin chefs worldwide.',
    images: ['https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800'],
    features: ['High oyster extract', 'No MSG', 'Rich color'],
    specifications: { 'Weight': '510g', 'Origin': 'Hong Kong', 'Shelf Life': '24 Months' },
    isBestseller: true,
    stockStatus: 'in-stock'
  },
  {
    id: 'p2',
    name: 'Felchlin Maracaibo 65% Chocolate',
    slug: 'felchlin-maracaibo-65',
    brand: 'Felchlin',
    category: 'Chocolate',
    price: 3200,
    wholesalePrice: 2450,
    description: 'Voted Best Chocolate in the World. Grand Cru chocolate for artisan pastry.',
    images: ['https://images.unsplash.com/photo-1549007994-cb92ca714503?auto=format&fit=crop&q=80&w=800'],
    features: ['Single origin', 'Grand Cru', 'Intense flavor'],
    specifications: { 'Cocoa Content': '65%', 'Weight': '2kg', 'Form': 'Couverture' },
    isBestseller: true,
    stockStatus: 'in-stock'
  },
  {
    id: 'p3',
    name: 'Urbani Black Truffle Oil',
    slug: 'urbani-black-truffle-oil',
    brand: 'Urbani Truffles',
    category: 'Oils',
    price: 1800,
    wholesalePrice: 1400,
    description: 'Expertly infused olive oil with authentic black summer truffles.',
    images: ['https://images.unsplash.com/photo-1474979266404-7eaacabc88c5?auto=format&fit=crop&q=80&w=800'],
    features: ['Real truffle pieces', 'Premium olive oil base', 'Intense aroma'],
    specifications: { 'Volume': '250ml', 'Origin': 'Italy' },
    isBestseller: false,
    stockStatus: 'in-stock'
  }
];
