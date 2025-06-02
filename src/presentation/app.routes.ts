import { Router } from "express";
import { ProductRoutes } from "./product/product.routes";
import { UserRoutes } from "./user/user.routes";
import { UbigeoRoutes } from "./ubigeo/ubigeo.routes";
import { SaleRoutes } from "./sale/sale.routes";
import { SaleDetailRoutes } from "./sale_detail/sale_detail.routes";
import { QuotasRoutes } from "./quotas/quotas.routes";
import { RoleRoutes } from "./role/role.routes";
import { PermissionRoutes } from "./permission/permission.routes";
import { InventoryRoutes } from "./inventory/inventory.routes";
import { InventoryMovementRoutes } from "./inventory_movement/inventory_movement.routes";
import { AuthRoutes } from "./auth/auth.routes";
import { authenticate } from "../middleware/authMiddleware";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    // ? rutas publicas
    router.use("/api/auth", AuthRoutes.Routes);

    // ? aplicamos el middlewere de autenticacion a las rutas protegidas
    router.use(authenticate);

    router.use("/api/inventory", InventoryRoutes.routes);
    router.use("/api/movement", InventoryMovementRoutes.routes);
    router.use("/api/permission", PermissionRoutes.routes);
    router.use("/api/product", ProductRoutes.routes);
    router.use("/api/quotas", QuotasRoutes.routes);
    router.use("/api/role", RoleRoutes.routes);
    router.use("/api/saledetail", SaleDetailRoutes.routes);
    router.use("/api/sale", SaleRoutes.routes);
    router.use("/api/ubigeo", UbigeoRoutes.routes);
    router.use("/api/user", UserRoutes.routes);
    return router;
  }
}
