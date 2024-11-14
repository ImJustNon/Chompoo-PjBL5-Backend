import { validateToken } from "../middlewares/validateToken.middleware";
import { studentAuthController, studentRegisterController, studentSignOutController } from "../controllers/student.controller";
import express, { Router } from "express";

const router: Router = express.Router();


router.post("/v1/user/student/register", studentRegisterController);
router.post("/v1/user/student/auth", studentAuthController);
router.post("/v1/user/student/signout", validateToken, studentSignOutController);

export default router;