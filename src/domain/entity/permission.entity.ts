import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { PermissionIF } from "../interface/permission.interface";
import { RoleEntity } from "./role.entity";

@Entity({ name: "permission" })
export class PermissionEntity implements PermissionIF {
  @PrimaryGeneratedColumn("uuid")
  id_permission: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "view", default: false })
  view: boolean;

  @Column({ name: "create", default: false })
  create: boolean;

  @Column({ name: "update", default: false })
  update: boolean;

  @Column({ name: "delete", default: false })
  delete: boolean;

  @Column({ name: "menu", default: false })
  menu: boolean;

  @Column({ name: "created_date" })
  created_date: Date;

  @Column({ name: "updated_date", nullable: true })
  updated_date?: Date;

  @Column({ name: "status", default: true })
  status: boolean;

  @ManyToOne(() => RoleEntity)
  @JoinColumn({ name: "id_role" })
  role: RoleEntity;

  @Column({ name: "id_role" })
  id_role: string;

  constructor(params: PermissionIF) {
    if (!params) return;
    this.id_permission = params.id_permission;
    this.name = params.name;
    this.view = params.view;
    this.create = params.create;
    this.update = params.update;
    this.delete = params.delete;
    this.menu = params.menu;
    this.created_date = params.created_date;
    this.updated_date = params.updated_date;
    this.status = params.status;
  }
}
