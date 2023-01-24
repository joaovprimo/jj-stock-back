import { userSchema } from "../../schemas/userSchema/userSchema";
import { Request, Response, NextFunction } from "express";

function signUpMiddleware (req:Request, res:Response, next:NextFunction){
    const { name, email, password, storesId } = req.body;
    console.log(name)
    const validation = userSchema.validate({
      name,
      password,
      email,
      storesId
    }, 
    { abortEarly: false });

    if(validation.error){
        const errors = validation.error.details.map(det=>det.message);
        return res.status(400).send(errors);
    }

    res.locals.signup = { name, email, password, storesId };
    next();
    
};

export { signUpMiddleware };
