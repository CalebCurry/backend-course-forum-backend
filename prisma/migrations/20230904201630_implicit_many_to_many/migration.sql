/*
  Warnings:

  - You are about to drop the `post_tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post_tags" DROP CONSTRAINT "post_tags_post_id_fkey";

-- DropForeignKey
ALTER TABLE "post_tags" DROP CONSTRAINT "post_tags_tag_id_fkey";

-- DropTable
DROP TABLE "post_tags";

-- CreateTable
CREATE TABLE "_post_tags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_post_tags_AB_unique" ON "_post_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_post_tags_B_index" ON "_post_tags"("B");

-- AddForeignKey
ALTER TABLE "_post_tags" ADD CONSTRAINT "_post_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_post_tags" ADD CONSTRAINT "_post_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("tag_id") ON DELETE CASCADE ON UPDATE CASCADE;
