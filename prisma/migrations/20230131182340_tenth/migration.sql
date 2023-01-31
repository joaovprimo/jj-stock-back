-- AlterTable
ALTER TABLE "entry" ADD COLUMN     "fiscalNoteId" INTEGER;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "providerId" DROP NOT NULL,
ALTER COLUMN "fiscalNoteId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "entry" ADD CONSTRAINT "entry_fiscalNoteId_fkey" FOREIGN KEY ("fiscalNoteId") REFERENCES "fiscalNote"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
