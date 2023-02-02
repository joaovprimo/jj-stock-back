import { sellSchema } from "../../schemas/sellSchema/sellSchema.js"
import { Request, Response, NextFunction } from "express";

function sellMiddleware (req:Request, res:Response, next:NextFunction){
    let { name, quantity, value, sellDate, size } = req.body;
    
    const validation = sellSchema.validate({
        name, quantity, value, sellDate, size
    }, 
    { abortEarly: false });

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        return res.status(400).send(errors);
    };

    res.locals.sell = { name, quantity, value, sellDate, size }
    next();
    
};

export { sellMiddleware };