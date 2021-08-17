-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productName" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" REAL NOT NULL,
    "productImagePath" TEXT NOT NULL DEFAULT path,
    "categoryId" TEXT NOT NULL,
    FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("categoryId", "id", "productCost", "productDescription", "productImagePath", "productName") SELECT "categoryId", "id", "productCost", "productDescription", "productImagePath", "productName" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product.productName_unique" ON "Product"("productName");
CREATE TABLE "new_Category" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoryName" TEXT NOT NULL,
    "categoryPathImage" TEXT NOT NULL,
    "categoryOrder" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_Category" ("categoryName", "categoryPathImage", "id") SELECT "categoryName", "categoryPathImage", "id" FROM "Category";
DROP TABLE "Category";
ALTER TABLE "new_Category" RENAME TO "Category";
CREATE UNIQUE INDEX "Category.categoryName_unique" ON "Category"("categoryName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
