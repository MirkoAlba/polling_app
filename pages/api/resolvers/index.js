import { messageResolver } from "./message-resolver";

export const resolvers = {
  Query: {
    ...messageResolver.Query,
  },
};
