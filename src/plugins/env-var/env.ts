import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  USER: get("USER").asString(),
  PASSWORD: get("PASSWORD").asString(),
  DATABASE: get("DATABASE").asString(),
  HOST: get("HOST").asString(),
  JWT_SECRET: get("JWT_SECRET").asString(),
  JWT_EXPIRES_IN: get("JWT_EXPIRES_IN").asString(),
  NODE_ENV: get("NODE_ENV").asString(),
};
