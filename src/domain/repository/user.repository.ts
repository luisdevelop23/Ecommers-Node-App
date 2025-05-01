import { JwtResponse } from "../dto/jwt-response.dto";
import { UserDto } from "../dto/user.dto";
import { UserEntity } from "../entity/user.entity";

export abstract class UserRepository {
    abstract getUsers(): Promise<UserEntity[]>
    abstract getUser(id: string): Promise<UserEntity>
    abstract createUser(user: UserDto): Promise<UserEntity>
    abstract updateUser(id: string, user: UserDto): Promise<UserEntity>
    abstract deleteUser(id: string): Promise<UserEntity>
    abstract login(usernamen: string, password: string): Promise<JwtResponse>
    abstract refresh(token: string): Promise<JwtResponse>
}