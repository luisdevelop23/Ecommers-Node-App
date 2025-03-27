import { Router } from "express";
import { ProductDataSourceImpl } from "../../infrastructure/datasource/product.datasource.impl";
import { ProductRepositoryImpl } from "../../infrastructure/repository/product.repository.impl";
import { ProductController } from "./product.controller";

export class ProductRoutes{
    static get routes(): Router {
        const router = Router();
        const productDataSource = new ProductDataSourceImpl();
        const ProductRepository = new ProductRepositoryImpl(productDataSource);
        const productController = new ProductController(ProductRepository);
        router.get("/", productController.getProducts);
        router.post("/", productController.createProduct);
        return router;
      }
}