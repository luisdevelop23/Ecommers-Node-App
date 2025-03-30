import { ProductIF } from "./product.interface";
import { SaleIF } from "./sale.interface";
import { UserIF } from "./user.interface";

export class SaleDetailIF {
  id_sale_detail: string;

  quantity: number;
  price: number;
  discount: number;
  sub_total: number;
  total: number;
  created_date: Date;
  updated_date: Date;
  status?: boolean;
  sale: SaleIF;
  product: ProductIF;
}
