import { Request, Response } from "express";
import httpStatus from "http-status";
import serviceEntryFunctions from "../../services/entryServices/entryServices.js";


async function postEntry(req:Request, res:Response){
    const { name, quantity, fiscalNote, receiveDate, provider, size } = res.locals.entries;
    const {stockId} = req.params;
    const stock = Number(stockId);
    let quant = Number(quantity);
    try{
        const entry = await serviceEntryFunctions.entryPostService(name, quant, fiscalNote, receiveDate, provider, size, stock);
        return res.status(httpStatus.OK).send(entry);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export { postEntry }