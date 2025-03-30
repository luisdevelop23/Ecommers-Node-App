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
          result: false,
        });
      }
      res.status(200).json({
        message: "Productos obtenidos",
        data: products,
        result: true,
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
      console.log(typeof req.params.id);
      const product = await this.RP.getProduct(req.params.id);
      res.status(200).json({
        message: "Producto obtenido",
        data: product,
        result: true,
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
        res.status(400).json({ message, result: false });
        return;
      }
      const product = await this.RP.createProduct(data as ProductDto);
      res.status(201).json({
        message: "Producto creado",
        data: product,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (
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
      const id = req.params.id;
      const product = await this.RP.updateProduct(id, data as ProductDto);
      res.status(200).json({
        message: "Producto actualizado",
        data: product,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const idDelete = req.params.id;
      const product = await this.RP.deleteProduct(idDelete);
      res.status(200).json({
        messega: "Producto Eliminado Correctamente",
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
