export class PermissionIF {
  id_permission: string;
  name: string;
  view: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
  menu: boolean;
  created_date: Date;
  updated_date?: Date;
  status: boolean;
}
