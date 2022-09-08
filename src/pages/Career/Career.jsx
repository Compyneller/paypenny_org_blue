import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import "./Career.css";
import image from "../../assets/Clip_applying_to_university_online_by_Icons8.gif";
const Career = () => {
  return (
    <>
      <NavBarComp />
      <div className="py-5 career__container">
        <Row className="g-3 my-5">
          <Col sm={12} lg={6} className="d-flex align-items-center ">
            <div className="career__text shadow-lg w-100 text-light">
              <Container className="d-flex flex-column">
                <h5
                  className="section__sub__heading my-2 "
                  style={{ opacity: ".7", fontWeight: "bold" }}
                >
                  Career
                </h5>
                <h1 className="section__heading">
                  Some people dream of success while other people get up every
                  morning and make it happen.
                </h1>

                <p>
                  Mail your CV & cover letter with the subject line- “Paypenny
                  Dream Job”. Our Human Resources team will give you a response
                  within 2 weeks if you meet the expectations!
                </p>
                <h1 className="section__heading">
                  Find Your Dream Job With Us
                </h1>
                <div className="d-flex w-100 justify-content-end">
                  <Row className="w-75 mt-3 d-flex align-items-center">
                    <div className="col-2">
                      <h5
                        className="section__sub__heading my-2 "
                        style={{ opacity: ".7", fontWeight: "bold" }}
                      >
                        Mail
                      </h5>
                    </div>
                    <div className="col-10">
                      <a
                        href="mailto:hello@paypenny.io"
                        className="section__sub__heading text-light"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          textDecoration: "none",
                          fontWeight: "bold",
                          opacity: ".7",
                        }}
                      >
                        hello@paypenny.io
                      </a>
                    </div>
                  </Row>
                </div>
              </Container>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <img src={image} alt="paypenny.org career" className="w-100" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Career;
