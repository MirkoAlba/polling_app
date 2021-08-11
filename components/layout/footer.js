import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <div className="wrapper-footer">
      <Container className="footer pt-4 pb-2">
        <Row>
          <Col sm={12} md={3}>
            Logo
          </Col>
          <Col xs={12} md={3} className="mt-3 mt-md-0">
            <ul>
              <strong>ciao</strong>
              <li className="mt-2">ciao</li>
              <li>ciao</li>
              <li>ciao</li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mt-3 mt-md-0">
            <ul>
              <strong>ciao</strong>
              <li className="mt-2">ciao</li>
              <li>ciao</li>
              <li>ciao</li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mt-3 mt-md-0">
            <ul>
              <strong>ciao</strong>
              <li className="mt-2">ciao</li>
              <li>ciao</li>
              <li>ciao</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
