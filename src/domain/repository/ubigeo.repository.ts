import { UbigeoEntity } from "../entity/ubigeo.entity";

export abstract class UbigeoRepository {
  abstract getUbigeo(): Promise<UbigeoEntity[]>;
  abstract getUbigeoById(id: string): Promise<UbigeoEntity>;
}
