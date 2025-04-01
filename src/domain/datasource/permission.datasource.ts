import { PermissionDto } from "../entity/permission.dto";
import { PermissionEntity } from "../entity/permission.entity";

export abstract class PermissionDatasource {
    abstract getPermissions(): Promise<PermissionEntity[]>
    abstract getPermissionById(id: string): Promise<PermissionEntity>
    abstract createPermission(permission: PermissionDto): Promise<PermissionEntity>
    abstract updatePermission(id:string, permission: PermissionDto): Promise<PermissionEntity>
    abstract deletePermission(id: string): Promise<PermissionEntity>
}
