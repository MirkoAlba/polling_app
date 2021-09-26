import { Fragment } from "react";
import Header from "./header";
import HeaderAdmin from "./header-admin";
import Footer from "./footer";

export default function Layout({
  userId,
  isAdmin,
  viewportWidth,
  viewportHeight,
  children,
}) {
  return isAdmin ? (
    <Fragment>
      <div className="wrapper-admin d-flex">
        <HeaderAdmin
          viewportWidth={viewportWidth}
          viewportHeight={viewportHeight}
          userId={userId}
        />
        <main className="content content--admin">{children}</main>
      </div>
    </Fragment>
  ) : (
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
