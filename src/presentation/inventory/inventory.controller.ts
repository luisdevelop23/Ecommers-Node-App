import { NextFunction, Request, Response } from "express";
import { InventoryRepository } from "../../domain/repository/inventory.repository";
import { InventoryDto } from "../../domain/dto/inventory.dto";

export class InventoryController {
  constructor(private readonly repository: InventoryRepository) {}

  public getInventories = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const inventories = await this.repository.getInventories();
      if (inventories.length === 0) {
        res.status(200).json({
          message: "No se encontraron inventarios",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "inventarios obtenidos",
        data: inventories,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public getInventoryById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const inventory = await this.repository.getInventoryById(id);
      if (!inventory) {
        res.status(200).json({
          message: "No se encontro el inventario",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "inventario obtenido",
        data: inventory,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public createInventory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = InventoryDto.create(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const inventory = await this.repository.createInventory(
          data as InventoryDto
        );
        res.status(200).json({
          message: "inventario creado",
          data: inventory,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public updateInventory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = InventoryDto.update(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const id = req.params.id;
        const inventory = await this.repository.updateInventory(id, req.body);
        res.status(200).json({
          message: "inventario creado",
          data: inventory,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public deleteInventory = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const inventory = await this.repository.deleteInventory(id);
      res.status(200).json({
        message: "inventario eliminado",
        data: {
          id: id,
          status: inventory.status,
        },
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
