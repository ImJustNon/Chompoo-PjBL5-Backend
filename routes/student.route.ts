import { validateToken } from "../middlewares/validateToken.middleware";
import express, { Router } from "express";
import { studentActivityQrController } from "../controllers/old_studentActivityQr.controller";
import { userStudentMeController } from "../controllers/userStudentMe.controller";

const router: Router = express.Router();

router.post("/v1/user/student/me", validateToken, userStudentMeController);

// router.post("/v1/user/student/register", studentRegisterController);
// router.post("/v1/user/student/auth", studentAuthController);
// router.post("/v1/user/student/signout", validateToken, studentSignOutController);

// router.get("/v1/activity/student/qr", validateToken, studentActivityQrController);

export default router;