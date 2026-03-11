export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  wholesalePrice?: number;
  description: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  isBestseller: boolean;
  stockStatus: 'in-stock' | 'low-stock' | 'out-of-stock';
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  origin: string;
}

export interface CartItem extends Product {
  quantity: number;
}
