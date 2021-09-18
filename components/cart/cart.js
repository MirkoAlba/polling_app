import { Container, Row, Col } from "react-bootstrap";
import { Fragment, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CURRENT_USER_CART } from "../../graphql/queries";
import { UPSERT_CART } from "../../graphql/mutations";

import {
  breakpoint,
  timeout,
  getCurrentProductQuantity,
} from "../../helpers/general";

import { useStoreActions, useStoreState } from "easy-peasy";

import Image from "next/image";
import Link from "next/link";

export default function CartComponent({ viewportWidth }) {
  const smart = viewportWidth < breakpoint.sm;

  //store actions
  const stateCart = useStoreState((state) => state.cart);
  const removeProduct = useStoreActions(
    (actions) => actions.cart.removeProduct
  );
  const addQuantity = useStoreActions((actions) => actions.cart.addQuantity);
  const removeQuantity = useStoreActions(
    (actions) => actions.cart.removeQuantity
  );

  const [cart, setCart] = useState(null);
  const { loading, error } = useQuery(GET_CURRENT_USER_CART, {
    onCompleted: (d) => setCart(d.GetCurrentUserCart),
  });

  //upsert cart
  const [upsertCart] = useMutation(UPSERT_CART, {
    variables: {
      createCartInput: { cartItems: stateCart.cartItems },
    },
  });

  return (
    <Container className="cart mb-5">
      <h2 className="text-center mb-4">Il tuo Carrello</h2>
      {error ? (
        "Errore, ricarica la pagina"
      ) : loading ? (
        "caricamento..."
      ) : (
        <Row>
          {cart &&
            stateCart.cartItems.map((item) => {
              return (
                <Col xs={12} key={item.productId}>
                  <Row className="mt-3 mt-md-5 align-items-center">
                    <Col
                      xs={6}
                      md={4}
                      className="position-relative col-cart text-center text-md-left"
                    >
                      {/* per avere properties che non ho nel global state, fetcho il cart e lo mappo dentro stateCart per avere il nome, img */}
                      {cart.cartItems.map((fetchedCartItem) => {
                        if (fetchedCartItem.product.id === item.productId) {
                          return (
                            <Fragment key={fetchedCartItem.id}>
                              <h5>{fetchedCartItem.product.productName}</h5>
                              <Image
                                src={fetchedCartItem.product.productImagePath}
                                width={smart ? "100" : "180"}
                                height={smart ? "100" : "150"}
                              />
                            </Fragment>
                          );
                        }
                      })}
                    </Col>
                    <Col xs={6} md={3}>
                      <p className="m-0" style={{ fontSize: ".875rem" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Beatae, placeat.
                      </p>
                    </Col>
                    <Col xs={6} md={3}>
                      <div
                        style={{ gap: "15px" }}
                        className="d-flex align-items-center justify-content-center mt-4"
                      >
                        <p
                          className="add"
                          onClick={async () => {
                            addQuantity(item.productId);
                            await timeout(1);
                            upsertCart();
                          }}
                        >
                          +
                        </p>
                        <p>
                          {getCurrentProductQuantity(
                            stateCart.cartItems,
                            item.productId
                          )}
                        </p>
                        <p
                          className="remove"
                          onClick={async () => {
                            removeQuantity(item.productId);
                            await timeout(1);
                            upsertCart();
                          }}
                        >
                          -
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} md={2}>
                      <a
                        onClick={async () => {
                          removeProduct(item.productId);
                          await timeout(1);
                          upsertCart();
                        }}
                        className="btn btn__remove"
                      >
                        rimuovi
                      </a>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          <Col xs={12} className="mt-5 text-center">
            {stateCart.cartItems.length > 0 ? (
              <Fragment>
                <a className="btn btn__inverted">concludi il tuo ordine</a>
              </Fragment>
            ) : (
              <Fragment>
                <p>sembra vuoto vai a spendere soldi!</p>
                <Link href="/prodotti/pizze">
                  <a className="btn btn__inverted">ordina</a>
                </Link>
              </Fragment>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}
