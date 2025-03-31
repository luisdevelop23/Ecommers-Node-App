export class BrandDto {
  id_brand: string;
  name: string;
  url_image: string;
  created_date: Date;
  updated_date?: Date;
  id_user: string;

  constructor(props: { [key: string]: any }) {
    this.id_brand = props.id_brand;
    this.name = props.name;
    this.url_image = props.url_image;
    // this.created_date = props.created_date;
    // this.updated_date = props.updated_date;
    this.id_user = props.id_user;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = ["name", "url_image", "id_user"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    return new BrandDto(props);
  }
}
