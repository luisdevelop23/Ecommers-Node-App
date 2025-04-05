import { PermissionDatasource } from "../../domain/datasource/permission.datasource";
import { PermissionDto } from "../../domain/dto/permission.dto";
import { PermissionEntity } from "../../domain/entity/permission.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class PermissionDatasourceImpl implements PermissionDatasource{
    private repository = TypeOrmCustomize.getRepository(PermissionEntity)
    async getPermissions(): Promise<PermissionEntity[]> {
        return this.repository.find()
    }
    async getPermissionById(id: string): Promise<PermissionEntity> {
    const permission = await this.repository.findOne({
        where: {id_permission:id}
    })
    if(!permission){
        throw new Error("Permission no encontrado")
    }
    return permission
    }
    async createPermission(permission: PermissionDto): Promise<PermissionEntity> {
        const newPermission = this.repository.create(permission)
        return this.repository.save(newPermission)
    }
    async updatePermission(id: string, permission: PermissionDto): Promise<PermissionEntity> {
        const permissionToUpdate = await this.repository.findOne({
            where: {id_permission:id}
        })
        if(!permissionToUpdate){
            throw new Error("Permission no encontrado")
        }
        Object.assign(permissionToUpdate, {
            ...permission,
            updated_at: new Date()
        })
        return this.repository.save(permissionToUpdate)
    }
    async deletePermission(id: string): Promise<PermissionEntity> {
        const permissionToUpdate = await this.repository.findOne({
            where: {id_permission:id}
        })
        if(!permissionToUpdate){
            throw new Error("Permission no encontrado")
        }
        permissionToUpdate.status = false
        return this.repository.save(permissionToUpdate)
    }

}