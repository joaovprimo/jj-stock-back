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
function findSize(size) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.size.findFirst({
            where: {
                name: size
            }
        });
    });
}
function create(size) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.size.create({
            data: {
                name: size
            }
        });
    });
}
const sizeRepositoryFunctions = {
    findSize,
    create
};
export default sizeRepositoryFunctions;
//# sourceMappingURL=sizeRepository.js.map