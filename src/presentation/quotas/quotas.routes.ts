import { Router } from "express";
import { QuotasDataSourceImpl } from "../../infrastructure/datasource/quotas.datasource.impl";
import { QuotasRepositoryImpl } from "../../infrastructure/repository/quotas.repository.impl";
import { QuotasController } from "./quotas.controller";
import { logEndpointWithStatus } from "../../middleware/log.middleware";


export class QuotasRoutes {

    static get routes(): Router {
        const router = Router();
        const quotasDataSource = new QuotasDataSourceImpl();
        const quotasRepository = new QuotasRepositoryImpl(quotasDataSource);
        const quotasController = new QuotasController(quotasRepository);
        router.use(logEndpointWithStatus);
        router.get("/:id/sale", quotasController.getQuotasBySale);
        router.get("/:id", quotasController.getQuotaById);
        router.post("/", quotasController.createQuota);
        router.put("/:id", quotasController.updateQuota);
        router.delete("/:id", quotasController.deleteQuota);
        return router
    }
}