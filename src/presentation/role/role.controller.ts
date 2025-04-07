import { NextFunction, Request, Response } from "express";
import { RoleRepository } from "../../domain/repository/role.repository";
import { RoleDto } from "../../domain/dto/role.dto";

export class RoleController {
  constructor(private readonly repository: RoleRepository) {}

  public getRoles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const role = await this.repository.getRoles();
      if (role.length === 0) {
        res.status(200).json({
          message: "No se encontraron roles",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "roles obtenidos",
        data: role,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
  public getRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const role = await this.repository.getRole(id);
      if (!role) {
        res.status(200).json({
          message: "No se encontro el role",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "role obtenido",
        data: role,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
  public createRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = RoleDto.create(req.body);
      const role = await this.repository.createRole(data as RoleDto);
      res.status(200).json({
        message: "role creado correctamente",
        data: role,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
  public updateRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = RoleDto.update(req.body);
      if (!status) {
        res.status(400).json({ message, data: false, result: false });
        return;
      } else {
        const id = req.params.id;
        const role = await this.repository.updateRole(id, data as RoleDto);
        res.status(200).json({
          message: "role creado correctamente",
          data: role,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };
  public deleteRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const role = await this.repository.deleteRole(id);
      res.status(200).json({
        message: "role Eliminado correctamente",
        data: { id: id, status: role.status },
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
