import prisma from '../../config/database.js';

async function createStock(storesId : number){
    return prisma.stock.create({
        data:{
            storesId
        }
    })
}

async function findStock(storeId:number){
    return prisma.stock.findFirst({
        where:{
            storesId:storeId
        }
    })
}

const stockRepositoryObj = {
    createStock,
    findStock
}

export default stockRepositoryObj;