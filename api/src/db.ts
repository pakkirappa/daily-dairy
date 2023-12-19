import path from "path";
import CONFIG from "./config";
import { DataSource } from "typeorm";

const db = new DataSource({
  type: "mysql",
  url: CONFIG.DB_URL,
  logging: false,
  poolSize: CONFIG.DB_POOL_SIZE,
});

export default db;