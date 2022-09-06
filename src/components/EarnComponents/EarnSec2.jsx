import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const EarnSec2 = () => {
  return (
    <div
      className="section__container"
      style={{ background: "#0054FF", overflow: "hidden" }}
    >
      <Container>
        <h1 className="section__heading mb-4 text-light" data-aos="fade-up">
          Benefits Of Investing With Earn Wallet
        </h1>
        <Row className="g-3">
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/fluency/344/return.png"
                  height={80}
                  alt="paypenny.org card logo"
                />
                <h5 className="section__sub__heading my-3">Highest Returns</h5>
                <p>
                  We give you the highest returns on your investment worldwide.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/fluency/344/multicast.png"
                  height={80}
                  alt="paypenny.org card logo"
                />
                <h5 className="section__sub__heading my-3">Multi-Holdings</h5>
                <p>
                  Just click on “add” in Earn Wallet & create holdings as many
                  as you want in one go easily!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/fluency/344/split.png"
                  height={80}
                  alt="paypenny.org card logo"
                />
                <h5 className="section__sub__heading my-3">
                  Split large amount
                </h5>
                <p>
                  You can split your lump-sum amount and invest them for
                  different time periods according to your financial goals!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/fluency/344/percentage.png"
                  height={80}
                  alt="paypenny.org card logo"
                />
                <h5 className="section__sub__heading my-3">
                  Best Interest Rates
                </h5>
                <p>
                  We offer the top-interest rate in the market which means the
                  interest rates are like never before!
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/344/external-easy-basic-ui-elements-2.2-sbts2018-outline-color-sbts2018.png"
                  height={80}
                  alt="paypenny.org card logo"
                />
                <h5 className="section__sub__heading my-3">
                  Simple & Convenient
                </h5>
                <p>
                  Get started in minutes with our simple & easy sign-up process
                  to begin your journey with Paypenny.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="w-100 section2__card"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-success-training-and-coaching-wanicon-flat-wanicon.png"
                  height={80}
                  alt="paypenny.org card logo"
                />
                <h5 className="section__sub__heading my-3">
                  100% Satisfaction
                </h5>
                <p>
                  Invest, sit back & relax! You will get your full amount with
                  guarantee.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EarnSec2;
