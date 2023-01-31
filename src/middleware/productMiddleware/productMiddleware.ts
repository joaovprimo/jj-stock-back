import { Request, Response, NextFunction } from "express";
import { productSchema } from "../../schemas/productSchema/productSchema.js";

function productMiddleware (req:Request, res:Response, next:NextFunction){
    let { name, numberRef, sizeId, providerId, fiscalNoteId, stockId, quantity, description, minimun, color } = req.body;
    const validation = productSchema.validate({
        name, numberRef, sizeId, providerId, fiscalNoteId, stockId, quantity, description, minimun, color
    }, 
    { abortEarly: false });

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        console.log(errors)
        return res.status(400).send(errors);
    };

    res.locals.product = { name, numberRef, sizeId, providerId, fiscalNoteId, stockId, quantity, description, minimun, color }
    next();
    
};

export { productMiddleware };