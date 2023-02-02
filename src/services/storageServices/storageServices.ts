import objProductRepositories from "../../repositories/productRepository/productRepository.js";
import storageRepositoryFuncions from "../../repositories/storageRepository/storageRepository.js";
import { badRequestError } from "../../errors/bad-request-error.js";

async function getInfoFromStorageService (stockId:number){
    console.log(stockId);
    const storage = await storageRepositoryFuncions.getStorage(stockId);
    if(!storage) throw badRequestError();
    const products = await objProductRepositories.findProductsMin(stockId);
    console.log(products);
    return products;
}

const storageServicesFunctions = {
    getInfoFromStorageService
};

export default storageServicesFunctions;