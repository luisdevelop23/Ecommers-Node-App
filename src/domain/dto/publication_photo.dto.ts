export class PublicationPhotoDto {
  id_publication_photo: string;
  url_image: string;
  type: string;
  created_at: Date;
  updated_at?: Date;
  id_publication: string;
  id_user: string;

  constructor(props: { [key: string]: any }) {
    this.id_publication_photo = props.id_publication_photo;
    this.url_image = props.url_image;
    this.type = props.type;
      this.created_at = new Date();
    //   this.updated_at = props.updated_at;
    this.id_publication = props.id_publication;
    this.id_user = props.id_user;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = ["url_image", "type", "id_publication", "id_user"];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      url_image: String(props.url_image),
      type: String(props.type),
      id_publication: String(props.id_publication),
      id_user: String(props.id_user),
    };
    return [true, "", new PublicationPhotoDto(valitedProps)];
  }
}
