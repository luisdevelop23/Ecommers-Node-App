import { NextFunction, Request, Response } from "express";
import {
  BadCredentialsError,
  DatabaseError
} from "../helpers/message.error";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err instanceof BadCredentialsError) {
    res.status(401).json({
      message: err.message,
      result: false,
      errorCode: "BAD_CREDENTIALS",
    });
    return;
  }

  if (err instanceof DatabaseError) {
    res.status(500).json({
      message: err.message,
      result: false,
      errorCode: "DATABASE_ERROR",
    });
    return;
  }

  res.status(500).json({
    message: "Error interno del servidor",
    result: false,
    errorCode: "SERVER_ERROR",
  });
};
