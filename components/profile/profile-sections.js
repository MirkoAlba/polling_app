import { Col, Accordion } from "react-bootstrap";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { LOGOUT } from "../../graphql/mutations";
import { GET_ALL_CURRENT_USER_ORDERS } from "../../graphql/queries";

export default function ProfileSections({ selected, user }) {
  const [orders, setOrders] = useState([]);

  const [logout, { client }] = useMutation(LOGOUT, {
    onCompleted: (data) => {
      if (data && typeof window !== "undefined") {
        window.location.replace("/");
      }
    },
  });

  const { error, loading } = useQuery(GET_ALL_CURRENT_USER_ORDERS, {
    onCompleted: (d) => setOrders(d.GetAllCurrentUserOrders),
  });

  orders && console.log(orders);

  return (
    <div className="profile-sections mt-4">
      {selected === "info-0" ? (
        <Col xs={12} className="profile-sections__info-1">
          {error ? (
            "Errore, ricarica la pagina."
          ) : loading ? (
            "Caricamento..."
          ) : (
            <Accordion>
              {orders
                ? orders.map((order) => {
                    return (
                      <Accordion.Item key={order.id} eventKey={order.id}>
                        <Accordion.Header>
                          Ordine del {order.createdAt}
                        </Accordion.Header>
                        <Accordion.Body>ciao</Accordion.Body>
                      </Accordion.Item>
                    );
                  })
                : "Ancora nessun ordine."}
            </Accordion>
          )}
        </Col>
      ) : selected === "info-1" ? (
        <Col xs={12} className="profile-sections__info-0">
          <h4 className="profile-sections__info-0__data">
            <span>Nome:</span> {user.firstName}
          </h4>
          <h4 className="profile-sections__info-0__data">
            <span>Cognome:</span> {user.lastName}
          </h4>
          <h4 className="profile-sections__info-0__data">
            <span>Numero di Telefono:</span> {user.cellNumber}
          </h4>
          <h4 className="profile-sections__info-0__data">
            <span>Data Creazione:</span>
            {user.profile.createdAt}
          </h4>
          <h4 className="profile-sections__info-0__data">
            <span>E-mail:</span>
            {user.profile.email}
          </h4>
          <a
            onClick={() => logout().then(() => client.resetStore())}
            href="#"
            className="btn btn__inverted"
          >
            Logout
          </a>
        </Col>
      ) : (
        <Col xs={12} className="profile-sections__info-2">
          Punti
        </Col>
      )}
    </div>
  );
}
