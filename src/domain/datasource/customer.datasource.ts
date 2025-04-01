import { CustomerDto } from "../dto/customer.dto";
import { CustomerEntity } from "../entity/customer.entity";

export abstract class CustomerDataSource {
    abstract getCustomers(): Promise<CustomerEntity[]>
    abstract getCustomerById(id: string): Promise<CustomerEntity>
    abstract createCustomer(customer: CustomerDto): Promise<CustomerEntity>
    abstract updateCustomer(id: string, customer: CustomerDto): Promise<CustomerEntity>
    abstract deleteCustomer(id: string): Promise<CustomerEntity>
}
