import prisma from '../../config/database.js';

async function createSell(productId:number, sellDate:string, quantity:number, value:string){
    return prisma.sell.create({
        data:{
            productId,
            date: sellDate,
            quantity,
            value
        }
    })
}

const sellFunctionsRepository = {
    createSell
}

export default sellFunctionsRepository;