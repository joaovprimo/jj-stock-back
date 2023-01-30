import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function findProducts(){
    return prisma.products.findMany();
}

async function findOneProductById(id:number) {
    return prisma.products.findFirst({
        where:{
            id,
        }
    })
};

async function findOneProductByName(name:string) {
    return prisma.products.findMany({
        where:{
            name,
        }
    })
};

const objProductRepositories = {
    findProducts,
    findOneProductById,
    findOneProductByName
}

export default objProductRepositories;