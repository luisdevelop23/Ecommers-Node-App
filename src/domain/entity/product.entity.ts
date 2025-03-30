import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ProductIF } from "../interface/product.interface";
import { UserEntity } from "./user.entity";
import { PublicationEntity } from "./publication.entity";
import { InventoryEntity } from "./inventory.entity";

@Entity({ name: "products" })
export class ProductEntity implements ProductIF {
  @PrimaryGeneratedColumn("uuid")
  id_product: string;

  @Column({ name: "cod_product", unique: true })
  cod_product: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "model" })
  model: string;

  @Column({ name: "brand" })
  brand: string;

  @Column({ name: "colors" })
  colors?: string;

  @Column({ name: "liters" })
  liters?: string;

  @Column({ name: "km" })
  km?: string;

  @Column({ name: "engine" })
  engine?: string;

  @Column({ name: "description" })
  description?: string;

  @Column({ name: "weight" })
  weight?: string;

  @Column({ name: "tires" })
  tires?: string;

  @Column({ name: "purchase_price" })
  purchase_price: number;

  @Column({ name: "sale_price" })
  sale_price?: number;

  @CreateDateColumn({ name: "created_date" })
  created_date: Date;

  @UpdateDateColumn({ name: "updated_date" })
  updated_date: Date;

  @Column({ name: "status", default: true })
  status?: boolean;

  @ManyToOne(() => UserEntity,  (user: UserEntity) => user.id_user)
  @JoinColumn({ name: "id_user" })
  user: UserEntity;

  @Column({ name: "id_user" })
  id_user: string;

  @OneToMany(() => PublicationEntity, (product) => product.product)
  @JoinColumn({ name: "id_product" })
  publication: PublicationEntity[];

  @OneToOne(() => InventoryEntity, (inventory) => inventory.product)
  @JoinColumn({ name: "id_product" })
  inventory: InventoryEntity;
  


  constructor(params: ProductIF) {
    if (!params) return;
    this.id_product = params.id_product;
    this.name = params.name;
    this.model = params.model;
    this.brand = params.brand;
    this.colors = params.colors;
    this.liters = params.liters;
    this.km = params.km;
    this.engine = params.engine;
    this.description = params.description;
    this.weight = params.weight;
    this.tires = params.tires;
    this.purchase_price = params.purchase_price;
    this.sale_price = params.sale_price;
    this.id_user = params.user.id_user;
    this.status = params.status;
  }
}
