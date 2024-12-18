-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'New Track',
    "releaseDate" TIMESTAMP(3),
    "release_id" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_release_id_fkey" FOREIGN KEY ("release_id") REFERENCES "Release"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
