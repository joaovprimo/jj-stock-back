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
import { notFoundError, } from "../../errors/not-foud-error.js";
import objProductRepositories from "../../repositories/productRepository/productRepository.js";
function getProductService() {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield objProductRepositories.findProducts();
        return products;
    });
}
function getProductByIdService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield objProductRepositories.findOneProductById(id);
        if (!product)
            throw notFoundError();
        return product;
    });
}
function getProductByNameService(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield objProductRepositories.findOneProductByName(name);
        if (!product)
            throw notFoundError();
        return product;
    });
}
function postProductService(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield objProductRepositories.create(data);
        console.log(product);
        if (!product)
            throw badRequestError();
        return product;
    });
}
const objProductService = {
    getProductService,
    getProductByIdService,
    getProductByNameService,
    postProductService
};
export default objProductService;
//# sourceMappingURL=productServices.js.map