var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import objProductRepositories from "../../repositories/productRepository/productRepository.js";
import storageRepositoryFuncions from "../../repositories/storageRepository/storageRepository.js";
import { badRequestError } from "../../errors/bad-request-error.js";
function getInfoFromStorageService(stockId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(stockId);
        const storage = yield storageRepositoryFuncions.getStorage(stockId);
        if (!storage)
            throw badRequestError();
        const products = yield objProductRepositories.findProductsMin(stockId);
        console.log(products);
        return products;
    });
}
const storageServicesFunctions = {
    getInfoFromStorageService
};
export default storageServicesFunctions;
//# sourceMappingURL=storageServices.js.map