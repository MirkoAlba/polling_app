export const messageResolver = {
  Query: {
    async getUser() {
      const user = {
        id: "id",
        name: "giovanni",
        age: 50,
      };

      return user;
    },
  },
};
