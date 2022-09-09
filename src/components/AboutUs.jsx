import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/Clip_Dancer_transparent_by_Icons8.gif";
const AboutUs = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center py-5">
      <Row className="g-3">
        <Col
          sm={12}
          lg={5}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="about__heading">ABOUT US</h1>
          <br />
          <p style={{ fontSize: "20px" }}>
            Paypenny is established by a group of young & dynamic business
            entrepreneurs. It is a digital money remittance service provider
            where you can easily transfer INR(D) to your family members &
            friends worldwide. The conscientious team of managers, developers,
            graphic designers, customer support & content creators are
            magnificently working for the growth & development of the business.
            What makes us stand out in the market is the trust of our customers
            & remarkable services of the Paypenny that is accessible every
            second of the clock!
          </p>
        </Col>
        <Col sm={12} lg={7}>
          <img src={image} alt="paypenny.org about us" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
