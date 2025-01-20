import { validateToken } from "../middlewares/validateToken.middleware";
import express, { Router } from "express";
import { studentActivityQrController } from "../controllers/old_studentActivityQr.controller";
import { adminUserStudentAdd } from "../controllers/adminUserStudentAdd.controller";

const router: Router = express.Router();

router.post("/v2/admin/user/student/add", adminUserStudentAdd);

export default router;