import { UserIF } from "./user.interface";

export interface ProductIF {
  id_product: string;
  cod_product: string;
  name: string;
  model: string;
  brand: string;
  colors?: string;
  liters?: string;
  km?: string;
  engine?: string;
  description?: string;
  weight?: string;
  tires?: string;
  purchase_price: number;
  sale_price?: number;
  created_date: Date;
  updated_date?: Date;
  user: UserIF;
  status?: boolean;
}
