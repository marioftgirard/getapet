"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var petReqBodyValidator_1 = require("../middleware/validators/petReqBodyValidator");
var idVerifierMiddleware_1 = require("../middleware/verifiers/idVerifierMiddleware");
var PetController_1 = __importDefault(require("../controllers/PetController"));
var router = express_1.default.Router();
var petController = new PetController_1.default();
var validatePetBody = function (req, res, next) { return (0, petReqBodyValidator_1.petBodyValidatorMiddleware)(req, res, next); };
router.get("/:id", idVerifierMiddleware_1.verifyIdMiddleware, petController.findPet);
router.get("/filterBySize", petController.findPetsBySize);
router.get("/filter", petController.findPeyByAnyfield);
router.post("/", validatePetBody, petController.petCreate);
router.get("/", petController.listPets);
router.put("/:id", idVerifierMiddleware_1.verifyIdMiddleware, petController.updatePet);
router.delete("/:id", idVerifierMiddleware_1.verifyIdMiddleware, petController.deletePet);
router.put("/:petId/:adopterId", idVerifierMiddleware_1.verifyIdMiddleware, petController.getAdopted);
router.patch("/:petId/:havenId", idVerifierMiddleware_1.verifyIdMiddleware, petController.bindHAven);
exports.default = router;
//# sourceMappingURL=PetRouter.js.map