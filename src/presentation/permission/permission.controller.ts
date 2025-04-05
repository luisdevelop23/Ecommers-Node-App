import { NextFunction, Request, Response } from "express";
import { PermissionRepository } from "../../domain/repository/permission.repository";
import { PermissionDto } from "../../domain/dto/permission.dto";

export class PermissionController {
  constructor(private readonly repository: PermissionRepository) {}

  public getPermissions = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const permission = await this.repository.getPermissions();
      if (permission.length === 0) {
        res.status(200).json({
          message: "No se encontraron permisos",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Permisos encontrados",
        data: permission,
        result: false,
      });
    } catch (error) {
      next(error);
    }
  };
  public getPermissionById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const permission = await this.repository.getPermissionById(id);
      if (!permission) {
        res.status(200).json({
          message: "No se encontraron permisos",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Permiso encontrado",
        data: permission,
        result: false,
      });
    } catch (error) {
      next(error);
    }
  };
  public createPermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = PermissionDto.create(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const permission = await this.repository.createPermission(
          data as PermissionDto
        );
        res.status(200).json({
          message: "Permiso creado",
          data: permission,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };
  public updatePermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const [status, message, data] = PermissionDto.update(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const id = req.params.id;
        const permission = await this.repository.updatePermission(
          id,
          data as PermissionDto
        );
        res.status(200).json({
          message: "Permiso creado",
          data: permission,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };
  public deletePermission = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const permissionDelete = await this.repository.deletePermission(id);
      res.status(200).json({
        message: "Permiso eliminado",
        data: { id: id, status: permissionDelete.status },
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
