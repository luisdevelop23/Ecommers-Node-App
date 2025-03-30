import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { SaleDetailIF } from "../interface/sale_detail.interface";
import { UserEntity } from "./user.entity";
import { SaleEntity } from "./sale.entity";
import { ProductEntity } from "./product.entity";

@Entity({ name: "sale_detail" })
export class SaleDetailEntity implements SaleDetailIF {
  @PrimaryGeneratedColumn("uuid")
  id_sale_detail: string;

  @Column({ name: "quantity" })
  quantity: number;

  @Column({ name: "price" })
  price: number;

  @Column({ name: "discount" })
  discount: number;

  @Column({ name: "sub_total" })
  sub_total: number;

  @Column({ name: "total" })
  total: number;

  @CreateDateColumn({ name: "created_date" })
  created_date: Date;

  @UpdateDateColumn({ name: "updated_date" })
  updated_date: Date;

  @Column({ name: "status", default: true })
  status?: boolean;


  @ManyToOne(() => SaleEntity)
  @JoinColumn({ name: "id_sale" })
  sale: SaleEntity;

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: "id_product" })
  product: ProductEntity;

  
}
