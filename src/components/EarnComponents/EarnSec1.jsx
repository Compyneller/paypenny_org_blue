import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EarnCalculator from "./EarnCalculator";
import EarnTable from "./EarnTable";
import image from "../../assets/undraw_mobile_devices_k1ok.svg";
const EarnSec1 = () => {
  return (
    <Container className="section__container flex-column">
      <h1 className="section__heading" data-aos="fade-up">
        Invest smarter with Earn Wallet
      </h1>
      <h5
        className="section__sub__heading text-center my-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Deposit your money with us to earn up to 25% interest per annum in CAD.
      </h5>
      <h5
        className="section__sub__heading text-center my-2"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Get the industry’s best return on investment, that too by investing for
        as low as 10 days .
      </h5>
      <br />
      <br />
      <Row className="g-3 w-100">
        <Col sm={12} lg={6}>
          <EarnTable />
          <br />
          <EarnCalculator />
        </Col>
        <Col sm={12} lg={6}>
          <img
            src={image}
            alt="paypenny.org invest"
            className="w-100"
            data-aos="fade-left"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default EarnSec1;
