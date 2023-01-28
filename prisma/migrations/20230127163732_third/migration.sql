/*
  Warnings:

  - You are about to drop the column `colorId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `color` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `color` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_colorId_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "colorId",
ADD COLUMN     "color" TEXT NOT NULL;

-- DropTable
DROP TABLE "color";
