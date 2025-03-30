import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductIF } from "../interface/product.interface";
import { PublicationPhotoIF } from "../interface/publication_photo.interface";
import { UserIF } from "../interface/user.interface";
import { PublicationEntity } from "./publication.entity";
import { UserEntity } from "./user.entity";


@Entity({name: "publication_photo"})
export class PublicationPhotoEntity implements PublicationPhotoIF{

@PrimaryGeneratedColumn("uuid")
    id_product_photo: string;

    @Column({name: "url_image"})
    url_image: string;

    @Column({name: "type"})
    type: string;

    @CreateDateColumn({name: "created_date"})
    created_date: Date;

    @UpdateDateColumn({name: "updated_date"})
    updated_date: Date;

    @ManyToOne(()=> PublicationEntity, (publication) => publication.publication_photo)
    @JoinColumn({name: "id_publication"})
    publication: PublicationEntity

    @ManyToOne(() => UserEntity, (user) => user.publication_photo)
    @JoinColumn({ name: "id_user" })
    user: UserEntity

    constructor(params: PublicationPhotoIF) {
      if (!params) return;
      this.id_product_photo = params.id_product_photo;
      this.url_image = params.url_image;
      this.type = params.type;
    }

}