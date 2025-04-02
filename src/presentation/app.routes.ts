import { Router } from "express";
import { ProductRoutes } from "./product/product.routes";
import { UserRoutes } from "./user/user.routes";
import { UbigeoRoutes } from "./ubigeo/ubigeo.routes";
import { SaleRoutes } from "./sale/sale.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/product", ProductRoutes.routes);
    router.use("/api/sale", SaleRoutes.routes);
    router.use("/api/ubigeo", UbigeoRoutes.routes);
    router.use("/api/user", UserRoutes.routes);
    return router;
  }
}
