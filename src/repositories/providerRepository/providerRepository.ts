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

async function create(data:Prisma.providerCreateInput) {
    return prisma.provider.create({
        data
    })
};

async function deleteProv(providerId:number){
        return prisma.provider.delete({
            where:{
                id: providerId
            }
        })
}

const providersRepositories =  {
    findProviders,
    findProviderbyName,
    findProviderbyCnpj,
    create,
    deleteProv
}

export default providersRepositories;


