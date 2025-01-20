import { Request, Response } from "express";
import { StudentAuthData, StudentRegisterData } from "../types/index.type";
import { PrismaClient } from "@prisma/client";
import { calculateYearOfAdmission } from "../utils/calculateYearOfAdmission";
import { createJWTToken } from "../utils/createJWTToken";
import { createEncryptPass } from "../utils/createEncryptPass";
import { validatePass } from "../utils/validatePass";

const prisma: PrismaClient = new PrismaClient();

export async function studentRegisterController(req: Request, res: Response): Promise<void> {
    const { student_id, student_password, student_firstname, student_lastname }: StudentRegisterData = req.body ?? null;

    if(!student_id || !student_password || !student_firstname || !student_lastname){
        res.status(400).json({
            status: "FAIL",
            message: "Require Data Missing"
        });
        return;
    }

    if(student_password.length < 5 || student_password.length > 15){
        res.status(400).json({
            status: "FAIL",
            message: "Password must have at least 5 characters and upto 15 characters"
        });
        return;
    }

    try {
        const encryptedPass: string = await createEncryptPass(student_password);

        // const createStudent = await prisma.students.create({
        //     data: {
        //         student_id: student_id,
        //         student_password: encryptedPass,
        //         student_firstname: student_firstname,
        //         student_lastname: student_lastname,
        //         student_year_admission: calculateYearOfAdmission(student_id),
        //     },
        //     select: {
        //         student_uuid: true
        //     }
        // });

        const userToken: string = "" //createJWTToken({
        //     uuid: createStudent.student_uuid,
        // }, "1d");

        res.cookie("token", userToken, {
            maxAge: (30 * 60) * 1000, // 30 min
            secure: false, 
            httpOnly: true,
            sameSite: "none",
        });

        res.status(201).json({
            status: "OK",
            message: "Created Student User"
        });
    }
    catch(e){
        res.status(400).json({
            status: "FAIL",
            message: e
        });
        console.log(e);
    }
}

export async function studentAuthController(req: Request, res: Response): Promise<void> {
    const { student_id, student_password }: StudentAuthData = req.body ?? null;

    if(!student_id || !student_password){
        res.status(400).json({
            status: "FAIL",
            message: "Require Data Missing"
        });
        return;
    }

    try {
        const findStudent = await prisma.students.findUnique({
            where: {
                student_id: student_id
            },
            select: {
                student_password: true,
                student_uuid: true
            }
        });

        if(!findStudent){
            res.status(401).json({
                status: "FAIL",
                message: "Can not find student information from this ID",
            });
            return;
        }

        const validatePassResult: boolean = await validatePass(student_password, findStudent!.student_password);

        if(!validatePassResult){
            res.status(401).json({
                status: "FAIL",
                message: "Password Failed"
            });
            return;
        }

        const userToken: string = createJWTToken({
            uuid: findStudent.student_uuid
        }, "1d");

        res.cookie("token", userToken, {
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
    catch(e){
        res.status(400).json({
            status: "FAIL",
            message: e
        });
    }
}

export function studentSignOutController(req: Request, res: Response): void {
    res.clearCookie("token");
    res.status(200).json({
        status: "OK",
        message: "Deleted Token"
    });
}