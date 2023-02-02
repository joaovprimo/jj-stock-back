import prisma from '../../config/database.js';

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

async function findProductsMin(stockId:number){
    return prisma.products.findMany({
        where:{
            stockId,
           NOT: {
            quantity : 0
           }
        },
        include:{
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

async function findOneProductByNumber(number:string, stockId:number) {
    return prisma.products.findMany({
        where:{
           stockId,
           numberRef:number
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
    })
};

async function findOneProductByNameandSize(name:string, sizeId:number, stock:number) {
    return prisma.products.findFirst({
        where:{
           name,
           sizeId,
           stockId:stock
        }
    })
};

async function create(name: string, numberRef:string, sizeId: number, providerId: number, description: string, minimun:number, color:string, stockId: number){
   console.log(name, numberRef, sizeId, providerId, description, minimun, color, stockId)
    const creatind = await prisma.products.create({
    data:{
        name,
        numberRef,
        sizeId,
        providerId,
        description,
        stockId,
        minimun,
        color
    }
 });
 console.log(creatind)
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
    console.log(productId, quantity)
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

async function updateSellProduct(productId:number, quantity: number) {
    console.log(productId, quantity)
    return prisma.products.update({
        where:{
            id:productId
        },
        data:{
            quantity:{
                decrement:quantity
            } 
        }
    })
}

const objProductRepositories = {
    findProducts,
    findOneProductById,
    findOneProductByNumber,
    findOneProductByNameandSize,
    create,
    deleteProduct,
    updateProduct,
    findProductsMin,
    updateSellProduct
}

export default objProductRepositories;