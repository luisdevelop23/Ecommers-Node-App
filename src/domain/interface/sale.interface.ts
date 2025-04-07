import { customersIF } from "./customer.interface";
import { UserIF } from "./user.interface";

export interface SaleIF {
  id_sale: string;
  sale_date: Date;
  total: number;
  quotas: number;
  type_document: string;
  code_document: string;
  sale_status: string;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
  customer: customersIF;
  user: UserIF;
}
