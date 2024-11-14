import { Request, Response } from "express";

export function rootController(req: Request, res: Response){
    const reqTime: number = Date.now();
    res.status(200).json({
        status: "OK",
        message: "pong",
        ping: `${Date.now() - reqTime}ms`
    });
}

