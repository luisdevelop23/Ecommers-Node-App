import { Router } from "express";
import { ProductRoutes } from "./product/product.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/product", ProductRoutes.routes);
    return router;
  }
}
