import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { RoleIF } from "../interface/role.interface";
import { UserEntity } from "./user.entity";

@Entity({ name: "role" })
export class RoleEntity implements RoleIF {
  @PrimaryGeneratedColumn("uuid")
  id_role: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "fl_dashboard" })
  fl_dashboard: boolean;

  @Column({ name: "created_date" })
  created_date: Date;

  @Column({ name: "updated_date", nullable: true })
  updated_date?: Date;

  @Column({ name: "status", default: true })
  status?: boolean;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user: UserEntity;

  @Column({ name: "id_user" })
  id_user: string;

  constructor(params: RoleIF) {
    if (!params) return;
    this.id_role = params.id_role;
    this.name = params.name;
    this.fl_dashboard = params.fl_dashboard;
    this.created_date = params.created_date;
    this.updated_date = params.updated_date;
    this.status = params.status;
    this.id_user = params.user.id_user;
  }
}
