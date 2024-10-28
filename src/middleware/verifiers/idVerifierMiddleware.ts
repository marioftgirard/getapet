import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../utils/ErrorHandlers";

export const verifyIdMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const params = {...req.params};

    for(const param in params){
        if(!Number.isInteger(Number(params[param]))){
            throw new BadRequest(`${param} must be an integer`);
        }
    }

    return next();
};
