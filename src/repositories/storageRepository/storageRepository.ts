import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function getStorage(stockId: number){
    return prisma.stock.findFirst({
        where:{
            id: stockId
        }
    })
};

const storageRepositoryFuncions = {
    getStorage
};

export default storageRepositoryFuncions;
