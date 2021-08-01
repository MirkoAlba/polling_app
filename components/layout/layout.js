import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import { Container } from "react-bootstrap";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <Container>
        <main className="content">{props.children}</main>
      </Container>
      <Footer />
    </Fragment>
  );
}
