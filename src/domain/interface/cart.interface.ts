import { CustomersIF } from "./customers.interface";

export interface CartIF {
    id: string;
    user: CustomersIF;
    created_at: Date;
    updated_at: Date
}