import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../domain/repository/user.repository";
import { UserDto } from "../../domain/dto/user.dto";

export class UserController {
  constructor(private readonly repository: UserRepository) {}

  public getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const users = await this.repository.getUsers();
      if (users.length === 0) {
        res.status(200).json({
          message: "No se encontraron Usuarios",
          data: null,
          result: false,
        });
      }
      res.status(200).json({
        message: "Usuarios obtenidos",
        data: users, 
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user = await this.repository.getUser(req.params.id);
      res.status(200).json({
        message: "Usuario obtenido",
        data: user,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const [status, message, data] = UserDto.create(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const user = await this.repository.createUser(data as UserDto);
        res.status(200).json({
          message: "Usuario creado",
          data: user,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const [status, message, data] = UserDto.create(req.body);
      if (!status) {
        res.status(200).json({
          message: message,
          data: null,
          result: false,
        });
      } else {
        const id = req.params.id;
        const user = await this.repository.updateUser(id, data as UserDto);
        res.status(200).json({
          message: "Usuario actualizado",
          data: user,
          result: true,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user = await this.repository.deleteUser(req.params.id);
      res.status(200).json({
        message: "Usuario eliminado",
        data: user,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
