import { SaleDetailDto } from "../dto/sale_detail.dto";
import { SaleDetailEntity } from "../entity/sale_detail.entity";

export abstract class SaleDetailDataSource {
    abstract getSaleDetails(): Promise<SaleDetailEntity[]>
    abstract getSaleDetail(id: string): Promise<SaleDetailEntity>
    abstract createSaleDetail(saleDetail: SaleDetailDto): Promise<SaleDetailEntity>
    abstract updateSaleDetail(id: string, saleDetail: SaleDetailDto): Promise<SaleDetailEntity>
    abstract deleteSaleDetail(id: string): Promise<SaleDetailEntity>
}