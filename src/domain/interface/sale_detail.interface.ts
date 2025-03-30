export class SaleDetailIF {
  id_sale_detail: string;
  id_sale: string;
  id_product: string;
  quantity: number;
  price: number;
  discount: number;
  sub_total: number;
  total: number;
  created_date: Date;
  updated_date: Date;
  status?: boolean;
  id_user: string;
}
