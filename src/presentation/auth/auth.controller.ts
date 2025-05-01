import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../domain/repository/user.repository";
import { envs } from "../../plugins/env-var/env";

export class AuthController {
  constructor(private readonly repository: UserRepository) {}
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const user = await this.repository.login(username, password);
      res.cookie("access_token", user.token, {
        httpOnly: true, //?la cookie solo se puede acceder desde el servidor
        sameSite: "strict", //?la cookie solo se puede acceder desde el mismo dominio
        secure: envs.NODE_ENV === "production", //?la coockie solo se puede enviar en https
        maxAge: 1000 * 60 * 60, //?la cookie tiene una duración de 1 hora
      });
      res.status(200).json({
        message: "Usuario logueado",
        token: user.token,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };



  public refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.body;
      const newToken = await this.repository.refresh(token as string);
      res.cookie("access_token", newToken, {
        httpOnly: true, //?la cookie solo se puede acceder desde el servidor
        sameSite: "strict", //?la cookie solo se puede acceder desde el mismo dominio
        secure: envs.NODE_ENV === "production", //?la coockie solo se puede enviar en https
        maxAge: 1000 * 60 * 60, //?la cookie tiene una duración de 1 hora
      });
      res.status(200).json({
        message: "Token actualizado",
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  public logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.clearCookie("access_token").json({
        message: "sesion cerrada",
        result: true,
      });
      res.status(200).json({
        message: "Usuario deslogueado",
        data: null,
        result: true,
      });
    } catch (error) {
      next(error);
    }
  };

  //   public register = async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const { username, password } = req.body;
  //       const user = await this.repository.register(username, password);
  //       res.status(200).json({
  //         message: "Usuario registrado",
  //         data: user,
  //         result: true,
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };
}
