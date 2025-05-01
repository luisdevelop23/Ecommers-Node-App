import { Router } from "express";
import { InventoryMovementDataSourceImpl } from "../../infrastructure/datasource/inventory_movement.datasource.impl";
import { InventoryMovementRepositoryImpl } from "../../infrastructure/repository/inventory_movement.impl";
import { InventoryMovementController } from "./inventory_movement.controller";
import { logEndpointWithStatus } from "../../middleware/log.middleware";

export class InventoryMovementRoutes {
  static get routes(): Router {
    const router = Router();
    const inventoryMovementDataSource = new InventoryMovementDataSourceImpl();
    const inventoryMovementRepository = new InventoryMovementRepositoryImpl(inventoryMovementDataSource);
    const inventoryMovementController = new InventoryMovementController(inventoryMovementRepository);
    router.use(logEndpointWithStatus);
    router.get("/", inventoryMovementController.getMovements);
    router.get("/:id", inventoryMovementController.getMovementById);
    router.get("/:id/product", inventoryMovementController.getMovementByIdProduct);
    router.post("/", inventoryMovementController.createMovement);
    router.put("/:id", inventoryMovementController.updateMovement);
    router.delete("/:id", inventoryMovementController.deleteMovement);
    return router;
  }
}
