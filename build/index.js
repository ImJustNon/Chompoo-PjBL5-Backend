"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
const urlEncoded = body_parser_1.default.urlencoded({
    extended: false,
    limit: "50mb"
});
const jsonEncoded = express_1.default.json();
const corsOrigins = (0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin)
            return callback(null, true);
        if (config_1.config.allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
});
const logger = (0, morgan_1.default)("dev");
app.use(urlEncoded);
app.use(jsonEncoded);
app.use(corsOrigins);
app.use(logger);
app.listen(config_1.config.port, () => {
    console.log(`> RestAPI Service listening on port : ${config_1.config.port} : ${config_1.config.baseUrl}:${config_1.config.port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map