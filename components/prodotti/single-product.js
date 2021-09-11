import { Container, Row, Col } from "react-bootstrap";

import { Fragment, useEffect } from "react";

import { useMutation } from "@apollo/client";
import { UPSERT_CART } from "../../graphql/mutations";

import Image from "next/image";
import Link from "next/link";

import { useStoreActions, useStoreState } from "easy-peasy";

import { breakpoint, timeout } from "../../helpers/general";

export default function SingleProduct({ userId, viewportWidth, product }) {
  const smart = viewportWidth < breakpoint.sm;
  const desk = viewportWidth > breakpoint.sm;

  //store
  const fetchCartItems = useStoreActions((actions) => actions.fetchCartItems);
  const cart = useStoreState((state) => state.cart);
  const addProductToCart = useStoreActions(
    (actions) => actions.cart.addProductToCart
  );
  const removeProduct = useStoreActions(
    (actions) => actions.cart.removeProduct
  );
  const addQuantity = useStoreActions((actions) => actions.cart.addQuantity);
  const removeQuantity = useStoreActions(
    (actions) => actions.cart.removeQuantity
  );

  useEffect(() => {
    userId && fetchCartItems();
  }, []);

  //upsert cart
  const [upsertCart] = useMutation(UPSERT_CART, {
    variables: {
      createCartInput: { cartItems: cart.cartItems },
    },
  });

  console.log("single: ", cart);

  const getCurrentProductQuantity = (cartItems, id) => {
    const p = cartItems.filter((item) => item.productId === id);
    return p[0].quantity;
  };

  return (
    <Container className="single-product">
      <Row className="single-product__row">
        <Col
          xs={6}
          className="single-product__row__col--left d-flex justify-content-center"
        >
          <div className="position-relative single-product__row__col--left__wrapper-image">
            <Image
              src={product.productImagePath}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Col>

        <Col
          xs={6}
          className="single-product__row__col--right d-flex flex-column justify-content-center"
        >
          <h2 className="mb-3 mb-lg-5 text-md-center product-name">
            {product.productName}
          </h2>
          <p>
            <span className="text-primary">Prezzo: </span>
            {product.productCost} €
          </p>
          <p>
            <span className="text-primary">Ingredienti: </span>
            {product.productDescription}
          </p>
          {desk &&
            (userId ? (
              cart.cartItems?.filter((p) => p.productId === product.id).length >
              0 ? (
                <Fragment>
                  <div
                    style={{ gap: "15px" }}
                    className="d-flex align-items-center justify-content-center mt-4"
                  >
                    <p onClick={() => addQuantity(product.id)}>+</p>
                    <p>
                      {getCurrentProductQuantity(cart.cartItems, product.id)}
                    </p>
                    <p onClick={() => removeQuantity(product.id)}>-</p>
                  </div>
                  <a
                    onClick={async () => {
                      removeProduct(product.id);
                      await timeout(1);
                      upsertCart();
                    }}
                    className="btn btn__remove mt-3"
                  >
                    Rimuovi dall' ordine
                  </a>
                </Fragment>
              ) : (
                <Fragment>
                  <div
                    style={{ gap: "15px" }}
                    className="d-flex align-items-center justify-content-center mt-4"
                  >
                    <p>ciao</p>
                    <p>0</p>
                    <p>ciao</p>
                  </div>
                  <a
                    onClick={async () => {
                      addProductToCart(product);
                      await timeout(1);
                      upsertCart();
                    }}
                    className="btn btn__add mt-3"
                  >
                    Aggiungi all' ordine
                  </a>
                </Fragment>
              )
            ) : (
              <Link href="/register">
                <a className="btn btn__inverted mt-5 mt-lg-5">
                  Registrati/Accedi per Ordinare
                </a>
              </Link>
            ))}
        </Col>

        {smart && (
          <Col xs={12} className="text-center">
            {userId ? (
              cart.cartItems.filter((p) => p.productId === product.id).length >
              0 ? (
                <a
                  onClick={async () => {
                    removeProduct(product.id);
                    await timeout(1);
                    upsertCart();
                  }}
                  className="btn btn__remove mt-3"
                >
                  Rimuovi dall' ordine
                </a>
              ) : (
                <a
                  onClick={async () => {
                    addProductToCart(product);
                    await timeout(1);
                    upsertCart();
                  }}
                  className="btn btn__add mt-3"
                >
                  Aggiungi all' ordine
                </a>
              )
            ) : (
              <Link href="/register">
                <a className="btn btn__inverted mt-5 mt-lg-5">
                  Registrati/Accedi per Ordinare
                </a>
              </Link>
            )}
          </Col>
        )}
      </Row>
    </Container>
  );
}
