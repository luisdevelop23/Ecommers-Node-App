export class CustomerDto {
  id_customer: string;
  type_customer: string;
  name: string;
  surnames: string;
  dni: string;
  email?: string;
  phone?: string;
  adress?: string;
  id_ubigeo?: string;
  limit_credit?: number;
  balance?: number;
  state?: boolean;
  created_at: Date;
  updated_at?: Date;
  id_user: string;
  status?: boolean;

  constructor(props: { [key: string]: any }) {
    this.id_customer = props.id_customer;
    this.type_customer = props.type_customer;
    this.name = props.name;
    this.surnames = props.surnames;
    this.dni = props.dni;
    this.email = props.email;
    this.phone = props.phone;
    this.adress = props.adress;
    this.id_ubigeo = props.id_ubigeo;
    this.limit_credit = props.limit_credit;
    this.balance = props.balance;
    this.state = props.state;
    // this.created_at = props.created_at;
    // this.updated_at = props.updated_at;
    this.id_user = props.id_user;
    this.status = props.status;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "id_customer",
      "type_customer",
      "name",
      "surnames",
      "dni",
      "id_user",
    ];

    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }

    const valitedProps = {
      id_customer: String(props.id_customer),
      type_customer: String(props.type_customer),
      name: String(props.name),
      surnames: String(props.surnames),
      dni: String(props.dni),
      email: String(props.email),
      phone: String(props.phone),
      adress: String(props.adress),
      id_ubigeo: String(props.id_ubigeo),
      limit_credit: Number(props.limit_credit),
      balance: Number(props.balance),
      state: Boolean(props.state),
      id_user: String(props.id_user),
      status: Boolean(props.status),
    };
    return [true, "", new CustomerDto(valitedProps)];
  }
}
