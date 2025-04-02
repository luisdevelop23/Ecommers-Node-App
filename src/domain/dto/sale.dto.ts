export class SaleDto {
  id_sale: string;
  sale_date: Date;
  total: number;
  quotas: number;
  type_document: string;
  code_document: string;
  sale_status: string;
  created_at: Date;
  updated_at?: Date;
  status?: boolean;
  id_customer: string;
  id_user: string;

  constructor(props: { [key: string]: any }) {
    this.id_sale = props.id_sale;
    this.sale_date = props.sale_date;
    this.total = props.total;
    this.quotas = props.quotas;
    this.type_document = props.type_document;
    this.code_document = props.code_document;
    this.sale_status = props.sale_status;
    this.status = props.status;
    this.id_customer = props.id_customer;
    this.id_user = props.id_user;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "sale_date",
      "total",
      "quotas",
      "type_document",
      "code_document",
      "sale_status",
      "id_customer",
      "id_user",
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
      id_customer: String(props.id_customer),
      id_user: String(props.id_user),
    };
    return [true, "", new SaleDto(valitedProps)];
  }

}
