import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { BrandIF } from "../interface/brand.interface";

@Entity({ name: "brand" })
export class BrandEntity implements BrandIF {
  @PrimaryColumn("uuid")
  id_brand: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "id_user" })
  id_user: string;

  @Column({ name: "url_image" })
  url_image: string;

  @CreateDateColumn({ name: "created_date" })
  created_date: Date;

  @UpdateDateColumn({ name: "updated_date" })
  updated_date: Date;

  constructor(params: BrandIF) {
    if (!params) return;
    this.id_brand = params.id_brand;
    this.name = params.name;
    this.id_user = params.id_user;
    this.url_image = params.url_image;
  }
}
