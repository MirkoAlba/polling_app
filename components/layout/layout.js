import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({
  isLoggedIn,
  viewportWidth,
  viewportHeight,
  children,
}) {
  return (
    <Fragment>
      <Header
        viewportWidth={viewportWidth}
        viewportHeight={viewportHeight}
        isLoggedIn={isLoggedIn}
      />
      <main className="content">{children}</main>
      <Footer />
    </Fragment>
  );
}
