import { NextFunction, Request, Response } from "express";
import { InventoryMovementRepository } from "../../domain/repository/inventory_movement.repository";
import { InventoryMovementDto } from "../../domain/dto/invetory_movement.dto";

export class InventoryMovementController {
  constructor(private readonly repository: InventoryMovementRepository) {}

  public getMovements = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const movements = await this.repository.getMovements();
      if (movements.length === 0) {
        res.status(200).json({
          message: "No se encontraron movimientos",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Movimientos obtenidos",
        data: movements,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public getMovementById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const movements = await this.repository.getMovementById(id);
      if (!movements) {
        res.status(200).json({
          message: "No se encontraron movimientos",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Movimientos obtenidos",
        data: movements,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public getMovementByIdProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const movements = await this.repository.getMovementByIdProduct(id);
      if (!movements) {
        res.status(200).json({
          message: "No se encontraron movimientos",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Movimientos obtenidos",
        data: movements,
        result: true,
      });
    } catch (error) {}
  };

  public getMovementByDate = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const ini = req.params.ini;
      const fin = req.params.fin;
      const movements = await this.repository.getMovementByDate(ini, fin);
      if (!movements) {
        res.status(200).json({
          message: "No se encontraron movimientos",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Movimientos obtenidos",
        data: movements,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public createMovement = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = InventoryMovementDto.create(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const result = await this.repository.createMovement(
          data as InventoryMovementDto
        );
        res.status(200).json({
          message: message,
          data: result,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public updateMovement = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = InventoryMovementDto.update(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const id = req.params.id;
        const result = await this.repository.updateMovement(
          id,
          data as InventoryMovementDto
        );
        res.status(200).json({
          message: message,
          data: result,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public deleteMovement = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const result = await this.repository.deleteMovement(id);
      res.status(200).json({
        message: "Movimiento eliminado",
        data: result,
        result: true,
      });
    } catch (error) {}
  };
}
