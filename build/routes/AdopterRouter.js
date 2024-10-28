"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var AdopterController_1 = __importDefault(require("../controller/AdopterController"));
var router = express_1.default.Router();
var adopterController = new AdopterController_1.default();
router.post("/", adopterController.createAdopter);
router.get("/", adopterController.listAdopters);
router.put("/:id", adopterController.updateAdopter);
router.get("/:id", adopterController.findAdopter);
router.delete("/:id", adopterController.deleteAdopter);
router.patch("/:id", adopterController.updateAddress);
exports.default = router;
