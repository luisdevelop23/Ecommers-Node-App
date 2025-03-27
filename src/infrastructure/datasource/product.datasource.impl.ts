import { ProductDataSource } from "../../domain/datasource/product.datasource";
import { ProductDto } from "../../domain/dto/product.dto";
import { ProductEntity } from "../../domain/entity/product.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class ProductDataSourceImpl implements ProductDataSource {
  private RP = TypeOrmCustomize.getRepository(ProductEntity);
  getProducts(): Promise<ProductEntity[]> {
    return this.RP.find({
        where: { state: true },
    });
  }
  async getProduct(id: string): Promise<ProductEntity> {
    const product = await this.RP.findOneBy({ id });
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  }
  async createProduct(product: ProductDto): Promise<ProductEntity> {
    const newProduct = await this.RP.create(product);
    if (!newProduct) {
      throw new Error("Producto no creado");
    }
    return this.RP.save(newProduct);
  }
  async updateProduct(product: ProductDto): Promise<ProductEntity> {
    const existingProduct = await this.RP.findOne({
      where: { id: product.id },
    });

    if (!existingProduct) {
      throw new Error("Producto no encontrado");
    }

    Object.assign(existingProduct, product);

    return this.RP.save(existingProduct);
  }
  async deleteProduct(id: string): Promise<ProductEntity> {
    const product = await this.RP.findOne({ where: { id } });

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    product.state = false;

    return this.RP.save(product);
  }
}
