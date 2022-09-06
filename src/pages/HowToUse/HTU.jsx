import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import first from "../../assets/Paypenny_Instagram reels(img 01)_29 Aug'22.jpg";
import second from "../../assets/Paypenny_Instagram reels(img 02)_29 Aug'22.jpg";
import third from "../../assets/Paypenny_Instagram reels(img 03)_29 Aug'22.jpg";
import fourth from "../../assets/Paypenny_Instagram reels(img 04)_29 Aug'22.jpg";
import fifth from "../../assets/Paypenny_Instagram reels(img 05)_29 Aug'22.jpg";
import sixth from "../../assets/Paypenny_Instagram reels(img 06)_29 Aug'22.jpg";
import seventh from "../../assets/Paypenny_Instagram reels(img 08)_29 Aug'22.jpg";
import "./HTU.css";
const HTU = () => {
  return (
    <>
      <NavBarComp />
      <Container
        className="d-flex align-items-center flex-column py-5"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="section__heading mb-5">How To Use</h1>

        <Row className="g-3">
          <Col xs={4} sm={4} lg={6} className="step__image">
            <h1 className="section__heading">Step 1</h1>
          </Col>
          <Col
            xs={8}
            sm={8}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={first} className="htu__images" alt="" />
          </Col>
          <Col
            xs={8}
            sm={8}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={second} className="htu__images" alt="" />
          </Col>
          <Col xs={4} sm={4} lg={6} className="step__image">
            <h1 className="section__heading">Step 2</h1>
          </Col>
          <Col xs={4} sm={4} lg={6} className="step__image">
            <h1 className="section__heading">Step 3</h1>
          </Col>
          <Col
            xs={8}
            sm={8}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={third} className="htu__images" alt="" />
          </Col>
          <Col
            xs={8}
            sm={8}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={fourth} className="htu__images" alt="" />
          </Col>
          <Col xs={4} sm={4} lg={6} className="step__image">
            <h1 className="section__heading">Step 4</h1>
          </Col>
          <Col xs={4} sm={4} lg={6} className="step__image">
            <h1 className="section__heading">Step 5</h1>
          </Col>
          <Col
            xs={8}
            sm={8}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={fifth} className="htu__images" alt="" />
          </Col>
          <Col
            xs={8}
            sm={8}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={sixth} className="htu__images" alt="" />
          </Col>
          <Col xs={4} sm={4} lg={6} className="step__image">
            <h1 className="section__heading">Step 6</h1>
          </Col>
          <Col xs={4} sm={4} lg={6} className="step__image">
            <h1 className="section__heading">Step 7</h1>
          </Col>
          <Col
            xs={8}
            sm={8}
            lg={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={seventh} className="htu__images" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HTU;
