import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { AdopterReqBody } from "../../types/adopterTypes";
import Address from "../../entities/Address";

import { pt } from "yup-locale-pt";
import { validateSchema } from "../../utils/handleYupErros";

yup.setLocale(pt);

const schemeAddressBody: yup.ObjectSchema<Omit<Address, "id">> = yup.object(
    {
        city: yup.string().defined().required(),
        state: yup.string().defined().required()
    }
);

const addressBodyValidatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    await validateSchema(schemeAddressBody, req, res, next);
};

export { addressBodyValidatorMiddleware };