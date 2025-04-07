import { ProductIF } from "../interface/product.interface";

export class InventoryDto {
  id_inventory: string;
  quantity: number;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
  product: ProductIF;

  constructor(props: { [key: string]: any }) {
    this.id_inventory = props.id_inventory;
    this.quantity = props.quantity;
    this.created_date = new Date();
    this.status = props.status;
    this.product = {id_product: props.product.id_product} as ProductIF;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = ["quantity", "product"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    return [true, "", new InventoryDto(props)];
  }
  static update(props: { [key: string]: any }) {
    const requiredFields = ["quantity"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const validatedProps = {
      quantity: Number(props.quantity),
      status: Boolean(props.status),
      product: { id_product: String(props.product.id_product) } as ProductIF,
    };
    return [true, "", new InventoryDto(props)];
  }
}
