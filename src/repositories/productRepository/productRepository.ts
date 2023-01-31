import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function findProducts(stockId:number){
    return prisma.products.findMany({
        where:{
            stockId
        },
        include:{
            fiscalNote:{
                select:{
                   number:true 
                }
            },
            provider:{
                select:{
                    name:true
                }
            },
            size:{
                select:{
                    name:true
                }
            }
        }
    });
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
           name
        }
    })
};

async function findOneProductByNameandSize(name:string, sizeId:number) {
    return prisma.products.findFirst({
        where:{
           name,
           sizeId
        }
    })
};

async function create(data: Prisma.productsCreateInput){
    console.log(data);
 const creatind = await prisma.products.create({
    data
 });
 console.log(creatind);
 return creatind
};

async function deleteProduct(productId: number){
    return prisma.products.delete({
        where:{
            id:productId
        }
    })
}

async function updateProduct(productId:number, quantity: number) {
    return prisma.products.update({
        where:{
            id:productId
        },
        data:{
            quantity:{
                increment:quantity
            } 
        }
    })
}

const objProductRepositories = {
    findProducts,
    findOneProductById,
    findOneProductByName,
    findOneProductByNameandSize,
    create,
    deleteProduct,
    updateProduct
}

export default objProductRepositories;