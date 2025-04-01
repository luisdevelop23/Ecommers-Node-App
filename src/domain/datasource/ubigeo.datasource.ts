import { UbigeoEntity } from "../entity/ubigeo.entity";

export abstract class UbigeoDataSource {
  abstract getUbigeo(): Promise<UbigeoEntity[]>;
  abstract getUbigeoById(id: string): Promise<UbigeoEntity>;
}
