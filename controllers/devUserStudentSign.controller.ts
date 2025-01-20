import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { validateJWTToken } from "../utils/validateJWTToken";
import { PrismaClient } from "@prisma/client";
import { createJWTToken } from "../utils/createJWTToken";
const prisma: PrismaClient = new PrismaClient();

export async function devUserStudentSignController(req: Request, res: Response): Promise<void> {
    const student_uuid: string | null = req.body?.student_uuid ?? null;

    if(!student_uuid){
        res.status(400).json({
            status: "FAIL",
            message: "student uuid missing from body",
        });
        return;
    }

    const signUserToken: string = createJWTToken({
        uuid: student_uuid
    }, "1d");

    res.cookie("token", signUserToken, {
        maxAge: (30 * 60) * 1000, // 30 min
        secure: false, 
        httpOnly: false,
        sameSite: "none",
    });

    res.status(202).json({
        status: "OK",
        message: "Auth Success"
    });
}