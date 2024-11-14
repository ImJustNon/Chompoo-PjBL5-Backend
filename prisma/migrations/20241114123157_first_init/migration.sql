-- CreateTable
CREATE TABLE `Students` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_uuid` VARCHAR(191) NOT NULL,
    `student_id` VARCHAR(13) NOT NULL,
    `student_firstname` VARCHAR(30) NOT NULL,
    `student_lastname` VARCHAR(30) NOT NULL,
    `student_year_admission` VARCHAR(4) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Students_student_uuid_key`(`student_uuid`),
    UNIQUE INDEX `Students_student_id_key`(`student_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `activity_uuid` VARCHAR(191) NOT NULL,
    `activity_name` VARCHAR(191) NOT NULL,
    `activity_description` TEXT NULL,
    `activity_department` VARCHAR(50) NOT NULL,
    `activity_year` VARCHAR(10) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Activities_activity_uuid_key`(`activity_uuid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActivitiesParticipated` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_uuid` VARCHAR(191) NOT NULL,
    `activity_uuid` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
