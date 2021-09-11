import { Container, Row, Col } from "react-bootstrap";

import { Fragment, useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../../graphql/queries";
import { UPSERT_CART } from "../../graphql/mutations";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { capitalize } from "../../helpers/general";

import { useStoreActions, useStoreState } from "easy-peasy";

export default function Grid({ categoryName, userId }) {
  const router = useRouter();

  //store
  const cart = useStoreState((state) => state.cart);
  const fetchProducts = useStoreActions((actions) => actions.fetchProducts);
  const addProductToCart = useStoreActions(
    (actions) => actions.cart.addProductToCart
  );
  const removeProduct = useStoreActions(
    (actions) => actions.cart.removeProduct
  );

  useEffect(() => {
    userId && fetchProducts();
  }, []);

  //fetch products by category
  const [products, setProducts] = useState([]);
  const { loading, _data, error } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    onCompleted: (d) => {
      setProducts(d.GetProductsByCategory);
    },
    variables: { categoryName },
  });

  //upsert cart
  const [upsertCart] = useMutation(UPSERT_CART, {
    onCompleted: (d) => console.log(d.UpsertCart),
    variables: {
      createCartInput: { cartItems: cart.cartItems },
    },
  });

  console.log(cart.cartItems);

  return (
    <Container>
      <Row>
        <h1 className="text-center mb-2 mb-md-5">{capitalize(categoryName)}</h1>
      </Row>

      <Row className="mb-5">
        {error
          ? "Errore ricarica la pagina"
          : loading
          ? "caricamento..."
          : products.map((p) => {
              return (
                <Col
                  key={p.id}
                  xs={{ span: 10, offset: 1 }}
                  md={{ span: 6, offset: 0 }}
                  lg={4}
                  className="pb-3"
                >
                  <div className="product-card">
                    <div className="product-card__container mx-auto position-relative">
                      <h3 className="text-center my-4 ">{p.productName}</h3>
                      <Row className="shadow-none">
                        <Col className="shadow-none" xs={6}>
                          <Image
                            className="product-card__container__image"
                            src={p.productImagePath}
                            width="200"
                            height="200"
                          />
                        </Col>

                        <Col xs={6} className="text-center px-0 my-auto">
                          {userId ? (
                            <Fragment>
                              <Link
                                href={`/prodotti/${
                                  router.query.categoryName
                                }/${p.productName
                                  .replace(/\s/g, "-")
                                  .toLowerCase()}`}
                              >
                                <a className="btn btn__inverted mb-2">
                                  Personalizza
                                </a>
                              </Link>
                              {cart.cartItems.filter(
                                (e) => e.productId === p.id
                              ).length > 0 ? (
                                <a
                                  onClick={() => {
                                    removeProduct(p.id);
                                    upsertCart();
                                  }}
                                  className="btn btn__remove mt-2"
                                >
                                  Rimuovi
                                </a>
                              ) : (
                                <a
                                  onClick={() => {
                                    addProductToCart(p);
                                    upsertCart();
                                  }}
                                  className="btn btn__add mt-2"
                                >
                                  Aggiungi
                                </a>
                              )}
                            </Fragment>
                          ) : (
                            <Link
                              href={`/prodotti/${
                                router.query.categoryName
                              }/${p.productName
                                .replace(/\s/g, "-")
                                .toLowerCase()}`}
                            >
                              <a className="btn btn__inverted mb-2">Scopri</a>
                            </Link>
                          )}
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              );
            })}
      </Row>
    </Container>
  );
}
