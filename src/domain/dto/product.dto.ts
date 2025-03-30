export class ProductDto {
  id_product: string;
  name: string;
  model: string;
  brand: string;
  colors?: string;
  liters?: string;
  km?: string;
  engine?: string;
  description?: string;
  weight?: string;
  tires?: string;
  purchase_price: number;
  sale_price?: number;
  id_user: string;
  status?: boolean;

  constructor(props: { [key: string]: any }) {
    this.id_product = props.id_product;
    this.name = props.name;
    this.model = props.model;
    this.brand = props.brand;
    this.colors = props.colors;
    this.liters = props.liters;
    this.km = props.km;
    this.engine = props.engine;
    this.description = props.description;
    this.weight = props.weight;
    this.tires = props.tires;
    this.purchase_price = props.purchase_price;
    this.sale_price = props.sale_price;
    this.id_user = props.id_user;
    this.status = props.status;
  }

  static create(props: {
    [key: string]: any;
  }): [boolean, string, ProductDto | null] {
    const requiredFields = ["name", "model", "brand"];

    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }

    const validatedProps = {
      name: String(props.name),
      model: String(props.model),
      brand: String(props.brand),
      colors: String(props.colors),
      liters: String(props.liters),
      km: String(props.km),
      engine: String(props.engine),
      description: String(props.description),
      weight: String(props.weight),
      tires: String(props.tires),
      purchase_price: Number(props.purchase_price),
      sale_price: Number(props.sale_price),
      id_user: String(props.id_user),
      status: Boolean(props.status),
    };
    return [true, "No hay errores", new ProductDto(validatedProps)];
  }
}
