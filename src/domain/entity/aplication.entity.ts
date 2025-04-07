import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AplicationIF } from "../interface/application.interface";


@Entity({ name: "aplication" })
export class AplicationEntity implements AplicationIF{
    @PrimaryGeneratedColumn("uuid")
    id_aplication: string;

    @Column({ name: "reason" })
    reason: string;

    @Column({ name: "names" })
    name: string;

    @Column({ name: "surnames" })
    surnames: string;

    @Column({ name: "dni" })
    dni: string;

    @Column({ name: "email" })
    email?: string ;

    @Column({ name: "phone" })
    phone?: string ;

    @Column({ name: "adress" })
    adress?: string ;

    @Column({ name: "category" })
    category?: string ;

    @Column({ name: "brand" })
    brand?: string ;

    @Column({ name: "department" })
    department?: boolean ;

    @Column({ name: "description" })
    description?: string ;

    @Column({ name: "created_date" })
    created_date: Date;

    @Column({ name: "updated_date", nullable: true })
    updated_date?: Date ;

    @Column({ name: "status", default: true })
    status?: boolean ;

    constructor(params: AplicationIF) {
        if (!params) return;
        this.id_aplication = params.id_aplication;
        this.reason = params.reason;
        this.name = params.name;
        this.surnames = params.surnames;
        this.dni = params.dni;
        this.email = params.email;
        this.phone = params.phone;
        this.adress = params.adress;
        this.category = params.category;
        this.brand = params.brand;
        this.department = params.department;
        this.description = params.description;
        this.created_date = params.created_date;
        this.updated_date = params.updated_date;
        this.status = params.status;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

}