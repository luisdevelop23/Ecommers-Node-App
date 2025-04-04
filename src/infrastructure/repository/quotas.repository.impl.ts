import { QuotasDataSource } from "../../domain/datasource/quotas.datasource";
import { QuotasDto } from "../../domain/dto/quotas.dto";
import { QuotasEntity } from "../../domain/entity/quotas.entity";
import { QuotasRepository } from "../../domain/repository/quotas.repository";

export class QuotasRepositoryImpl implements QuotasRepository {
    constructor(private readonly datasource: QuotasDataSource) { }
    async getQuotasBySale(id: string): Promise<QuotasEntity[]> {
        return this.datasource.getQuotasBySale(id)
    }
    async getQuotasById(id: string): Promise<QuotasEntity> {
        return this.datasource.getQuotasById(id)
    }
    async createQuotas(quotas: QuotasDto): Promise<QuotasEntity> {
        return this.datasource.createQuotas(quotas)
    }
    async updateQuotas(id: string, quotas: QuotasDto): Promise<QuotasEntity> {
        return this.datasource.updateQuotas(id, quotas)
    }
    async deleteQuotas(id: string): Promise<QuotasEntity> {
        return this.datasource.deleteQuotas(id)
    }
}