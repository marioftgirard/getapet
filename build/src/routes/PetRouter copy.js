"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var PetController_1 = __importDefault(require("../controller/PetController"));
var router = express_1.default.Router();
var petController = new PetController_1.default();
router.post("/", petController.petCreate);
router.get("/", petController.listPets);
router.put("/:id", petController.updatePet);
router.get("/:id", petController.findPet);
router.delete("/:id", petController.deletePet);
exports.default = router;
