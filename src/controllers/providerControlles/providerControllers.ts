import { Request, Response } from "express";
import providerServices from "../../services/providerServices/providerServices.js";
import httpStatus from "http-status";

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
            return res.status(httpStatus.OK).send([provider]);
        }else{
            cnpj = cnpj.toString();
            provider = await providerServices.getProvidersServicesbyCnpj(cnpj);
            return res.status(httpStatus.OK).send([provider]);
        }
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

async function postProvider (req:Request, res:Response){
    const { name, cnpj, email } = res.locals.provider;
    try{
        await providerServices.createProvider(name, cnpj, email);
        const providers = await providerServices.getProvidersServices();
        return res.status(httpStatus.CREATED).send(providers)
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }

}

async function deleteProvider(req:Request, res:Response){
    const {id} = req.params;
    console.log(id)
    const storeId = Number(id);
    try{
        await providerServices.deleteProvider(storeId);
        const providers = await providerServices.getProvidersServices();
        return res.status(httpStatus.OK).send(providers);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export { getProviders, getProvidersbyName, postProvider, deleteProvider}