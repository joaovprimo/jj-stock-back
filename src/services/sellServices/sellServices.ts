import { badRequestError } from "../../errors/bad-request-error.js";
import objProductRepositories from "../../repositories/productRepository/productRepository.js";
import sizeRepositoryFunctions from "../../repositories/sizeRepository/sizeRepository.js";
import sellFunctionsRepository from "../../repositories/sellRepository/sellRepository.js";

async function sellPostService(name:string, quantity:number, value:string, sellDate:string, size:string, stockId:number){
    
    const sizee = await sizeRepositoryFunctions.findSize(size);
    if(!sizee) throw badRequestError(); 
    const prod = await objProductRepositories.findOneProductByNameandSize(name, sizee.id, stockId);
    if(!prod) throw badRequestError();
    if((prod.quantity-quantity) < 0){
        throw badRequestError();
    }
    const up = await objProductRepositories.updateSellProduct(prod.id, quantity);
   const sell = await sellFunctionsRepository.createSell(prod.id, sellDate, quantity, value)
   return sell;

}

const serviceSellFunctions = {
    sellPostService
}

export default serviceSellFunctions;