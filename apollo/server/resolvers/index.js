import { userResolver } from "./user-resolver";
import { GraphQLScalarType, Kind } from "graphql";
import { UserInputError } from "apollo-server-micro";

export const resolvers = {
  Query: {
    ...userResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
  },
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
      console.log(ast);
      if (ast.kind === Kind.INT) {
        return ast.value;
      }
      throw new UserInputError("Provided value is not an integer");
    },
  }),
};
