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
        try {
            const products = yield objProductService.getProductService();
            return products;
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
export { getProducts };
//# sourceMappingURL=productController.js.map