export const productResolver = {
  Query: {
    async GetProducts(_, __, context) {
      const products = await context?.prisma?.product.findMany();
      return products;
    },

    async GetCategories(_, __, context) {
      const categories = await context?.prisma?.category.findMany();
      return categories;
    },
  },

  Mutation: {},
};
