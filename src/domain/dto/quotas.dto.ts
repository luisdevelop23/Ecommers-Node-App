import { SaleIF } from "../interface/sale.interface";
import { UserIF } from "../interface/user.interface";

export class QuotasDto {
  id_quotas: string;
  number_quota: number;
  price: number;
  type_payment: string;
  date_paid: Date;
  receipt_number: string;
  created_date: Date;
  updated_date: Date;
  status?: boolean;
  sale?: SaleIF;
  user?: UserIF;

  constructor(props: { [key: string]: any }) {
    this.id_quotas = props.id_quotas;
    this.number_quota = props.number_quota;
    this.price = props.price;
    this.type_payment = props.type_payment;
    this.date_paid = props.date_paid;
    this.receipt_number = props.receipt_number;
    this.created_date = new Date();
    // this.updated_date = props.updated_date;
    this.status = props.status;
    this.sale = { id_sale: props.sale.id_sale } as SaleIF;
    this.user = { id_user: props.user.id_user } as UserIF;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "number_quota",
      "price",
      "type_payment",
      "date_paid",
      "receipt_number",
      "sale",
      "user",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      number_quota: Number(props.number_quota),
      price: Number(props.price),
      type_payment: String(props.type_payment),
      date_paid: new Date(props.date_paid),
      receipt_number: String(props.receipt_number),
      sale: { id_sale: String(props.sale.id_sale) } as SaleIF,
      user: { id_user: String(props.user.id_user) } as UserIF,
    };
    return [true, "", new QuotasDto(valitedProps)];
  }
  static update(props: { [key: string]: any }) {
    const requiredFields = [
      "type_payment",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      number_quota: Number(props.number_quota),
      price: Number(props.price),
      type_payment: String(props.type_payment),
      date_paid: new Date(props.date_paid),
      receipt_number: String(props.receipt_number),
      sale: { id_sale: String(props.sale.id_sale) } as SaleIF,
      user: { id_user: String(props.user.id_user) } as UserIF,
    };
    return [true, "", new QuotasDto(valitedProps)];
  }
}
