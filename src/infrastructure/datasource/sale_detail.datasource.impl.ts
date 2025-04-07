import { SaleDetailDataSource } from "../../domain/datasource/sale_detail.datasource";
import { SaleDetailDto } from "../../domain/dto/sale_detail.dto";
import { SaleDetailEntity } from "../../domain/entity/sale_detail.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class SaleDetailDataSourceImpl implements SaleDetailDataSource {
    private repository = TypeOrmCustomize.getRepository(SaleDetailEntity);
    async getSaleDetails(): Promise<SaleDetailEntity[]> {
        return await this.repository.find({
            select: ["id_sale_detail", "quantity", "price", "discount", "sub_total", "total", "status", "sale", "product"],
            relations: ["sale", "product"],
        });
    }
    async getSaleDetail(id: string): Promise<SaleDetailEntity> {
        const saleDetail = await this.repository.findOneBy({ id_sale_detail: id });
        if (!saleDetail) {
            throw new Error("detalle venta no encontrado");
        }
        return saleDetail;
    }
    async createSaleDetail(saleDetail: SaleDetailDto): Promise<SaleDetailEntity> {
        const newSaleDetail = this.repository.create(saleDetail);
        return this.repository.save(newSaleDetail);
    }
    async updateSaleDetail(
        id: string,
        saleDetail: SaleDetailDto
    ): Promise<SaleDetailEntity> {
    const saleDetailToUpdate = await this.repository.findOneBy({ id_sale_detail: id });
    if (!saleDetailToUpdate) {
        throw new Error("detalle venta no encontrado");
    }

    Object.assign(saleDetailToUpdate, {
        ...saleDetail,
        id_sale_detail: saleDetailToUpdate.id_sale_detail,
        created_date: saleDetailToUpdate.created_date,
        updated_date: new Date(),
    });

    return this.repository.save(saleDetailToUpdate);
    }
    async deleteSaleDetail(id: string): Promise<SaleDetailEntity> {
        const saleDetailToDelete = await this.repository.findOneBy({ id_sale_detail: id });
        if (!saleDetailToDelete) {
            throw new Error("detalle venta no encontrado");
        }
        saleDetailToDelete.status = false;
        return this.repository.save(saleDetailToDelete);
    }
}
