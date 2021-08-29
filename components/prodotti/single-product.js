import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";

import { breakpoint } from "../../helpers/general";

export default function SingleProduct({ userId, viewportWidth, product }) {
  const smart = viewportWidth < breakpoint.sm;
  const desk = viewportWidth > breakpoint.sm;

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
              <a href="#" className="btn btn__inverted">
                Aggiungi all' ordine
              </a>
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
              <a href="#" className="btn btn__inverted mt-3">
                Aggiungi all' ordine
              </a>
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
