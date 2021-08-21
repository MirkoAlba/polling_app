import { Container, Row, Col } from "react-bootstrap";

import { Fragment, useState } from "react";

import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";

export default function Profile({ userId }) {
  const [user, setUser] = useState();

  const { loading, error } = useQuery(ME, {
    onCompleted: (d) => setUser(d.Me),
    variables: { id: userId },
  });

  return (
    <Container>
      <Row>
        <Col xs={12}>
          {error ? (
            "Errore ricarica la pagina."
          ) : loading ? (
            "Caricamento..."
          ) : (
            <Fragment>
              {/* <p>{user.id}</p>
              <p>{user.firstName}</p>
              <p>{user.lastName}</p>
              <p>{user.cellNumber}</p> */}
              {user && <p>{user.id}</p>}
            </Fragment>
          )}
        </Col>
      </Row>
    </Container>
  );
}
