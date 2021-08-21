import { userResolver } from "./user-resolver";
import { productResolver } from "./product-resolver";
import { GraphQLScalarType, Kind } from "graphql";
import { UserInputError } from "apollo-server-micro";

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...productResolver.Query,
  },

  Mutation: {
    ...userResolver.Mutation,
    ...productResolver.Mutation,
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
      console.log(c);
      return c;
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
        return ast.value;
      }
      throw new UserInputError("Provided value is not an integer");
    },
  }),
};
