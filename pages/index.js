import Hero from "../components/home/hero";
import CategoryCard from "../components/home/category-card";
import { Fragment, useEffect, useRef } from "react";

import { createPrismaClient } from "../apollo/server/db/context";

import { useStoreActions, useStoreState } from "easy-peasy";

export default function Home({ userId, viewportWidth, categories }) {
  const userIdInCart = userId ? userId : "";

  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const fetchCartItems = useStoreActions((actions) => actions.fetchCartItems);
  const setUserIdInCart = useStoreActions((actions) => actions.setUserId);
  const cart = useStoreState((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    userId && (fetchCartItems(), setUserIdInCart(userIdInCart));
  }, []);

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
