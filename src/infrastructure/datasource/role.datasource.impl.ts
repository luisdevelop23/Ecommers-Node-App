import { RoleDataSource } from "../../domain/datasource/role.datasource";
import { RoleDto } from "../../domain/dto/role.dto";
import { RoleEntity } from "../../domain/entity/role.entity";
import { generateCode } from "../../helpers/generate_code";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class RoleDatasourceImpl implements RoleDataSource {
  private repository = TypeOrmCustomize.getRepository(RoleEntity);
  async getRoles(): Promise<RoleEntity[]> {
    return await this.repository.find({
      where: {
        status: true,
      },
    });
  }
  async getRole(id: string): Promise<RoleEntity> {
    const role = await this.repository.findOne({
      where: { id_role: id },
    });
    if (!role) {
      throw new Error("Role no encontrado");
    }
    return role;
  }
  async createRole(role: RoleDto): Promise<RoleEntity> {
    console.log("desde impl role",role)
    const newRole = await this.repository.create({
      ...role,
      id_role: await generateCode(this.repository, "R", "id_role"),
    });
    return this.repository.save(newRole);
  }
  async updateRole(id: string, role: RoleDto): Promise<RoleEntity> {
    const existingRole = await this.repository.findOne({
        where: { id_role: id },
    });
    if (!existingRole) {
        throw new Error("Role no encontrado");
    }
   Object.assign(existingRole, {
       ...role,
       id_role: existingRole.id_role,
       updated_date: new Date(),
   });

    return this.repository.save(existingRole);
}

  async deleteRole(id: string): Promise<RoleEntity> {
    const roleToDelete = await this.repository.findOne({
      where: { id_role: id },
    });
    if (!roleToDelete) {
      throw new Error("Role no encontrado");
    }
    roleToDelete.status = false;
    return this.repository.save(roleToDelete);
  }
}
