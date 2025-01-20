/*
  Warnings:

  - Added the required column `activity_role_admin_id` to the `Activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Activities` ADD COLUMN `activity_role_admin_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Roles` (
    `role_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_name` VARCHAR(191) NOT NULL,
    `role_description` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_RolesToStudents` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(13) NOT NULL,

    UNIQUE INDEX `_RolesToStudents_AB_unique`(`A`, `B`),
    INDEX `_RolesToStudents_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_activity_role_admin_id_fkey` FOREIGN KEY (`activity_role_admin_id`) REFERENCES `Roles`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RolesToStudents` ADD CONSTRAINT `_RolesToStudents_A_fkey` FOREIGN KEY (`A`) REFERENCES `Roles`(`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RolesToStudents` ADD CONSTRAINT `_RolesToStudents_B_fkey` FOREIGN KEY (`B`) REFERENCES `Students`(`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;
