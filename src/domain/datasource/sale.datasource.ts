import { SaleEntity } from "../entity/sale.entity";

export abstract class SaleDataSource {
  abstract getSales(): Promise<SaleEntity[]>;
  abstract getSale(id: string): Promise<SaleEntity>;
  abstract createSale(sale: SaleEntity): Promise<SaleEntity>;
  abstract updateSale(id: string, sale: SaleEntity): Promise<SaleEntity>;
  abstract deleteSale(id: string): Promise<SaleEntity>;
}
