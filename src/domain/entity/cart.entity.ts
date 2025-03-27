import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { CartIF } from "../interface/cart.interface";
import { CartDetailEntity } from "./cart_detail.entity";
import { CustomersEntity } from "./customers.entity";

@Entity("cart")
export class CartEntity implements CartIF {

  @PrimaryGeneratedColumn("uuid")
  id: string;


  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @OneToMany(() => CartDetailEntity, (cartDetail) => cartDetail.cart, { cascade: true })
  cart_details: CartDetailEntity[];

  
  @OneToOne(()=> CustomersEntity,(user: CustomersEntity) => user.id)
  @JoinColumn({ name: "user_id" })
  user: CustomersEntity

  @Column({ name: "user_id" })
  user_id: string;

  constructor(params?: CartIF) {
    if (!params) return;
    this.id = params.id;
    this.user_id = params.user.id;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
  }
}
