import { SaleDto } from "../dto/sale.dto";
import { SaleEntity } from "../entity/sale.entity";

export abstract class SaleRepository {
  abstract getSales(): Promise<SaleEntity[]>;
  abstract getSale(id: string): Promise<SaleEntity>;
  abstract createSale(sale: SaleDto): Promise<SaleEntity>;
  abstract updateSale(id: string, sale: SaleDto): Promise<SaleEntity>;
  abstract deleteSale(id: string): Promise<SaleEntity>;
}
