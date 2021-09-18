import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CURRENT_USER_CART } from "../../graphql/queries";
import { CREATE_ORDER } from "../../graphql/mutations";

import { useStoreState } from "easy-peasy";

import Link from "next/link";

export default function CheckoutComponent() {
  const stateCart = useStoreState((state) => state.cart);
  const [cart, setCart] = useState(null);
  const { loading, error } = useQuery(GET_CURRENT_USER_CART, {
    onCompleted: (d) => setCart(d.GetCurrentUserCart),
  });
  const [errors, setErrors] = useState({});

  // sta roba per evitare content did not match server and client
  const initialCreateOrderInput = {
    orderItems: stateCart.cartItems,
    total: 0,
    via: "",
    numeroCivico: 0,
    citta: "",
    provincia: "",
    cap: 0,
  };
  const [createOrderInput, setCreateOrderInput] = useState(
    initialCreateOrderInput
  );
  useEffect(() => {
    var t = 0;
    stateCart.cartItems.forEach((item) => {
      t += item.quantity * item.productCost;
    });
    setCreateOrderInput({ ...createOrderInput, total: t });
  }, []);

  const [createOrder] = useMutation(CREATE_ORDER, {
    onCompleted: (d) => {
      if (typeof window !== "undefined") {
        window.location.replace("/profilo");
      }
    },
    onError: (err) => {
      if (err) {
        // custom errors defined in validators.js, returned from server
        setErrors(err.graphQLErrors[0]?.extensions.exception.errors);
      }
    },
    variables: { createOrderInput },
  });

  function handleSubmitCreateOrder(e) {
    e.preventDefault();
    createOrder();
  }

  return (
    <Container className="container-checkout">
      <h2 className="text-center mb-4 mb-lg-5">Dettagli ordine</h2>
      <Row>
        <Col md={12} lg={3}>
          <Row className="mb-4">
            {error && "Errore, ricarica la pagina."}
            {loading
              ? "Caricamento..."
              : cart &&
                cart.cartItems.map((item) => {
                  return (
                    <Col sm={12} className="mb-3 d-flex " key={item.id}>
                      <h6>
                        {item.quantity} X {item.product.productName}{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right text-primary"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                        <span className="text-primary ms-2">
                          {item.quantity * item.product.productCost} €
                        </span>
                      </h6>
                    </Col>
                  );
                })}
            <Link href="/carrello">
              <a>
                <h6>Modifica ordine</h6>
              </a>
            </Link>
            <h3 className="text-primary mt-2">
              Totale: {createOrderInput.total} €
            </h3>
          </Row>
        </Col>

        <Col md={12} lg={9}>
          <Form
            onSubmit={(e) => handleSubmitCreateOrder(e)}
            className="w-100 form-checkout"
          >
            <Row>
              <Col md={8}>
                <Form.Label className="form-label">Via</Form.Label>
                <Form.Control
                  className="form-input"
                  type="text"
                  placeholder="Es: via giuseppe rossi"
                  value={createOrderInput.via}
                  onChange={(e) =>
                    setCreateOrderInput({
                      ...createOrderInput,
                      via: e.target.value,
                    })
                  }
                  isInvalid={errors?.via ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.via}
                </Form.Control.Feedback>
              </Col>

              <Col md={4} className="mt-4 mt-md-0">
                <Form.Label className="form-label">Numero Civico</Form.Label>
                <Form.Control
                  className="form-input"
                  type="number"
                  placeholder="Es: 3"
                  //   value={createOrderInput.numeroCivico}
                  onChange={(e) =>
                    setCreateOrderInput({
                      ...createOrderInput,
                      numeroCivico: parseInt(e.target.value),
                    })
                  }
                  isInvalid={errors?.numeroCivico ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.numeroCivico}
                </Form.Control.Feedback>
              </Col>

              <Col md={6} className="mt-4">
                <Form.Label className="form-label">Città</Form.Label>
                <Form.Control
                  className="form-input"
                  type="text"
                  placeholder="Es: Bottanuco"
                  value={createOrderInput.citta}
                  onChange={(e) =>
                    setCreateOrderInput({
                      ...createOrderInput,
                      citta: e.target.value,
                    })
                  }
                  isInvalid={errors?.citta ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.citta}
                </Form.Control.Feedback>
              </Col>

              <Col md={3} className="mt-4">
                <Form.Label className="form-label">Provincia</Form.Label>
                <Form.Control
                  className="form-input"
                  type="text"
                  placeholder="Es: BG"
                  value={createOrderInput.provincia}
                  onChange={(e) =>
                    setCreateOrderInput({
                      ...createOrderInput,
                      provincia: e.target.value,
                    })
                  }
                  isInvalid={errors?.provincia ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.provincia}
                </Form.Control.Feedback>
              </Col>

              <Col md={3} className="mt-4">
                <Form.Label className="form-label">C.A.P</Form.Label>
                <Form.Control
                  className="form-input"
                  type="number"
                  placeholder="Es: 24040"
                  onChange={(e) =>
                    setCreateOrderInput({
                      ...createOrderInput,
                      cap: parseInt(e.target.value),
                    })
                  }
                  isInvalid={errors?.cap ? true : false}
                />
                <Form.Control.Feedback type="invalid">
                  {errors?.cap}
                </Form.Control.Feedback>
              </Col>
            </Row>
            <Button className="btn__inverted my-5 w-50 p-3" type="submit">
              ordina
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
