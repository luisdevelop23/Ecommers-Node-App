export class PublicationDto {
  id_publication: string;
  title: string;
  type: string;
  colors?: string;
  sale_price: number;
  offer_price?: number;
  detailed_description?: string;
  html: string;
  created_at: Date;
  updated_at?: Date;
  state?: boolean;
  id_user: string;
  id_product: string;

  constructor(props: { [key: string]: any }) {
    this.id_publication = props.id_publication;
    this.title = props.title;
    this.type = props.type;
    this.colors = props.colors;
    this.sale_price = props.sale_price;
    this.offer_price = props.offer_price;
    this.detailed_description = props.detailed_description;
    this.html = props.html;
    // this.created_at = props.created_at;
    // this.updated_at = props.updated_at;
    this.state = props.state;
    this.id_user = props.id_user;
    this.id_product = props.id_product;
  }
  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "title",
      "type",
      "sale_price",
      "id_user",
      "id_product",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      title: String(props.title),
      type: String(props.type),
      colors: String(props.colors),
      sale_price: Number(props.sale_price),
      offer_price: Number(props.offer_price),
      detailed_description: String(props.detailed_description),
      html: String(props.html),
      id_user: String(props.id_user),
      id_product: String(props.id_product),
    };
    return [true, "", new PublicationDto(valitedProps)];
  }
}
