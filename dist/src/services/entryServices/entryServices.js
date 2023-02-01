var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { badRequestError } from "../../errors/bad-request-error.js";
import entryRepositoryFunctions from "../../repositories/entryRepository/entryRepository.js";
import fiscalNoteRepositoryFunctions from "../../repositories/fiscalNoteRepository/fiscalNoteRepository.js";
import providersRepositories from "../../repositories/providerRepository/providerRepository.js";
import objProductRepositories from "../../repositories/productRepository/productRepository.js";
import sizeRepositoryFunctions from "../../repositories/sizeRepository/sizeRepository.js";
function entryPostService(name, quantity, fiscalNote, receiveDate, provider, size) {
    return __awaiter(this, void 0, void 0, function* () {
        let ficNote;
        const sizee = yield sizeRepositoryFunctions.findSize(size);
        if (!sizee)
            throw badRequestError();
        const prod = yield objProductRepositories.findOneProductByNameandSize(name, sizee.id);
        if (!prod)
            throw badRequestError();
        const providerr = yield providersRepositories.findProviderbyCnpj(provider);
        console.log(providerr);
        if (!providerr)
            throw badRequestError();
        const providerId = providerr.id;
        ficNote = yield fiscalNoteRepositoryFunctions.getFiscalnotesByNumber(fiscalNote);
        if (!ficNote) {
            ficNote = yield fiscalNoteRepositoryFunctions.createFiscalNote(fiscalNote, receiveDate, providerId);
        }
        yield objProductRepositories.updateProduct(prod.id, quantity);
        const entry = yield entryRepositoryFunctions.createEntry(prod.id, ficNote.id, quantity);
        return entry;
    });
}
const serviceEntryFunctions = {
    entryPostService
};
export default serviceEntryFunctions;
//# sourceMappingURL=entryServices.js.map