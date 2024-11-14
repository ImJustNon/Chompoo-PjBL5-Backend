import { NextHandleFunction } from "connect";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { validateJWTToken } from "../utils/validateJWTToken";

export function validateToken(req: Request, res: Response, next: NextFunction): void {
    const { token } = req.cookies ?? {};
    
    if(!token){
        res.status(401).json({
            status: "FAIL",
            message: "Token not found"
        });
        return;
    }

    const validToken: boolean | JwtPayload = validateJWTToken(token);
    if(!validToken){    
        res.status(403).json({
            status: "FAIL",
            message: "Invalid Token or Expired Token"
        }); 
        return;
    }

    next();
}