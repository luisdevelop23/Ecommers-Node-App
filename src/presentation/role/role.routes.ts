import { Router } from "express";
import { RoleDatasourceImpl } from "../../infrastructure/datasource/role.datasource.impl";
import { RoleRepositoryImpl } from "../../infrastructure/repository/role.repository.impl";
import { RoleController } from "./role.controller";
import { logEndpointWithStatus } from "../../middleware/log.middleware";

export class RoleRoutes {
  static get routes(): Router {
    const router = Router();
    const roleDataSource = new RoleDatasourceImpl();
    const RoleRepository = new RoleRepositoryImpl(roleDataSource);
    const roleController = new RoleController(RoleRepository);
    router.use(logEndpointWithStatus);
    router.get("/", roleController.getRoles);
    router.get("/:id", roleController.getRole);
    router.post("/", roleController.createRole);
    router.put("/:id", roleController.updateRole);
    router.delete("/:id", roleController.deleteRole);
    return router;
  }
}
