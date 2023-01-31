var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import providersRepositories from "../../repositories/providerRepository/providerRepository.js";
import { notFoundError, } from "../../errors/not-foud-error.js";
import { badRequestError } from "../../errors/bad-request-error.js";
function getProvidersServices(storeId) {
    return __awaiter(this, void 0, void 0, function* () {
        const providers = yield providersRepositories.findProviders(storeId);
        if (!providers)
            throw notFoundError();
        return providers;
    });
}
;
function getProvidersServicesbyName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield providersRepositories.findProviderbyName(name);
        if (!provider)
            throw notFoundError();
        return provider;
    });
}
function getProvidersServicesbyCnpj(cnpj) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield providersRepositories.findProviderbyCnpj(cnpj);
        if (!provider)
            throw notFoundError();
        return provider;
    });
}
function createProvider(name, cnpj, email, storesId) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield providersRepositories.create({ name, cnpj, email, storesId });
        if (!provider)
            throw badRequestError();
        return provider;
    });
}
function deleteProvider(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield providersRepositories.deleteProv(id);
        if (!provider)
            throw badRequestError();
        return provider;
    });
}
const providerServices = {
    getProvidersServices,
    getProvidersServicesbyName,
    getProvidersServicesbyCnpj,
    createProvider,
    deleteProvider
};
export default providerServices;
//# sourceMappingURL=providerServices.js.map