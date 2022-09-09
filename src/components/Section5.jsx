import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../assets/4.png";
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
              Transfer Money to India with Paypenny. Install the app, signup,
              and send Money to your loved ones.
            </h1>
            <br />
            <br />
            <Row className="g-3 w-100">
              <Col sm={12} lg={6}>
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
              <Col sm={12} lg={6}>
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
