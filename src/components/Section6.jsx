import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../assets/undraw_fashion_photoshoot_mtq8.svg";
const Section6 = () => {
  return (
    <Container>
      <Row
        className="g-3 py-5 d-flex align-items-center justify-content-center"
        style={{ overflowX: "hidden" }}
      >
        <Col sm={12} lg={6} className="px-3">
          <img
            src={image}
            alt="Paypenny Ambassador"
            className="w-100"
            data-aos="fade-right"
          />
        </Col>

        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column align-items-center justify-content-start"
        >
          <h1
            className="section__heading"
            data-aos="fade-left"
            style={{ fontSize: `${window.innerWidth < 950 ? "35px" : "50px"}` }}
          >
            Become Our Brand Ambassador
          </h1>

          <h5
            className="section__sub__heading text-secondary"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Are you a social media buzz? Become our ambassador and if you are
            lucky, you might be chosen for our campaigns soon and will get
            exclusive rewards!
          </h5>

          <Button
            variant="dark"
            className="w-100 mb-5 download__buttons"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            Join the Program
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section6;
