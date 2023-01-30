import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function findProducts(){
    return prisma.products.findMany();
}

const objProductRepositories = {
    findProducts
}

export default objProductRepositories;