"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dataSource_1 = require("../config/dataSource");
var AdopterRepository_1 = __importDefault(require("./AdopterRepository"));
var PetRepository = /** @class */ (function () {
    function PetRepository() {
        this.repository = dataSource_1.APPDS.getRepository("Pet");
    }
    PetRepository.prototype.create = function (pet) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.save(pet)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PetRepository.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var pet, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.repository.findOne({ where: { id: id } })];
                    case 1:
                        pet = _a.sent();
                        return [2 /*return*/, pet];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        throw (error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PetRepository.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PetRepository.prototype.update = function (id, pet) {
        return __awaiter(this, void 0, void 0, function () {
            var petToUpdate, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repository.findOne({ where: { id: id } })];
                    case 1:
                        petToUpdate = _a.sent();
                        if (!petToUpdate) {
                            return [2 /*return*/, { success: false, message: "Pet not found" }];
                        }
                        Object.assign(petToUpdate, pet);
                        return [4 /*yield*/, this.repository.save(petToUpdate)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { success: true, message: "Pet updated" }];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, {
                                success: false,
                                message: error_2.message,
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PetRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var petToRemove, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.repository.findOne({ where: { id: id } })];
                    case 1:
                        petToRemove = _a.sent();
                        if (!petToRemove) {
                            return [2 /*return*/, { success: false, message: "Pet not found" }];
                        }
                        return [4 /*yield*/, this.repository.remove(petToRemove)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { success: true, message: "Pet deleted sucessfully" }];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, {
                                success: false,
                                message: error_3.message,
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PetRepository.prototype.getAdopted = function (petId, adopterId) {
        return __awaiter(this, void 0, void 0, function () {
            var pet, adopter, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.find(petId)];
                    case 1:
                        pet = _a.sent();
                        if (!pet)
                            return [2 /*return*/, { success: false, message: "Pet not found" }];
                        return [4 /*yield*/, new AdopterRepository_1.default().find(adopterId)];
                    case 2:
                        adopter = _a.sent();
                        if (!adopter)
                            return [2 /*return*/, { success: false, message: "Adopter not found" }];
                        pet.adopter = adopter;
                        pet.adopted = true;
                        return [4 /*yield*/, this.repository.save(pet)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, { success: true, message: "Pet(" + pet.name + ") has been adopted by " + pet.adopter.name }];
                    case 4:
                        error_4 = _a.sent();
                        return [2 /*return*/, {
                                success: false,
                                message: error_4.message,
                            }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PetRepository.prototype.findPetsBySize = function (size) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.find()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PetRepository;
}());
exports.default = PetRepository;
