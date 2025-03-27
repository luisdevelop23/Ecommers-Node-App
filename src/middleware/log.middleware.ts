import { Request, Response, NextFunction } from "express";
import printLog from "../plugins/print-log/print.log";

export const logEndpointWithStatus = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const endpoint = `${req.method} ${req.originalUrl} ${duration} ms`;
    const statusCode = res.statusCode;

    statusCode >= 200 && statusCode < 300
      ? printLog.correct(endpoint)
      : statusCode >= 400 && statusCode < 500
      ? printLog.warning(endpoint)
      : statusCode >= 500
      ? printLog.error(endpoint)
      : printLog.error(endpoint);
  });

  next();
};
