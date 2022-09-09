import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/onlink_to_wjt5cq.svg";
import GetItOnAppStore from "../GetItOnAppStore";
import GetItOnPlayStore from "../GetItOnPlayStore";
import "./Qr.css";
const Qr = () => {
  return (
    <Container>
      <div className="qr__container">
        <Row className="g-3">
          <Col sm={12} lg={6} className="d-flex flex-column ">
            <h1 className="section__heading text-light text-center">
              Scan to Download App
            </h1>
            <br />
            <img
              src={image}
              alt="PayPenny Qr"
              className="footer__qr"
              style={{ filter: "invert(1)", mixBlendMode: "lighten" }}
            />
          </Col>
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h1 className="section__heading text-light text-center">
              Click to download app
            </h1>
            <br />
            <GetItOnPlayStore />
            <br />

            <GetItOnAppStore />
            {/* <AllSocialLinks /> */}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Qr;
