/*
  Warnings:

  - You are about to drop the column `unit_price` on the `order_item` table. All the data in the column will be lost.
  - You are about to drop the column `unit_price` on the `packages` table. All the data in the column will be lost.
  - Added the required column `price` to the `order_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `packages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_item" DROP COLUMN "unit_price",
ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "packages" DROP COLUMN "unit_price",
ADD COLUMN     "price" INTEGER NOT NULL;
