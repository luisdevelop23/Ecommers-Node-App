import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../domain/repository/user.repository";
import { envs } from "../../plugins/env-var/env";
import jwt from "jsonwebtoken";
import { BadCredentialsError } from "../../helpers/message.error";

export class AuthController {
  constructor(private readonly repository: UserRepository) {}
  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const { username, password } = req.body;
      const {user, token} = await this.repository.login(username, password);
      console.log("user login", user);
      console.log("user token", token);
      res.cookie("access_token",token.token, {
        httpOnly: true, //?la cookie solo se puede acceder desde el servidor
        sameSite: "strict", //?la cookie solo se puede acceder desde el mismo dominio
        secure: envs.NODE_ENV === "production", //?la coockie solo se puede enviar en https
        maxAge: 1000 * 60 * 60, //?la cookie tiene una duración de 1 hora
      });
      res.status(200).json({
        message: "Usuario logueado",
        data: user,
        result: true,
      });

    } catch (error) {
      next(error);
    }
  };

  public refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { token } = req.body;
      const { user, token: newToken } = await this.repository.refresh(token as string);
      res.cookie("access_token", newToken, {
        httpOnly: true, //?la cookie solo se puede acceder desde el servidor
        sameSite: "strict", //?la cookie solo se puede acceder desde el mismo dominio
        secure: envs.NODE_ENV === "production", //?la coockie solo se puede enviar en https
        maxAge: 1000 * 60 * 60, //?la cookie tiene una duración de 1 hora
      });
      res.status(200).json({
        message: "Token actualizado",
        data: user,
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

  public verify = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.access_token;
        console.log("tokensss", token);
      if (!token) {
        res.status(401).json({
          message: "Token no valido",
          data: false,
          result: false,
        });
      }
      const decoded = jwt.verify(token, envs.JWT_SECRET as string) as any;
      console.log("decoded", decoded);
      // Verificamos que el token esté bien formado y contenga la propiedad 'data'
      if (!decoded || !decoded.data) {
        throw new BadCredentialsError("Token inválido o mal formado", {
          result: false,
          message: "Token inválido",
          errorCode: "TOKEN_INVALID",
        });
      }
      res.status(200).json({
        message: "Token valido",
        data: true,
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
