import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../assets/Untitled-1.jpg";
const Section1 = () => {
  return (
    <Container style={{ padding: "3rem 1rem" }}>
      <Row className="g-3">
        <Col
          sm={12}
          lg={6}
          className="d-flex flex-column justify-content-center "
        >
          <h1
            data-aos="fade-right"
            style={{
              fontSize: ` ${window.innerWidth < 950 ? "35px" : "60px"}`,
              fontWeight: "bold",
            }}
          >
            Hundreds of thousands of NRIs trust Paypenny
          </h1>
          <h5
            className="section__sub__heading my-3"
            style={{
              fontSize: ` ${window.innerWidth < 950 ? "18px" : "25px"}`,
              fontWeight: "bold",
            }}
          >
            Get the highest exchange rates guaranteed. Download Paypenny now and
            experience the difference.
          </h5>
          {/* <Row className="g-3">
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
          </Row> */}
        </Col>
        <Col sm={12} lg={6}>
          <img
            src={image}
            alt="PayPenny image"
            className="section1__image"
            data-aos="fade-left"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
