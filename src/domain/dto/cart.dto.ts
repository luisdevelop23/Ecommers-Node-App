export class CartDto {
  id?: string;
  id_cart: string;
  user_id: string;
  created_at: Date;
  update_at: Date;

  constructor(props: { [key: string]: any }) {
    this.id = props.id;
    this.user_id = props.user_id;
  }

  static create(props: {
    [key: string]: any;
  }): [boolean, string, CartDto | null] {
    const requiredFields = ["user_id", "cart_id"];

    for (let field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }

    const validatedProps = {
      cart_id: String(props.cart_id),
      user_id: String(props),
    };

    return [true, "No hay errores", new CartDto(validatedProps)];
  }
}
