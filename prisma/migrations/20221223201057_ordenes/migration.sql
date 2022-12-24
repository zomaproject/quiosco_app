-- CreateTable
CREATE TABLE "Orden" (
    "id" SERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fecha" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "pedido" JSONB NOT NULL,

    CONSTRAINT "Orden_pkey" PRIMARY KEY ("id")
);
