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
      const page = parseInt(req.query.page as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 10; 

      const { users, pages} = await this.repository.getUsers(page, pageSize, req.query.search as string);
      if (users.length === 0) {
        res.status(204).json({
          message: "No se encontraron Usuarios",
          data: null,
          result: false,
        });
        return
      }
      res.status(200).json({
        message: "Usuarios obtenidos",
        data: users, 
        pages,
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
      console.log(user)
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
          data: {id: user.id_user,name: user.name, email: user.email},
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
          data: {id: user.id_user},
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
        data: {id: user.id_user},
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };
}
