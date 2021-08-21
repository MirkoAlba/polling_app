import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({
  userId,
  viewportWidth,
  viewportHeight,
  children,
}) {
  return (
    <Fragment>
      <Header
        viewportWidth={viewportWidth}
        viewportHeight={viewportHeight}
        userId={userId}
      />
      <main className="content">{children}</main>
      <Footer />
    </Fragment>
  );
}
