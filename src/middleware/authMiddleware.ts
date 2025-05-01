import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { envs } from "../plugins/env-var/env";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.access_token;

  if (!token) {
     res.status(401).json({
      message: "No se encuentra el token, por favor inicia sesión.",
      result: false,
    });
    return
  }
  try {
    
    const decoded = jwt.verify(token, envs.JWT_SECRET as string);
  
    next();
    return
  } catch (err) {
     res.status(401).json({
      message: "Token inválido o expirado.",
      result: false,
    });
    return
  }
};
