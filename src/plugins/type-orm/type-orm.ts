import { DataSource } from "typeorm";
import { envs } from "../env-var/env";

export const TypeOrmCustomize = new DataSource({
  type: "mysql",
  host: envs.HOST,
  port: 3306,
  username: envs.USER,
  password: envs.PASSWORD,
  database: envs.DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/domain/entity/*.ts"],
});
