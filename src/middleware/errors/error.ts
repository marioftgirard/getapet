import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../../utils/ErrorHandlers";
import EnumHttpStatusCode from "../../enum/enumHttpStatusCode";

export const errorMiddleware = (
    error: ErrorHandler,
    req: Request,
    res: Response,
    next:NextFunction
) => {
    const statusCode = error.statusCode??EnumHttpStatusCode.INTERNAL_SERVER_ERROR;
    
    const message = error.statusCode? error.message : "Internal Server Error";

    res.status(statusCode).json({statusCode,message});

    return next();
};

