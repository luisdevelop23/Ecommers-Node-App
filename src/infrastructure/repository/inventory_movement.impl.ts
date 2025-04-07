import { InventoryMovementDatasource } from "../../domain/datasource/inventory_movement.datasource";
import { InventoryMovementDto } from "../../domain/dto/invetory_movement.dto";
import { InventoryMovementEntity } from "../../domain/entity/inventory_movement.entity";
import { InventoryMovementRepository } from "../../domain/repository/inventory_movement.repository";

export class InventoryMovementRepositoryImpl implements InventoryMovementRepository {
    constructor(private readonly datasource:InventoryMovementDatasource) { }
    async getMovements(): Promise<InventoryMovementEntity[]> {
        return this.datasource.getMovements()
    }
    async getMovementById(id: string): Promise<InventoryMovementEntity> {
        return this.datasource.getMovementById(id)
    }
    async getMovementByIdProduct(id_product: string): Promise<InventoryMovementEntity[]> {
        return this.datasource.getMovementByIdProduct(id_product)
    }
    async getMovementByDate(InitialDate: string, FinalDate: string): Promise<InventoryMovementEntity[]> {
        return this.datasource.getMovementByDate(InitialDate, FinalDate)
    }
    async createMovement(inventory: InventoryMovementDto): Promise<InventoryMovementEntity> {
        return this.datasource.createMovement(inventory)
    }
    async updateMovement(id: string, inventory: InventoryMovementDto): Promise<InventoryMovementEntity> {
        return this.datasource.updateMovement(id, inventory)
    }
    async deleteMovement(id: string): Promise<InventoryMovementEntity> {
        return this.datasource.deleteMovement(id)
    }
}