import { Router } from "express";
import { SaleDataSourceImpl } from "../../infrastructure/datasource/sale.datasource.impl";
import { SaleRepositoryImpl } from "../../infrastructure/repository/sale.repository.impl";
import { SaleController } from "../sale/sale.controller";
import { SaleDetailDataSourceImpl } from "../../infrastructure/datasource/sale_detail.datasource.impl";
import { SaleDetailRepositoryImpl } from "../../infrastructure/repository/sale_detail.repository.impl";
import { SaleDetailController } from "./sale_detail.controller";

export class SaleDetailRoutes {

    static get routes(): Router {
        const router = Router();
        const saleDetailDataSource = new SaleDetailDataSourceImpl();
        const saleDetailRepository = new SaleDetailRepositoryImpl(saleDetailDataSource);
        const saleDetailController = new SaleDetailController(saleDetailRepository);
        router.get("/", saleDetailController.getSaleDetails);
        router.get("/:id", saleDetailController.getSaleDetail);
        router.post("/", saleDetailController.createSaleDetail);
        router.put("/:id", saleDetailController.updateSaleDetail);
        router.delete("/:id", saleDetailController.deleteSaleDetail);
        return router;
    }
}