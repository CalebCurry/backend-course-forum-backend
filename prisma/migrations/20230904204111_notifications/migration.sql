-- CreateTable
CREATE TABLE "notification_settings" (
    "notification_settings_id" SERIAL NOT NULL,
    "security" BOOLEAN NOT NULL DEFAULT true,
    "marketing" BOOLEAN NOT NULL DEFAULT false,
    "comms" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "notification_settings_pkey" PRIMARY KEY ("notification_settings_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "notification_settings_user_id_key" ON "notification_settings"("user_id");

-- AddForeignKey
ALTER TABLE "notification_settings" ADD CONSTRAINT "notification_settings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
