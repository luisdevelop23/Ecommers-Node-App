import { ProductIF } from "./product.interface";
import { CustomersIF } from "./customers.interface";

export interface FavoriteProductIF {
  id: string;
  product: ProductIF;
  user: CustomersIF;
  created_at: Date;
  updated_at: Date;
}
