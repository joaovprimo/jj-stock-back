import prisma from "../../config/database.js";
import { Prisma } from '@prisma/client';

async function findStore (cnpj: string) {
    console.log(cnpj)
   const store = await prisma.stores.findFirst({
    where: {
        cnpj
    },
   });
   console.log(store)
   return store;
}

async function createStore( data:Prisma.storesCreateInput) {
  return prisma.stores.create({
    data
  })     
    
};

export { findStore, createStore };