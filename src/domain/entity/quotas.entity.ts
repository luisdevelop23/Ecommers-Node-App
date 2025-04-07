import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { QuotasIF } from "../interface/quotas.interface";
import { SaleEntity } from "./sale.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: "quotas" })
export class QuotasEntity implements QuotasIF {
  @PrimaryGeneratedColumn("uuid")
  id_quotas: string;

  @Column({ name: "number_quota" })
  number_quota: number;

  @Column({ name: "price" })
  price: number;

  @Column({ name: "type_payment" })
  type_payment: string;

  @Column({ name: "date_paid" })
  date_paid: Date;

  @Column({ name: "receipt_number" })
  receipt_number: string;

  @Column({ name: "created_date" })
  created_date: Date;

  @Column({ name: "updated_date", nullable: true })
  updated_date?: Date;

  @Column({ name: "status", default: true })
  status?: boolean;

  @ManyToOne(() => SaleEntity)
  @JoinColumn({ name: "id_sale" })
  sale: SaleEntity;

  @Column({ name: "id_sale" })
  id_sale: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user: UserEntity;

  @Column({ name: "id_user" })
  id_user: string;

  constructor(params: QuotasIF) {
    if (!params) return;
    this.id_quotas = params.id_quotas;
    this.number_quota = params.number_quota;
    this.price = params.price;
    this.type_payment = params.type_payment;
    this.date_paid = params.date_paid;
    this.receipt_number = params.receipt_number;
    this.created_date = params.created_date;
    this.updated_date = params.updated_date;
    this.status = params.status;
    this.id_sale = params.sale.id_sale;
    this.id_user = params.user.id_user;
  }
}
