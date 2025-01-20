/*
  Warnings:

  - You are about to drop the `_RolesToStudents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_RolesToStudents` DROP FOREIGN KEY `_RolesToStudents_A_fkey`;

-- DropForeignKey
ALTER TABLE `_RolesToStudents` DROP FOREIGN KEY `_RolesToStudents_B_fkey`;

-- DropTable
DROP TABLE `_RolesToStudents`;

-- CreateTable
CREATE TABLE `StudentRoles` (
    `student_id` VARCHAR(191) NOT NULL,
    `role_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`student_id`, `role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `StudentRoles` ADD CONSTRAINT `StudentRoles_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Students`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StudentRoles` ADD CONSTRAINT `StudentRoles_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
