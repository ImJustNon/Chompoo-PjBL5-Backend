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

    const activity = await prisma.students.findMany({
        include: {
            student_roles: {
                include: {
                    role: true
                }
            },
            student_prefix: true,
            department: true,
            activities_participated: true,
        }
    });

    // await prisma.studentRoles.create({
    //     data: {
    //         student_id: "65202910002",
    //         role_id: 2
    //     }
    // });

    // await prisma.students.update({
    //     include: {
    //         roles: true
    //     },
    //     where: {
    //         student_id: "65202910002",
    //     },
    //     data: {
    //         roles: {
    //             disconnect: [
    //                 {role_id: 1}
    //             ]
    //         }
    //     }
    // });

    // const prefix = await prisma.personPrefix.findMany({
    //     include: {
    //         students: true,
            
    //     }
    // })
    res.status(200).json(activity);
}

