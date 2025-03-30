import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { UbigeoIF } from "../interface/ubigeo.interface";

@Entity({ name: "ubigeo" })
export class UbigeoEntity implements UbigeoIF {
  @PrimaryColumn()
  id_ubigeo: string;

  @Column({ name: "department" })
  department: string;

  @Column({ name: "province" })
  province: string;

  @Column({ name: "district" })
  district: string;

}
