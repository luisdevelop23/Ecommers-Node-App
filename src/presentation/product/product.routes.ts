import { Router } from "express";
import { ProductDataSourceImpl } from "../../infrastructure/datasource/product.datasource.impl";
import { ProductRepositoryImpl } from "../../infrastructure/repository/product.repository.impl";
import { ProductController } from "./product.controller";
import { logEndpointWithStatus } from "../../middleware/log.middleware";

export class ProductRoutes {
  static get routes(): Router {
    const router = Router();
    const productDataSource = new ProductDataSourceImpl();
    const ProductRepository = new ProductRepositoryImpl(productDataSource);
    const productController = new ProductController(ProductRepository);
    router.use(logEndpointWithStatus);
    router.get("/newcod", productController.getNewCod);
    router.get("/:id", productController.getProduct);
    router.get("/", productController.getProducts);
    router.post("/", productController.createProduct);
    router.put("/:id", productController.updateProduct);
    router.delete("/:id", productController.deleteProduct);
    return router;
  }
}
