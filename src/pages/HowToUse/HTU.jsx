import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import first from "../../assets/Paypenny_Instagram reels(img 01)_29 Aug'22.jpg";
import second from "../../assets/Paypenny_Instagram reels(img 02)_29 Aug'22.jpg";
import third from "../../assets/Paypenny_Instagram reels(img 03)_29 Aug'22.jpg";
import fourth from "../../assets/Paypenny_Instagram reels(img 04)_29 Aug'22.jpg";
import fifth from "../../assets/Paypenny_Instagram reels(img 05)_29 Aug'22.jpg";
import sixth from "../../assets/Paypenny_Instagram reels(img 06)_29 Aug'22.jpg";
import seventh from "../../assets/Paypenny_Instagram reels(img 08)_29 Aug'22.jpg";
import "./HTU.css";
import GetItOnPlayStore from "../../components/GetItOnPlayStore";
import GetItOnAppStore from "../../components/GetItOnAppStore";
const HTU = () => {
  return (
    <div className="htu__container">
      <NavBarComp />
      <Container
        className="d-flex align-items-center flex-column py-5"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="section__heading mb-5">How To Use</h1>

        <Row className="g-3">
          <Col
            xs={6}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <img src={first} alt="" className="w-100" />
            <h1 className="section__heading mt-3">Step 1</h1>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <img src={second} alt="" className="w-100" />
            <h1 className="section__heading mt-3">Step 2</h1>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <img src={third} alt="" className="w-100" />
            <h1 className="section__heading mt-3">Step 3</h1>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <img src={fourth} alt="" className="w-100" />
            <h1 className="section__heading mt-3">Step 4</h1>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <img src={fifth} alt="" className="w-100" />
            <h1 className="section__heading mt-3">Step 5</h1>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <img src={sixth} alt="" className="w-100" />
            <h1 className="section__heading mt-3">Step 6</h1>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={4}
            lg={3}
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <img src={seventh} alt="" className="w-100" />
            <h1 className="section__heading mt-3">Step 7</h1>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Card className="shadow">
          <Card.Body className="p-5">
            <h1 className="section__heading">Download the Paypenny app now</h1>
            <br />
            <br />
            <div
              className=" d-flex align-items-center justify-content-center"
              style={{ gap: "1rem" }}
            >
              <GetItOnPlayStore />

              <GetItOnAppStore />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default HTU;
