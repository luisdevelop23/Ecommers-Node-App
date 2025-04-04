import { RoleDataSource } from "../../domain/datasource/role.datasource";
import { RoleDto } from "../../domain/dto/role.dto";
import { RoleEntity } from "../../domain/entity/role.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class RoleDatasourceImpl implements RoleDataSource {
  private RP = TypeOrmCustomize.getRepository(RoleEntity);
  async getRoles(): Promise<RoleEntity[]> {
    return await this.RP.find({
      where: {
        status: true,
      },
    });
  }
  async getRole(id: string): Promise<RoleEntity> {
    const role = await this.RP.findOne({
      where: { id_role: id },
    });
    if (!role) {
      throw new Error("Role no encontrado");
    }
    return role;
  }
  async createRole(role: RoleDto): Promise<RoleEntity> {
    const newRole = await this.RP.create(role);
    return this.RP.save(newRole);
  }
  async updateRole(id: string, role: RoleDto): Promise<RoleEntity> {
    const existingRole = await this.RP.findOne({
        where: { id_role: id },
    });

    if (!existingRole) {
        throw new Error("Role no encontrado");
    }
    // ? asignacion de datos
    existingRole.name = role.name || existingRole.name;
    existingRole.fl_dashboard = role.fl_dashboard !== undefined ? role.fl_dashboard : existingRole.fl_dashboard;
    existingRole.status = role.status !== undefined ? role.status : existingRole.status;
    existingRole.updated_at = new Date();

    return this.RP.save(existingRole);
}

  async deleteRole(id: string): Promise<RoleEntity> {
    const roleToDelete = await this.RP.findOne({
      where: { id_role: id },
    });
    if (!roleToDelete) {
      throw new Error("Role no encontrado");
    }
    roleToDelete.status = false;
    return this.RP.save(roleToDelete);
  }
}
