import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function findStore (cnpj: string) {
    console.log(cnpj)
   /*const store = await prisma.stores.findFirst({
    where: {
        cnpj
    },
   });*/
   const store = prisma.stores.findFirst({
    where:{
      cnpj
    }
   })
   return store;
}

async function createStore( data:Prisma.storesCreateInput) {
  /*return prisma.stores.create({
    data
  })     */
  return prisma.stores.create({
    data
  }) 
};

const functionRepositoryStore = {
  findStore, 
  createStore 
}

export default functionRepositoryStore;