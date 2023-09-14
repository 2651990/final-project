/*
  Warnings:

  - You are about to drop the column `receiver_id` on the `chatroom` table. All the data in the column will be lost.
  - You are about to drop the column `receiver_id` on the `message` table. All the data in the column will be lost.
  - Added the required column `admin_id` to the `chatroom` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_id` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chatroom" DROP CONSTRAINT "chatroom_receiver_id_fkey";

-- DropForeignKey
ALTER TABLE "message" DROP CONSTRAINT "message_receiver_id_fkey";

-- AlterTable
ALTER TABLE "chatroom" DROP COLUMN "receiver_id",
ADD COLUMN     "admin_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "message" DROP COLUMN "receiver_id",
ADD COLUMN     "admin_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "chatroom" ADD CONSTRAINT "chatroom_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "message" ADD CONSTRAINT "message_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
