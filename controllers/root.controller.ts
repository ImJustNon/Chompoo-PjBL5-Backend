import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma: PrismaClient = new PrismaClient();

export async function rootController(req: Request, res: Response){
    // const reqTime: number = Date.now();
    // res.status(200).json({
    //     status: "OK",
    //     message: "pong",
    //     ping: `${Date.now() - reqTime}ms`
    // });

    const student = await prisma.students.findMany({
        include: {
            department: true,
            student_prefix: true,
            activities_participated: true
        }
    });

    const prefix = await prisma.personPrefix.findMany({
        include: {
            students: true
        }
    })
    res.status(200).json(prefix);
}

