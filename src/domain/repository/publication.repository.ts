import { PublicationDto } from "../dto/publicaction.dto";
import { PublicationEntity } from "../entity/publication.entity";

export abstract class PublicationRepository {
    abstract getPublications(): Promise<PublicationEntity[]>
    abstract getPublicationsByUser(id_user: string): Promise<PublicationEntity[]>
    abstract getPublicationsByProduct(id_product: string): Promise<PublicationEntity[]>
    abstract getPublication(id: string): Promise<PublicationEntity>
    abstract createPublication(publication: PublicationDto): Promise<PublicationEntity>
    abstract updatePublication(id: string, publication: PublicationDto): Promise<PublicationEntity>
    abstract deletePublication(id: string): Promise<PublicationEntity>
}