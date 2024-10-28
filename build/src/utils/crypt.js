"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEncryptedPasswowrd = void 0;
var crypto_1 = __importDefault(require("crypto"));
var generateEncryptedPasswowrd = function (password) {
    var salt = crypto_1.default.randomBytes(16).toString("hex");
    var hash = crypto_1.default.createHmac("sha256", salt);
    hash.update(password);
    return hash.digest("hex");
};
exports.generateEncryptedPasswowrd = generateEncryptedPasswowrd;
//# sourceMappingURL=crypt.js.map