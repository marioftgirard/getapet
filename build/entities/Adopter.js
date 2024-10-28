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
// Adotante.ts
var typeorm_1 = require("typeorm");
var Address_1 = __importDefault(require("./Address"));
var Pet_1 = __importDefault(require("./Pet"));
var Adopter = /** @class */ (function () {
    function Adopter(name, password, phone, photo, address) {
        this.name = name;
        this.password = password;
        this.photo = photo;
        this.phone = phone;
        this.address = address;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Adopter.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Adopter.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Adopter.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Adopter.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Adopter.prototype, "photo", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Address_1.default; }, {
            nullable: true,
            cascade: true,
            eager: true,
        }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Address_1.default)
    ], Adopter.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Pet_1.default; }, function (pet) { return pet.adopter; }, { eager: true, }),
        __metadata("design:type", Array)
    ], Adopter.prototype, "pets", void 0);
    Adopter = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [String, String, String, String, Address_1.default])
    ], Adopter);
    return Adopter;
}());
exports.default = Adopter;
