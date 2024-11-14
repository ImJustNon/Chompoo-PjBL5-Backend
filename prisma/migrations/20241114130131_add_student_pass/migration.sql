/*
  Warnings:

  - Added the required column `student_password` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Students` ADD COLUMN `student_password` VARCHAR(10) NOT NULL;
