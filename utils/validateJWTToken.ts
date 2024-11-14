import { config } from "../config/config";
import jwt, { JwtPayload } from "jsonwebtoken";

export function validateJWTToken(token: string): boolean | JwtPayload{
    try {
        return jwt.verify(token, config.jwtSecret) as JwtPayload;
    }
    catch(e){
        return false;
    }
}