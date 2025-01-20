import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { validateJWTToken } from "../utils/validateJWTToken";
import { PrismaClient } from "@prisma/client";
const prisma: PrismaClient = new PrismaClient();

export async function userStudentMeController(req: Request, res: Response): Promise<void> {
    const { token }: Record<string, any> = req.cookies;

    const jwtData: JwtPayload = validateJWTToken(token) as JwtPayload;
    const student_uuid: string = jwtData.uuid;

    try {
        const findStudent = await prisma.students.findMany({
            include: {
                student_prefix: true,
                department: true,
                activities_participated: true,
                student_roles: {
                    include: {
                        role: true
                    }
                }
            },
            where: {
                student_uuid: student_uuid
            }
        });
        if(!findStudent){
            res.status(401).json({
                status: "FAIL",
                message: "Auth Fail",
            });
            return;
        }

        res.status(200).json({
            status: "OK",
            message: "Success",
            data: findStudent
        });
    }
    catch(e){
        res.status(400).json({
            status: "FAIL",
            message: e
        });
    }
}