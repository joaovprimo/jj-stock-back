import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function findSize(size:string) {
    return prisma.size.findFirst({
        where:{
            name:size
        }
    })
}

const sizeRepositoryFunctions = {
    findSize
}

export default sizeRepositoryFunctions;