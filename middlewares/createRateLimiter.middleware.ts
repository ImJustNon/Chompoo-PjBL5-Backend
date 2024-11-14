import { NextFunction, Request, Response } from "express";
import { Options, RateLimitRequestHandler } from "express-rate-limit";
import rateLimit from "express-rate-limit";

export function createRateLimiter(windowMs: number, max: number): RateLimitRequestHandler {
    return rateLimit({
        windowMs: windowMs, 
        max: max,
        handler: (req: Request, res: Response, next: NextFunction, options: Options): void => {
            const retryAfter: number = Math.ceil(options.windowMs / 1000);
            res.status(429).json({
                status: "FAIL",
                message: "Too many requests, please try again later.",
                retryAfter: retryAfter,
                resetTime: new Date(Date.now() + retryAfter * 1000).toISOString(),
            });
        }
    });
}