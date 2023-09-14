/*
  Warnings:

  - Added the required column `is_sender_msg` to the `message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "message" ADD COLUMN     "is_sender_msg" BOOLEAN NOT NULL;
