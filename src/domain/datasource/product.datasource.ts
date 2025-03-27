import { ProductDto } from "../dto/product.dto";
import { ProductEntity } from "../entity/product.entity";

export abstract class ProductDataSource {
    abstract getProducts(): Promise<ProductEntity[]>;
    abstract getProduct(id: string): Promise<ProductEntity>;
    abstract createProduct(product: ProductDto): Promise<ProductEntity>;
    abstract updateProduct(product: ProductDto): Promise<ProductEntity>;
    abstract deleteProduct(id: string): Promise<ProductEntity>;
} 