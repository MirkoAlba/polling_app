import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Container>
        <main className="content">{children}</main>
      </Container>
      <Footer />
    </Fragment>
  );
}
