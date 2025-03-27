import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  USER: get("USER").asString(),
  PASSWORD: get("PASSWORD").asString(),
  DATABASE: get("DATABASE").asString(),
  HOST: get("HOST").asString(),
  SUPABASE_URL: get("SUPABASE_URL").asString(),
  SUPABASE_KEY: get("SUPABASE_KEY").asString(),
  TOKEN_API_PERU: get("TOKEN_APIS_PERU").asString(),
  FRONT_ROUTE: get("FRONT_ROUTE").asString(),
  TOKEN_API_PERUDEV: get("TOKEN_APIS_PERUDEV").asString(),
};
