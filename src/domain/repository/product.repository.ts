import { ProductDto } from "../dto/product.dto";
import { ProductEntity } from "../entity/product.entity";

export abstract class ProductRepository {
    abstract getProducts(): Promise<ProductEntity[]>;
    abstract getProduct(cod_product: string): Promise<ProductEntity>;
    abstract createProduct(product: ProductDto): Promise<ProductEntity>;
    abstract updateProduct(cod_product: string, product: ProductDto): Promise<ProductEntity>;
    abstract deleteProduct(cod_product: string): Promise<ProductEntity>;
}