import { UserIF } from "./user.interface";

export interface RoleIF {
  id_role: string;
  name: string;
  fl_dashboard: boolean;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
  user: UserIF;
}
