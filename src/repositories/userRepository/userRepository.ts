import prisma from "../../config/database.js";
import { Prisma } from '@prisma/client';


async function createUser( data: Prisma.usersCreateManyInput ) {
    const create = prisma.users.create({
    data,
    })       

};


export { createUser };