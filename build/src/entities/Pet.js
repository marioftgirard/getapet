"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var enumSpecies_1 = __importDefault(require("../enum/enumSpecies"));
var Adopter_1 = __importDefault(require("./Adopter"));
var enumSizes_1 = __importDefault(require("../enum/enumSizes"));
var Haven_1 = __importDefault(require("./Haven"));
var Pet = /** @class */ (function () {
    function Pet(name, specie, bornDate, adopted, size) {
        this.name = name;
        this.specie = specie;
        this.bornDate = bornDate;
        this.adopted = adopted;
        this.size = size;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Pet.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Pet.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Pet.prototype, "specie", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Pet.prototype, "bornDate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Pet.prototype, "adopted", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Adopter_1.default; }, function (adopter) { return adopter.pets; }),
        __metadata("design:type", Object)
    ], Pet.prototype, "adopter", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Haven_1.default; }, function (haven) { return haven.pets; }),
        __metadata("design:type", Object)
    ], Pet.prototype, "haven", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Pet.prototype, "size", void 0);
    Pet = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, String, Date, Boolean, String])
    ], Pet);
    return Pet;
}());
exports.default = Pet;
//# sourceMappingURL=Pet.js.map