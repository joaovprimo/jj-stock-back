var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
function getRndInteger() {
    return Math.floor(Math.random() * (100000000 - 1)) + 1;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.sell.deleteMany();
        yield prisma.entry.deleteMany();
        yield prisma.products.deleteMany();
        yield prisma.fiscalNote.deleteMany();
        yield prisma.provider.deleteMany();
        yield prisma.size.deleteMany();
        yield prisma.stock.deleteMany();
        yield prisma.sessions.deleteMany();
        yield prisma.stores.deleteMany();
        const store = yield prisma.stores.create({
            data: { name: "loja1", cnpj: "123456789", email: "loja1@gmail.com", password: "123456789" }
        });
        const stock = yield prisma.stock.create({
            data: { storesId: store.id }
        });
        const providers1 = yield prisma.provider.create({
            data: { name: "BalaJuquinhaSotore", cnpj: "123456789", email: "bala@gmail.com" },
        });
        const providers2 = yield prisma.provider.create({
            data: { name: "JuliaSotore", cnpj: "12345678", email: "juliastore@gmail.com" },
        });
        const providers3 = yield prisma.provider.create({
            data: { name: "jvStore", cnpj: "1234567", email: "jv@gmail.com" },
        });
        const size1 = yield prisma.size.create({
            data: { name: "P" },
        });
        const size2 = yield prisma.size.create({
            data: { name: "M" },
        });
        const size3 = yield prisma.size.create({
            data: { name: "G" },
        });
        const size4 = yield prisma.size.create({
            data: { name: "GG" },
        });
        const fn1 = yield prisma.fiscalNote.create({
            data: { number: getRndInteger(), providerId: providers1.id, receiveDate: "01/02/2022" },
        });
        const fn2 = yield prisma.fiscalNote.create({
            data: { number: getRndInteger(), providerId: providers2.id, receiveDate: "01/12/2022" },
        });
        const fn3 = yield prisma.fiscalNote.create({
            data: { number: getRndInteger(), providerId: providers3.id, receiveDate: "11/05/2021" }
        });
        const fn4 = yield prisma.fiscalNote.create({
            data: { number: getRndInteger(), providerId: providers1.id, receiveDate: "11/11/2022" },
        });
        const prod1 = yield prisma.products.createMany({
            data: [
                { name: "produto1", numberRef: getRndInteger(), sizeId: size1.id, providerId: providers1.id, fiscalNoteId: fn1.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "branco" },
                { name: "produto2", numberRef: getRndInteger(), sizeId: size2.id, providerId: providers2.id, fiscalNoteId: fn2.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "preto" },
                { name: "produto3", numberRef: getRndInteger(), sizeId: size3.id, providerId: providers3.id, fiscalNoteId: fn3.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "vermelho" },
                { name: "produto4", numberRef: getRndInteger(), sizeId: size4.id, providerId: providers1.id, fiscalNoteId: fn1.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "verde" },
                { name: "produto5", numberRef: getRndInteger(), sizeId: size1.id, providerId: providers2.id, fiscalNoteId: fn2.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "grey" },
                { name: "produto6", numberRef: getRndInteger(), sizeId: size2.id, providerId: providers3.id, fiscalNoteId: fn3.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "amarelo" },
                { name: "produto7", numberRef: getRndInteger(), sizeId: size3.id, providerId: providers1.id, fiscalNoteId: fn4.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "colorido" },
                { name: "produto8", numberRef: getRndInteger(), sizeId: size4.id, providerId: providers2.id, fiscalNoteId: fn4.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "preto" },
            ]
        });
        const prod2 = yield prisma.products.create({
            data: { name: "produtox", numberRef: getRndInteger(), sizeId: size1.id, providerId: providers1.id, fiscalNoteId: fn1.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "branco" },
        });
        const prod3 = yield prisma.products.create({
            data: { name: "produtoxx", numberRef: getRndInteger(), sizeId: size1.id, providerId: providers1.id, fiscalNoteId: fn1.id, stockId: stock.id, quantity: 2, description: "roupa", minimun: 2, color: "branco" },
        });
        const entry1 = yield prisma.entry.createMany({
            data: [
                { productId: prod2.id, quantity: 2 },
                { productId: prod3.id, quantity: 2 },
            ]
        });
        const sell1 = yield prisma.sell.createMany({
            data: [
                { productId: prod2.id, date: "11/12/2022", quantity: 1 },
                { productId: prod3.id, date: "11/01/2023", quantity: 1 },
            ]
        });
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=seed.js.map