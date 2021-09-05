export const productResolver = {
  Query: {
    async GetAllCategories(_, __, context) {
      return await context?.prisma?.category.findMany();
    },

    async GetCategory(_, { categoryName }, context) {
      const category = await context?.prisma?.category.findFirst({
        where: {
          categoryName: categoryName,
        },
      });

      return category ? category.categoryName : "Categoria non esistente";
    },

    async GetAllProducts(_, __, context) {
      return await context?.prisma?.product.findMany();
    },

    async GetProductsByCategory(_, { categoryName }, context) {
      return await context?.prisma?.product.findMany({
        where: {
          category: {
            categoryName,
          },
        },
      });
    },

    async GetProductById(_, { id }, context) {
      return await context?.prisma?.product.findUnique({
        where: {
          id,
        },
      });
    },
  },

  Mutation: {},
};
