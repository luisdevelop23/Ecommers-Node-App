import { NextFunction, Request, Response } from "express";
import { QuotasRepository } from "../../domain/repository/quotas.repository";
import { QuotasDto } from "../../domain/dto/quotas.dto";

export class QuotasController {

    constructor(private readonly RP: QuotasRepository) { }

    public getQuotasBySale = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const quotas = await this.RP.getQuotasBySale(req.params.id);
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
    }

    public getQuotaById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const quota = await this.RP.getQuotasById(req.params.id);
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
        }
        catch (error) {
            next(error);
        }
    }
    public createQuota = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const [status, message, data] = QuotasDto.create(req.body);
            const quota = await this.RP.createQuotas(data as QuotasDto);
            res.status(200).json({
                message: "Cuota creada",
                data: quota,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public updateQuota = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id
            const [status, message, data] = QuotasDto.update(req.body);
            const quota = await this.RP.updateQuotas(id, data as QuotasDto);
            res.status(200).json({
                message: "Cuota actualizada",
                data: quota,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public deleteQuota = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id
            const quota = await this.RP.deleteQuotas(id);
            res.status(200).json({
                message: "Cuota eliminada",
                data: quota,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }
}