import { InventoryDataSource } from "../../domain/datasource/inventory.datasource";
import { InventoryDto } from "../../domain/dto/inventory.dto";
import { InventoryEntity } from "../../domain/entity/inventory.entity";
import { generateCode } from "../../helpers/generate_code";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class InventoryDataSourceImpl implements InventoryDataSource{
     private repository = TypeOrmCustomize.getRepository(InventoryEntity)
    async getInventories(): Promise<InventoryEntity[]> {
        return await this.repository.find()
    }
    async getInventoryById(id: string): Promise<InventoryEntity> {
        const inventory = await this.repository.findOne({ where: { id_inventory: id } })
        if (!inventory) {
            throw new Error("Inventory no encontrado");
        }
        return inventory
    }
    async createInventory(inventory: InventoryDto): Promise<InventoryEntity> {
        console.log("desde dt impl", inventory);
        const newInventory = this.repository.create({
            id_inventory: await generateCode(this.repository, "I", "id_inventory"),
            quantity: inventory.quantity,
            created_date: inventory.created_date,
            updated_date: inventory.updated_date,
            status: inventory.status,
            id_product: inventory.product.id_product
        })
        return await this.repository.save(newInventory)
    }
    async updateInventory(id: string, inventory: InventoryDto): Promise<InventoryEntity> {
        const inventoryToUpdate = await this.repository.findOne({ where: { id_inventory: id } })
        if (!inventoryToUpdate) {
            throw new Error("Inventory no encontrado");
        }
        Object.assign(
            inventoryToUpdate,
            {
                ...inventory,
                id_inventory:inventoryToUpdate.id_inventory,
                product: inventoryToUpdate.product,
                updated_date: new Date(),
            }
        )
        return await this.repository.save(inventoryToUpdate)
    }
    async deleteInventory(id: string): Promise<InventoryEntity> {
        const inventoryToDelete = await this.repository.findOne({ where: { id_inventory: id } })
        if (!inventoryToDelete) {
            throw new Error("Inventory no encontrado");
        }
        inventoryToDelete.status = false
        return await this.repository.save(inventoryToDelete)
    }
}