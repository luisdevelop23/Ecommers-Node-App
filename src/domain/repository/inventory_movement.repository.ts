import { InventoryMovementDto } from "../dto/invetory_movement.dto";
import { InventoryMovementEntity } from "../entity/inventory_movement.entity";

export abstract class InventoryMovementRepository {
    abstract getMovements(): Promise<InventoryMovementEntity[]>
    abstract getMovementById(id: string): Promise<InventoryMovementEntity>
    abstract getMovementByIdProduct(id_product: string): Promise<InventoryMovementEntity[]>
    abstract getMovementByDate(InitialDate: string, FinalDate: string): Promise<InventoryMovementEntity[]>
    abstract createMovement(inventory: InventoryMovementDto): Promise<InventoryMovementEntity>
    abstract updateMovement(id: string, inventory: InventoryMovementDto): Promise<InventoryMovementEntity>
    abstract deleteMovement(id: string): Promise<InventoryMovementEntity>
}
