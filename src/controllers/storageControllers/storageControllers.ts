import { Request, Response } from "express";
import httpStatus from "http-status";
import storageServicesFunctions from "../../services/storageServices/storageServices.js";

async function getInfoFromStorage(req:Request, res:Response){
    const { stockId } = req.params;
    const stock = Number(stockId);
    try{
        console.log("aqui")
        const products = await storageServicesFunctions.getInfoFromStorageService(stock);
        return res.status(httpStatus.OK).send(products);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export { getInfoFromStorage }