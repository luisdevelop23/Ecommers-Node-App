import { UbigeoDataSource } from "../../domain/datasource/ubigeo.datasource";
import { UbigeoEntity } from "../../domain/entity/ubigeo.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class UbigeoDataSourceImpl implements UbigeoDataSource {
    private RP = TypeOrmCustomize.getRepository(UbigeoEntity)
    async getUbigeo(prompt: string): Promise<UbigeoEntity[]> {
        const ubigeo = await this.RP.createQueryBuilder("ubigeo")
            .where("LOWER(ubigeo.department) = LOWER(:prompt)", { prompt })
            .orWhere("ubigeo.province = :prompt", { prompt })
            .orWhere("ubigeo.district = :prompt", { prompt })
            .getMany();
        return ubigeo;
    }
    async getUbigeoById(id: string): Promise<UbigeoEntity> {
        const ubigeo = await this.RP.findOne({ where: { id_ubigeo: id } });
        if (!ubigeo) {
            throw new Error("Ubigeo no encontrado");
        }
        return ubigeo;
    }
}