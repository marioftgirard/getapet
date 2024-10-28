"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
var enumHttpStatusCode_1 = __importDefault(require("../../enum/enumHttpStatusCode"));
var errorMiddleware = function (error, req, res, next) {
    var _a;
    var statusCode = (_a = error.statusCode) !== null && _a !== void 0 ? _a : enumHttpStatusCode_1.default.INTERNAL_SERVER_ERROR;
    var message = error.statusCode ? error.message : "Internal Server Error";
    res.status(statusCode).json({ statusCode: statusCode, message: message });
    return next();
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.js.map