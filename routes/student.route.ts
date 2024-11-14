import { studentAuthController, studentRegisterController } from "controllers/student.controller";
import express, { Router } from "express";

const router: Router = express.Router();


router.post("/v1/user/student/register", studentRegisterController);
router.post("/v1/user/student/auth", studentAuthController);


export default router;