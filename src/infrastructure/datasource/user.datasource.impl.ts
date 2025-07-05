import { UserDataSource } from "../../domain/datasource/user.datasource";
import { JwtResponse } from "../../domain/dto/jwt-response.dto";
import { UserDto } from "../../domain/dto/user.dto";
import { UserEntity } from "../../domain/entity/user.entity";
import { BadCredentialsError } from "../../helpers/message.error";
import { comparePasswords, hashPassword } from "../../plugins/bcrypt/bcrypt";
import { envs } from "../../plugins/env-var/env";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";
import jwt from "jsonwebtoken";
export class UserDataSourceImpl implements UserDataSource {
  private repository = TypeOrmCustomize.getRepository(UserEntity);

  private static getJwt(user: UserEntity): JwtResponse {
    const exp = Math.floor(Date.now() / 1000) + 60 * 60;
    const token = jwt.sign(
      {
        exp,
        data: {
          id: user.id_user,
          username: user.user_name,
          name: user.name,
        },
      },
      envs.JWT_SECRET as string
    );
    return {
      token,
      exp,
      type: "Bearer",
    };
  }
  async refresh(
    token: string
  ): Promise<{ user: UserEntity; token: JwtResponse }> {
    try {
      const payload = jwt.verify(token, envs.JWT_SECRET as string) as any;
      console.log("payload", payload);
      const user = await this.repository.findOne({
        where: {
          id_user: payload.data.id,
          user_name: payload.data.username,
          name: payload.data.name,
        },
        select: [
          "id_user",
          "name",
          "surnames",
          "dni",
          "user_name",
          "email",
          "status",
          "password",
        ],
      });
      if (!user) {
        throw new BadCredentialsError("Usuario no encontrado", {
          result: false,
          message: "Usuario no encontrado",
          errorCode: "USER_NOT_FOUND",
        });
      }
      const { password: _password, ...userWithoutPassword } = user;
      const user2: UserEntity = userWithoutPassword;
      return {
        user: user2,
        token: UserDataSourceImpl.getJwt(user),
      };
    } catch (error) {
      throw new BadCredentialsError("Token invalido", {
        result: false,
        message: "Token invalido",
        errorCode: "TOKEN_INVALID",
      });
    }
  }

  async getUsers(
    page: number,
    pageSize: number,
    search: string
  ): Promise<{ users: UserEntity[]; pages: number }> {
    const users = await this.repository.find({
      where: { status: true },
      select: ["name", "surnames", "dni", "user_name", "email", "status"],
      order: { created_date: "DESC" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    const count = await this.repository.count({ where: { status: true } });

    return { users, pages: Math.ceil(count / pageSize) };
  }

  async getUser(id: string): Promise<UserEntity> {
    const user = await this.repository.findOne({
      where: { id_user: id },
      select: [
        "name",
        "surnames",
        "dni",
        "user_name",
        "email",
        "img_profile",
        "id_role",
        "status",
      ],
    });
    if (!user) {
      throw new BadCredentialsError("Usuario no encontrado", {
        result: false,
        message: "Usuario no encontrado",
        errorCode: "USER_NOT_FOUND",
      });
    }
    return user;
  }

  async createUser(user: UserDto): Promise<UserEntity> {
    const { password } = user;

    const newUser = this.repository.create({
      ...user,
      password: await hashPassword(password as string),
      status: true,
    });
    const savedUser = this.repository.save(newUser);
    return savedUser;
  }

  async updateUser(id: string, user: UserDto): Promise<UserEntity> {
    const userToUpdate = await this.repository.findOne({
      where: { id_user: id },
    });
    if (!userToUpdate) {
      throw new Error("Usuario no encontrado");
    }
    Object.assign(userToUpdate, {
      ...user,
      id_user: userToUpdate.id_user,
      created_date: userToUpdate.created_date,
      updated_date: new Date(),
    });
    return this.repository.save(userToUpdate);
  }

  async deleteUser(id: string): Promise<UserEntity> {
    const userToDelete = await this.repository.findOne({
      where: { id_user: id },
    });
    if (!userToDelete) {
      throw new Error("Usuario no encontrado");
    }
    userToDelete.status = false;
    return this.repository.save(userToDelete);
  }
  async login(
    usernamen: string,
    password: string
  ): Promise<{ user: UserEntity; token: JwtResponse }> {
    const user = await this.repository.findOne({
      where: { user_name: usernamen },
      select: [
        "id_user",
        "name",
        "surnames",
        "dni",
        "user_name",
        "email",
        "status",
        "password",
      ],
    });
    if (!user) {
      throw new BadCredentialsError("Usuario no encontrado", {
        result: false,
        message: "Usuario no encontrado",
        errorCode: "USER_NOT_FOUND",
      });
    }
    if (!(await comparePasswords(password, user.password as string))) {
      throw new BadCredentialsError("Contraseña incorrecta", {
        result: false,
        message: "Contraseña incorrecta",
        errorCode: "PASSWORD_INCORRECT",
      });
    }

    const { password: _password, ...userWithoutPassword } = user;
    const user2: UserEntity = userWithoutPassword;
    const token = UserDataSourceImpl.getJwt(user2);
    return { user: user2, token: token };
  }
}
