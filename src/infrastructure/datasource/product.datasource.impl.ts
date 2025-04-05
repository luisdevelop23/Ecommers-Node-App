import { ProductDataSource } from "../../domain/datasource/product.datasource";
import { ProductDto } from "../../domain/dto/product.dto";
import { ProductEntity } from "../../domain/entity/product.entity";
import { generateCode } from "../../helpers/generate_code";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class ProductDataSourceImpl implements ProductDataSource {
  private repository = TypeOrmCustomize.getRepository(ProductEntity);
  async getProducts(): Promise<ProductEntity[]> {
    return await this.repository.find({
      where: { status: true },
      order: { created_date: "DESC" },
    });
  }

  async getProduct(cod_product: string): Promise<ProductEntity> {
    const product = await this.repository.findOne({
      where: {
        cod_product,
        // status: true,
      },
    });

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    return product;
  }


  async createProduct(product: ProductDto): Promise<ProductEntity> {
    console.log("productooooooo", product);
    const newProduct = this.repository.create({
      ...product,
      cod_product: await generateCode(this.repository, "P", "cod_product"),
    });

    return this.repository.save(newProduct);
  }

  async updateProduct(
    cod_product: string,
    product: ProductDto
  ): Promise<ProductEntity> {
    const existingProduct = await this.repository.findOne({
      where: { cod_product, status: true },
    });

    if (!existingProduct) {
      throw new Error("Producto no encontrado");
    }

    Object.assign(existingProduct, {
      ...product,
      id_product: existingProduct.id_product,
      updated_at: new Date(),
    });

    return this.repository.save(existingProduct);
  }

  async deleteProduct(cod_product: string): Promise<ProductEntity> {
    const product = await this.repository.findOne({ where: { cod_product } });

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    product.status = false;

    return this.repository.save(product);
  }
}
