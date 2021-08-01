import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas/index";
import { resolvers } from "./resolvers/index";
import { createContext } from "./db/context";

// passo il prisma client attraverso il context del server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ res, req }) => createContext(res, req),
  uploads: false,
  introspection: true,
  // serve per ritornare dal resolver l'errore
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });

// module.exports = apolloServer
//   .start()
//   .then(() => apolloServer.createHandler({ path: "/api/graphql" }));

// module.exports = apolloServer.start().then(() => {
//   const handler = apolloServer.createHandler({ path: "/api/graphql" });
//   return cors((req, res) => {
//     console.log(res);
//     return req.method === "OPTIONS" ? send(res, 200, 'ok') : handler(req, res);
//   });
// });
