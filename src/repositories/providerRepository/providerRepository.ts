import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function findProviders(){
    return prisma.provider.findMany();
}

async function findProviderbyName(data : string){
    return prisma.provider.findFirst({
        where:{
            name: data,
        }
    })
}

async function findProviderbyCnpj(data : string){
    return prisma.provider.findFirst({
        where:{
            cnpj: data,
        }
    })
     
}

const providersRepositories =  {
    findProviders,
    findProviderbyName,
    findProviderbyCnpj
}

export default providersRepositories;


