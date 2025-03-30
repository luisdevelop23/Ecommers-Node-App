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
import { UserIF } from "../interface/user.interface";
import { ProductEntity } from "./product.entity";
import { PublicationEntity } from "./publication.entity";
import { PublicationPhotoEntity } from "./publication_photo.entity";
import { CustomerEntity } from "./customer.entity";

@Entity("user")
export class UserEntity implements UserIF {
  @PrimaryGeneratedColumn("uuid")
  id_user: string;

  @Column({ name: "names" })
  name: string;

  @Column({ name: "surnames" })
  surnames: string;

  @Column({ name: "dni" })
  dni: string;

  @Column({ name: "user_name", nullable: false })
  user_name: string;

  @Column({ name: "password", nullable: false })
  password: string;

  @Column({ name: "email", nullable: false })
  email: string;

  @Column({ name: "img_profile" })
  img_profile: string;

  @Column({ name: "id_role", nullable: false })
  id_role: string;

  @CreateDateColumn({ name: "created_at", nullable: false })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: false })
  updated_at: Date;


  constructor(params: UserIF) {
    if (!params) return;
    this.name = params.name;
    this.surnames = params.surnames;
    this.dni = params.dni;
    this.user_name = params.user_name;
    this.password = params.password;
    this.email = params.email;
    this.img_profile = params.img_profile;
    this.id_role = params.id_role;
  }
}
