export class PermissionDto {
  id_permission: string;
  name: string;
  view: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
  menu: boolean;
  created_at: Date;
  updated_at: Date;
  status: boolean;

  constructor(props: { [key: string]: any }) {
    this.id_permission = props.id_permission;
    this.name = props.name;
    this.view = props.view;
    this.create = props.create;
    this.update = props.update;
    this.delete = props.delete;
    this.menu = props.menu;
    // this.created_at = props.created_at;
    // this.updated_at = props.updated_at;
    this.status = props.status;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "name",
      "view",
      "create",
      "update",
      "delete",
      "menu",
      "status",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    return [true, "", new PermissionDto(props)];
  }
}
