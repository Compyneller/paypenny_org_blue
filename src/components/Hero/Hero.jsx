import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import image from "../../assets/undraw_mobile_pay_re_sjb8.svg";
const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__bg"></div>

      <Container>
        <Row className="g-3">
          <Col
            sm={12}
            lg={12}
            className="d-flex flex-column justify-content-center"
          >
            <h1 className="hero__heading" data-aos="fade-right">
              ONE APP, THOUSAND USERS, MILLIONS TRANSFERS
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
