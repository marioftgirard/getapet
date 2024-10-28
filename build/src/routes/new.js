"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PetRouter_1 = __importDefault(require("../routes/PetRouter"));
var AdopterRouter_1 = __importDefault(require("../routes/AdopterRouter"));
var router = function (app) {
    app.use("/pets", PetRouter_1.default);
    app.use("/adopters", AdopterRouter_1.default);
};
exports.default = router;
//# sourceMappingURL=new.js.map