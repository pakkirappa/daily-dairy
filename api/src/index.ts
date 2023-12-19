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
app.use("/api/v1/users", require("./controllers/UserController").default);
// app.use("/api/notebooks", require("./controllers/PageController").default);
// app.use("/api/pages", require("./controllers/NotebookController").default);

// handling errors thrown in the controllers and sending them as response
app.use(ErrorHandler);
