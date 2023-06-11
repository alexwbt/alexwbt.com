/*
  Warnings:

  - You are about to drop the `annon_message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `annon_message`;

-- CreateTable
CREATE TABLE `anon_message` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `message` TEXT NOT NULL,
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
