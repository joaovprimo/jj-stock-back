import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function getFiscalnotesByNumber(fiscalNote:string){
    return prisma.fiscalNote.findFirst({
        where:{
            number:fiscalNote
        }
    })
}

async function createFiscalNote(fiscalNote: string, receiveDate:string, providerId:number) {
    return prisma.fiscalNote.create({
        data:{
            number: fiscalNote,
            receiveDate,
            providerId
        }
    })
};

const fiscalNoteRepositoryFunctions = {
getFiscalnotesByNumber,
createFiscalNote
}

export default fiscalNoteRepositoryFunctions;