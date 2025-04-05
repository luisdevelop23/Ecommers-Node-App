import { NextFunction, Request, Response } from "express";
import { QuotasRepository } from "../../domain/repository/quotas.repository";
import { QuotasDto } from "../../domain/dto/quotas.dto";

export class QuotasController {
  constructor(private readonly repository: QuotasRepository) {}

  public getQuotasBySale = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const quotas = await this.repository.getQuotasBySale(req.params.id);
      if (quotas.length === 0) {
        res.status(200).json({
          message: "No se encontraron cuotas",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Cuotas obtenidas",
        data: quotas,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public getQuotaById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const quota = await this.repository.getQuotasById(req.params.id);
      if (!quota) {
        res.status(200).json({
          message: "No se encontraron cuotas",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Cuotas obtenida",
        data: quota,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
  public createQuota = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = QuotasDto.create(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const quota = await this.repository.createQuotas(data as QuotasDto);
        res.status(200).json({
          message: "Cuota creada",
          data: quota,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public updateQuota = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const [status, message, data] = QuotasDto.update(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const quota = await this.repository.updateQuotas(id, data as QuotasDto);
        res.status(200).json({
          message: "Cuota actualizada",
          data: quota,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public deleteQuota = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const quota = await this.repository.deleteQuotas(id);
      res.status(200).json({
        message: "Cuota eliminada",
        data: quota,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
