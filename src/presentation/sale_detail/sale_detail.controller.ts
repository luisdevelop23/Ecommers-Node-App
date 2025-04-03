import { NextFunction, Request, Response } from "express";
import { SaleDetailRepository } from "../../domain/repository/sale_dateil.repository";
import { SaleDetailDto } from "../../domain/dto/sale_detail.dto";

export class SaleDetailController {
    constructor(private readonly RP: SaleDetailRepository) { }

    public getSaleDetails = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const saleDetails = await this.RP.getSaleDetails();
            if (saleDetails.length === 0) {
                res.status(200).json({
                    message: "No se encontraron ventas",
                    data: null,
                    result: false,
                });
            }
            res.status(200).json({
                message: "ventas obtenidos",
                data: saleDetails,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public getSaleDetail = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const saleDetails = await this.RP.getSaleDetail(id);
            if (!saleDetails) {
                res.status(200).json({
                    message: "No se encontraron ventas",
                    data: null,
                    result: false,
                });
            }
            res.status(200).json({
                message: "ventas obtenidos",
                data: saleDetails,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public createSaleDetail = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const [status, message, data] = SaleDetailDto.create(req.body);
            console.log("desde el controller body",req.body);
            console.log("desde el controller",data);
            if (!status) {
                res.status(400).json({
                    message: message,
                    data: null,
                    result: false,
                });
            }
            const saleDetail = await this.RP.createSaleDetail(data as SaleDetailDto);
            res.status(200).json({
                message: "venta creada",
                data: saleDetail,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public updateSaleDetail = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            console.log(req.body);
            const [status, message, data] = SaleDetailDto.create(req.body);
            const id = req.params.id;
            if (!status) {
                res.status(400).json({
                    message: message,
                    data: null,
                    result: false,
                });
            }
            console.log("data",data)
            const saleDetail = await this.RP.updateSaleDetail(id, data as SaleDetailDto);
            res.status(200).json({
                message: "venta actualizada",
                data: saleDetail,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }

    public deleteSaleDetail = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const id = req.params.id;
            const saleDetail = await this.RP.deleteSaleDetail(id);
            res.status(200).json({
                message: "venta eliminada",
                data: saleDetail,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    }
}