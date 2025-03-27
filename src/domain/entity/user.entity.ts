import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CustomersIF } from "../interface/customers.interface";
import { UserIF } from "../interface/user.interface";

@Entity("customers")
export class UserEntity implements UserIF {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: "names" })
  name: string;
 
  @Column({ name: "surnames" })
  surnames: string;
 
  @Column({ name: "email", nullable: false })
  email: string;
 
  @Column({ name: "password", nullable: false })
  password: string;
 
  @CreateDateColumn({ name: "created_at", nullable: false })
  created_at: Date;
 
  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updated_at: Date;

  constructor(params: UserIF) {
    if (!params) return;
    this.name = params.name;
    this.surnames = params.surnames;
    this.email = params.email;
    this.password = params.password;
  }
}
