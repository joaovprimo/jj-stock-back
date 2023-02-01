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
function findOneProductByNameandSize(name, sizeId, stock) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.products.findFirst({
            where: {
                name,
                sizeId,
                stockId: stock
            }
        });
    });
}
;
function create(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const creatind = yield prisma.products.create({
            data
        });
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
function updateProduct(productId, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(productId, quantity);
        return prisma.products.update({
            where: {
                id: productId
            },
            data: {
                quantity: {
                    increment: quantity
                }
            }
        });
    });
}
const objProductRepositories = {
    findProducts,
    findOneProductById,
    findOneProductByName,
    findOneProductByNameandSize,
    create,
    deleteProduct,
    updateProduct
};
export default objProductRepositories;
//# sourceMappingURL=productRepository.js.map