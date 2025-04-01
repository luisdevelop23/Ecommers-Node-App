import { QuotasDto } from "../dto/quotas.dto";
import { QuotasEntity } from "../entity/quotas.entity";


export abstract class QuotasRepository {
    abstract getQuotas(): Promise<QuotasEntity[]>
    abstract getQuotasById(id: string): Promise<QuotasEntity>
    abstract getQuotasByUser(user: string): Promise<QuotasEntity[]>
    abstract createQuotas(quotas: QuotasDto): Promise<QuotasEntity>
    abstract updateQuotas(id: string, quotas: QuotasDto): Promise<QuotasEntity>
    abstract deleteQuotas(id: string): Promise<QuotasEntity>
}