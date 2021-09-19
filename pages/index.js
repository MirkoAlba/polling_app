import Hero from "../components/home/hero";
import CategoryCard from "../components/home/category-card";
import Customize from "../components/home/customize";
import { Fragment, useEffect, useRef } from "react";

import { createPrismaClient } from "../apollo/server/db/context";
import { queryClient } from "../helpers/query-client";
import { gql } from "apollo-server-micro";

import { useStoreActions } from "easy-peasy";

export default function Home({ userId, viewportWidth, categories }) {
  const userIdInCart = userId ? userId : "";

  const myRef = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const fetchCartItems = useStoreActions((actions) => actions.fetchCartItems);
  const setUserIdInCart = useStoreActions((actions) => actions.setUserId);

  useEffect(() => {
    userId && (fetchCartItems(), setUserIdInCart(userIdInCart));
  }, []);

  return (
    <Fragment>
      <Hero executeScroll={executeScroll} userId={userId} />
      <Customize />
      <CategoryCard
        viewportWidth={viewportWidth}
        myRef={myRef}
        categories={categories}
      />
    </Fragment>
  );
}

export async function getServerSideProps({ req }) {
  const prisma = createPrismaClient();
  const categories = await prisma.category.findMany();

  var token = req.cookies.jid;

  var data;
  if (token) {
    data = await queryClient({
      query: gql`
        query VerifyToken($token: String!) {
          VerifyToken(token: $token) {
            message
            verified
            userId
            isAdmin
          }
        }
      `,
      variables: { token },
    });
  }

  var isAdmin = data?.data?.VerifyToken.isAdmin;

  if (isAdmin) {
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
    };
  }

  return {
    props: {
      categories: categories.sort((a, b) => a.categoryOrder - b.categoryOrder),
    },
  };
}
