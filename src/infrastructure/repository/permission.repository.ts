import { PermissionDatasource } from "../../domain/datasource/permission.datasource";
import { PermissionDto } from "../../domain/dto/permission.dto";
import { PermissionEntity } from "../../domain/entity/permission.entity";
import { PermissionRepository } from "../../domain/repository/permission.repository";

export class PermissionRepositoryImpl implements PermissionRepository{
    constructor(private readonly datasource: PermissionDatasource){ }
    async getPermissions(): Promise<PermissionEntity[]> {
        return this.datasource.getPermissions()
    }
    async getPermissionById(id: string): Promise<PermissionEntity> {
        return this.datasource.getPermissionById(id)
    }
    async createPermission(permission: PermissionDto): Promise<PermissionEntity> {
        return this.datasource.createPermission(permission)
    }
    async updatePermission(id: string, permission: PermissionDto): Promise<PermissionEntity> {
        return this.datasource.updatePermission(id,permission)
    }
    async deletePermission(id: string): Promise<PermissionEntity> {
        return this.datasource.deletePermission(id)
    }

}