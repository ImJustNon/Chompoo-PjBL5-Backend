import express, { Application, Handler } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import fs, { link } from "fs";
import path from "path";
import dotenv from "dotenv";
import { NextHandleFunction } from "connect";
import { CorsOriginCallbackFunction, CorsOriginParam } from "./types/index.type";
import { config } from "./config/config";

const app: Application = express();

const urlEncoded: NextHandleFunction = bodyParser.urlencoded({
    extended: false,
    limit: "50mb"
});
const jsonEncoded: NextHandleFunction = express.json();
const corsOrigins: NextHandleFunction = cors({
    origin: function (origin: CorsOriginParam, callback: CorsOriginCallbackFunction) {
        if (!origin) return callback(null, true);
        if (config.allowedOrigins.indexOf(origin as never) === -1) {
            const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
});
const logger: Handler = morgan("dev");

app.use(urlEncoded);
app.use(jsonEncoded);
app.use(corsOrigins);
app.use(logger);

app.listen(config.port, () =>{
    console.log(`> RestAPI Service listening on port : ${config.port} : ${config.baseUrl}:${config.port}`);
});


export default app;


