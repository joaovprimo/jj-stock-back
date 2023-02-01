import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function findSize(size:string) {
    return prisma.size.findFirst({
        where:{
            name:size
        }
    })
}

async function create(size:string) {
    return prisma.size.create({
        data:{
            name:size
        }
    })
}

const sizeRepositoryFunctions = {
    findSize,
    create
}

export default sizeRepositoryFunctions;