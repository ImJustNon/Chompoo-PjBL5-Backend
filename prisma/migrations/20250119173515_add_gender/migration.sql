/*
  Warnings:

  - Added the required column `gender` to the `PersonPrefix` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `PersonPrefix` ADD COLUMN `gender` VARCHAR(5) NOT NULL;
