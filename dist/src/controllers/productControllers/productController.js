var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import httpStatus from "http-status";
import objProductService from "../../services/productServices/productServices.js";
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { stock } = req.params;
        const stockId = Number(stock);
        try {
            const products = yield objProductService.getProductService(stockId);
            console.log(products);
            return res.status(httpStatus.OK).send(products);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
function getProductsById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const productId = Number(id);
            const product = yield objProductService.getProductByIdService(productId);
            return res.status(httpStatus.OK).send(product);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
function getProductsByNumberRef(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { stock } = req.params;
        const { numberref } = req.query;
        console.log(numberref);
        const number = numberref.toString();
        const stockId = Number(stock);
        try {
            const product = yield objProductService.getProductByNumberService(number, stockId);
            return res.status(httpStatus.OK).send(product);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, numberRef, size, provider, description, minimun, color } = res.locals.product;
        const { stockId } = req.params;
        const stockIdd = Number(stockId);
        try {
            yield objProductService.postProductService(name, numberRef, size, provider, description, minimun, color, stockIdd);
            const products = yield objProductService.getProductService(stockIdd);
            return res.status(httpStatus.CREATED).send(products);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { stockId } = req.body;
        try {
            const productId = Number(id);
            yield objProductService.deleteProductService(productId);
            const products = yield objProductService.getProductService(stockId);
            return res.status(httpStatus.OK).send(products);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
export { getProducts, getProductsById, getProductsByNumberRef, createProduct, deleteProduct };
//# sourceMappingURL=productController.js.map