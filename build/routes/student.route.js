"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_controller_1 = require("controllers/student.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/v1/user/student/register", student_controller_1.studentRegisterController);
router.post("/v1/user/student/auth", student_controller_1.studentAuthController);
exports.default = router;
//# sourceMappingURL=student.route.js.map