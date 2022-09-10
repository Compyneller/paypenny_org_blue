import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const RateFeeContent = () => {
  return (
    <Container
      className="d-flex align-items-center flex-column justify-content-center"
      style={{ minHeight: "80vh", padding: "3rem 0" }}
    >
      <h1 className="section__heading">
        We promise to give you the best exchange rates, not just today but every
        day!
      </h1>
      <br />
      <br />
      <Row className="g-3">
        <Col sm={12} lg={6}>
          <Card className="section2__card shadow">
            <Card.Body>
              <img
                height={80}
                src="https://img.icons8.com/fluency/344/0-circle.png"
                alt=""
              />
              <h5
                className="section__sub__heading my-3"
                style={{ fontWeight: "bold" }}
              >
                ZERO TRANSFER FEE
              </h5>
              <p>
                Make Payments home without paying any fees. No hidden fee or
                additional fee.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card className="section2__card shadow">
            <Card.Body>
              <img
                height={80}
                src="https://img.icons8.com/external-flatarticons-blue-flatarticons/344/external-secure-web-hosting-flatarticons-blue-flatarticons.png"
                alt=""
              />
              <h5
                className="section__sub__heading my-3"
                style={{ fontWeight: "bold" }}
              >
                SECURE DELIVERY{" "}
              </h5>
              <p>
                Click ‘Send Money’ and sit back, relax & chill. We take care of
                your money to be credited on time.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Card className="shadow ratefee__card">
        <Card.Body>
          <h1 className="section__heading">
            BEST RATES TODAY, TOMORROW & EVERY DAY!
          </h1>
          <br />
          <br />
          <h5 className="section__sub__heading my-2">
            Currently, we are serving hundreds of thousands of customers and if
            we talk about our journey then it wouldn’t be possible without our
            prominent customers. Join hands with us and become a part of the
            Paypenny family!
          </h5>
          <br />
          <br />
          <Row className="g-3 w-100">
            <Col sm={6} lg={3}>
              {" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
                className="footer__downloadButton"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="dark"
                  className="w-100 download__buttons"
                  data-aos="zoom-in"
                >
                  Android
                </Button>
              </a>
            </Col>
            <Col sm={6} lg={3}>
              <a
                href="https://apps.apple.com/in/app/paypenny/id1545140323"
                target="_blank"
                rel="noreferrer"
                className="footer__downloadButton"
              >
                <Button
                  variant="dark"
                  className="w-100 download__buttons"
                  data-aos="zoom-in"
                >
                  iOS
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RateFeeContent;
