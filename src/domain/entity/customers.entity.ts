import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CustomersIF } from "../interface/customers.interface";
import { CartEntity } from "./cart.entity";
import { FavoriteProductEntity } from "./favorite_product.entity";

@Entity("customers")
export class CustomersEntity implements CustomersIF {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: "names" })
  name?: string;

  @Column({ name: "surnames" })
  surnames?: string;

  @Column({ name: "phone" })
  phone?: string;

  @Column({ name: "address" })
  address?: string;

  @Column({ name: "email", nullable: false })
  email: string;

  @Column({ name: "password", nullable: false })
  password: string;

  @CreateDateColumn({ name: "created_at", nullable: false })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updated_at: Date;

  @OneToOne(() => CartEntity, (cart: CartEntity) => cart.id)
  cart: CartEntity;

  @OneToMany(
    () => FavoriteProductEntity,
    (favorite: FavoriteProductEntity) => favorite.user
  )
  favorites: FavoriteProductEntity[];

  constructor(params: CustomersIF) {
    if (!params) return;
    const { id, name, surnames, email, password } = params;
    this.id = id;
    this.name = name;
    this.surnames = surnames;
    this.email = email;
    this.password = password;
  }
}
