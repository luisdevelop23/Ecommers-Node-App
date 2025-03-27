import { NextFunction, Request, Response } from "express";
import { ProductRepository } from "../../domain/repository/product.repository";
import { ProductDto } from "../../domain/dto/product.dto";

export class ProductController {
  constructor(private readonly RP: ProductRepository) {}

  public getProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const products = await this.RP.getProducts();
      if (products.length === 0) {
        res.status(200).json({
          message: "No se encontraron productos",
          data: null,
        });
      }
      res.status(200).json({
        message: "Productos obtenidos",
        data: products,
      });
    } catch (error) {
      next(error);
    }
  };

  public getProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const product = await this.RP.getProduct(req.params.id);
      res.status(200).json({
        message: "Producto obtenido",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const [status, message, data] = ProductDto.create(req.body);
      if (!status) {
        res.status(400).json({ message });
        return;
      }
      const product = await this.RP.createProduct(data as ProductDto);
      res.status(201).json({
        message: "Producto creado",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  };

  
}
