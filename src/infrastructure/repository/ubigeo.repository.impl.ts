import { UbigeoDataSource } from "../../domain/datasource/ubigeo.datasource";
import { UbigeoEntity } from "../../domain/entity/ubigeo.entity";
import { UbigeoRepository } from "../../domain/repository/ubigeo.repository";

export class UbigeoRepositoryImpl implements UbigeoRepository {
    constructor(private readonly datasource: UbigeoDataSource) { }
    async getUbigeo(prompt: string): Promise<UbigeoEntity[]> {
        return await this.datasource.getUbigeo(prompt);
    }
    async getUbigeoById(id: string): Promise<UbigeoEntity> {
        return await this.datasource.getUbigeoById(id);
    }
}