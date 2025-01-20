import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { validateJWTToken } from "../utils/validateJWTToken";
import { PrismaClient } from "@prisma/client";
import { validatePass } from "../utils/validatePass";
import { createJWTToken } from "../utils/createJWTToken";
import { createEncryptPass } from "../utils/createEncryptPass";
const prisma: PrismaClient = new PrismaClient();

export async function userStudentSignoutController(req: Request, res: Response): Promise<void> {
    res.clearCookie("token");
    res.status(200).json({
        status: "OK",
        message: "Removed Token"
    });
}