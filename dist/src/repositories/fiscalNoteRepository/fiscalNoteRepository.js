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
function getFiscalnotesByNumber(fiscalNote) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.fiscalNote.findFirst({
            where: {
                number: fiscalNote
            }
        });
    });
}
function createFiscalNote(fiscalNote, receiveDate, providerId) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.fiscalNote.create({
            data: {
                number: fiscalNote,
                receiveDate,
                providerId
            }
        });
    });
}
;
const fiscalNoteRepositoryFunctions = {
    getFiscalnotesByNumber,
    createFiscalNote
};
export default fiscalNoteRepositoryFunctions;
//# sourceMappingURL=fiscalNoteRepository.js.map