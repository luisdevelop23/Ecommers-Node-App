
export class ProductDto {
  id?: string;
  code: string;
  name: string;
  price: number;
  family: string;
  category: string;
  subcategory: string;
  brand: string;
  model: string;
  description: string;
  image: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(props: { [key: string]: any }) {
    this.id = props.id;
    this.code = props.code;
    this.name = props.name;
    this.price = props.price;
    this.family = props.family;
    this.category = props.category;
    this.subcategory = props.subcategory;
    this.brand = props.brand;
    this.model = props.model;
    this.description = props.description;
    this.image = props.image;
    // this.created_at = props.created_at;
    // this.updated_at = props.updated_at;
  }

  static create(props: {
    [key: string]: any;
  }): [boolean, string, ProductDto | null] {
    const requiredFields = [
      "code",
      "name",
      "price",
      "category",
      "subcategory",
      "brand",
      "description",
    ];

    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }

    const validatedProps = {
      code: String(props.code).trim(),
      name: String(props.name),
      price: Number(props.price),
      family: String(props.family),
      category: String(props.category),
      subcategory: String(props.subcategory),
      brand: String(props.brand),
      model: String(props.model),
      description: String(props.description),
      image: String(props.image),
    //   created_at: new Date(),
    //   updated_at: new Date(),
    };
    return [true, "No hay errores", new ProductDto(validatedProps)];
  }
}
