import { UserDataSource } from "../../domain/datasource/user.datasource";
import { UserDto } from "../../domain/dto/user.dto";
import { UserEntity } from "../../domain/entity/user.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class UserDataSourceImpl implements UserDataSource {
  private repository = TypeOrmCustomize.getRepository(UserEntity);

  getUsers(): Promise<UserEntity[]> {
    return this.repository.find({
      select: [
        "name",
        "surnames",
        "img_profile",
        "dni",
        "id_user",
        "email",
        "status",
      ],
      order: { created_at: "DESC" },
    });
  }
  async getUser(id: string): Promise<UserEntity> {
    const user = await this.repository.findOne({ where: { id_user: id } });
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  }
  async createUser(user: UserDto): Promise<UserEntity> {
    const newUser = this.repository.create({
      ...user,
      status: true,
    });
    return this.repository.save(newUser);
  }
  async updateUser(id: string, user: UserDto): Promise<UserEntity> {
    const userToUpdate = await this.repository.findOne({ where: { id_user: id } });
    if (!userToUpdate) {
      throw new Error("Usuario no encontrado");
    }
    Object.assign(userToUpdate, {
      ...user,
      updated_at: new Date(),
    });
    return this.repository.save(userToUpdate);
  }
  async deleteUser(id: string): Promise<UserEntity> {
    const userToDelete = await this.repository.findOne({ where: { id_user: id } });
    if (!userToDelete) {
      throw new Error("Usuario no encontrado");
    }
    userToDelete.status = false;
    return this.repository.save(userToDelete);
  }
}
