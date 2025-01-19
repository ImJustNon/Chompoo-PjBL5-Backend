import { validateToken } from "../middlewares/validateToken.middleware";
import { studentAuthController, studentRegisterController, studentSignOutController } from "../controllers/student.controller";
import express, { Router } from "express";
import { studentActivityQrController } from "../controllers/studentActivityQr.controller";

const router: Router = express.Router();


// router.post("/v1/user/student/register", studentRegisterController);
// router.post("/v1/user/student/auth", studentAuthController);
// router.post("/v1/user/student/signout", validateToken, studentSignOutController);

// router.get("/v1/activity/student/qr", validateToken, studentActivityQrController);

export default router;