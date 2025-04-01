import { InventoryDto } from "../dto/inventory.dto";
import { InventoryEntity } from "../entity/inventory.entity";

export abstract class InventoryRepository {
    abstract getInventories(): Promise<InventoryEntity[]>
    abstract getInventoryById(id: string): Promise<InventoryEntity>
    abstract createInventory(inventory: InventoryDto): Promise<InventoryEntity>
    abstract updateInventory(id: string, inventory: InventoryDto): Promise<InventoryEntity>
    abstract deleteInventory(id: string): Promise<InventoryEntity>
}
