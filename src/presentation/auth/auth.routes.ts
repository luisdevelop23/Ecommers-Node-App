import { Router } from "express";
import { UserDataSourceImpl } from "../../infrastructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "../../infrastructure/repository/user.repository.impl";
import { UserController } from "../user/user.controller";
import { AuthController } from "./auth.controller";
import { logEndpointWithStatus } from "../../middleware/log.middleware";

export class AuthRoutes {
  static get Routes(): Router {
    const router = Router();
    const userDataSource = new UserDataSourceImpl();
    const UserRepository = new UserRepositoryImpl(userDataSource);
    const authController = new AuthController(UserRepository);
    router.use(logEndpointWithStatus);
    router.post("/login", authController.login);
    router.post("/refresh", authController.refresh);
    router.post("/logout", authController.logout);
    router.get("/verify", authController.verify);
    return router;
  }
}
