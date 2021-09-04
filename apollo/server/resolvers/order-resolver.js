import { AuthenticationError } from "apollo-server-micro";

export const orderResolver = {
  Query: {},
  Mutation: {
    // per creare ordine serve un array di OrderItem, total, userId
    async CreateOrder(_, { createOrderInput: { orderItems, total } }, context) {
      if (!context.userId) {
        throw new AuthenticationError("Non Autenticato");
      }

      // creo order
      const order = await context.prisma.order.create({
        data: {
          total,
          profileId: context.userId,
        },
      });

      // creo gli orderItems, mettendo orderId in automatico il db li assegna all'ordine
      orderItems.map(async (orderItem) => {
        const oi = await context.prisma.orderItem.create({
          data: {
            quantity: orderItem.quantity,
            productCost: orderItem.productCost,
            productId: orderItem.productId,
            orderId: order.id,
          },
        });
        return oi;
      });
      // console.log(order);
      return order;
    },
  },
};
