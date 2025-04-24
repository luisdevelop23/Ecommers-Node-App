import { ProductDto } from "../dto/product.dto";
import { ProductEntity } from "../entity/product.entity";

export abstract class ProductDataSource {
    abstract codNew(): Promise<String>
    abstract getProducts(page: number, pageSize: number): Promise<{ products: ProductEntity[], pages: number }>;
    abstract getProduct(cod_product: string): Promise<ProductEntity | null>;
    abstract createProduct(product: ProductDto): Promise<ProductEntity>;
    abstract updateProduct(cod_product: string, product: ProductDto): Promise<ProductEntity>;
    abstract deleteProduct(cod_product: string): Promise<ProductEntity>;
} 