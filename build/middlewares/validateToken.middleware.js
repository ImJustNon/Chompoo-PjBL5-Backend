"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = validateToken;
const validateJWTToken_1 = require("utils/validateJWTToken");
function validateToken(req, res, next) {
    var _a;
    const { token } = (_a = req.cookies) !== null && _a !== void 0 ? _a : {};
    if (!token) {
        res.status(401).json({
            status: "FAIL",
            message: "Token not found"
        });
        return;
    }
    const validToken = (0, validateJWTToken_1.validateJWTToken)(token);
    if (!validToken) {
        res.status(403).json({
            status: "FAIL",
            message: "Invalid Token or Expired Token"
        });
        return;
    }
    next();
}
//# sourceMappingURL=validateToken.middleware.js.map