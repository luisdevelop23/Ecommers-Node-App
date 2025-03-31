import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { InventoryIF } from "../interface/inventory.interface";
import { UserEntity } from "./user.entity";
import { ProductEntity } from "./product.entity";
import { ProductIF } from "../interface/product.interface";
import { UserIF } from "../interface/user.interface";
import { InventoryMovementEntity } from "./inventory_movement.entity";

@Entity({ name: "inventory" })
export class InventoryEntity implements InventoryIF {
  @PrimaryGeneratedColumn("uuid")
  id_inventory: string;

  @Column({ name: "quantity" })
  quantity: number;

  @CreateDateColumn({ name: "created_date" })
  created_date: Date;

  @UpdateDateColumn({ name: "updated_date" })
  updated_date?: Date;

  @Column({ name: "status", default: true })
  status?: boolean;

  @OneToOne(() => ProductEntity)
  @JoinColumn({ name: "id_inventory" }) 
  product: ProductEntity;


  @Column({ name: "id_product" })
  id_product: string;


  constructor(params: InventoryIF) {
    if(!params) return;
    this.id_inventory = params.id_inventory;
    this.quantity = params.quantity;
    this.created_date = params.created_date;
    this.updated_date = params.updated_date;
    this.status = params.status;
    this.id_product = params.product.id_product;
    this.id_product = params.product.id_product;
  }
}
