import { UserIF } from "./user.interface";

export interface RoleIF {
  id_role: string;
  name: string;
  fl_dashboard: boolean;
  created_at: Date;
  updated_at: Date;
  status?: boolean;
  user: UserIF;
}
