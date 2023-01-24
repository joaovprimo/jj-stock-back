import { Request, Response } from "express";
import { signUpService } from '../../services/userServices/userServices.js';
import httpStatus from "http-status";

async function loginUser (req:Request, res:Response) {


    
};

async function signUpUser(req:Request, res:Response) {
  const { name, password, email, storesId } = res.locals.signup;
  
  try{ 
    await signUpService( name, password, email, storesId );
    return res.sendStatus(httpStatus.CREATED);
  }catch(error){
    if (error.name === "NotFoundError") {
        return res.sendStatus(httpStatus.NOT_FOUND);
      }
  }
}



export { loginUser, signUpUser };