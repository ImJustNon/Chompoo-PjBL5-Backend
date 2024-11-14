"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = createJWTToken;
const config_1 = require("../config/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createJWTToken(data, expiresIn) {
    return jsonwebtoken_1.default.sign(data, config_1.config.jwtSecret, { expiresIn: expiresIn });
}
//# sourceMappingURL=createJWTToken.js.map