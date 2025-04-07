import { Between } from "typeorm";
import { InventoryMovementDatasource } from "../../domain/datasource/inventory_movement.datasource";
import { InventoryMovementDto } from "../../domain/dto/invetory_movement.dto";
import { InventoryMovementEntity } from "../../domain/entity/inventory_movement.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";
import { generateCode } from "../../helpers/generate_code";

export class InventoryMovementDataSourceImpl implements InventoryMovementDatasource{
    private repository = TypeOrmCustomize.getRepository(InventoryMovementEntity)
    async getMovements(): Promise<InventoryMovementEntity[]> {
        return this.repository.find()
    }
    async getMovementById(id: string): Promise<InventoryMovementEntity> {
        const moviment = await this.repository.findOne({
            where: {
                id_inventory_movement: id
            }
        })
        if (!moviment) {
            throw new Error("Movimiento no encontrado")
        }
        return moviment;
    }
    async getMovementByIdProduct(id_product: string): Promise<InventoryMovementEntity[]> {
        const moviment = await this.repository.find({
            where: {
                id_product: id_product
            }
        })
        if (!moviment) {
            throw new Error("Movimiento no encontrado")
        }
        return moviment;
    }
    async getMovementByDate(InitialDate: string, FinalDate: string): Promise<InventoryMovementEntity[]> {
        const moviment = await this.repository.find({
            where: {
                created_date: Between(new Date(InitialDate), new Date(FinalDate))
            }
        })
        if(!moviment){
            throw new Error("Movimiento no encontrado")
        }
        return moviment;
    }
    async createMovement(inventory: InventoryMovementDto): Promise<InventoryMovementEntity> {
        const newMoviment = this.repository.create({
            ...inventory,
            id_inventory_movement:  await generateCode(this.repository, "M", "id_inventory_movement"),
        })
        return this.repository.save(newMoviment)
    }
    async updateMovement(id: string, inventory: InventoryMovementDto): Promise<InventoryMovementEntity> {
        const updateMoviment = await this.repository.findOne({
            where:{
                id_inventory_movement: id
            }
        })
        if(!updateMoviment){
            throw new Error("Movimiento no encontrado")
        }
        Object.assign(updateMoviment,{
            ...inventory,
            id_inventory_movement: updateMoviment.id_inventory_movement,
            created_date : updateMoviment.created_date,
            updated_date: new Date()
        })
        return this.repository.save(updateMoviment)
    }
    async deleteMovement(id: string): Promise<InventoryMovementEntity> {
        const updateMoviment = await this.repository.findOne({
            where:{
                id_inventory_movement: id
            }
        })
        if(!updateMoviment){
            throw new Error("Movimiento no encontrado")
        }
        updateMoviment.status = false
        return this.repository.save(updateMoviment)
    }
}