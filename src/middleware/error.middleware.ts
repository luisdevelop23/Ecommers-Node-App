import { NextFunction, Request, Response } from "express";
import {
  DatabaseError,
  DuplicityName,
  DuplicityRuc,
  ErrorRuc,
  NotFound,
  ValidationError
} from "../helpers/message.error";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    next(err);
    return;
  }





  if (err instanceof DatabaseError) {
    res.status(500).json({ message: err.message });
    return;
  }

  if (err instanceof ValidationError) {
    res.status(400).json({ message: err.message });
    return;
  }

  if (err instanceof ErrorRuc) {
    res.status(400).json({ message: err.message });
    return;
  }

  if (err instanceof NotFound) {
    res.status(400).json({ message: err.message });
    return;
  }

  if (err instanceof DuplicityName) {
    res.status(400).json({ message: err.message });
    return;
  }



  res.status(500).json({ message: "Error interno del servidor" });
  return;
};
