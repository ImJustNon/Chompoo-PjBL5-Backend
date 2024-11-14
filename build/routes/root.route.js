"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const root_controller_1 = require("../controllers/root.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/v1/", root_controller_1.rootController);
exports.default = router;
//# sourceMappingURL=root.route.js.map