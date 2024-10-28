import express, { RequestHandler } from "express";
import {havenBodyValidatorMiddleware} from "../middleware/validators/havenReqBodyValidator";
import {addressBodyValidatorMiddleware} from "../middleware/validators/addressReqBodyValidator";
import HavenController from "../controllers/HavenController";
import { verifyIdMiddleware } from "../middleware/verifiers/idVerifierMiddleware";
                
const router = express.Router();

const havenController = new HavenController();

const validateHavenBody:RequestHandler = (req,res,next)=>havenBodyValidatorMiddleware(req,res,next);
const validateAddressBody:RequestHandler = (req,res,next)=>addressBodyValidatorMiddleware(req,res,next);

router.patch("/:id",verifyIdMiddleware, validateAddressBody ,havenController.updateAddress);
router.post("/", validateHavenBody ,havenController.createHaven);
router.get("/", havenController.listHavens);
router.put("/:id",verifyIdMiddleware, validateHavenBody, havenController.updateHaven);
router.get("/:id",verifyIdMiddleware, havenController.findHaven);
router.delete("/:id",verifyIdMiddleware, havenController.deleteHaven);



export default router;