import express, { RequestHandler } from "express";
import {adopterBodyValidatorMiddleware} from "../middleware/validators/adopterReqBodyValidator";
import {addressBodyValidatorMiddleware} from "../middleware/validators/addressReqBodyValidator";
import AdopterController from "../controllers/AdopterController";
import { verifyIdMiddleware } from "../middleware/verifiers/idVerifierMiddleware";

const router = express.Router();

const adopterController = new AdopterController();

const validateAdopterBody:RequestHandler = (req,res,next)=>adopterBodyValidatorMiddleware(req,res,next);
const validateAddressBody:RequestHandler = (req,res,next)=>addressBodyValidatorMiddleware(req,res,next);

router.patch("/:id",verifyIdMiddleware, validateAddressBody ,adopterController.updateAddress);
router.post("/", validateAdopterBody ,adopterController.createAdopter);
router.get("/", adopterController.listAdopters);
router.put("/:id",verifyIdMiddleware, adopterController.updateAdopter);
router.get("/:id",verifyIdMiddleware, adopterController.findAdopter);
router.delete("/:id",verifyIdMiddleware, adopterController.deleteAdopter);



export default router;