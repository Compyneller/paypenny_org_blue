import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import image from "../../assets/onlink_to_wjt5cq.svg";
import AllSocialLinks from "./AllSocialLinks";
import FooterCard from "./FooterCard";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer__container">
      <div class="custom-shape-divider-top-1662111856">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer__content">
        <Container>
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
              className="d-flex flex-column justify-content-center"
            >
              <h1 className="section__heading text-light text-center">
                Click to download app
              </h1>
              <br />
              <Button
                variant="dark"
                className="download__buttons footer__downloadButton"
              >
                Download PayPenny App
              </Button>
              <Button
                variant="dark"
                className=" download__buttons footer__downloadButton"
              >
                Download PayPenny App
              </Button>
              <AllSocialLinks />
            </Col>
          </Row>
          <br />
          <br />
          <FooterCard />
          <br />
          <h5 className="section__sub__heading text-light text-center">
            Registered & regulated by FINTRAC. We are approved by the Financial
            Transactions and Reports Analysis Center of Canada.
          </h5>

          <h1 className="section__heading text-center text-light">
            Trusted by over 1,25,000+ users
          </h1>
          <br />
          <br />
          <Row className="g-3 footer__links">
            <Col sm={6} lg={3}>
              <Link to="/tc">Terms & Conditions</Link>
            </Col>
            <Col
              sm={6}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to="/tc">Privacy Policy</Link>
            </Col>
            <Col
              sm={6}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to="/tc">Contact Us</Link>
            </Col>
            <Col
              sm={6}
              lg={3}
              className="d-flex justify-content-end align-items-center"
            >
              <Link to="/tc">Blog</Link>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="g-3">
            <Col sm={12} lg={8}>
              <p className="text-light ">
                © paypenny all Rights Reserved. The Brand PayPenny belongs to
                Trackon Canada Private Limited registered in Alberta,Canada.
              </p>
            </Col>
            <Col sm={12} lg={4}>
              <AllSocialLinks />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
