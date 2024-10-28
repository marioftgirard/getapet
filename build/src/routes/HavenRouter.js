"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var havenReqBodyValidator_1 = require("../middleware/validators/havenReqBodyValidator");
var addressReqBodyValidator_1 = require("../middleware/validators/addressReqBodyValidator");
var HavenController_1 = __importDefault(require("../controllers/HavenController"));
var idVerifierMiddleware_1 = require("../middleware/verifiers/idVerifierMiddleware");
var router = express_1.default.Router();
var havenController = new HavenController_1.default();
var validateHavenBody = function (req, res, next) { return (0, havenReqBodyValidator_1.havenBodyValidatorMiddleware)(req, res, next); };
var validateAddressBody = function (req, res, next) { return (0, addressReqBodyValidator_1.addressBodyValidatorMiddleware)(req, res, next); };
router.patch("/:id", idVerifierMiddleware_1.verifyIdMiddleware, validateAddressBody, havenController.updateAddress);
router.post("/", validateHavenBody, havenController.createHaven);
router.get("/", havenController.listHavens);
router.put("/:id", idVerifierMiddleware_1.verifyIdMiddleware, validateHavenBody, havenController.updateHaven);
router.get("/:id", idVerifierMiddleware_1.verifyIdMiddleware, havenController.findHaven);
router.delete("/:id", idVerifierMiddleware_1.verifyIdMiddleware, havenController.deleteHaven);
exports.default = router;
//# sourceMappingURL=HavenRouter.js.map