import {ProductDataSource} from "../../domain/datasource/product.datasource";
import {ProductDto} from "../../domain/dto/product.dto";
import {ProductEntity} from "../../domain/entity/product.entity";
import {generateCode} from "../../helpers/generate_code";
import {TypeOrmCustomize} from "../../plugins/type-orm/type-orm";
import * as console from "node:console";

export class ProductDataSourceImpl implements ProductDataSource {
    private repository = TypeOrmCustomize.getRepository(ProductEntity);

    async getProducts(page: number, pageSize: number): Promise<{ products: ProductEntity[], pages: number }> {
        const products = await this.repository.find({
            where: {status: true},
            order: {cod_product: "DESC"},
            relations: ["user"],
            select: {
                id_product: true,
                cod_product: true,
                name: true,
                model: true,
                brand: true,
                colors: true,
                liters: true,
                km: true,
                engine: true,
                description: true,
                weight: true,
                tires: true,
                purchase_price: true,
                sale_price: true,
                created_date: true,
                user: {
                    name: true,
                },
                status: true,
            },
            skip: (page - 1) * pageSize,
            take: pageSize,
        });

        const count = await this.repository.count({
            where: {status: true},
        });

        return {
            products,
            pages: Math.ceil(count / pageSize),
        };
    }

    async getProduct(cod_product: string): Promise<ProductEntity | null> {
        const product = await this.repository.findOne({
            where: {
                cod_product,
                status: true,
            },
            relations: ["user"],
            select: {
                id_product: true,
                cod_product: true,
                name: true,
                model: true,
                brand: true,
                colors: true,
                liters: true,
                km: true,
                engine: true,
                description: true,
                weight: true,
                tires: true,
                purchase_price: true,
                sale_price: true,
                created_date: true,
                user: {
                    id_user: true,
                },
                status: true,
            },
        });
        return product;
    }

    async createProduct(product: ProductDto): Promise<ProductEntity> {
        console.log("productooooooo", product);
        const newProduct = this.repository.create({
            ...product,
            id_product: await generateCode(this.repository, "P", "id_product"),
            cod_product: await generateCode(this.repository, "CP", "cod_product"),
        });

        return this.repository.save(newProduct);
    }

    async updateProduct(
        cod_product: string,
        product: ProductDto
    ): Promise<ProductEntity> {
        const existingProduct = await this.repository.findOne({
            where: {cod_product, status: true},
        });

        if (!existingProduct) {
            throw new Error("Producto no encontrado");
        }
        Object.assign(existingProduct, {
            ...product,
            id_product: existingProduct.id_product,
            created_date: existingProduct.created_date,
            updated_date: new Date(),
        });

        return this.repository.save(existingProduct);
    }

    async deleteProduct(cod_product: string): Promise<ProductEntity> {
        const product = await this.repository.findOne({where: {cod_product}});

        if (!product) {
            throw new Error("Producto no encontrado");
        }

        Object.assign(product, {
            updated_date: new Date(),
            status: false
        });

        return this.repository.save(product);
    }

    async codNew(): Promise<String> {
        return await generateCode(this.repository, "CP", "cod_product")
    }

}
