import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { AdopterReqBody } from "../../types/adopterTypes";
import { pt } from "yup-locale-pt";
import { validateSchema } from "../../utils/handleYupErros";

yup.setLocale(pt);

const schemeAdopterBody: yup.ObjectSchema<Omit<AdopterReqBody, "address">> = yup.object(
    {

        name: yup.string().defined().required(),
        phone: yup.string().defined().required()
            .matches(/^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm, "Invalid phone"),
        password: yup.string().defined().required().min(6).matches(
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
            "Invalid password"
        ),
        photo: yup.string().optional(),
    }
);


const adopterBodyValidatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    await validateSchema(schemeAdopterBody, req, res, next);
};

export { adopterBodyValidatorMiddleware };