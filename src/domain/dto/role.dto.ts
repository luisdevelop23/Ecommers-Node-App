import { UserIF } from "../interface/user.interface";

export class RoleDto {
  id_role: string;
  name: string;
  fl_dashboard: boolean;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
  user?: UserIF;

  constructor(props: { [key: string]: any }) {
    this.id_role = props.id_role;
    this.name = props.name;
    this.fl_dashboard = props.fl_dashboard;
    this.created_date = new Date();
    //   this.updated_date = props.updated_date;
    this.status = props.status;
    this.user = { id_user: props.user.id_user } as UserIF;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = ["name", "fl_dashboard", "status"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      name: String(props.name),
      fl_dashboard: Boolean(props.fl_dashboard),
      status: Boolean(props.status),
      user: { id_user: String(props.user.id_user) } as UserIF,
    };
    return [true, "", new RoleDto(valitedProps)];
  }
  static update(props: { [key: string]: any }) {
    return [true, "", new RoleDto(props)];
  }
}
