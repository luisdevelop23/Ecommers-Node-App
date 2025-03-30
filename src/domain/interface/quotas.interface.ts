export interface QuotasIF {
  id_quotas: string;
  id_sale: string;
  id_product: string;
  quantity: number;
  price: number;
  created_date: Date;
  updated_date: Date;
  status?: boolean;
  id_user: string;
}
