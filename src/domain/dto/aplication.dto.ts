export class AplicationDto {
  id_aplication: string;
  reason: string;
  name: string;
  surnames: string;
  dni: string;
  email?: string;
  phone?: string;
  adress?: string;
  category?: string;
  brand?: string;
  department?: boolean;
  description?: string;
  created_at: Date;
  updated_at?: Date;
  status?: boolean;

  constructor(props: { [key: string]: any }) {
    this.id_aplication = props.id_aplication;
    this.reason = props.reason;
    this.name = props.name;
    this.surnames = props.surnames;
    this.dni = props.dni;
    this.email = props.email;
    this.phone = props.phone;
    this.adress = props.adress;
    this.category = props.category;
    this.brand = props.brand;
    this.department = props.department;
    this.description = props.description;
    this.created_at = new Date();
    // this.updated_at = props.updated_at;
    this.status = props.status;
  }
  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "reason",
      "name",
      "surnames",
      "dni",
      "email",
      "phone",
      "adress",
      "category",
      "brand",
      "department",
      "description",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    return new AplicationDto(props);
  }
}
