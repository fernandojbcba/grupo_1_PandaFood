create schema pandafood;
use pandafood;
CREATE TABLE `invoice`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT UNSIGNED NOT NULL,
    `date` DATETIME NOT NULL,
    `total_amount` float NOT NULL
);

CREATE TABLE `user`(
   `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `firstName` VARCHAR(255) NOT NULL,
   `lastName` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `role` BIGINT UNSIGNED NOT NULL,
   `image` VARCHAR(255) NULL,
   `deletedAt` DATETIME NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL
);
CREATE TABLE `invoice_detail`(
   `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `invoice_id` BIGINT UNSIGNED NOT NULL,
   `product_id` BIGINT UNSIGNED NOT NULL,
   `quantity` BIGINT NOT NULL,
   `unit_price` BIGINT NOT NULL
);
CREATE TABLE `category`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `role`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `product`(
   `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
   `name` VARCHAR(255) NOT NULL,
   `category_id` BIGINT UNSIGNED NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NULL,
   `price` float NOT NULL,
   `deletedAt` DATETIME NULL,
   `createdAt` DATETIME NOT NULL,
   `updatedAt` DATETIME NOT NULL
);


ALTER TABLE
    `invoice` ADD CONSTRAINT `invoice_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_role_foreign` FOREIGN KEY(`role`) REFERENCES `role`(`id`);
ALTER TABLE
    `product` ADD CONSTRAINT `product_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `category`(`id`);
ALTER TABLE
    `invoice_detail` ADD CONSTRAINT `invoice_detail_invoice_id_foreign` FOREIGN KEY(`invoice_id`) REFERENCES `invoice`(`id`);
ALTER TABLE
    `invoice_detail` ADD CONSTRAINT `invoice_detail_product_id_foreign` FOREIGN KEY(`product_id`) REFERENCES `product`(`id`);