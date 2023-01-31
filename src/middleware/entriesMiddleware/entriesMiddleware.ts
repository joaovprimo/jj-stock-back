import { entriesSchema } from "../../schemas/entriesSchema/entriesSchema.js"
import { Request, Response, NextFunction } from "express";

function entriesMiddleware (req:Request, res:Response, next:NextFunction){
    let { name, quantity, fiscalNote, provider, receiveDate, size } = req.body;
    const validation = entriesSchema.validate({
      name,
      quantity,
      fiscalNote,
      provider,
      receiveDate,
      size
    }, 
    { abortEarly: false });

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        return res.status(400).send(errors);
    };

    res.locals.entries = { name, quantity, fiscalNote,provider, receiveDate, size }
    next();
    
};

export { entriesMiddleware };