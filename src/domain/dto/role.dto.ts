export class RoleDto {
  id_role: string;
  name: string;
  fl_dashboard: boolean;
  created_at: Date;
  updated_at: Date;
  status?: boolean;

  constructor(props: { [key: string]: any }) {
    this.id_role = props.id_role;
    this.name = props.name;
    this.fl_dashboard = props.fl_dashboard;
    //   this.created_at = props.created_at;
    //   this.updated_at = props.updated_at;
    this.status = props.status;
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
    };
    return [true, "", new RoleDto(valitedProps)];
  }
}
