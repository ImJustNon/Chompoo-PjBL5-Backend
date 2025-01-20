import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { validateJWTToken } from "../utils/validateJWTToken";
import { PrismaClient } from "@prisma/client";
import { validatePass } from "../utils/validatePass";
import { createJWTToken } from "../utils/createJWTToken";
import { createEncryptPass } from "../utils/createEncryptPass";
const prisma: PrismaClient = new PrismaClient();

export async function userStudentAuthController(req: Request, res: Response): Promise<void> {
    const student_id: string | null = req.body?.student_id ?? null;
    const student_password: string | null = req.body?.student_password ?? null;
    const stay_login: boolean = req.body?.stay_login ?? false;


    if(!student_id || !student_password){
        res.status(400).json({
            status: "FAIL",
            message: "missing student_id or student password from body",
        });
        return;
    }

    try{
        const findStudent = await prisma.students.findUnique({
            where: {
                student_id: student_id
            }
        });
        if(!findStudent){
            res.status(401).json({
                status: "FAIL",
                message: "Can not find student information from this ID",
            });
            return;
        }
        const validatePassResult: boolean = await validatePass(student_password, findStudent.student_password);
        if(!validatePassResult){
            res.status(401).json({
                status: "FAIL",
                message: "Password Failed"
            });
            return;
        }

        const signUserToken: string = createJWTToken({
            uuid: findStudent.student_uuid
        }, stay_login ? "7d" : "1d");

        res.cookie("token", signUserToken, {
            maxAge: stay_login ? (((7 * 24) * 60) * 60) * 1000 : (((1 * 24) * 60) * 60) * 1000,
            secure: false, 
            httpOnly: false,
            sameSite: "none",
        });

        res.status(202).json({
            status: "OK",
            message: "Auth Success"
        });
    }
    catch(e){
        res.status(400).json({
            status: "FAIL",
            message: e
        });
    }
}