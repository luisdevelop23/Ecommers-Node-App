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
    // Buscar el detalle de la venta
    const saleDetailToUpdate = await this.repository.findOneBy({ id_sale_detail: id });
    if (!saleDetailToUpdate) {
        throw new Error("detalle venta no encontrado");
    }

    // Asignar los valores nuevos, manejando las relaciones correctamente
    Object.assign(saleDetailToUpdate, {
        quantity: saleDetail.quantity,
        price: saleDetail.price,
        discount: saleDetail.discount,
        sub_total: saleDetail.sub_total,
        total: saleDetail.total,
        status: saleDetail.status,
    });

    // Guardar el detalle de venta actualizado
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
