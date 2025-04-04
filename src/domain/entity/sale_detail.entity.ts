import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { SaleDetailIF } from "../interface/sale_detail.interface";
import { ProductEntity } from "./product.entity";
import { SaleEntity } from "./sale.entity";

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

  @Column({ name: "created_date" })
  created_date: Date;

  @Column({ name: "updated_date" })
  updated_date?: Date;

  @Column({ name: "status", default: true })
  status?: boolean;


  @ManyToOne(() => SaleEntity)
  @JoinColumn({ name: "id_sale" })
  sale: SaleEntity;

  @Column({ name: "id_sale" })
  id_sale: string

  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: "id_product" })
  product: ProductEntity;

  @Column({ name: "id_product" })
  id_product: string

  constructor(params: SaleDetailIF) {
    if (!params) return;
    this.id_sale_detail = params.id_sale_detail;
    this.quantity = params.quantity;
    this.price = params.price;
    this.discount = params.discount;
    this.sub_total = params.sub_total;
    this.total = params.total;
    this.created_date = params.created_date;
    this.updated_date = params.updated_date;
    this.status = params.status;
    this.id_sale = params.sale.id_sale;
    this.id_product = params.product.id_product;
  }
}
