import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import "./Career.css";
import image from "../../assets/Clip_applying_to_university_online_by_Icons8.gif";
import { Helmet } from "react-helmet-async";
const Career = () => {
  return (
    <>
      <Helmet>
        <title>PayPenny Career</title>
        <link rel="canonical" href="https://www.paypenny.org/" />
        <meta
          name="Send Money to India for free - Paypenny"
          content="Get the highest exchange rates with the coverage of 100+ private & national banks like icici, sbi, pnb and more. Send money to India 24/7 at zero charges."
        />
      </Helmet>
      <NavBarComp />
      <Container
        className="d-flex py-5 flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="section__heading text-center">
          Some people dream of success while other people get up every morning
          and make it happen.
        </h1>
        <Row className="g-3">
          <Col sm={12} lg={6} className="d-flex justify-content-center">
            <h5 className="section__sub__heading my-auto">
              Mail your CV & cover letter with the subject line- “Paypenny Dream
              Job”. Our Human Resources team will give you a response within 2
              weeks if you meet the expectations!
            </h5>
          </Col>
          <Col sm={12} lg={6}>
            <img src={image} alt="" className="w-100" />
          </Col>
        </Row>
        <br />
        <br />
        <h1 className="section__heading">Find Your Dream Job With Us </h1>
        <Card className="ms-3 shadow" style={{ width: "fit-content" }}>
          <Card.Body>
            <h1 className="section__heading">
              <a
                href="mailto:hello@paypenny.io"
                style={{ textDecoration: "none" }}
              >
                Mail Us
              </a>
            </h1>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Career;
