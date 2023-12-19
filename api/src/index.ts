import "reflect-metadata";
import express from "express";
import CONFIG from "./config";
import cors from "cors";
import morgan from "morgan";
import db from "./db";
import errorHandler from "./middleware/ErrorHandler";
import authHandler from "./middleware/AuthHandler";
import cookieParser from "cookie-parser";

const app = express(); // creating an express app

app.use(express.json()); // parsing the request body into json
app.use(cors()); // enabling cors
app.use(cookieParser()); // parsing the cookies
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

app.use(authHandler);

// start of routes
app.use("/api/v1/users", require("./controllers/UserController").default);
app.use(
  "/api/v1/notebooks",
  require("./controllers/NoteBookController").default
);
app.use("/api/v1/pages", require("./controllers/PageController").default);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "Please check the route that you are trying to access",
  });
});

// handling errors thrown in the controllers and sending them as response
app.use(errorHandler);
