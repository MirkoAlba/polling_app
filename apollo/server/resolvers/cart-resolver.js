import { AuthenticationError, Error } from "apollo-server-micro";

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

    async UpdateCart(_, { orderItems }, context) {
      if (!context.userId) {
        throw new AuthenticationError("Non Autenticato");
      }

      const cart = await context.prisma.cart.findFirst({
        where: {
          profileId: context.userId,
        },
        include: {
          orderItems: true,
        },
      });

      if (!cart) {
        throw new Error("Carrello non esiste!");
      }

      // console.log("orderItems: ", orderItems);

      cart.orderItems.map(async (o) => {
        const res = await context.prisma.orderItem.update({
          where: {
            id: o.id,
          },

          data: {},
        });

        console.log("newOrderItems: ", res);
      });

      return cart;
    },
  },
};
