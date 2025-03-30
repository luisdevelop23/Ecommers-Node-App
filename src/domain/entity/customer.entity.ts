import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { customersIF } from "../interface/customer.interface";
import { UserEntity } from "./user.entity";
import { SaleEntity } from "./sale.entity";

@Entity({ name: "customer" })
export class CustomerEntity implements customersIF {
  @PrimaryGeneratedColumn("uuid")
  id_customer: string;

  @Column({ name: "type_customer" })
  type_customer: string;

  @Column({ name: "names" })
  name: string;

  @Column({ name: "surnames" })
  surnames: string;

  @Column({ name: "dni" })
  dni: string;

  @Column({ name: "email" })
  email?: string;

  @Column({ name: "phone" })
  phone?: string;

  @Column({ name: "adress" })
  adress?: string;

  @Column({ name: "id_ubigeo" })
  id_ubigeo?: string;

  @Column({ name: "limit_credit" })
  limit_credit?: number;

  @Column({ name: "balance" })
  balance?: number;

  @Column({ name: "state" })
  state?: boolean;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at?: Date;

  @Column({ name: "status", default: true })
  status?: boolean;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user: UserEntity;

  @Column({ name: "id_user" })
  id_user: string;

  @OneToMany(() => SaleEntity, (sale) => sale.customer)
  sales: SaleEntity[];

  constructor(params: customersIF) {
    if (!params) return;
    this.id_customer = params.id_customer;
    this.type_customer = params.type_customer;
    this.name = params.name;
    this.surnames = params.surnames;
    this.dni = params.dni;
    this.email = params.email;
    this.phone = params.phone;
    this.adress = params.adress;
    this.id_ubigeo = params.id_ubigeo;
    this.limit_credit = params.limit_credit;
    this.balance = params.balance;
    this.state = params.state;
    this.status = params.status;
    this.id_user = params.user.id_user;
  }
}
