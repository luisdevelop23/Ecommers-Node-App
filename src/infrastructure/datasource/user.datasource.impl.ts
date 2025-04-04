import { UserDataSource } from "../../domain/datasource/user.datasource";
import { UserDto } from "../../domain/dto/user.dto";
import { UserEntity } from "../../domain/entity/user.entity";
import { TypeOrmCustomize } from "../../plugins/type-orm/type-orm";

export class UserDataSourceImpl implements UserDataSource {
  private RP = TypeOrmCustomize.getRepository(UserEntity);

  getUsers(): Promise<UserEntity[]> {
    return this.RP.find({
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
    const user = await this.RP.findOne({ where: { id_user: id } });
    if (!user) {
      throw new Error("Producto no encontrado");
    }
    return user;
  }
  async createUser(user: UserDto): Promise<UserEntity> {
    const newUser = this.RP.create({
      ...user,
      status: true,
    });
    return this.RP.save(newUser);
  }
  async updateUser(id: string, user: UserDto): Promise<UserEntity> {
    const userToUpdate = await this.RP.findOne({ where: { id_user: id } });
    if (!userToUpdate) {
      throw new Error("Producto no encontrado");
    }
    Object.assign(userToUpdate, {
      ...user,
      updated_at: new Date(),
    });
    return this.RP.save(userToUpdate);
  }
  async deleteUser(id: string): Promise<UserEntity> {
    const userToDelete = await this.RP.findOne({ where: { id_user: id } });
    if (!userToDelete) {
      throw new Error("Producto no encontrado");
    }
    userToDelete.status = false;
    return this.RP.save(userToDelete);
  }
}
