import { ProductIF } from "./product.interface";

export interface InventoryIF {
  id_inventory: string;
  product: ProductIF;
  quantity: number;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
}
