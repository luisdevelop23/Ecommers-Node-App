import { RoleDto } from "../dto/role.dto";
import { RoleEntity } from "../entity/role.entity";

export abstract class RoleDataSource {
  abstract getRoles(): Promise<RoleEntity[]>;
  abstract getRole(id: string): Promise<RoleEntity>;
  abstract createRole(role: RoleDto): Promise<RoleEntity>;
  abstract updateRole(id: string, role: RoleDto): Promise<RoleEntity>;
  abstract deleteRole(id: string): Promise<RoleEntity>;
}
