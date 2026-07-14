import "server-only";
import { Sequelize } from "sequelize";
import { getServerEnvironment } from "@/config/env";

let sequelize: Sequelize | undefined;
export function getDatabaseConnection(): Sequelize {
  if (sequelize) return sequelize;
  const env = getServerEnvironment();
  sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: "mysql",
    logging: process.env.NODE_ENV === "development" ? console.debug : false,
    dialectOptions: env.DB_SSL === "true" ? { ssl: { require: true } } : undefined,
    pool: { max: 10, min: 0, acquire: 30_000, idle: 10_000 },
  });
  return sequelize;
}
