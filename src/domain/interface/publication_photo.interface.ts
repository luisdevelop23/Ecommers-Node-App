import { PublicationIF } from "./publication.interface";
import { UserIF } from "./user.interface";

export interface PublicationPhotoIF {
  id_product_photo: string;
  publication: PublicationIF;
  url_image: string;
  type: string;
  created_date: Date;
  updated_date: Date;
  user: UserIF;
}
