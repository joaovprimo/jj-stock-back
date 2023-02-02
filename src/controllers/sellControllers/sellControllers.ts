import { Request, Response } from "express";
import httpStatus from "http-status";
import serviceSellFunctions from "../../services/sellServices/sellServices.js";

async function postSell(req:Request, res:Response){
    const { name, quantity, value, sellDate, size } = res.locals.sell;
    const {stockId} = req.params;
    const stock = Number(stockId);
    let quant = Number(quantity);
    console.log(name, quant, stock)
    try{
        const sell = await serviceSellFunctions.sellPostService(name, quant, value, sellDate, size, stock);
        return res.status(httpStatus.OK).send(sell);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export { postSell};