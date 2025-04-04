import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { SaleIF } from "../interface/sale.interface";
import { CustomerEntity } from "./customer.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: "sales" })
export class SaleEntity implements SaleIF {
  @PrimaryGeneratedColumn("uuid")
  id_sale: string;

  @Column({ name: "sale_date" })
  sale_date: Date;

  @Column({ name: "total" })
  total: number;

  @Column({ name: "quotas" })
  quotas: number;

  @Column({ name: "type_document" })
  type_document: string;

  @Column({ name: "code_document" })
  code_document: string;

  @Column({ name: "sale_status" })
  sale_status: string;

  @Column({ name: "created_at" })
  created_at: Date;

  @Column({ name: "updated_at" })
  updated_at?: Date ;

  @Column({ name: "status", default: true })
  status?: boolean;

  @ManyToOne(() => CustomerEntity, (customer) => customer.sales)
  @JoinColumn({ name: "id_customer" })
  customer: CustomerEntity;

  @Column({ name: "id_customer" })
  id_customer?: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user: UserEntity;

  @Column({ name: "id_user" })
  id_user?: string;

  constructor(params: SaleIF) {
    if (!params) return;
    this.id_sale = params.id_sale;
    this.sale_date = params.sale_date;
    this.total = params.total;
    this.quotas = params.quotas;
    this.type_document = params.type_document;
    this.code_document = params.code_document;
    this.sale_status = params.sale_status;
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
    this.status = params.status;
    this.id_customer = params.customer.id_customer;
    this.id_user = params.user.id_user;
  }
}
