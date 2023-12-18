import path from "path";
import CONFIG from "./config";
import { DataSource } from "typeorm";

let modelsPath = "";

if (CONFIG.PRODUCTION) {
  modelsPath = path.join(process.cwd(), "models", "*.js");
} else {
  modelsPath = path.join(process.cwd(), "src", "models", "*.ts");
}

const db = new DataSource({
  type: "postgres",
  url: CONFIG.DB_URL,
  synchronize: CONFIG.DB_SYNC,
  logging: false,
  entities: [modelsPath],
  applicationName: CONFIG.DB_APPLICATION_NAME,
  poolSize: CONFIG.DB_POOL_SIZE,
});

export default db;