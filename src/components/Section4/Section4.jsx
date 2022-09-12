import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Section4.css";
import image from "../../assets/PayPenny_Web IMG 02_08 sep'2022.jpg";
const Section4 = () => {
  return (
    <Container className="py-5">
      <Row className="g-3" style={{ overflowX: "hidden" }}>
        <Col sm={12} lg={6} className="d-flex align-items-center">
          <img
            src={image}
            alt="PayPenny Why Choose Us"
            className="w-100"
            data-aos="fade-right"
          />
        </Col>
        <Col
          sm={12}
          lg={6}
          className="d-flex justify-content-center flex-column "
        >
          {/* <Col sm={12} lg={6}>
              {" "}
              <Card className=" shadow section2__card" data-aos="fade-left">
                <Card.Body>
                  <img
                    src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/344/external-fast-distribution-xnimrodx-blue-xnimrodx.png"
                    height={100}
                    alt="PayPenny Card Icons"
                  />
                  <h3 className=" my-3">We're Fast</h3>
                  <p>90% of our transactions are authorized in minutes.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} lg={6}>
              <Card
                className=" shadow section2__card"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <Card.Body>
                  <img
                    src="https://img.icons8.com/color/344/application-shield.png"
                    height={100}
                    alt="PayPenny Card Icons"
                  />
                  <h3 className=" my-3">We’re Safe</h3>
                  <p>
                    Our industry-leading technology protects your Money and
                    guarantees it arrives safely every time.
                  </p>
                </Card.Body>
              </Card>
            </Col> */}

          <img
            src="https://img.icons8.com/ios-filled/344/quote-left.png"
            height={80}
            width={80}
            alt=""
          />
          <h5
            className=" text-dark my-3"
            style={{ fontSize: "35px", fontWeight: "bold" }}
          >
            There is a lot of things to weigh up when a transfer happens, and
            money is a big factor.
          </h5>
          <h5 className="section__sub__heading my-3">
            Make payments to your home without any hassle. Get the best rates
            with the best security of your money. We promise to deliver the
            transfer faster than your flight from Abroad to India.
          </h5>

          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
