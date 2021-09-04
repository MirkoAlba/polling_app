import { AuthenticationError } from "apollo-server-micro";

export const cartResolver = {
  Query: {
    async GetCurrentUserCart(_, __, context) {
      if (!context.userId) {
        throw new AuthenticationError("Non Autenticato");
      }

      const cart = await context.prisma.cart.findFirst({
        where: {
          profileId: context.userId,
        },
      });

      return cart;
    },
  },

  Mutation: {
    async CreateCart(_, { createCartInput: { orderItems } }, context) {
      if (!context.userId) {
        throw new AuthenticationError("Non Autenticato");
      }

      const cart = await context.prisma.cart.create({
        data: {
          profileId: context.userId,
          orderItems: {
            create: orderItems,
          },
        },
      });

      return cart;
    },
  },
};
