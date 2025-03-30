import { ProductIF } from "./product.interface";
import { SaleIF } from "./sale.interface";
import { UserIF } from "./user.interface";

export interface QuotasIF {
  id_quotas: string;
  number_quota: number;
  price: number;
  type_payment: string;
  date_paid: Date;
  receipt_number: string;
  created_date: Date;
  updated_date: Date;
  status?: boolean;
  sale: SaleIF;
  user: UserIF;
}
