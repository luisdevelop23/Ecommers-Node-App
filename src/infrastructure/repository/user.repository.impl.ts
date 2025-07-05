import { UserDataSource } from "../../domain/datasource/user.datasource";
import { JwtResponse } from "../../domain/dto/jwt-response.dto";
import { UserDto } from "../../domain/dto/user.dto";
import { UserEntity } from "../../domain/entity/user.entity";
import { UserRepository } from "../../domain/repository/user.repository";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly datasource: UserDataSource) {}

  async getUsers(page: number, pageSize: number, search: string): Promise<{users: UserEntity[], pages: number}> {
    return await this.datasource.getUsers(page, pageSize, search);
  }
  async getUser(id: string): Promise<UserEntity> {
    return await this.datasource.getUser(id);
  }
  async createUser(user: UserDto): Promise<UserEntity> {
    return await this.datasource.createUser(user);
  }
  async updateUser(id: string, user: UserDto): Promise<UserEntity> {
    return await this.datasource.updateUser(id, user);
  }
  async deleteUser(id: string): Promise<UserEntity> {
    return await this.datasource.deleteUser(id);
  }
  async login(usernamen: string, password: string): Promise<{user:UserEntity,token:JwtResponse}> {
    return await this.datasource.login(usernamen, password);
  }
  async refresh(token: string): Promise<{user:UserEntity,token:JwtResponse}> {
    return await this.datasource.refresh(token);
  }
}
