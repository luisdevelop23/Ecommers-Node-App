export class UserDto {
  id?: string;
  name: string;
  surnames: string;
  dni: string;
  user_name?: string;
  password?: string;
  email?: string;
  img_profile?: string;
  id_role?: string;
  created_at?: Date;
  updated_at?: Date;
  status?: boolean;

  constructor(props: { [key: string]: any }) {
    this.id = props.id;
    this.name = props.name;
    this.surnames = props.surnames;
    this.dni = props.dni;
    this.user_name = props.user_name;
    this.password = props.password;
    this.email = props.email;
    this.img_profile = props.img_profile;
    this.id_role = props.id_role;
    this.status = props.status;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = ["name", "surnames", "dni"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      name: String(props.name),
      surnames: String(props.surnames),
      dni: String(props.dni),
      user_name: String(props.user_name),
      password: String(props.password),
      email: String(props.email),
      img_profile: String(props.img_profile),
      id_role: String(props.id_role),
      status: Boolean(props.status),
    };
    return [true, "", new UserDto(valitedProps)];
  }
}
