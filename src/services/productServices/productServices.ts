import { badRequestError } from "../../errors/bad-request-error.js";
import { notFoundError, } from "../../errors/not-foud-error.js";
import objProductRepositories from "../../repositories/productRepository/productRepository.js";

async function getProductService() {
    const products = await objProductRepositories.findProducts();
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

const objProductService ={
    getProductService,
    getProductByIdService,
    getProductByNameService
};

export default objProductService;