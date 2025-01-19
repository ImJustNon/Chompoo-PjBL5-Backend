/*
  Warnings:

  - You are about to drop the column `student_prefix` on the `Students` table. All the data in the column will be lost.
  - Added the required column `student_prefix_id` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Students` DROP COLUMN `student_prefix`,
    ADD COLUMN `student_prefix_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `PersonPrefix` (
    `prefix_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prefix_name` VARCHAR(10) NOT NULL,
    `prefix_name_short` VARCHAR(8) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`prefix_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_student_prefix_id_fkey` FOREIGN KEY (`student_prefix_id`) REFERENCES `PersonPrefix`(`prefix_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
