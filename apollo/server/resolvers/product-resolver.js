export const productResolver = {
  Query: {
    async GetAllCategories(_, __, context) {
      const categories = await context?.prisma?.category.findMany();
      return categories;
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
      const products = await context?.prisma?.product.findMany();
      return products;
    },

    async GetProductsByCategory(_, { categoryName }, context) {
      const products = await context?.prisma?.product.findMany({
        where: {
          category: {
            categoryName,
          },
        },
      });

      return products;
    },
  },

  Mutation: {},
};
