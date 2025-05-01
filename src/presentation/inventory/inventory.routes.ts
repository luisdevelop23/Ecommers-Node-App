import { Router } from "express";
import { InventoryDataSourceImpl } from "../../infrastructure/datasource/inventory.datasource.impl";
import { InventoryRepositoryImpl } from "../../infrastructure/repository/inventory.repository.impl";
import { InventoryController } from "./inventory.controller";
import { logEndpointWithStatus } from "../../middleware/log.middleware";

export class InventoryRoutes {
    static get routes(): Router {
        const router = Router();
        const inventoryDataSource = new InventoryDataSourceImpl();
        const inventoryRepository = new InventoryRepositoryImpl(inventoryDataSource);
        const inventoryController = new InventoryController(inventoryRepository);
        router.use(logEndpointWithStatus);
        router.get("/", inventoryController.getInventories);
        router.get("/:id", inventoryController.getInventoryById);
        router.post("/", inventoryController.createInventory);
        router.put("/:id", inventoryController.updateInventory);
        router.delete("/:id", inventoryController.deleteInventory);
        return router;
    }
}