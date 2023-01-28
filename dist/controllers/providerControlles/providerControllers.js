var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import providerServices from "../../services/providerServices/providerServices.js";
import httpStatus from "http-status";
function getProviders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const providers = yield providerServices.getProvidersServices();
            res.status(httpStatus.OK).send(providers);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
function getProvidersbyName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { name, cnpj } = req.query;
        console.log(cnpj);
        let provider;
        try {
            if (name) {
                name = name.toString();
                provider = yield providerServices.getProvidersServicesbyName(name);
            }
            else {
                cnpj = cnpj.toString();
                provider = yield providerServices.getProvidersServicesbyCnpj(cnpj);
            }
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
export { getProviders, getProvidersbyName };
//# sourceMappingURL=providerControllers.js.map