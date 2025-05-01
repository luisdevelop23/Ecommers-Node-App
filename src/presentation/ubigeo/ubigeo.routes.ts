import { Router } from "express";
import { UbigeoDataSourceImpl } from "../../infrastructure/datasource/ubigeo.datasource.impl";
import { UbigeoRepositoryImpl } from "../../infrastructure/repository/ubigeo.repository.impl";
import { UbigeoController } from "./ubigeo.controller";
import { logEndpointWithStatus } from "../../middleware/log.middleware";


export class UbigeoRoutes {

    static get routes(): Router {
        const router = Router();
        const ubigeoDataSource = new UbigeoDataSourceImpl();
        const ubigeoRepository = new UbigeoRepositoryImpl(ubigeoDataSource);
        const ubigeoController = new UbigeoController(ubigeoRepository);
        router.use(logEndpointWithStatus);
        router.get("/:prompt/places", ubigeoController.getUbigeo);
        router.get("/:id", ubigeoController.getUbigeoById);
        return router;
    }
}