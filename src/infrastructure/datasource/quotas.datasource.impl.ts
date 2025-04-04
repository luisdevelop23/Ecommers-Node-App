import { QuotasDataSource } from "../../domain/datasource/quotas.datasource";
import { QuotasDto } from "../../domain/dto/quotas.dto";
import { QuotasEntity } from "../../domain/entity/quotas.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class QuotasDataSourceImpl implements QuotasDataSource {

    private RP = TypeOrmCustomize.getRepository(QuotasEntity)

    async getQuotasBySale(id: string): Promise<QuotasEntity[]> {
        return await this.RP.find({ where: { id_sale: id } })
    }

    async getQuotasById(id: string): Promise<QuotasEntity> {
        const quotas = await this.RP.findOne({
            where: { id_quotas: id },
            order: { number_quota: "DESC" }
        })
        if (!quotas) {
            throw new Error("Producto no encontrado");
        }
        return quotas
    }

    async createQuotas(quotas: QuotasDto): Promise<QuotasEntity> {
        const newQuotas = this.RP.create(quotas)
        return this.RP.save(newQuotas)
    }
    async updateQuotas(id: string, quotas: QuotasDto): Promise<QuotasEntity> {
        console.log("desde dt impl", id, quotas);
        const quotasToUpdate = await this.RP.findOne({ where: { id_quotas: id } })
        if (!quotasToUpdate) {
            throw new Error("Producto no encontrado");
        }
        Object.assign(quotasToUpdate, quotas)
        return this.RP.save(quotasToUpdate)
    }
    async deleteQuotas(id: string): Promise<QuotasEntity> {
        const quotasToDelete = await this.RP.findOne({ where: { id_quotas: id } })
        if (!quotasToDelete) {
            throw new Error("Producto no encontrado");
        }
        quotasToDelete.status = false
        return this.RP.save(quotasToDelete)
    }
}