import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
