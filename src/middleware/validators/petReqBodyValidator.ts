import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { PetReqBody } from "../../types/petTypes";
import { pt } from "yup-locale-pt";
import EnumSpecies from "../../enum/enumSpecies";
import EnumSizes from "../../enum/enumSizes";
import { validateSchema } from "../../utils/handleYupErros";

yup.setLocale(pt);

const schemePetBody: yup.ObjectSchema<Omit<PetReqBody, "adopter" | "haven">> = yup.object(
    {
        name: yup.string().defined().required(),
        specie: yup.string().defined().required().oneOf(Object.values(EnumSpecies)),
        size: yup.string().defined().required().oneOf(Object.values(EnumSizes)),
        bornDate: yup.date().defined().required(),
        adopted: yup.boolean().defined().required(),
    }
);


const petBodyValidatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    await validateSchema(schemePetBody, req, res, next);
};

export { petBodyValidatorMiddleware };