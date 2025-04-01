import { Router } from "express";
import { UserDataSourceImpl } from "../../infrastructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "../../infrastructure/repository/user.repository.impl";
import { UserController } from "./user.controller";


export class UserRoutes {

    static get routes(): Router {
        const router = Router();
        const userDataSource = new UserDataSourceImpl();
        const UserRepository = new UserRepositoryImpl(userDataSource);
        const userController = new UserController(UserRepository);
        router.get("/:id", userController.getUser);
        router.get("/", userController.getUsers);
        router.post("/", userController.createUser);
        router.put("/:id", userController.updateUser);
        router.delete("/:id", userController.deleteUser);
        return router;
    }
}