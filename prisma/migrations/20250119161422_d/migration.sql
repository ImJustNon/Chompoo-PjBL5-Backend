/*
  Warnings:

  - The primary key for the `Students` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Students` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Students_student_id_key` ON `Students`;

-- AlterTable
ALTER TABLE `Students` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `student_prefix` VARCHAR(10) NULL,
    ADD PRIMARY KEY (`student_id`);

-- CreateTable
CREATE TABLE `Departments` (
    `id` VARCHAR(191) NOT NULL,
    `department_fullname_th` VARCHAR(191) NOT NULL,
    `department_fullname_en` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
