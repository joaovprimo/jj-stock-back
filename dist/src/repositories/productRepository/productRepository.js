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
function findProducts(stockId) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.products.findMany({
            where: {
                stockId
            },
            include: {
                fiscalNote: {
                    select: {
                        number: true
                    }
                },
                provider: {
                    select: {
                        name: true
                    }
                },
                size: {
                    select: {
                        name: true
                    }
                }
            }
        });
    });
}
function findOneProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.products.findFirst({
            where: {
                id,
            }
        });
    });
}
;
function findOneProductByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.products.findMany({
            where: {
                name
            }
        });
    });
}
;
function create(data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(data);
        const creatind = yield prisma.products.create({
            data
        });
        console.log(creatind);
        return creatind;
    });
}
;
function deleteProduct(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.products.delete({
            where: {
                id: productId
            }
        });
    });
}
const objProductRepositories = {
    findProducts,
    findOneProductById,
    findOneProductByName,
    create,
    deleteProduct
};
export default objProductRepositories;
//# sourceMappingURL=productRepository.js.map