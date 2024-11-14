"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./config/config");
const root_route_1 = __importDefault(require("./routes/root.route"));
const createCORS_middleware_1 = require("./middlewares/createCORS.middleware");
const createRateLimiter_middleware_1 = require("./middlewares/createRateLimiter.middleware");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const urlEncoded = body_parser_1.default.urlencoded({
    extended: false,
    limit: "50mb"
});
const jsonEncoded = express_1.default.json();
const corsOrigins = (0, createCORS_middleware_1.createCROS)(config_1.config.allowedOrigins);
const logger = (0, morgan_1.default)("dev");
const limiter = (0, createRateLimiter_middleware_1.createRateLimiter)(5 * 60 * 1000, 100);
app.use(corsOrigins);
app.use(urlEncoded);
app.use(jsonEncoded);
app.use((0, cookie_parser_1.default)());
app.use(logger);
app.use(limiter);
app.use("/api", root_route_1.default);
app.listen(config_1.config.port, () => {
    console.log(`> RestAPI Service listening on port : ${config_1.config.port} : ${config_1.config.baseUrl}:${config_1.config.port}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map