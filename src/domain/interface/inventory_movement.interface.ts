import { ProductIF } from "./product.interface";
import { UserIF } from "./user.interface";

export interface InventoryMovementIF {
  id_inventory_movement: string;
  product: ProductIF;
  movement_type: string;
  quantity: number;
  reference: string;
  movement_date: Date;
  created_date: Date;
  updated_date?: Date;
  user: UserIF;
  status?: boolean;
  description?: string;
}
