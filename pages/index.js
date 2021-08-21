import Hero from "../components/home/hero";
import CategoryCard from "../components/home/category-card";
import { Fragment, useRef } from "react";

import { createPrismaClient } from "../apollo/server/db/context";

export default function Home({ userId, viewportWidth, categories }) {
  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fragment>
      <Hero
        myRef={myRef}
        executeScroll={executeScroll}
        userId={userId}
        viewportWidth={viewportWidth}
      />
      <CategoryCard categories={categories} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const prisma = createPrismaClient();
  const categories = await prisma.category.findMany();

  return {
    props: {
      categories: categories.sort((a, b) => a.categoryOrder - b.categoryOrder),
    },
  };
}
