"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRateLimiter = createRateLimiter;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
function createRateLimiter(windowMs, max) {
    return (0, express_rate_limit_1.default)({
        windowMs: windowMs,
        max: max,
        handler: (req, res, next, options) => {
            const retryAfter = Math.ceil(options.windowMs / 1000);
            res.status(429).json({
                status: "FAIL",
                message: "Too many requests, please try again later.",
                retryAfter: retryAfter,
                resetTime: new Date(Date.now() + retryAfter * 1000).toISOString(),
            });
        }
    });
}
//# sourceMappingURL=createRateLimiter.middleware.js.map