import { Router } from "express";
import { PermissionDatasourceImpl } from "../../infrastructure/datasource/permission.datasource.impl";
import { PermissionRepositoryImpl } from "../../infrastructure/repository/permission.repository";
import { PermissionController } from "./permission.controller";
import { logEndpointWithStatus } from "../../middleware/log.middleware";

export class PermissionRoutes{
    static get routes(): Router{
        const router = Router()
        const permissionDatasource = new PermissionDatasourceImpl()
        const permissionRepository = new PermissionRepositoryImpl(permissionDatasource)
        const permissionController = new PermissionController(permissionRepository)
        router.use(logEndpointWithStatus);
        router.get("/",permissionController.getPermissions)
        router.get("/:id",permissionController.getPermissionById)
        router.post("/",permissionController.createPermission)
        router.put("/:id",permissionController.updatePermission)
        router.delete("/:id",permissionController.deletePermission)
        return router
    }
}