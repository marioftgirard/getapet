import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

export const validateSchema = async (
    schema: yup.Schema,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await schema.validate(req.body, { abortEarly: false });
        return next();

    } catch (error) {
        const yupErrors = error as yup.ValidationError;
        const validationErrors: Record<string, string> = {};
        yupErrors.inner.forEach(
            (error) => {
                if (!error.path)
                    return;
                validationErrors[error.path] = error.message;
            }
        );

        return res.status(400).json({ error: validationErrors });
    }
}