import { NextFunction, Request, Response } from "express";
import { UbigeoRepository } from "../../domain/repository/ubigeo.repository";

export class UbigeoController {
    constructor(private readonly RP: UbigeoRepository) { }

    public getUbigeo = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const ubigeo = await this.RP.getUbigeo(req.params.prompt);
            if (ubigeo.length === 0) {
                res.status(200).json({
                    message: "No se encontraron productos",
                    data: null,
                    result: false,
                });
            }
            res.status(200).json({
                message: "Productos obtenidos",
                data: ubigeo,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    };

    public getUbigeoById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const ubigeo = await this.RP.getUbigeoById(req.params.id);
            if (!ubigeo) {
                res.status(200).json({
                    message: "No se encontraron productos",
                    data: null,
                    result: false,
                });
            }
            res.status(200).json({
                message: "Productos obtenidos",
                data: ubigeo,
                result: true,
            });
        } catch (error) {
            next(error);
        }
    };
}