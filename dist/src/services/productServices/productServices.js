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
import providersRepositories from "../../repositories/providerRepository/providerRepository.js";
import sizeRepositoryFunctions from "../../repositories/sizeRepository/sizeRepository.js";
function getProductService(stockId) {
    return __awaiter(this, void 0, void 0, function* () {
        const products = yield objProductRepositories.findProducts(stockId);
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
function getProductByNumberService(number, stockId) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield objProductRepositories.findOneProductByNumber(number, stockId);
        if (!product)
            throw notFoundError();
        return product;
    });
}
function postProductService(name, numberRef, size, provider, description, minimun, color, stockId) {
    return __awaiter(this, void 0, void 0, function* () {
        const min = Number(minimun);
        const provi = yield providersRepositories.findProviderbyCnpj(provider);
        if (!provi)
            throw badRequestError();
        const siz = yield sizeRepositoryFunctions.findSize(size.toUpperCase());
        if (!siz) {
            yield sizeRepositoryFunctions.create(size.toUpperCase());
        }
        const product = yield objProductRepositories.create(name, numberRef, siz.id, provi.id, description, min, color.toUpperCase(), stockId);
        console.log(product);
        if (!product)
            throw badRequestError();
        return product;
    });
}
function deleteProductService(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield objProductRepositories.deleteProduct(productId);
        if (!product)
            throw notFoundError();
        return product;
    });
}
const objProductService = {
    getProductService,
    getProductByIdService,
    getProductByNumberService,
    postProductService,
    deleteProductService,
};
export default objProductService;
//# sourceMappingURL=productServices.js.map