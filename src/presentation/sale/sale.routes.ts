import { Router } from "express";
import { SaleDataSourceImpl } from "../../infrastructure/datasource/sale.datasource.impl";
import { SaleRepositoryImpl } from "../../infrastructure/repository/sale.repository.impl";
import { SaleController } from "./sale.controller";


export class SaleRoutes {
    static get routes(): Router {
        const router = Router();
        const saleDataSource = new SaleDataSourceImpl();
        const saleRepository = new SaleRepositoryImpl(saleDataSource);
        const saleController = new SaleController(saleRepository);
        router.get("/", saleController.getSales);
        router.get("/:id", saleController.getSale);
        router.post("/", saleController.createSale);
        router.put("/:id", saleController.updateSale);
        router.delete("/:id", saleController.deleteSale);
        return router;
    }
}