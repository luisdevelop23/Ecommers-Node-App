import { UserIF } from "./user.interface";

export interface BrandIF {
  id_brand: string;
  name: string;
  url_image: string;
  created_date: Date;
  updated_date?: Date;
  user: UserIF;
}
