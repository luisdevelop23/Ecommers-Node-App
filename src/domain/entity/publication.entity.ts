import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { PublicationIF } from "../interface/publication.interface";
import { UserEntity } from "./user.entity";
import { ProductEntity } from "./product.entity";
import { PublicationPhotoEntity } from "./publication_photo.entity";

@Entity({ name: "publication" })
export class PublicationEntity implements PublicationIF {
  @PrimaryGeneratedColumn("uuid")
  id_publication: string;


  @Column({ name: "title" })
  title: string;

  @Column({ name: "type" })
  type: string;

  @Column({ name: "colors" })
  colors?: string;

  @Column({ name: "sale_price" })
  sale_price: number;

  @Column({ name: "offer_price" })
  offer_price?: number;

  @Column({ name: "detailed_description", type: "json" })
  detailed_description?: string;

  @Column({ name: "html", type: "json" })
  html: string;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at?: Date;

  @Column({ name: "state", default: true })
  state?: boolean;


  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "id_user" })
  user: UserEntity;

  @Column({ name: "id_user" })
  id_user: string;

 
  @ManyToOne(() => ProductEntity, (product) => product.publication)
  @JoinColumn({ name: "id_product" })
  product: ProductEntity;
  
  @Column({ name: "id_product" })
  id_product: string;
  
  @OneToMany(() => PublicationPhotoEntity, (publication_photo) => publication_photo.publication)
  publication_photo: PublicationPhotoEntity[]

  constructor(params: PublicationIF) {
    if (!params) return;
    this.id_publication = params.id_publication;
    this.id_product = params.product.id_product;
    this.title = params.title;
    this.type = params.type;
    this.colors = params.colors;
    this.sale_price = params.sale_price;
    this.offer_price = params.offer_price;
    this.detailed_description = params.detailed_description;
    this.html = params.html;
    this.id_user = params.user.id_user;
    this.state = params.state;
  }
}
