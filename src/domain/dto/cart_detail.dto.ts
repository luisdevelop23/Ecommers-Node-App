export class CartDetailDto {
  id?: string;
  product_id?: string;
  cant?: number;
  user_id?: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(props: { [key: string]: any }) {
    this.id = props.id;
    this.product_id = props.product_id;
    this.cant = props.cant;
    this.user_id = props.user_id;
  }

  static create(props: {
    [key: string]: any;
  }): [boolean, string, CartDetailDto | null] {
    const requiredFields = ["product_id", "cant", "user_id"];

    for (let field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }

    const validationProps = {
      product_id: String(props.product_id),
      cant: Number(props.cant),
      user_id: String(props.user_id),
    };
    return [true, "No hay Errores", new CartDetailDto(validationProps)];
  }
}
