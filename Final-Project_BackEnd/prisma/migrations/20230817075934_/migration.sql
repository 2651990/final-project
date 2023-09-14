-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "payment" DROP NOT NULL,
ALTER COLUMN "payment_date" DROP NOT NULL;
