import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ProductIF } from "../interface/product.interface";
import { CartDetailEntity } from "./cart_detail.entity";

@Entity({ name: "products" })
export class ProductEntity implements ProductIF {
  
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "code" })
  code: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "price" })
  price: number;

  
  @Column({ name: "family" })
  family: string;
  
  @Column({ name: "category" })
  category: string;
  
  @Column({ name: "subcategory" })
  subcategory: string;
  
  @Column({ name: "brand" })
  brand: string;
  
  @Column({ name: "model" })
  model: string;
  
  @Column({ name: "description" })
  description: string;
  
  @Column({ name: "image" })
  image: string;
  
  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;
  
  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @Column({ name: "state", default: true })
  state?: boolean;

  @OneToMany(
    () => CartDetailEntity,
    (cartDetail: CartDetailEntity) => cartDetail.product
  )
  products: CartDetailEntity[];

  constructor(product?: ProductIF) {
    if (!product) return;
    const {
      id,
      code,
      name,
      price,
      family,
      category,
      subcategory,
      brand,
      model,
      description,
      image,
      state,
    } = product;
    this.id = id;
    this.code = code;
    this.name = name;
    this.price = price;
    this.family = family;
    this.category = category;
    this.subcategory = subcategory;
    this.brand = brand;
    this.model = model;
    this.description = description;
    this.image = image;
    this.state = state;
  }
}
