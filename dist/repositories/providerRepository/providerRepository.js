var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from '../../config/database.js';
function findProviders() {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.provider.findMany();
    });
}
function findProviderbyName(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.provider.findFirst({
            where: {
                name: data,
            }
        });
    });
}
function findProviderbyCnpj(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const cnpj = prisma.provider.findFirst({
            where: {
                cnpj: data,
            }
        });
        console.log(cnpj);
        return cnpj;
    });
}
const providersRepositories = {
    findProviders,
    findProviderbyName,
    findProviderbyCnpj
};
export default providersRepositories;
//# sourceMappingURL=providerRepository.js.map