import { ProductIF } from "../interface/product.interface";
import { UserIF } from "../interface/user.interface";

export class InventoryMovementDto {
  id_inventory_movement: string;
  movement_type: string;
  quantity: number;
  reference: string;
  movement_date: Date;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
  description?: string;
  product: ProductIF;
  user: UserIF;

  constructor(props: { [key: string]: any }) {
    this.id_inventory_movement = props.id_inventory_movement;
    this.movement_type = props.movement_type;
    this.quantity = props.quantity;
    this.reference = props.reference;
    this.movement_date = props.movement_date;
    this.created_date = new Date();
    // this.updated_date = props.updated_date;
    this.status = props.status;
    this.description = props.description;
    this.product = { id_product: props.product.id_product } as ProductIF;
    this.user = { id_user: props.user.id_user } as UserIF;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "movement_type",
      "quantity",
      "reference",
      "movement_date",
      "product",
      "user",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      movement_type: String(props.movement_type),
      quantity: Number(props.quantity),
      reference: String(props.reference),
      product: { id_product: String(props.product.id_product) } as ProductIF,
      user: { id_user: String(props.user.id_user) } as UserIF,
    };
    return [true, "", new InventoryMovementDto(props)];
  }
  static update(props: { [key: string]: any }) {
    const requiredFields = [
      "movement_type",
      "quantity",
      "reference",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      movement_type: String(props.movement_type),
      quantity: Number(props.quantity),
      reference: String(props.reference),
      product: { id_product: String(props.product.id_product) } as ProductIF,
      user: { id_user: String(props.user.id_user) } as UserIF,
    };
    return [true, "", new InventoryMovementDto(props)];
  }
}
