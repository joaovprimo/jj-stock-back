import { notFoundError, } from "../../errors/not-foud-error.js";
import { badRequestError } from "../../errors/bad-request-error.js";
import entryRepositoryFunctions from "../../repositories/entryRepository/entryRepository.js";
import fiscalNoteRepositoryFunctions from "../../repositories/fiscalNoteRepository/fiscalNoteRepository.js";
import providersRepositories from "../../repositories/providerRepository/providerRepository.js";
import objProductRepositories from "../../repositories/productRepository/productRepository.js";
import sizeRepositoryFunctions from "../../repositories/sizeRepository/sizeRepository.js";

async function entryPostService(name:string, quantity:number, fiscalNote:string, receiveDate: string, provider: string, size:string, stock: number) {
    let ficNote;
    const sizee = await sizeRepositoryFunctions.findSize(size);
    if(!sizee) throw badRequestError(); 
    const prod = await objProductRepositories.findOneProductByNameandSize(name, sizee.id, stock);
    if(!prod) throw badRequestError();
    const providerr = await providersRepositories.findProviderbyCnpj(provider);
    if(!providerr) throw badRequestError();
    const providerId = providerr.id;
    ficNote = await fiscalNoteRepositoryFunctions.getFiscalnotesByNumber(fiscalNote);
    if(!ficNote) {
       ficNote = await fiscalNoteRepositoryFunctions.createFiscalNote(fiscalNote, receiveDate, providerId);
    }
    const up = await objProductRepositories.updateProduct(prod.id, quantity);
   const entry = await entryRepositoryFunctions.createEntry(prod.id, ficNote.id, quantity);
   return entry;
}

const serviceEntryFunctions = {
    entryPostService
}

export default serviceEntryFunctions;