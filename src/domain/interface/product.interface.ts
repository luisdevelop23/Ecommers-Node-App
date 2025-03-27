export interface ProductIF {
  id: string;
  code: string;
  name: string;
  price: number;
  family: string;
  category: string;
  subcategory: string;
  brand: string;
  model: string;
  description: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  state?: boolean;
}
