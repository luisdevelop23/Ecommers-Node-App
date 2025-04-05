import { SaleDataSource } from "../../domain/datasource/sale.datasource";
import { SaleDto } from "../../domain/dto/sale.dto";
import { SaleEntity } from "../../domain/entity/sale.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class SaleDataSourceImpl implements SaleDataSource {
  private repository = TypeOrmCustomize.getRepository(SaleEntity);

  async getSales(): Promise<SaleEntity[]> {
    return await this.repository.find({
      order: { created_at: "DESC" },
    });
  }
  async getSale(id: string): Promise<SaleEntity> {
    const sale = await this.repository.findOne({ where: { id_sale: id } });
    if (!sale) {
      throw new Error("Sale no encontrado");
    }
    return sale;
  }
  async createSale(sale: SaleDto): Promise<SaleEntity> {
    console.log("sale desde datasource impl", sale);
    const newSale = this.repository.create(sale);
    return this.repository.save(newSale);
  }
  async updateSale(id: string, sale: SaleDto): Promise<SaleEntity> {
    console.log(id, sale);
    const existingSale = await this.repository.findOne({ where: { id_sale: id } });

    if (!existingSale) {
        throw new Error("Sale no encontrado");
    }
    existingSale.sale_date = sale.sale_date || existingSale.sale_date; 
    existingSale.total = sale.total !== undefined ? sale.total : existingSale.total; 
    existingSale.quotas = sale.quotas || existingSale.quotas; 
    existingSale.type_document = sale.type_document || existingSale.type_document; 
    existingSale.code_document = sale.code_document || existingSale.code_document; 
    existingSale.sale_status = sale.sale_status || existingSale.sale_status; 
    existingSale.status = sale.status !== undefined ? sale.status : existingSale.status;

    existingSale.updated_at = new Date(); 

    // Guardamos los cambios
    return this.repository.save(existingSale);
}
  async deleteSale(id: string): Promise<SaleEntity> {
    const saleToDelete = await this.repository.findOne({ where: { id_sale: id } });
    if (!saleToDelete) {
      throw new Error("Sale no encontrado");
    }
    saleToDelete.status = false;
    return this.repository.save(saleToDelete);
  }
}
