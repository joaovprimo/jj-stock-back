import { Request, Response } from "express";
import functionsServiceStore from '../../services/storeServices/storeServices.js';
import httpStatus from "http-status";

async function loginStore (req:Request, res:Response) {
  const { cnpj, password } = req.body;
  try{
    const login = await functionsServiceStore.loginStore( cnpj, password);
    return res.status(httpStatus.OK).send(login);
  }catch(error){
    if (error.name === "NotFoundError") {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  } 
};

async function signUpStore(req:Request, res:Response) {
    const { name, password, email, cnpj } = res.locals.singUp; 
  try{ 
    await functionsServiceStore.signUpService( name, password, email, cnpj );
    return res.sendStatus(httpStatus.CREATED);
  }catch(error){
    if (error.name === "NotFoundError") {
        return res.sendStatus(httpStatus.NOT_FOUND);
      }
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}



export { loginStore, signUpStore };