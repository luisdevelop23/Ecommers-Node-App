import { Router } from "express";
import { ProductRoutes } from "./product/product.routes";
import { UserRoutes } from "./user/user.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/user", UserRoutes.routes);
    router.use("/api/product", ProductRoutes.routes);
    return router;
  }
}
