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
  id_sale: string;
  id_user: string;

  constructor(props: { [key: string]: any }) {
    this.id_quotas = props.id_quotas;
    this.number_quota = props.number_quota;
    this.price = props.price;
    this.type_payment = props.type_payment;
    this.date_paid = props.date_paid;
    this.receipt_number = props.receipt_number;
    // this.created_date = props.created_date;
    // this.updated_date = props.updated_date;
    this.status = props.status;
    this.id_sale = props.id_sale;
    this.id_user = props.id_user;
  }

  static create(props: { [key: string]: any }) {
    const requiredFields = [
      "number_quota",
      "price",
      "type_payment",
      "date_paid",
      "receipt_number",
      "id_sale",
      "id_user",
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
      id_sale: String(props.id_sale),
      id_user: String(props.id_user),
    };
    return [true, "", new QuotasDto(valitedProps)];
  }
}
