import { AuthenticationError, Error } from "apollo-server-micro";

export const cartResolver = {
  Query: {
    async GetCurrentUserCart(_, __, context) {
      if (!context.userId) {
        throw new AuthenticationError("Non Autenticato");
      }

      return await context.prisma.cart.findFirst({
        where: {
          profileId: context.userId,
        },
      });
    },
  },

  Mutation: {
    async UpsertCart(_, { createCartInput: { cartItems } }, context) {
      if (!context.userId) {
        throw new AuthenticationError("Non Autenticato");
      }

      const cart = await context.prisma.cart.findFirst({
        where: {
          profileId: context.userId,
        },
      });

      if (cart) {
        await context.prisma.cart.delete({
          where: {
            id: cart.id,
          },
        });
        return await context.prisma.cart.create({
          data: {
            profileId: context.userId,
            cartItems: {
              create: [...cartItems],
            },
          },
        });
      } else {
        return await context.prisma.cart.create({
          data: {
            profileId: context.userId,
            cartItems: {
              create: [...cartItems],
            },
          },
        });
      }
    },
  },
};
