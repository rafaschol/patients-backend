import { Sequelize } from "sequelize-typescript";
import "dotenv/config";

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    models: [__dirname + "/../models/**/*.ts"],
  },
);

export default db;
