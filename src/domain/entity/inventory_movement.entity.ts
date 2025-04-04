import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { InventoryMovementIF } from "../interface/inventory_movement.interface";
import { ProductEntity } from "./product.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: "inventory_movement" })
export class InventoryMovementEntity implements InventoryMovementIF {
  @PrimaryGeneratedColumn("uuid")
  id_inventory_movement: string;

  @Column({ name: "movement_type" })
  movement_type: string;

  @Column({ name: "quantity" })
  quantity: number;

  @Column({ name: "reference" })
  reference: string;

  @Column({ name: "movement_date" })
  movement_date: Date;

  @Column({ name: "created_date" })
  created_date: Date;

  @Column({ name: "updated_date", nullable: true })
  updated_date?: Date;

  @Column({ name: "status", default: true })
  status?: boolean;

  @Column({ name: "description" })
  description?: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user: UserEntity;

  @Column({ name: "id_user" })
  id_user: string;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: "id_product" })
  product: ProductEntity;

  @Column({ name: "id_product" })
  id_product: string;

  constructor(params: InventoryMovementIF) {
    if (!params) return;
    this.id_inventory_movement = params.id_inventory_movement;
    this.movement_type = params.movement_type;
    this.quantity = params.quantity;
    this.reference = params.reference;
    this.movement_date = params.movement_date;
    this.created_date = params.created_date;
    this.updated_date = params.updated_date;
    this.status = params.status;
    this.description = params.description;
    this.id_user = params.user.id_user;
    this.id_product = params.product.id_product;
  }
}
