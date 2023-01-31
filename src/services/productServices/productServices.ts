import { badRequestError } from "../../errors/bad-request-error.js";
import { notFoundError, } from "../../errors/not-foud-error.js";
import objProductRepositories from "../../repositories/productRepository/productRepository.js";
import { Prisma } from '@prisma/client';

async function getProductService(stockId:number) {
    const products = await objProductRepositories.findProducts(stockId);
    return products;
}

async function getProductByIdService(id:number) {
    const product = await objProductRepositories.findOneProductById(id);
    if(!product) throw notFoundError();
    return product;
}

async function getProductByNameService(name:string){
    const product = await objProductRepositories.findOneProductByName(name);
    if(!product) throw notFoundError();
    return product;
}

async function postProductService(data: Prisma.productsCreateInput) {
    const product =  await objProductRepositories.create(data);
    console.log(product);
    if(!product) throw badRequestError();
    return product;
}
async function deleteProductService(productId:number){
    const product = await objProductRepositories.deleteProduct(productId);
    if(!product) throw notFoundError();
    return product;
}

const objProductService ={
    getProductService,
    getProductByIdService,
    getProductByNameService,
    postProductService,
    deleteProductService,
};

export default objProductService;