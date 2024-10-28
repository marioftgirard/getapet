import express, { Response } from "express";
import "express-async-errors";
import router from "./routes";
import "reflect-metadata";
import { APPDS } from "./config/dataSource";
import { ErrorHandler } from "./utils/ErrorHandlers";
import { errorMiddleware } from "./middleware/errors/error";

const app = express();
app.use(express.json());

router(app);

app.use(errorMiddleware);

APPDS.initialize().then(() => {
  console.log("Database connected");
}).catch((err:Error) => { console.log(err) });

export default app;
