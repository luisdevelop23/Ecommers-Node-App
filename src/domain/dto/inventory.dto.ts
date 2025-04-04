export class InventoryDto {
  id_inventory: string;
  quantity: number;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
  id_product: string;

  constructor(props: { [key: string]: any }) {
    this.id_inventory = props.id_inventory;
    this.quantity = props.quantity;
      this.created_date = new Date();
    //   this.updated_date = props.updated_date;
    this.status = props.status;
    this.id_product = props.id_product;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = ["quantity", "id_product"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    return new InventoryDto(props);
  }
}
