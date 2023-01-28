import { Request, Response } from "express";
import providerServices from "../../services/providerServices/providerServices.js";
import httpStatus from "http-status";
import { string } from "joi";

async function getProviders(req:Request, res:Response){
    try{
        const providers = await providerServices.getProvidersServices();
        res.status(httpStatus.OK).send(providers);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

async function getProvidersbyName(req:Request, res:Response){
    let {name, cnpj} = req.query;
    let provider;
    try{
        if(name){
            name = name.toString();
            provider = await providerServices.getProvidersServicesbyName(name);
            return res.status(httpStatus.OK).send(provider);
        }else{
            cnpj = cnpj.toString();
            provider = await providerServices.getProvidersServicesbyCnpj(cnpj);
            return res.status(httpStatus.OK).send(provider);
        }
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}
export { getProviders, getProvidersbyName }