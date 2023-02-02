var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { badRequestError } from "../../errors/bad-request-error.js";
import objProductRepositories from "../../repositories/productRepository/productRepository.js";
import sizeRepositoryFunctions from "../../repositories/sizeRepository/sizeRepository.js";
import sellFunctionsRepository from "../../repositories/sellRepository/sellRepository.js";
function sellPostService(name, quantity, value, sellDate, size, stockId) {
    return __awaiter(this, void 0, void 0, function* () {
        const sizee = yield sizeRepositoryFunctions.findSize(size);
        if (!sizee)
            throw badRequestError();
        const prod = yield objProductRepositories.findOneProductByNameandSize(name, sizee.id, stockId);
        if (!prod)
            throw badRequestError();
        if ((prod.quantity - quantity) < 0) {
            throw badRequestError();
        }
        const up = yield objProductRepositories.updateSellProduct(prod.id, quantity);
        const sell = yield sellFunctionsRepository.createSell(prod.id, sellDate, quantity, value);
        return sell;
    });
}
const serviceSellFunctions = {
    sellPostService
};
export default serviceSellFunctions;
//# sourceMappingURL=sellServices.js.map