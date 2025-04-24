import { ProductDataSource } from "../../domain/datasource/product.datasource";
import { ProductDto } from "../../domain/dto/product.dto";
import { ProductEntity } from "../../domain/entity/product.entity";
import { ProductRepository } from "../../domain/repository/product.repository";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly datasource: ProductDataSource) { }

  async codNew(): Promise<String> {
        return  await  this.datasource.codNew();
  }
  async getProducts(page: number, pageSize: number): Promise<{ products: ProductEntity[], pages: number }> {
    return await this.datasource.getProducts(page, pageSize);
  }
  async getProduct(cod_product: string): Promise<ProductEntity | null> {
    return await this.datasource.getProduct(cod_product);
  }
  async createProduct(product: ProductDto): Promise<ProductEntity> {
    return await this.datasource.createProduct(product);
  }
  async updateProduct(cod_product: string, product: ProductDto): Promise<ProductEntity> {
    return await this.datasource.updateProduct(cod_product, product);
  }
  async deleteProduct(cod_product: string): Promise<ProductEntity> {
    return await this.datasource.deleteProduct(cod_product);
  }
}
