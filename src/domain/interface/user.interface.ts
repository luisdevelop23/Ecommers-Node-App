export interface UserIF {
  id_user: string;
  name: string;
  surnames: string;
  dni: string;
  user_name?: string;
  password?: string;
  email?: string;
  img_profile?: string;
  id_role?: string;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
}
