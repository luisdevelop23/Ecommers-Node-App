import { CartIF } from "./cart.interface";
import { ProductIF } from "./product.interface";

export interface CartDetailIF {
  id: string;
  cart: CartIF;
  product: ProductIF;
  cant: number;
  created_at: Date;
  updated_at: Date;
}
