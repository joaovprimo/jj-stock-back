import { Request, Response } from "express";
import httpStatus from "http-status";
import objProductService from "../../services/productServices/productServices.js";

async function getProducts(req:Request, res:Response) {
    try{
        const products = await objProductService.getProductService();
        return products;
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export { getProducts }