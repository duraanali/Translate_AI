-- CreateEnum
CREATE TYPE "Direction" AS ENUM ('SO_TO_EN', 'EN_TO_SO');

-- CreateTable
CREATE TABLE "translations" (
    "id" SERIAL NOT NULL,
    "sourceText" TEXT NOT NULL,
    "translatedText" TEXT,
    "direction" "Direction" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "translations_pkey" PRIMARY KEY ("id")
);
