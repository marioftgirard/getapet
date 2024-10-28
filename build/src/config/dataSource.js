"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APPDS = void 0;
require("dotenv/config");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Pet_1 = __importDefault(require("../entities/Pet"));
var Adopter_1 = __importDefault(require("../entities/Adopter"));
var Address_1 = __importDefault(require("../entities/Address"));
var Haven_1 = __importDefault(require("../entities/Haven"));
exports.APPDS = new typeorm_1.DataSource({
    type: "sqlite",
    database: "./src/config/database.sqlite",
    entities: [Pet_1.default, Adopter_1.default, Address_1.default, Haven_1.default],
    synchronize: true,
    migrations: [],
    subscribers: [],
    logging: false,
});
//# sourceMappingURL=dataSource.js.map