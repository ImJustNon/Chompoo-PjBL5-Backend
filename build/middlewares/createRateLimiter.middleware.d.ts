import { RateLimitRequestHandler } from "express-rate-limit";
export declare function createRateLimiter(windowMs: number, max: number): RateLimitRequestHandler;
