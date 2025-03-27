export class UserDto {
  id?: string;
  name: string;
  surnames: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(props: { [key: string]: any }) {
    this.id = props.id;
    this.name = props.name;
    this.surnames = props.surnames;
    this.email = props.email;
    this.password = props.password;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = ["email", "password"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      name: String(props.name),
      surnames: String(props.surnames),
      email: String(props.email),
      password: String(props.password),
    };
    return [true, "", new UserDto(valitedProps)];
  }
}
