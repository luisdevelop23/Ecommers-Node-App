export class SaleDetailDto {
  id_sale_detail?: string;
  quiantity: number;
  price: number;
  discount: number;
  sub_total: number;
  total: number;
  created_date?: Date;
  updated_date?: Date;
  status?: boolean;
  id_sale: string;
  id_product: string;

  constructor(props: { [key: string]: any }) {
    this.id_sale_detail = props.id_sale_detail;
    this.quiantity = props.quiantity;
    this.price = props.price;
    this.discount = props.discount;
    this.sub_total = props.sub_total;
    this.total = props.total;
    // this.created_date = props.created_date;
    // this.updated_date = props.updated_date;
    this.status = props.status;
    this.id_sale = props.id_sale;
    this.id_product = props.id_product;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "quiantity",
      "price",
      "discount",
      "sub_total",
      "total",
      "id_sale",
      "id_product",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      quiantity: Number(props.quiantity),
      price: Number(props.price),
      discount: Number(props.discount),
      sub_total: Number(props.sub_total),
      total: Number(props.total),
      id_sale: String(props.id_sale),
      id_product: String(props.id_product),
    };
    return [true, "", new SaleDetailDto(valitedProps)];
  }
}
