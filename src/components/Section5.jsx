import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../assets/4.png";
import GetItOnAppStore from "./GetItOnAppStore";
import GetItOnPlayStore from "./GetItOnPlayStore";
const Section5 = () => {
  return (
    <div className="blog__container">
      <div class="custom-shape-divider-top-1662109117">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", overflowX: "hidden" }}
      >
        <Row className="g-3">
          <Col
            sm={12}
            lg={6}
            className="d-flex align-items-center justify-content-center flex-column text-light"
          >
            <h1 className="section__heading" data-aos="fade-right">
              Transfer Money to India with Paypenny. Install the app, Signup,
              and Send Money to your loved ones.
            </h1>
            <br />
            <br />
            <div
              className=" d-flex align-items-center justify-content-center"
              style={{ gap: "1rem" }}
            >
              <GetItOnPlayStore />

              <GetItOnAppStore />
            </div>
          </Col>
          <Col
            sm={12}
            lg={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src={image}
              alt="PayPenny Download"
              data-aos="fade-left"
              data-aos-delay="300"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section5;
