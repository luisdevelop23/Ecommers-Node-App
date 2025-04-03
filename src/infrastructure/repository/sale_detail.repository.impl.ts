import { SaleDetailDataSource } from "../../domain/datasource/sale_detail.datasource";
import { SaleDetailDto } from "../../domain/dto/sale_detail.dto";
import { SaleDetailEntity } from "../../domain/entity/sale_detail.entity";
import { SaleDetailRepository } from "../../domain/repository/sale_dateil.repository";

export class SaleDetailRepositoryImpl implements SaleDetailRepository {
    constructor(private readonly datasource: SaleDetailDataSource) { }
    async getSaleDetails(): Promise<SaleDetailEntity[]> {
        return await this.datasource.getSaleDetails();
    }
    async getSaleDetail(id: string): Promise<SaleDetailEntity> {
        return await this.datasource.getSaleDetail(id);
    }
    async createSaleDetail(saleDetail: SaleDetailDto): Promise<SaleDetailEntity> {
        return await this.datasource.createSaleDetail(saleDetail);
    }
    async updateSaleDetail(id: string, saleDetail: SaleDetailDto): Promise<SaleDetailEntity> {
        return await this.datasource.updateSaleDetail(id, saleDetail);
    }
    async deleteSaleDetail(id: string): Promise<SaleDetailEntity> {
        return await this.datasource.deleteSaleDetail(id);
    }
}