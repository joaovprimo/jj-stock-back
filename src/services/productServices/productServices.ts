import { badRequestError } from "../../errors/bad-request-error.js";
import { notFoundError, } from "../../errors/not-foud-error.js";
import objProductRepositories from "../../repositories/productRepository/productRepository.js";
import providersRepositories from "../../repositories/providerRepository/providerRepository.js";
import sizeRepositoryFunctions from "../../repositories/sizeRepository/sizeRepository.js";
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

async function postProductService(name: string, numberRef:string, size: string, provider: string, description: string, minimun:number, color:string, stockId: number) {
    const min = Number(minimun);
    const provi = await providersRepositories.findProviderbyCnpj(provider);
    if(!provi) throw badRequestError();
    const siz =  await sizeRepositoryFunctions.findSize(size.toUpperCase());
    if(!siz){
        await sizeRepositoryFunctions.create(size.toUpperCase());
    }
    const product =  await objProductRepositories.create(name, numberRef, siz.id, provi.id, description, min, color.toUpperCase(),stockId);
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