import express, { RequestHandler } from "express";
import { petBodyValidatorMiddleware } from "../middleware/validators/petReqBodyValidator";
import { verifyIdMiddleware } from "../middleware/verifiers/idVerifierMiddleware";
import PetController from "../controllers/PetController";

const router = express.Router();

const petController = new PetController();

const validatePetBody:RequestHandler = (req,res,next)=>petBodyValidatorMiddleware(req,res,next);

router.get("/:id",verifyIdMiddleware, petController.findPet);
router.get("/filterBySize", petController.findPetsBySize);
router.get("/filter", petController.findPeyByAnyfield);
router.post("/", validatePetBody, petController.petCreate);
router.get("/", petController.listPets);
router.put("/:id",verifyIdMiddleware, petController.updatePet);
router.delete("/:id",verifyIdMiddleware, petController.deletePet);
router.put("/:petId/:adopterId",verifyIdMiddleware, petController.getAdopted);
router.patch("/:petId/:havenId",verifyIdMiddleware, petController.bindHAven);


export default router;