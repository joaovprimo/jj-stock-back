import { Request, Response } from "express";
import serviceEntryFunctions from "../../services/entryServices/entryServices";
import httpStatus from "http-status";

async function postEntry(req:Request, res:Response){
    const { name, quantity, fiscalNote, receiveDate, provider, size } = res.locals.entry;
    try{
        const entry = await serviceEntryFunctions.entryPostService(name, quantity, fiscalNote, receiveDate, provider, size);
        return res.status(httpStatus.OK).send(entry);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export { postEntry }