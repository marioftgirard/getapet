import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { HavenReqBody } from "../../types/havenTypes";
import { pt } from "yup-locale-pt";
import { validateSchema } from "../../utils/handleYupErros";

yup.setLocale(pt);

const schemeHavenBody: yup.ObjectSchema<Omit<HavenReqBody, "address">> = yup.object(
    {

        name: yup.string().defined().required(),
        email: yup.string().defined().required().min(6).matches(/.+\@.+\..+/,
            "Invalid email format"),
        phone: yup.string().defined().required()
            .matches(/^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm, "Invalid phone"),
        password: yup.string().defined().required().min(6).matches(
            /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm,
            "Invalid password"
        ),
        photo: yup.string().optional(),
    }
);


const havenBodyValidatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    await validateSchema(schemeHavenBody, req, res, next);
};

export { havenBodyValidatorMiddleware };