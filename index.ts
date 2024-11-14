import express, { Application, Handler, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import fs, { link } from "fs";
import path from "path";
import dotenv from "dotenv";
import { NextHandleFunction } from "connect";
import { CorsOriginCallbackFunction, CorsOriginParam } from "./types/index.type";
import { config } from "./config/config";
import rootRouter from "./routes/root.route";
import studentRouter from "./routes/student.route";
import rateLimit, { Options, RateLimitRequestHandler } from "express-rate-limit";
import { createCROS } from "./middlewares/createCORS.middleware";
import { createRateLimiter } from "./middlewares/createRateLimiter.middleware";
import cookieParser from "cookie-parser";

const app: Application = express();

const urlEncoded: NextHandleFunction = bodyParser.urlencoded({
    extended: false,
    limit: "50mb"
});
const jsonEncoded: NextHandleFunction = express.json();
const corsOrigins: NextHandleFunction = createCROS(config.allowedOrigins);
const logger: NextHandleFunction = morgan("dev");
const limiter: RateLimitRequestHandler = createRateLimiter(5 * 60 * 1000, 100);



app.use(corsOrigins);
app.use(urlEncoded);
app.use(jsonEncoded);
app.use(cookieParser());
app.use(logger);
app.use(limiter);


app.use("/api", rootRouter);

app.listen(config.port, () =>{
    console.log(`> RestAPI Service listening on port : ${config.port} : ${config.baseUrl}:${config.port}`);
});


export default app;


