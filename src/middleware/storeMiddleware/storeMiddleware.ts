import { storeSchema } from "../../schemas/storeSchema/storeSchema.js";
import { Request, Response, NextFunction } from "express";

function signUpMiddleware (req:Request, res:Response, next:NextFunction){
    let { name, email, password, cnpj } = req.body;
    const validation = storeSchema.validate({
      name,
      password,
      email,
      cnpj
    }, 
    { abortEarly: false });

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        return res.status(400).send(errors);
    };

    res.locals.singUp = { name, email, password, cnpj }
    next();
    
};

export { signUpMiddleware };
