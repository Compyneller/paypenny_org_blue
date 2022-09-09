import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/Clip_Math_problem_transparent_by_Icons8.gif";
const Mission = () => {
  return (
    <Container className="py-5">
      <Row className="g-3">
        <Col sm={12} lg={7}>
          {/* <img src={image} alt="paypenny.org mission image" className="w-100" /> */}
        </Col>
        <Col
          sm={12}
          lg={5}
          className="d-flex flex-column justify-content-center"
        >
          <h1 className="about__heading text-center">What we do?</h1>
          <br />
          <p style={{ fontSize: "20px" }}>
            The mission behind starting this business is to bring the innovative
            idea out of the imagination and establish a platform that provides
            exceptional services, unlike traditional banks. We have a vision to
            assist our customers to send INR(D) with highest exchange rates &
            absolutely zero transaction fee. Our mission is to reach millions of
            people and build an ultimate community of users where sending INR(D)
            worldwide is effortless, efficient & transparent! <br />
            <br /> Join hands with Paypenny for your loved ones to create a
            better tomorrow.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Mission;
