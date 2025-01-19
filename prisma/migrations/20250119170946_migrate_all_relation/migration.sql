/*
  Warnings:

  - The primary key for the `Activities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `activity_department` on the `Activities` table. All the data in the column will be lost.
  - You are about to drop the column `activity_uuid` on the `Activities` table. All the data in the column will be lost.
  - You are about to drop the column `activity_year` on the `Activities` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Activities` table. All the data in the column will be lost.
  - You are about to alter the column `activity_name` on the `Activities` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to drop the column `activity_uuid` on the `ActivitiesParticipated` table. All the data in the column will be lost.
  - You are about to drop the column `student_uuid` on the `ActivitiesParticipated` table. All the data in the column will be lost.
  - The primary key for the `Departments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Departments` table. All the data in the column will be lost.
  - Added the required column `activity_date` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity_department_id` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - The required column `activity_id` was added to the `Activities` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `activity_type_id` to the `Activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activity_id` to the `ActivitiesParticipated` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_id` to the `ActivitiesParticipated` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_id` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_type` to the `Departments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_department_id` to the `Students` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Activities_activity_uuid_key` ON `Activities`;

-- AlterTable
ALTER TABLE `Activities` DROP PRIMARY KEY,
    DROP COLUMN `activity_department`,
    DROP COLUMN `activity_uuid`,
    DROP COLUMN `activity_year`,
    DROP COLUMN `id`,
    ADD COLUMN `activity_date` VARCHAR(20) NOT NULL,
    ADD COLUMN `activity_department_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `activity_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `activity_type_id` INTEGER NOT NULL,
    MODIFY `activity_name` VARCHAR(50) NOT NULL,
    ADD PRIMARY KEY (`activity_id`);

-- AlterTable
ALTER TABLE `ActivitiesParticipated` DROP COLUMN `activity_uuid`,
    DROP COLUMN `student_uuid`,
    ADD COLUMN `activity_checked` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `activity_checked_late` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `activity_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `student_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Departments` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `department_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `department_type` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`department_id`);

-- AlterTable
ALTER TABLE `Students` ADD COLUMN `student_department_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `ActivityType` (
    `activitytype_id` INTEGER NOT NULL,
    `activitytype_name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`activitytype_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Students` ADD CONSTRAINT `Students_student_department_id_fkey` FOREIGN KEY (`student_department_id`) REFERENCES `Departments`(`department_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_activity_department_id_fkey` FOREIGN KEY (`activity_department_id`) REFERENCES `Departments`(`department_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_activity_type_id_fkey` FOREIGN KEY (`activity_type_id`) REFERENCES `ActivityType`(`activitytype_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActivitiesParticipated` ADD CONSTRAINT `ActivitiesParticipated_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Students`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActivitiesParticipated` ADD CONSTRAINT `ActivitiesParticipated_activity_id_fkey` FOREIGN KEY (`activity_id`) REFERENCES `Activities`(`activity_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
