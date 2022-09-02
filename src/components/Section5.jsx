import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../assets/4.png";
const Section5 = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <h1 className="section__heading">
            Transfer Money to India with Paypenny. Install the app, signup, and
            send Money to your loved ones.
          </h1>
          <br />
          <br />
          <Row className="g-3 w-100">
            <Col sm={12} lg={6}>
              <Button variant="dark" className="w-100 download__buttons">
                Download PayPenny App
              </Button>
            </Col>
            <Col sm={12} lg={6}>
              <Button variant="dark" className="w-100 download__buttons">
                Download PayPenny App
              </Button>
            </Col>
          </Row>
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex align-items-center justify-content-center"
        >
          <img src={image} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Section5;
