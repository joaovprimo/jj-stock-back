/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `provider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `provider` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "provider" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "provider_email_key" ON "provider"("email");
