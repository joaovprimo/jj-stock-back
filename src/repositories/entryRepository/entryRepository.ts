import prisma from '../../config/database.js';

async function createEntry(productId: number , fiscalNoteId:number, quantity:number){
    return prisma.entry.create({
        data:{
            productId,
            fiscalNoteId,
            quantity
        }
    })
}

const entryRepositoryFunctions = {
createEntry
}

export default entryRepositoryFunctions;