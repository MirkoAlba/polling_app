import { Container, Row, Col } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER_CART } from "../../graphql/queries";

export default function CartComponent({ cart }) {
  //   const { loading, data, error } = useQuery(GET_CURRENT_USER_CART, {
  //     onCompleted: (d) => console.log("query: ", d.GetCurrentUserCart),
  //   });

  //   console.log("state: ", cart);

  return (
    <Container>
      <h2 className="text-center mb-4">Il tuo Carrello</h2>
      <Row>
        <Col sm={12}>ciao</Col>
      </Row>
    </Container>
  );
}
