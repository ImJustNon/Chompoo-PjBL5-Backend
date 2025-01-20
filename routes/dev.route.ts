import { validateToken } from "../middlewares/validateToken.middleware";
import express, { Router } from "express";
import { studentActivityQrController } from "../controllers/old_studentActivityQr.controller";
import { adminUserStudentAdd } from "../controllers/adminUserStudentAdd.controller";
import { devUserStudentSignController } from "../controllers/devUserStudentSign.controller";

const router: Router = express.Router();

router.post("/v1/dev/user/student/sign", devUserStudentSignController);

export default router;