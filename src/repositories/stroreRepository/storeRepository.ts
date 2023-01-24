import prisma from "../../config/database.js";

async function findStore (storesId: number) {
   return prisma.stores.findUnique({
        where: {
            id: storesId
        }
    })
}

export { findStore };