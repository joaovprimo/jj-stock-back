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
        const { storesId } = req.params;
        console.log(storesId);
        const storeId = Number(storesId);
        try {
            const providers = yield providerServices.getProvidersServices(storeId);
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
        let provider;
        try {
            if (name) {
                name = name.toString();
                provider = yield providerServices.getProvidersServicesbyName(name);
                return res.status(httpStatus.OK).send([provider]);
            }
            else {
                cnpj = cnpj.toString();
                provider = yield providerServices.getProvidersServicesbyCnpj(cnpj);
                return res.status(httpStatus.OK).send([provider]);
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
function postProvider(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, cnpj, email } = res.locals.provider;
        const { storesId } = req.params;
        console.log(storesId);
        const storeId = Number(storesId);
        try {
            yield providerServices.createProvider(name, cnpj, email, storeId);
            const providers = yield providerServices.getProvidersServices(storeId);
            return res.status(httpStatus.CREATED).send(providers);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
function deleteProvider(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { storesId } = req.body;
        console.log(id);
        const store = Number(id);
        try {
            yield providerServices.deleteProvider(store);
            const providers = yield providerServices.getProvidersServices(storesId);
            return res.status(httpStatus.OK).send(providers);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
export { getProviders, getProvidersbyName, postProvider, deleteProvider };
//# sourceMappingURL=providerControllers.js.map