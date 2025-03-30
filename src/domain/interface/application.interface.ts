export interface AplicationIF {
  id_aplication: string;
  reason: string;
  name: string;
  surnames: string;
  dni: string;
  email?: string;
  phone?: string;
  adress?: string;
  category?: string;
  brand?: string;
  department?: boolean;
  description?: string;
  created_at: Date;
  updated_at?: Date;
  status?: boolean;
}
