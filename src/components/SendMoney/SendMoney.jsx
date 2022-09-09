import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./SendMoney.css";
const SendMoney = () => {
  return (
    <div className="send__container">
      <Container>
        <h1> Send Money to India at Zero Charges.</h1>
        <br />

        <Row className="g-3 d-flex justify-content-center">
          <Col sm={12} lg={3}>
            <a
              href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
              className="w-100"
              target="_blank"
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
          <Col sm={12} lg={3}>
            <a
              href="https://apps.apple.com/in/app/paypenny/id1545140323"
              target="_blank"
              className="w-100"
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
      </Container>
    </div>
  );
};

export default SendMoney;
