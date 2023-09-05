-- CreateTable
CREATE TABLE "tags" (
    "tag_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("tag_id")
);

-- CreateTable
CREATE TABLE "post_tags" (
    "posts_tag_id" SERIAL NOT NULL,
    "post_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "post_tags_pkey" PRIMARY KEY ("posts_tag_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "post_tags_post_id_tag_id_key" ON "post_tags"("post_id", "tag_id");

-- AddForeignKey
ALTER TABLE "post_tags" ADD CONSTRAINT "post_tags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_tags" ADD CONSTRAINT "post_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("tag_id") ON DELETE CASCADE ON UPDATE CASCADE;
