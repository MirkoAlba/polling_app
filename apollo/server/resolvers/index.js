import { userResolver } from "./user-resolver";
import { productResolver } from "./product-resolver";
import { orderResolver } from "./order-resolver";
import { cartResolver } from "./cart-resolver";
import { GraphQLScalarType, Kind } from "graphql";
import { UserInputError } from "apollo-server-micro";

import { format } from "date-fns";

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...productResolver.Query,
    ...orderResolver.Query,
    ...cartResolver.Query,
  },

  Mutation: {
    ...userResolver.Mutation,
    ...productResolver.Mutation,
    ...orderResolver.Mutation,
    ...cartResolver.Mutation,
  },

  //---------- Top-level resolvers ----------
  User: {
    profile: async (parent, _, context) => {
      const profile = await context?.prisma?.profile.findUnique({
        where: {
          id: parent.id,
        },
      });

      return profile;
    },
  },

  Profile: {
    user: async (parent, _, context) => {
      const user = await context?.prisma?.user.findUnique({
        where: {
          id: parent.id,
        },
      });

      return user;
    },
  },

  Category: {
    products: async (parent, _, context) => {
      // cerco i prodotti che hanno categoryId === parent.id (id della categoria)
      const p = await context?.prisma?.product.findMany({
        where: { categoryId: parent.id },
      });

      return p;
    },
  },

  // ogni volta che si fa la query GetProducts il campo category
  // ritorna la Category del Product
  Product: {
    category: async (parent, _, context) => {
      const c = await context?.prisma?.category.findFirst({
        where: { id: parent.categoryId },
      });
      return c;
    },
  },

  OrderItem: {
    product: async (parent, _, context) => {
      const p = await context.prisma.product.findFirst({
        where: {
          id: parent.productId,
        },
      });

      return p;
    },
    order: async (parent, _, context) => {
      const o = await context.prisma.order.findUnique({
        where: {
          id: parent.orderId,
        },
      });

      return o;
    },
  },

  Order: {
    profile: async (parent, _, context) => {
      const user = await context.prisma.profile.findUnique({
        where: {
          id: parent.profileId,
        },
      });

      return user;
    },

    orderItems: async (parent, _, context) => {
      const orderItems = await context.prisma.orderItem.findMany({
        where: {
          orderId: parent.id,
        },
      });

      return orderItems;
    },
  },

  Cart: {
    profile: async (parent, _, context) => {
      return await context.prisma.profile.findUnique({
        where: {
          id: context.userId,
        },
      });
    },

    cartItems: async (parent, _, context) => {
      return await context.prisma.cartItem.findMany({
        where: {
          cartId: parent.id,
        },
      });
    },
  },

  CartItem: {
    product: async (parent, _, context) => {
      return await context.prisma.product.findUnique({
        where: {
          id: parent.productId,
        },
      });
    },
  },
  //---------- End Top-level resolvers ----------

  //---------- Graphql Scalar ----------
  BigInt: new GraphQLScalarType({
    name: "BigInt",
    description: "Custom Int scalar type",
    //viene chiamata quando il value viene preso dal client (input)
    parseValue(value) {
      return typeof value === "string" ? parseInt(value) : value;
    },
    //viene chiamata quando il value deve ritornare al client
    serialize(value) {
      return typeof value === "string" ? parseInt(value) : value;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value);
        // return ast.value;
      }
      throw new UserInputError("Provided value is not an integer");
    },
  }),

  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      const date = format(value, "dd/MM/yyyy");
      return date; // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};
