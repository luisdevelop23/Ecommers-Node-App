import { SaleDataSource } from "../../domain/datasource/sale.datasource";
import { SaleDto } from "../../domain/dto/sale.dto";
import { SaleEntity } from "../../domain/entity/sale.entity";
import { SaleRepository } from "../../domain/repository/sale.repository";

export class SaleRepositoryImpl implements SaleRepository {
    constructor(private readonly datasource: SaleDataSource) { }
    async getSales(): Promise<SaleEntity[]> {
        return await this.datasource.getSales();
    }
    async getSale(id: string): Promise<SaleEntity> {
        return await this.datasource.getSale(id);
    }
    async createSale(sale: SaleDto): Promise<SaleEntity> {
        return await this.datasource.createSale(sale);
    }
    async updateSale(id: string, sale: SaleDto): Promise<SaleEntity> {
        return await this.datasource.updateSale(id, sale);
    }
    async deleteSale(id: string): Promise<SaleEntity> {
        return await this.datasource.deleteSale(id);
    }

}