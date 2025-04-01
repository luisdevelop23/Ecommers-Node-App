import { AplicationDto } from "../dto/aplication.dto";
import { AplicationEntity } from "../entity/aplication.entity";

export abstract class AplicationRepository {
    abstract getAplications(): Promise<AplicationEntity[]>
    abstract getAplication(id: string): Promise<AplicationEntity>
    abstract createAplication(aplication: AplicationDto): Promise<AplicationEntity>
    abstract updateAplication(aplication: AplicationDto): Promise<AplicationEntity>
    abstract deleteAplication(id: string): Promise<AplicationEntity>
}