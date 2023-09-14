-- CreateTable
CREATE TABLE "notification" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "profile_pic" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "notification_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messager" (
    "id" SERIAL NOT NULL,
    "history" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "official_camp_site" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "official_camp_site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "official_camp_site_id" INTEGER NOT NULL,
    "mobile" INTEGER NOT NULL,
    "deliver_date" TEXT NOT NULL,
    "deliver_time" TEXT NOT NULL,
    "payment" INTEGER NOT NULL,
    "payment_date" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "single_item" (
    "id" SERIAL NOT NULL,
    "type_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT,
    "photo" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "single_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "single_item_all_photos" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "single_item_id" INTEGER NOT NULL,

    CONSTRAINT "single_item_all_photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packages" (
    "id" SERIAL NOT NULL,
    "package_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "unit_price" INTEGER NOT NULL,

    CONSTRAINT "packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "package_item" (
    "id" SERIAL NOT NULL,
    "packages_id" INTEGER NOT NULL,
    "single_item_id" INTEGER NOT NULL,

    CONSTRAINT "package_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "package_all_photos" (
    "id" SERIAL NOT NULL,
    "photo" TEXT NOT NULL,
    "packages_id" INTEGER NOT NULL,

    CONSTRAINT "package_all_photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "packages_id" INTEGER,
    "quantity" INTEGER NOT NULL,
    "single_item_id" INTEGER,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_item" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "packages_id" INTEGER NOT NULL,
    "single_item_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price" INTEGER NOT NULL,

    CONSTRAINT "order_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_notification_id_fkey" FOREIGN KEY ("notification_id") REFERENCES "notification"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messager" ADD CONSTRAINT "messager_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_official_camp_site_id_fkey" FOREIGN KEY ("official_camp_site_id") REFERENCES "official_camp_site"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "single_item_all_photos" ADD CONSTRAINT "single_item_all_photos_single_item_id_fkey" FOREIGN KEY ("single_item_id") REFERENCES "single_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "package_item" ADD CONSTRAINT "package_item_packages_id_fkey" FOREIGN KEY ("packages_id") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "package_item" ADD CONSTRAINT "package_item_single_item_id_fkey" FOREIGN KEY ("single_item_id") REFERENCES "single_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "package_all_photos" ADD CONSTRAINT "package_all_photos_packages_id_fkey" FOREIGN KEY ("packages_id") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_packages_id_fkey" FOREIGN KEY ("packages_id") REFERENCES "packages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_single_item_id_fkey" FOREIGN KEY ("single_item_id") REFERENCES "single_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_packages_id_fkey" FOREIGN KEY ("packages_id") REFERENCES "packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_single_item_id_fkey" FOREIGN KEY ("single_item_id") REFERENCES "single_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
