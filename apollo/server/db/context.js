import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";

export function createPrismaClient() {
  let prisma;
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
    return prisma;
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
    return prisma;
  }
}

export function createContext(res, req) {
  const prisma = createPrismaClient();
  var verified;
  if (req.headers && req.headers.authorization) {
    // in req.headers c'è il token passato in apollo-client
    var token = req.headers.authorization.split(" ")[1];
    try {
      verified = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    } catch (err) {
      console.log("Token non valido: ", err);
    }
  }

  console.log("sono in createContext: Not auth header");

  return { res, req, prisma, userId: verified?.profileId };
}
