import { customersIF } from "../interface/customer.interface";
import { UserIF } from "../interface/user.interface";

export class SaleDto {
  id_sale: string;
  sale_date: Date;
  total: number;
  quotas: number;
  type_document: string;
  code_document?: string;
  sale_status: string;
  created_date: Date;
  updated_date?: Date;
  status?: boolean;
  customer?: customersIF;
  user?: UserIF;

  constructor(props: { [key: string]: any }) {
    this.id_sale = props.id_sale;
    this.sale_date = props.sale_date
      ? new Date(props.sale_date)
      : new Date();
    this.total = props.total;
    this.quotas = props.quotas;
    this.type_document = props.type_document;
    this.code_document = props.code_document;
    this.sale_status = props.sale_status;
    this.status = props.status;
    this.customer = { id_customer: props.customer.id_customer } as customersIF;
    this.user = { id_user: props.user.id_user } as UserIF;
    this.created_date = new Date();
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "total",
      "quotas",
      "type_document",
      "sale_status",
      "customer",
      "user",
    ];
    for (const field of requiredFields) {
      if (!props[field]) {
        return [false, `El campo ${field} es requerido`, null];
      }
    }
    const valitedProps = {
      sale_date:
        props.sale_date && !isNaN(new Date(props.sale_date).getTime())
          ? new Date(props.sale_date)
          : null,
      total: Number(props.total),
      quotas: Number(props.quotas),
      type_document: String(props.type_document),
      code_document: String(props.code_document),
      sale_status: String(props.sale_status),
      customer: {
        id_customer: String(props.customer.id_customer),
      } as customersIF,
      user: { id_user: String(props.user.id_user) } as UserIF,
    };
    return [true, "", new SaleDto(valitedProps)];
  }

  static update(props: { [key: string]: any }) {
    const valitedProps = {
      sale_date:
        props.sale_date && !isNaN(new Date(props.sale_date).getTime())
          ? new Date(props.sale_date)
          : null,
      total: Number(props.total),
      quotas: Number(props.quotas),
      type_document: String(props.type_document),
      code_document: String(props.code_document),
      sale_status: String(props.sale_status),
      customer: {
        id_customer: String(props.customer.id_customer),
      } as customersIF,
      user: { id_user: String(props.user.id_user) } as UserIF,
    };
    return [true, "", new SaleDto(valitedProps)];
  }
}
