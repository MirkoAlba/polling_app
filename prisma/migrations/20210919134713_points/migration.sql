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
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "total" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "state" TEXT NOT NULL DEFAULT Ricevuto,
    "delivery" TEXT NOT NULL DEFAULT consegna,
    "profileId" TEXT NOT NULL,
    FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "delivery", "id", "profileId", "state", "total") SELECT "createdAt", "delivery", "id", "profileId", "state", "total" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE TABLE "new_Profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "points" REAL NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    FOREIGN KEY ("id") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("createdAt", "email", "id", "isAdmin", "password", "userId") SELECT "createdAt", "email", "id", "isAdmin", "password", "userId" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile.email_unique" ON "Profile"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
