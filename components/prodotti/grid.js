import { Container, Row, Col } from "react-bootstrap";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../../graphql/queries";

import { capitalize } from "../../helpers/general";

export default function Grid({ categoryName }) {
  const [products, setProducts] = useState([]);

  const { loading, _data, error } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    onCompleted: (d) => {
      setProducts(d.GetProductsByCategory);
    },
    variables: { categoryName },
  });

  return (
    <Container>
      <Row>
        <h1 className="text-center mb-4 mb-md-5">{capitalize(categoryName)}</h1>
      </Row>

      <Row>
        {error
          ? "Errore ricarica la pagina"
          : loading
          ? "caricamento..."
          : products.map((p) => {
              console.log(p.productImagePath);
              return (
                <Col
                  key={p.id}
                  xs={{ span: 10, offset: 1 }}
                  md={{ span: 6, offset: 0 }}
                  lg={4}
                >
                  <div className="product-card">
                    {/* <div
                      style={{
                        background: `url('${p.productImagePath}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="product-card__image mx-auto"
                    ></div> */}
                    <h3 className="text-center my-4">{p.productName}</h3>
                  </div>
                </Col>
              );
            })}
      </Row>
    </Container>
  );
}
