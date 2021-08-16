import Hero from "../components/home/hero";
import CategoryCard from "../components/home/category-card";
import { Fragment } from "react";

export default function Home({ isLoggedIn }) {
  // console.log(isLoggedIn);
  return (
    <Fragment>
      <Hero isLoggedIn={isLoggedIn} />
      <CategoryCard />
    </Fragment>
  );
}
