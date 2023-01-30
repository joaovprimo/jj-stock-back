import { Request, Response } from "express";
import httpStatus from "http-status";
import objProductService from "../../services/productServices/productServices.js";

async function getProducts(req:Request, res:Response) {
    try{
        const products = await objProductService.getProductService();
        return res.status(httpStatus.OK).send(products);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

async function getProductsById(req:Request, res:Response){
    const { id } = req.params;
    try{
        const productId = Number(id);
        const product = await objProductService.getProductByIdService(productId);
        return res.status(httpStatus.OK).send(product);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

async function getProductsByName(req:Request, res:Response){
    const {name} = req.body;
    try{
        const product = await objProductService.getProductByNameService(name);
        return res.status(httpStatus.OK).send(product);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export { getProducts, getProductsById, getProductsByName }