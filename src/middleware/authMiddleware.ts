import { Request, Response, NextFunction } from "express";
import { JwtService } from "../plugins/jwt/jwt";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];  // Esperamos el token en el header "Authorization: Bearer <token>"

  if (!token) {
    return res.status(403).json({ message: "Acceso denegado. No se ha proporcionado un token." });
  }

  try {
    const decoded = JwtService.verifyToken(token);  // Verificamos el token
    req.user = decoded;  // Guardamos el payload del JWT en la solicitud
    next();  // Continuamos con la ejecución de la ruta
  } catch (error) {
    return res.status(401).json({ message: "Token no válido o expirado." });
  }
};
