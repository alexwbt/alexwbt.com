-- CreateTable
CREATE TABLE `annon_message` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `message` TEXT NOT NULL,
    `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
