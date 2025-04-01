import { UbigeoEntity } from "../entity/ubigeo.entity";

export abstract class UbigeoRepository {
  abstract getUbigeo(prompt: string): Promise<UbigeoEntity[]>;
  abstract getUbigeoById(id: string): Promise<UbigeoEntity>;
}
