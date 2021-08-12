import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <div className="wrapper-footer">
      <Container className="footer pt-4">
        <Row>
          <Col xs={12} md={6}>
            Logo
            <p>
              <strong>
                Via tali dei tali, 27 bergamo
                <br />
                P.IVA: 12345678910
                <br />
                Telefono: 035 9878656
              </strong>
            </p>
          </Col>

          <Col xs={12} md={6} className="d-flex col-social">
            <a href="#">
              <img
                width="60"
                height="60"
                src="/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                width="60"
                height="60"
                src="/icons/instagram.svg"
                alt="Instagram"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
