import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CartDetailIF } from "../interface/cart_detail.interface";
import { CartEntity } from "./cart.entity";
import { ProductEntity } from "./product.entity";

@Entity("cart_details")
export class CartDetailEntity implements CartDetailIF {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "cant" })
  cant: number;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @ManyToOne(() => CartEntity, (cart: CartEntity) => cart.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "cart_id" })
  cart: CartEntity;

  @ManyToOne(() => ProductEntity, (product: ProductEntity) => product.id)
  @JoinColumn({ name: "product_id" })
  product: ProductEntity;

  @Column({ name: "product_id" })
  product_id: string;

  constructor(params: CartDetailIF) {
    if (!params) return;
    this.id = params.id;
    this.product_id = params.product.id;
    this.cant = params.cant;
  }
}
