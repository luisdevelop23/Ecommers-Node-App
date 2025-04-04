import { RoleDataSource } from "../../domain/datasource/role.datasource";
import { RoleDto } from "../../domain/dto/role.dto";
import { RoleEntity } from "../../domain/entity/role.entity";
import { RoleRepository } from "../../domain/repository/role.repository";

export class RoleRepositoryImpl implements RoleRepository {
  constructor(private readonly datasource: RoleDataSource) {}
  async getRoles(): Promise<RoleEntity[]> {
    return await this.datasource.getRoles();
  }
  async getRole(id: string): Promise<RoleEntity> {
    return await this.datasource.getRole(id);
  }
  async createRole(role: RoleDto): Promise<RoleEntity> {
    return await this.datasource.createRole(role);
  }
  async updateRole(id: string, role: RoleDto): Promise<RoleEntity> {
    return await this.datasource.updateRole(id, role);
  }
  async deleteRole(id: string): Promise<RoleEntity> {
    return await this.datasource.deleteRole(id);
  }
}
