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
  id_product: string;
  id_user: string;

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
    this.id_product = props.id_product;
    this.id_user = props.id_user;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "movement_type",
      "quantity",
      "reference",
      "movement_date",
      "id_product",
      "id_user",
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
      movement_date:
        props.movement_date && !isNaN(new Date(props.movement_date).getTime())
          ? new Date(props.movement_date)
          : null,
      id_product: String(props.id_product),
      id_user: String(props.id_user),
    };
    return [true, "", new InventoryMovementDto(valitedProps)];
  }
}
