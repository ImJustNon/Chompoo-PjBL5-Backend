/*
  Warnings:

  - You are about to drop the `StudentRoles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `StudentRoles` DROP FOREIGN KEY `StudentRoles_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `StudentRoles` DROP FOREIGN KEY `StudentRoles_student_id_fkey`;

-- DropTable
DROP TABLE `StudentRoles`;

-- CreateTable
CREATE TABLE `_RolesToStudents` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(13) NOT NULL,

    UNIQUE INDEX `_RolesToStudents_AB_unique`(`A`, `B`),
    INDEX `_RolesToStudents_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_RolesToStudents` ADD CONSTRAINT `_RolesToStudents_A_fkey` FOREIGN KEY (`A`) REFERENCES `Roles`(`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RolesToStudents` ADD CONSTRAINT `_RolesToStudents_B_fkey` FOREIGN KEY (`B`) REFERENCES `Students`(`student_id`) ON DELETE CASCADE ON UPDATE CASCADE;
