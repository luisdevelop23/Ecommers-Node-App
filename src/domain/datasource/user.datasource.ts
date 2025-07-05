import { JwtResponse } from "../dto/jwt-response.dto";
import { UserDto } from "../dto/user.dto";
import { UserEntity } from "../entity/user.entity";

export abstract class UserDataSource {
    abstract getUsers(page: number, pageSize: number, search: string): Promise<{users: UserEntity[], pages: number}>
    abstract getUser(id: string): Promise<UserEntity>
    abstract createUser(user: UserDto): Promise<UserEntity>
    abstract updateUser(id: string, user: UserDto): Promise<UserEntity>
    abstract deleteUser(id: string): Promise<UserEntity>
    abstract login(usernamen: string, password: string): Promise<{user:UserEntity,token:JwtResponse}>
    abstract refresh(token: string): Promise<{user:UserEntity,token:JwtResponse}>

}