import { ProductIF } from "../interface/product.interface";
import { SaleIF } from "../interface/sale.interface";

export class SaleDetailDto {
  id_sale_detail?: string;
  quantity: number;
  price: number;
  discount: number;
  sub_total: number;
  total: number;
  created_date?: Date;
  updated_date?: Date;
  status?: boolean;
  sale: SaleIF;
  product: ProductIF;

  constructor(props: { [key: string]: any }) {
    this.id_sale_detail = props.id_sale_detail;
    this.quantity = props.quantity;
    this.price = props.price;
    this.discount = props.discount;
    this.sub_total = props.sub_total;
    this.total = props.total;
    // this.created_date = props.created_date;
    // this.updated_date = props.updated_date;
    this.status = props.status;
    this.sale = { id_sale: props.sale.id_sale } as SaleIF;
    this.product = { id_product: props.product.id_product } as ProductIF;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "quantity",
      "price",
      "discount",
      "sub_total",
      "total",
      "sale",
      "product",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      quantity: Number(props.quantity),
      price: Number(props.price),
      discount: Number(props.discount),
      sub_total: Number(props.sub_total),
      total: Number(props.total),
      sale: { id_sale: String(props.sale.id_sale) } as SaleIF,
      product: { id_product: String(props.product.id_product) } as ProductIF,
    };
    return [true, "", new SaleDetailDto(valitedProps)];
  }
}
