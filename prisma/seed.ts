/*import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
const prisma = new PrismaClient();
import { faker } from '@faker-js/faker';

function getRndInteger() {
    return Math.floor(Math.random() * (100000000 - 1) ) + 1;
  }

async function main() {

    await prisma.sell.deleteMany();
    await prisma.entry.deleteMany();
    await prisma.products.deleteMany();
    await prisma.fiscalNote.deleteMany();
    await prisma.provider.deleteMany();
    await prisma.size.deleteMany();
    await prisma.stock.deleteMany();
    await prisma.sessions.deleteMany();
    await prisma.stores.deleteMany();

    const store = await prisma.stores.create({
        data:{name:"loja1",cnpj:"123456789",email:"loja1@gmail.com",password:"123456789"}
    })
    const stock = await prisma.stock.create({
        data: {storesId:store.id}
    });

    const providers1 = await prisma.provider.create({
        data:{name: "BalaJuquinhaSotore",cnpj:"123456789",email:"bala@gmail.com"},  
    });
     const providers2 = await prisma.provider.create({
        data:{name: "JuliaSotore",cnpj:"12345678",email:"juliastore@gmail.com"},
    });
    const providers3 = await prisma.provider.create({
        data:{name: "jvStore",cnpj:"1234567",email:"jv@gmail.com"},
    });

    const size1 = await prisma.size.create({
        data:{name: "P"},
    }) ;
    const size2 = await prisma.size.create({
        data:{name: "M"},
    }) ;
    const size3 = await prisma.size.create({
        data:{name: "G"},
    }) ;
    const size4 = await prisma.size.create({
        data:{name: "GG"},
    }) ;
    
    const fn1 = await prisma.fiscalNote.create({
        data:{number:getRndInteger(), providerId: providers1.id, receiveDate:"01/02/2022"},   
    });
    const fn2 = await prisma.fiscalNote.create({
        data:{number:getRndInteger(), providerId: providers2.id, receiveDate:"01/12/2022"},
    });
    const fn3 = await prisma.fiscalNote.create({
        data: {number:getRndInteger(), providerId: providers3.id, receiveDate:"11/05/2021"}   
    });
    const fn4 = await prisma.fiscalNote.create({
        data:{number:getRndInteger(), providerId: providers1.id, receiveDate:"11/11/2022"},  
    });

   const prod1 = await prisma.products.createMany({
        data:[
            {name:"produto1",numberRef:getRndInteger(),sizeId:size1.id,providerId:providers1.id,fiscalNoteId:fn1.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"branco"},
            {name:"produto2",numberRef:getRndInteger(),sizeId:size2.id,providerId:providers2.id,fiscalNoteId:fn2.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"preto"},
            {name:"produto3",numberRef:getRndInteger(),sizeId:size3.id,providerId:providers3.id,fiscalNoteId:fn3.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"vermelho"},
            {name:"produto4",numberRef:getRndInteger(),sizeId:size4.id,providerId:providers1.id,fiscalNoteId:fn1.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"verde"},
            {name:"produto5",numberRef:getRndInteger(),sizeId:size1.id,providerId:providers2.id,fiscalNoteId:fn2.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"grey"},
            {name:"produto6",numberRef:getRndInteger(),sizeId:size2.id,providerId:providers3.id,fiscalNoteId:fn3.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"amarelo"},
            {name:"produto7",numberRef:getRndInteger(),sizeId:size3.id,providerId:providers1.id,fiscalNoteId:fn4.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"colorido"},
            {name:"produto8",numberRef:getRndInteger(),sizeId:size4.id,providerId:providers2.id,fiscalNoteId:fn4.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"preto"},
        ]
    });
    const prod2 = await prisma.products.create({
        data:{name:"produtox",numberRef:getRndInteger(),sizeId:size1.id,providerId:providers1.id,fiscalNoteId:fn1.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"branco"},
    });
    const prod3 = await prisma.products.create({
        data:{name:"produtoxx",numberRef:getRndInteger(),sizeId:size1.id,providerId:providers1.id,fiscalNoteId:fn1.id,stockId:stock.id,quantity:2,description:"roupa",minimun:2,color:"branco"},
    });

    const entry1 = await prisma.entry.createMany({
        data:[
           {productId:prod2.id,quantity:2},
           {productId:prod3.id,quantity:2},
        ]
    });

    const sell1 = await prisma.sell.createMany({
        data:[
            {productId:prod2.id, date:"11/12/2022", quantity:1},
            {productId:prod3.id, date:"11/01/2023", quantity:1},
        ]
    })


}

main()
      .catch((e)=> {
        console.error(e);
        process.exit(1);
      })
      .finally(async()=>{
        await prisma.$disconnect();
      });
      */