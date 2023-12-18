import "reflect-metadata";
import express from "express";
import CONFIG from "./config";
import cors from "cors";
import morgan from "morgan";
import db from "./db";
import ErrorHandler from "./middleware/ErrorHandler";

const app = express(); // creating an express app

app.use(express.json()); // parsing the request body into json
app.use(cors()); // enabling cors
app.use(morgan("dev")); //logging the requests in the console

async function init() {
  try {
    await db.initialize();
    app.listen(CONFIG.APP_PORT, () => {
      console.log(`Server Listening On ${CONFIG.APP_HOST}`);
    });
  } catch (error) {
    console.log("Error connecting database");
    console.log(error, "error");
  }
}

init();

app.get("/", async (req, res) => {
  res.json({
    status: 200,
    message: "Welcome to the API Of YMTS CRM",
    health: "OK",
  });
});

// start of routes
app.use("/api/employees", require("./controllers/EmployeeController").default);
app.use("/api/sources", require("./controllers/SourceController").default);
app.use("/api/teams", require("./controllers/TeamController").default);
app.use(
  "/api/projecttypes",
  require("./controllers/ProjectTypeController").default
);
app.use(
  "/api/projectstatus",
  require("./controllers/ProjectStatusController").default
);
app.use("/api/leads", require("./controllers/LeadController").default);
app.use("/api/saletasks", require("./controllers/SaleTaskController").default);
app.use("/api/leadstatus", require("./controllers/LeadController").default);

// handling errors thrown in the controllers and sending them as response
app.use(ErrorHandler);
