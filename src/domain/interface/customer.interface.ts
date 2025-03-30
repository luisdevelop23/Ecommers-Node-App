export interface customersIF {
  id_customer: string;
  type_customer: string;
  name: string;
  surnames: string;
  dni: string;
  email?: string;
  phone?: string;
  adress?: string;
  id_ubigeo?: string;
  limit_credit?: number;
  balance?: number;
  state?: boolean;
  created_at: Date;
  updated_at?: Date;
  id_user?: string;
  status?: boolean;
}
