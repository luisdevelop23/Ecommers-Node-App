import { SaleDataSource } from "../../domain/datasource/sale.datasource";
import { SaleDto } from "../../domain/dto/sale.dto";
import { SaleEntity } from "../../domain/entity/sale.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class SaleDataSourceImpl implements SaleDataSource {
    private RP = TypeOrmCustomize.getRepository(SaleEntity);

    async getSales(): Promise<SaleEntity[]> {
        return await this.RP.find({
            order: { created_at: "DESC" },
        });
    }
    async getSale(id: string): Promise<SaleEntity> {
        const sale = await this.RP.findOne({ where: { id_sale: id } });
        if (!sale) {
            throw new Error("Producto no encontrado");
        }
        return sale;
    }
    async createSale(sale: SaleEntity): Promise<SaleEntity> {
        const newSale = this.RP.create({
            ...sale,
            status: true
        });
        return this.RP.save(newSale);
    }
    async updateSale(id: string, sale: SaleDto): Promise<SaleEntity> {
        console.log(id, sale);
        const existingProduct = await this.RP.findOne({ where: { id_sale: id } });
        if (!existingProduct) {
            throw new Error("Producto no encontrado");
        }
        console.log(existingProduct);
        Object.assign(existingProduct, sale);
        return this.RP.save(existingProduct);
    }
    async deleteSale(id: string): Promise<SaleEntity> {
        const saleToDelete = await this.RP.findOne({ where: { id_sale: id } });
        if (!saleToDelete) {
            throw new Error("Producto no encontrado");
        }
        saleToDelete.status = false;
        return this.RP.save(saleToDelete);
    }
}