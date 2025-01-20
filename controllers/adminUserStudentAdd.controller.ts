import { Request, Response } from "express";

interface StudentRequireInfo {
    student_id: string;
    student_password: string;
    student_prefix_id: string;
    student_firstname: string;
    student_lastname: string;
    student_year_admission: string;
    student_department_id: string;
    student_role: string;
}

export async function adminUserStudentAdd(req: Request, res: Response): Promise<void> {
    const {  
        student_id,
        student_password,
        student_prefix_id,
        student_firstname,
        student_lastname,
        student_year_admission,
        student_department_id,
        student_role
    } = req.body ?? null;
}