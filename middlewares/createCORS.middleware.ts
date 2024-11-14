import { NextHandleFunction } from "connect";
import cors from "cors";
import { CorsOriginCallbackFunction, CorsOriginParam } from "../types/index.type";

export function createCROS(allowedOrigins: string[]): NextHandleFunction {
    return cors({
        origin: function (origin: CorsOriginParam, callback: CorsOriginCallbackFunction) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin as never) === -1) {
                const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
        credentials: true,
    });
}