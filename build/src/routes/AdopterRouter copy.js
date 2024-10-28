"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var adopterReqBodyValidator_1 = require("../middleware/validators/adopterReqBodyValidator");
var addressReqBodyValidator_1 = require("../middleware/validators/addressReqBodyValidator");
var AdopterController_1 = __importDefault(require("../controllers/AdopterController"));
var idVerifierMiddleware_1 = require("../middleware/verifiers/idVerifierMiddleware");
var router = express_1.default.Router();
var adopterController = new AdopterController_1.default();
var validateAdopterBody = function (req, res, next) { return (0, adopterReqBodyValidator_1.adopterBodyValidatorMiddleware)(req, res, next); };
var validateAddressBody = function (req, res, next) { return (0, addressReqBodyValidator_1.addressBodyValidatorMiddleware)(req, res, next); };
router.patch("/:id", idVerifierMiddleware_1.verifyIdMiddleware, validateAddressBody, adopterController.updateAddress);
router.post("/", validateAdopterBody, adopterController.createAdopter);
router.get("/", adopterController.listAdopters);
router.put("/:id", idVerifierMiddleware_1.verifyIdMiddleware, adopterController.updateAdopter);
router.get("/:id", idVerifierMiddleware_1.verifyIdMiddleware, adopterController.findAdopter);
router.delete("/:id", idVerifierMiddleware_1.verifyIdMiddleware, adopterController.deleteAdopter);
exports.default = router;
//# sourceMappingURL=AdopterRouter%20copy.js.map