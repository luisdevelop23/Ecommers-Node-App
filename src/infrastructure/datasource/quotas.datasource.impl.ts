import { QuotasDataSource } from "../../domain/datasource/quotas.datasource";
import { QuotasDto } from "../../domain/dto/quotas.dto";
import { QuotasEntity } from "../../domain/entity/quotas.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class QuotasDataSourceImpl implements QuotasDataSource {

    private repository = TypeOrmCustomize.getRepository(QuotasEntity)

    async getQuotasBySale(id: string): Promise<QuotasEntity[]> {
        return await this.repository.find({ where: { id_sale: id } })
    }

    async getQuotasById(id: string): Promise<QuotasEntity> {
        const quotas = await this.repository.findOne({
            where: { id_quotas: id },
            order: { number_quota: "DESC" }
        })
        if (!quotas) {
            throw new Error("Quota no encontrado");
        }
        return quotas
    }

    async createQuotas(quotas: QuotasDto): Promise<QuotasEntity> {
        const newQuotas = this.repository.create(quotas)
        return this.repository.save(newQuotas)
    }
    async updateQuotas(id: string, quotas: QuotasDto): Promise<QuotasEntity> {
        console.log("desde dt impl", id, quotas);
        const quotasToUpdate = await this.repository.findOne({ where: { id_quotas: id } })
        if (!quotasToUpdate) {
            throw new Error("Quota no encontrado");
        }
        Object.assign(quotasToUpdate, quotas)
        return this.repository.save(quotasToUpdate)
    }
    async deleteQuotas(id: string): Promise<QuotasEntity> {
        const quotasToDelete = await this.repository.findOne({ where: { id_quotas: id } })
        if (!quotasToDelete) {
            throw new Error("Quota no encontrado");
        }
        quotasToDelete.status = false
        return this.repository.save(quotasToDelete)
    }
}