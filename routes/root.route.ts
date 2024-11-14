import { rootController } from "../controllers/root.controller";
import express, { Router } from "express";

const router: Router = express.Router();


router.get("/v1/", rootController);



export default router;