"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootController = rootController;
function rootController(req, res) {
    const reqTime = Date.now();
    res.status(200).json({
        status: "OK",
        message: "pong",
        ping: `${Date.now() - reqTime}ms`
    });
}
//# sourceMappingURL=root.controller.js.map