import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";
import { UserIF } from "../interface/user.interface";

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

  @Column({ name: "user_name", nullable: true, default: null })
  user_name?: string;

  @Column({ name: "password", nullable: true, default: null })
  password?: string;

  @Column({ name: "email", nullable: true, default: null })
  email?: string;

  @Column({ name: "img_profile", nullable: true, default: null })
  img_profile?: string;

  @Column({ name: "id_role", nullable: true, default: null })
  id_role?: string;

  @Column({ name: "created_date", nullable: false })
  created_date: Date;

  @Column({ name: "updated_date", nullable: true, default: null })
  updated_date?: Date;

  @Column({ name: "status", default: true })
  status?: boolean;
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
    this.status = params.status;
  }
}
