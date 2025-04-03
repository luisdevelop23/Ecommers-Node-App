import { NextFunction, Request, Response } from "express";
import { SaleRepository } from "../../domain/repository/sale.repository";
import { SaleDto } from "../../domain/dto/sale.dto";

export class SaleController {
    constructor(private readonly RP: SaleRepository) { }

    public getSales = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const sales = await this.RP.getSales();
            if (sales.length === 0) {
                res.status(200).json({
                    message: "No se encontraron ventas",
                    data: null,
                    result: false,
                });
            }
            res.status(200).json({
                message: "ventas obtenidos",
                data: sales,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public getSale = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const sale = await this.RP.getSale(req.params.id);
            res.status(200).json({
                message: "venta obtenido",
                data: sale,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public createSale = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            console.log("sale controller", req.body);
            const [status, message, data] = SaleDto.create(req.body);
            const sale = await this.RP.createSale(data as SaleDto);
            res.status(200).json({
                message: "ventas creadas",
                data: sale,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public updateSale = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const [status, message, data] = SaleDto.create(req.body);
            const id = req.params.id
            const sale = await this.RP.updateSale(id, data as SaleDto);
            res.status(200).json({
                message: "venta actualizadas",
                data: sale,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public deleteSale = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const sale = await this.RP.deleteSale(req.params.id);
            res.status(200).json({
                message: "ventas Eliminada correctamente",
                data: sale,
            });
        } catch (error) {
            next(error);
        }
    }
}