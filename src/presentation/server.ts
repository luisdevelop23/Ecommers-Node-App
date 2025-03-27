import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppRoutes } from "./app.routes";
import { TypeOrmCustomize } from "../plugins/type-orm/type-orm";
export class Server {
  private app = express();
  port: number = 3000;
  private configurationMiddlewares() {
    const corsOptions = {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    };
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private configurationRoutes() {
    this.app.use(AppRoutes.routes);
  }

  private async connectDatabase() {
    try {
      await TypeOrmCustomize.initialize();
      console.log("Coneion exitosa a la base de datos");
    } catch (error) {
      console.error("Error de coneccion a la base de datos");
      console.log(error);
      process.exit(1);
    }
  }

  private configurationErrorHandler() {
    this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      if (res.headersSent) {
        return next(err); 
      }
      console.error("❌ Error en la API:", err);
      res.status(err.status || 500).json({ message: err.message || "Error interno del servidor" });
    });
  }

  async run() {
    this.configurationMiddlewares();
    this.configurationRoutes();
    await this.connectDatabase();
    this.configurationErrorHandler();
    // this.app.use(errorHandler);
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port} `);
    });
  }
}
