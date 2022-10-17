/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `ShortLink` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `ShortLink` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `shortlink` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ShortLink_slug_key` ON `ShortLink`(`slug`);

-- CreateIndex
CREATE INDEX `ShortLink_slug_idx` ON `ShortLink`(`slug`);
