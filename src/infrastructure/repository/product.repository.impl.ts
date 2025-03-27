import { ProductDataSource } from "../../domain/datasource/product.datasource";
import { ProductDto } from "../../domain/dto/product.dto";
import { ProductEntity } from "../../domain/entity/product.entity";
import { ProductRepository } from "../../domain/repository/product.repository";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private readonly datasource: ProductDataSource) {}
  async getProducts(): Promise<ProductEntity[]> {
    return await this.datasource.getProducts();
  }
  async getProduct(id: string): Promise<ProductEntity> {
    return await this.datasource.getProduct(id);
  }
  async createProduct(product: ProductDto): Promise<ProductEntity> {
    return await this.datasource.createProduct(product);
  }
  async updateProduct(product: ProductDto): Promise<ProductEntity> {
    return await this.datasource.updateProduct(product);
  }
  async deleteProduct(id: string): Promise<ProductEntity> {
    return await this.datasource.deleteProduct(id);
  }
}
