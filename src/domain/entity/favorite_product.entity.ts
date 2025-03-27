import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { FavoriteProductIF } from "../interface/favorite_product.interface";
import { CustomersEntity } from "./customers.entity";
import { ProductEntity } from "./product.entity";

@Entity("favorite_products")
export class FavoriteProductEntity implements FavoriteProductIF {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @ManyToOne(() => ProductEntity, (product: ProductEntity) => product.id)
  @JoinColumn({ name: "product_id" })
  product: ProductEntity;

  @Column({ name: "product_id" })
  product_id: string;

  @ManyToOne(() => CustomersEntity, (user: CustomersEntity) => user.favorites)
  @JoinColumn({ name: "user_id" })
  user: CustomersEntity;

  @Column({ name: "user_id" })
  user_id: string;
  constructor(params: FavoriteProductIF) {
    if (!params) return;
    this.id = params.id;
    this.product_id = params.product.id;
    this.user_id = params.user.id;
  }
}
