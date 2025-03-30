import { ProductIF } from "./product.interface";
import { UserIF } from "./user.interface";

export interface PublicationIF {
  id_publication: string;
  product: ProductIF;
  title: string;
  type: string;
  colors?: string;
  sale_price: number;
  offer_price?: number;
  detailed_description?: string;
  html: string;
  created_at: Date;
  updated_at?: Date;
  user: UserIF;
  state?: boolean;
}
