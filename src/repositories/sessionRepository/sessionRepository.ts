import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function createSession ( data: Prisma.sessionsCreateManyInput ){
    return prisma.sessions.create({
        data,
    })
};

async function findSession(storeId: number) {
    return prisma.sessions.findFirst({
        where:{
            storesId: storeId
        }
    })
};

async function deleteSession(id: number){
    return prisma.sessions.delete({
        where:{
            id
        }
    });
}

const functionsRepositorySession = {
    createSession,
    findSession,
    deleteSession
};

export default functionsRepositorySession;