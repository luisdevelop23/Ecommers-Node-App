import { RoleIF } from "../interface/role.interface";

export class PermissionDto {
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
  role: RoleIF;

  constructor(props: { [key: string]: any }) {
    this.id_permission = props.id_permission;
    this.name = props.name;
    this.view = props.view;
    this.create = props.create;
    this.update = props.update;
    this.delete = props.delete;
    this.menu = props.menu;
    this.created_date = new Date();
    // this.updated_date = props.updated_date;
    this.status = props.status;
    this.role = { id_role: props.role.id_role } as RoleIF;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = ["name", "status", "role"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    return [true, "", new PermissionDto(props)];
  }
  static update(props: { [key: string]: any }) {
    return [true, "", new PermissionDto(props)];
  }
}
