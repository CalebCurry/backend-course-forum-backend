/*
  Warnings:

  - You are about to drop the `notification_settings` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('SECURITY', 'MARKETING', 'COMMS');

-- DropForeignKey
ALTER TABLE "notification_settings" DROP CONSTRAINT "notification_settings_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "notificationSettings" "NotificationType"[];

-- DropTable
DROP TABLE "notification_settings";
