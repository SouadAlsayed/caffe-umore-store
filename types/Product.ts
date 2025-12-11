export interface Product {
  id: number;
  name: string;
  description: string;
  image_url: string;
  category: string;
  product_variants: ProductVariant[];
}

export interface ProductVariant {
  id: number;
  product_id: number;
  roast: 'light' | 'medium' | 'dark';
  size: '250g' | '500g' | '1kg';
  price: number;
  stock: number;
  is_available: boolean;
}
