import prisma from '../../config/database.js';

async function createStock(storesId : number){
    return prisma.stock.create({
        data:{
            storesId
        }
    })
}

const stockRepositoryObj = {
    createStock
}

export default stockRepositoryObj;