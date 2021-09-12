import { Container, Row, Col } from "react-bootstrap";
import { breakpoint } from "../../helpers/general";
import Link from "next/link";

export default function CategoryCard({ categories, viewportWidth, myRef }) {
  return (
    <Container className="position-relative">
      <Row>
        <Col xs={12}>
          <div className="pt-5">
            <p className="text-center">
              Per ogni euro speso ottieni <span className="blue">10 punti</span>
              , raggiunti <span className="orange">200 punti</span> ricevi una
              pizza in omaggio!
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        {categories.map((c) => {
          return (
            <Col key={c.id} xs={12} md={6} className="py-5">
              <Link href={`/prodotti/${c.categoryName.toLowerCase()}`}>
                <a className={`category-card ${c.categoryPathImage}`}>
                  <div
                    style={{
                      background: `url('${c.categoryPathImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="category-card__container text-center py-3"
                  >
                    <h2 className="category-card__container__title ">
                      {c.categoryName}
                    </h2>
                    <p className="btn btn__inverted">ordina</p>
                  </div>
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
      <div
        className="fix-scroll"
        style={{
          height: viewportWidth < breakpoint.sm ? "80px" : "120px",
          top: viewportWidth < breakpoint.sm ? "-80px" : "-120px",
        }}
        ref={myRef}
      ></div>
    </Container>
  );
}
