import { Container, Row, Col } from "react-bootstrap";

import { useEffect } from "react";

import { useMutation } from "@apollo/client";
import { UPSERT_CART } from "../../graphql/mutations";

import Image from "next/image";
import Link from "next/link";

import { useStoreActions, useStoreState } from "easy-peasy";

import { breakpoint, timeout } from "../../helpers/general";

export default function SingleProduct({ userId, viewportWidth, product }) {
  const smart = viewportWidth < breakpoint.sm;
  const desk = viewportWidth > breakpoint.sm;

  const fetchProducts = useStoreActions((actions) => actions.fetchProducts);
  const cart = useStoreState((state) => state.cart);
  const addProductToCart = useStoreActions(
    (actions) => actions.cart.addProductToCart
  );
  const removeProduct = useStoreActions(
    (actions) => actions.cart.removeProduct
  );

  useEffect(() => {
    userId && fetchProducts();
  }, []);

  //upsert cart
  const [upsertCart] = useMutation(UPSERT_CART, {
    variables: {
      createCartInput: { cartItems: cart.cartItems },
    },
  });

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
              cart.cartItems.filter((p) => p.productId === product.id).length >
              0 ? (
                <a
                  onClick={async () => {
                    removeProduct(productt.id);
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
