import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { RoleIF } from "../interface/role.interface";
import { PermissionEntity } from "./permission.entity";
import { UserEntity } from "./user.entity";

@Entity({ name: "role" })
export class RoleEntity implements RoleIF {
  @PrimaryGeneratedColumn("uuid")
  id_role: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "fl_dashboard" })
  fl_dashboard: boolean;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;

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
    this.created_at = params.created_at;
    this.updated_at = params.updated_at;
    this.status = params.status;
    this.id_user = params.user.id_user;
  }
}
