import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from "typeorm";
import { BrandIF } from "../interface/brand.interface";
import { UserEntity } from "./user.entity";

@Entity({ name: "brand" })
export class BrandEntity implements BrandIF {
  @PrimaryColumn("uuid")
  id_brand: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "url_image" })
  url_image: string;

  @Column({ name: "created_date" })
  created_date: Date;

  @Column({ name: "updated_date", nullable: true })
  updated_date?: Date;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user: UserEntity;

  @Column({ name: "id_user" })
  id_user: string;

  constructor(params: BrandIF) {
    if (!params) return;
    this.id_brand = params.id_brand;
    this.name = params.name;
    this.id_user = params.user.id_user;
    this.url_image = params.url_image;
  }
}
