import prisma from '../../config/database.js';
import { Prisma } from '@prisma/client';

async function createSession ( data: Prisma.sessionsCreateManyInput ){
    return prisma.sessions.create({
        data,
    })
};

const functionsRepositorySession = {
    createSession
};

export default functionsRepositorySession;