import { Request, Response } from "express";
import httpStatus from "http-status";
import objProductService from "../../services/productServices/productServices.js";

async function getProducts(req:Request, res:Response) {
    const {stock} = req.params;
    const stockId = Number(stock);
    try{
        const products = await objProductService.getProductService(stockId);
        console.log(products);
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
    console.log("aqui");
    const {name}  = req.body;
    console.log(name);
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

async function createProduct(req:Request, res:Response) {
    const {name, numberRef, size, provider, description, minimun, color} = res.locals.product;
    const { stockId } = req.params;
    const stockIdd = Number(stockId);
    try{
        await objProductService.postProductService(name, numberRef, size, provider, description, minimun, color, stockIdd);
        const products = await objProductService.getProductService(stockIdd);
        return res.status(httpStatus.CREATED).send(products)
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST); 
    }
}

async function deleteProduct(req:Request, res:Response){
    const { id } = req.params;
    const { stockId } = req.body;
    try{
        const productId = Number(id);
        await objProductService.deleteProductService(productId);
        const products = await objProductService.getProductService(stockId);
        return res.status(httpStatus.OK).send(products);
    }catch(error){
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
          }
          return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}


export { getProducts, getProductsById, getProductsByName, createProduct, deleteProduct }