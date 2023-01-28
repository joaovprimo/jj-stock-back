import { providerSchema } from "../../schemas/providerSchema/providerSchema.js"
import { Request, Response, NextFunction } from "express";

function providerMiddleware (req:Request, res:Response, next:NextFunction){
    let { name, email, cnpj } = req.body;
    const validation = providerSchema.validate({
      name,
      email,
      cnpj
    }, 
    { abortEarly: false });

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        return res.status(400).send(errors);
    };

    res.locals.provider = { name, email, cnpj }
    next();
    
};

export { providerMiddleware };