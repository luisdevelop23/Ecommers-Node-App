import { InventoryDataSource } from "../../domain/datasource/inventory.datasource";
import { InventoryDto } from "../../domain/dto/inventory.dto";
import { InventoryEntity } from "../../domain/entity/inventory.entity";
import { InventoryRepository } from "../../domain/repository/inventory.repository";

    export class InventoryRepositoryImpl implements InventoryRepository{
        constructor(private readonly datasource: InventoryDataSource) { }
        async getInventories(): Promise<InventoryEntity[]> {
            return this.datasource.getInventories()
        }
        async getInventoryById(id: string): Promise<InventoryEntity> {
            return this.datasource.getInventoryById(id)
        }
        async createInventory(inventory: InventoryDto): Promise<InventoryEntity> {
            return this.datasource.createInventory(inventory)
        }
        async updateInventory(id: string, inventory: InventoryDto): Promise<InventoryEntity> {
            return this.datasource.updateInventory(id, inventory)
        }
        async deleteInventory(id: string): Promise<InventoryEntity> {
            return this.datasource.deleteInventory(id)
        }
}