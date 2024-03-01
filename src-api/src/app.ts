import express, { Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { indexRoute } from "./routes/index";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRoute);
// app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
