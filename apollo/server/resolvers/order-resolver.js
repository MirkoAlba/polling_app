import { AuthenticationError, UserInputError } from "apollo-server-micro";
import { validateDeliveryAddress } from "../util/validators";

export const orderResolver = {
  Query: {
    async GetAllCurrentUserOrders(_, __, context) {
      if (!context.userId) {
        throw new AuthenticationError("Non Autenticato");
      }

      return await context.prisma.order.findMany({
        where: {
          profileId: context.userId,
        },
      });
    },
  },
  Mutation: {
    // per creare ordine serve un array di OrderItem, total, userId
    async CreateOrder(
      _,
      {
        createOrderInput: {
          orderItems,
          total,
          via,
          numeroCivico,
          citta,
          provincia,
          cap,
        },
      },
      context
    ) {
      if (!context.userId) {
        throw new AuthenticationError("Non Autenticato");
      }

      const { errors, valid } = validateDeliveryAddress(
        via,
        numeroCivico,
        citta,
        provincia,
        cap
      );

      if (!valid)
        throw new UserInputError("Errori nell' indirizzo", { errors });

      const delivery = via.concat(
        " ",
        numeroCivico.toString(),
        " ",
        citta,
        " ",
        provincia,
        " ",
        cap.toString()
      );

      // creo order
      const order = await context.prisma.order.create({
        data: {
          total,
          delivery,
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

      const cart = await context.prisma.cart.findFirst({
        where: {
          profileId: context.userId,
        },
      });

      // elimino il cart e i cartItems di conseguenza
      await context.prisma.cart.delete({
        where: {
          id: cart.id,
        },
      });

      // console.log(order);
      return order;
    },
  },
};
