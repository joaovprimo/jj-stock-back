-- AlterTable
ALTER TABLE "provider" ADD COLUMN     "storesId" INTEGER;

-- AddForeignKey
ALTER TABLE "provider" ADD CONSTRAINT "provider_storesId_fkey" FOREIGN KEY ("storesId") REFERENCES "stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
