import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

  @Column({ name: "status", default: true })
  status: boolean;

  @OneToOne(() => RoleEntity)
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
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
    this.status = params.status;
  }
}
