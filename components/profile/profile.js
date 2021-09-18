import { Container, Row, Col } from "react-bootstrap";

import { Fragment, useState } from "react";

import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";

import { capitalize } from "../../helpers/general";

import ProfileSections from "./profile-sections";

export default function Profile({ userId }) {
  const [selected, setSelected] = useState("info-0");

  const [user, setUser] = useState();
  const { loading, error } = useQuery(ME, {
    onCompleted: (d) => setUser(d.Me),
    variables: { id: userId },
  });

  return (
    <Container className="profile">
      <Row>
        {error
          ? "Errore ricarica la pagina."
          : loading
          ? "Caricamento..."
          : user && (
              <Fragment>
                <Col xs={12}>
                  <h2 className="text-center">
                    Benvenuto {capitalize(user.firstName)}!
                  </h2>
                  <div className="w-100 d-flex justify-content-around p-md-4">
                    <h3
                      onClick={(e) => toggleClass(e, setSelected)}
                      id="info-0"
                      className="profile__info mt-3 mt-md-0 text-center selected"
                    >
                      Ordini
                    </h3>
                    <h3
                      onClick={(e) => toggleClass(e, setSelected)}
                      id="info-1"
                      className="profile__info mt-3 mt-md-0 text-center"
                    >
                      Account
                    </h3>
                    <h3
                      onClick={(e) => toggleClass(e, setSelected)}
                      id="info-2"
                      className="profile__info mt-3 mt-md-0 text-center"
                    >
                      Punti
                    </h3>
                  </div>
                </Col>

                <ProfileSections selected={selected} user={user} />
              </Fragment>
            )}
      </Row>
    </Container>
  );
}

// specific utilities functions
const toggleClass = (e, setSelected) => {
  let classes = "profile__info mt-3 mt-md-0 text-center";
  let els = document.getElementsByClassName(
    "profile__info mt-3 mt-md-0 text-center selected"
  );
  if (els) {
    while (els[0]) {
      els[0].classList.remove("selected");
    }
  }
  e.target.className = classes.replace(
    "profile__info mt-3 mt-md-0 text-center",
    "profile__info mt-3 mt-md-0 text-center selected"
  );

  e.target.classList.contains("selected") && setSelected(e.target.id);
};
