import { SaleDataSource } from "../../domain/datasource/sale.datasource";
import { SaleDto } from "../../domain/dto/sale.dto";
import { SaleEntity } from "../../domain/entity/sale.entity";
import { generateCode } from "../../helpers/generate_code";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class SaleDataSourceImpl implements SaleDataSource {
  private repository = TypeOrmCustomize.getRepository(SaleEntity);

  async getSales(): Promise<SaleEntity[]> {
    return await this.repository.find({
      order: { created_date: "DESC" },
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
    function co(type: string): string {
      if (type.toUpperCase() === "BOLETA") {
        return "B";
      } else if (type.toUpperCase() === "FACTURA") {
        return "F";
      } else if (type.toUpperCase() === "RECIBO") {
        return "R";
      }
      throw new Error("Tipo de documento desconocido");
    }
    const newSale = this.repository.create({
      ...sale,
      id_sale: await generateCode(this.repository, "V", "id_sale"),
      // code_document: sale.code_document !== "undefined" || "" 
      //   ? sale.code_document
      //   : await generateCode(
      //       this.repository,
      //       co(sale.type_document),
      //       "code_document"
      //     ),
    });
    return this.repository.save(newSale);
  }
  async updateSale(id: string, sale: SaleDto): Promise<SaleEntity> {
    console.log(id, sale);
    const existingSale = await this.repository.findOne({
      where: { id_sale: id },
    });

    if (!existingSale) {
      throw new Error("Sale no encontrado");
    }
    Object.assign(existingSale, {
      ...sale,
      id_sale: existingSale.id_sale,
      created_date: existingSale.created_date,
      updated_date: new Date(),
    });
    return this.repository.save(existingSale);
  }
  async deleteSale(id: string): Promise<SaleEntity> {
    const saleToDelete = await this.repository.findOne({
      where: { id_sale: id },
    });
    if (!saleToDelete) {
      throw new Error("Sale no encontrado");
    }
    saleToDelete.status = false;
    return this.repository.save(saleToDelete);
  }
}
