-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_packages_id_fkey";

-- DropForeignKey
ALTER TABLE "order_item" DROP CONSTRAINT "order_item_single_item_id_fkey";

-- AlterTable
ALTER TABLE "order_item" ALTER COLUMN "packages_id" DROP NOT NULL,
ALTER COLUMN "single_item_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_packages_id_fkey" FOREIGN KEY ("packages_id") REFERENCES "packages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_single_item_id_fkey" FOREIGN KEY ("single_item_id") REFERENCES "single_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
