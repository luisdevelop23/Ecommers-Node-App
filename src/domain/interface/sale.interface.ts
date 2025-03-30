export interface SaleIF {
  id_sale: string;
  id_customer: string;
  sale_date: Date;
  total: number;
  quotas: number;
  type_document: string;
  code_document: string;
  sale_status: string;
  created_at: Date;
  updated_at?: Date;
  id_user: string;
}
