import { Container, Row, Col } from "react-bootstrap";
export default function Footer() {
  return (
    <Container className="footer">
      <Row>
        <Col md={3}>Logo</Col>
        <Col md={3} className="mt-3 mt-md-0">
          <ul>
            ciao
            <li className="mt-2">ciao</li>
            <li>ciao</li>
            <li>ciao</li>
          </ul>
        </Col>
        <Col md={3}>
          <ul>
            ciao
            <li className="mt-2">ciao</li>
            <li>ciao</li>
            <li>ciao</li>
          </ul>
        </Col>
        <Col md={3}>
          <ul>
            ciao
            <li className="mt-2">ciao</li>
            <li>ciao</li>
            <li>ciao</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
