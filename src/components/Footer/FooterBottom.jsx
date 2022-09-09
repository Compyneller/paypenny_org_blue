import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-01.png";
import medium from "../../assets/icons8-medium-50.png";
import pinterest from "../../assets/icons8-pinterest-50.png";
import instagram from "../../assets/icons8-instagram-64.png";
import reddit from "../../assets/icons8-reddit-50.png";
import tumblr from "../../assets/icons8-tumblr-50.png";
import facebook from "../../assets/icons8-facebook-100.png";
import twitter from "../../assets/icons8-twitter-50.png";
const FooterBottom = () => {
  return (
    <Row className="g-3">
      <Col sm={12} lg={4} className="d-flex flex-column">
        <img src={logo} className="w-50" alt="" />
        <Link
          onClick={() => window.scroll(0, 0)}
          className="text-light my-2 "
          style={{ textDecoration: "none" }}
          to="/tc"
        >
          Terms & Conditions
        </Link>
        <Link
          onClick={() => window.scroll(0, 0)}
          className="text-light my-2 "
          style={{ textDecoration: "none" }}
          to="/pp"
        >
          Privacy Policy
        </Link>
        <Link
          onClick={() => window.scroll(0, 0)}
          className="text-light my-2 "
          style={{ textDecoration: "none" }}
          to="/contact-us"
        >
          Contact Us
        </Link>

        <p className="text-light ">
          © paypenny all Rights Reserved. The Brand PayPenny belongs to Trackon
          Canada Private Limited registered in Alberta,Canada.
        </p>
        <Row className="g-3">
          <Col xs={6} sm={6} lg={6}>
            {" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
              className="footer__downloadButton"
              target="_blank"
              rel="noreferrer"
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
          <Col xs={6} sm={6} lg={6}>
            <a
              href="https://apps.apple.com/in/app/paypenny/id1545140323"
              target="_blank"
              rel="noreferrer"
              className="footer__downloadButton"
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
      <Col sm={12} lg={8}>
        <Row className="g-3">
          <Col xs={4} sm={4} md={6} lg={3} className="d-flex flex-column">
            <h5 className="section__sub__heading text-light">COMPANY</h5>
            <br />
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/about"
            >
              About
            </Link>
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/blog"
            >
              Blog
            </Link>
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/career"
            >
              Career
            </Link>
          </Col>
          <Col xs={4} sm={4} md={6} lg={3} className="d-flex flex-column">
            <h5 className="section__sub__heading text-light">BUSINESS</h5>
            <br />
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/how-to-use"
            >
              How to use
            </Link>
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/rate-fees"
            >
              Rate & Fees
            </Link>
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/blog"
            >
              Security
            </Link>
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/career"
            >
              Reviews
            </Link>
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/refer"
            >
              Refer Friend
            </Link>
          </Col>
          <Col xs={4} sm={4} md={6} lg={3} className="d-flex flex-column">
            <h5 className="section__sub__heading text-light">SUPPORT</h5>
            <br />
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/help"
            >
              Help
            </Link>
            <Link
              onClick={() => window.scroll(0, 0)}
              className="text-light my-2 "
              style={{ textDecoration: "none" }}
              to="/contact-us"
            >
              Contact Us
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} className="d-flex flex-column">
            <h5 className="section__sub__heading text-light">CONNECT</h5>
            <Row className="g-3">
              <Col xs={2} sm={3} md={3} lg={3}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/www.paypenny.org/"
                >
                  <img src={facebook} alt="" className="w-100" />
                </a>
              </Col>
              <Col xs={2} sm={3} md={3} lg={3}>
                <a target="_blank" href="https://in.pinterest.com/Paypennyca/">
                  <img src={pinterest} alt="" className="w-100" />
                </a>
              </Col>
              <Col xs={2} sm={3} md={3} lg={3}>
                <a
                  target="_blank"
                  href="https://www.reddit.com/user/paypenny-io"
                >
                  <img src={reddit} alt="" className="w-100" />
                </a>
              </Col>
              <Col xs={2} sm={3} md={3} lg={3}>
                <a target="_blank" href="https://www.tumblr.com/blog/paypenny">
                  <img src={tumblr} alt="" className="w-100" />
                </a>
              </Col>
              <Col xs={2} sm={3} md={3} lg={3}>
                <a
                  target="_blank"
                  href="https://instagram.com/paypennyca?igshid=YmMyMTA2M2Y="
                >
                  <img src={instagram} alt="" className="w-100" />
                </a>
              </Col>
              <Col xs={2} sm={3} md={3} lg={3}>
                <a
                  target="_blank"
                  href="https://twitter.com/payPENNY2?s=20&t=4Im5hEodXE-dLog1P9eO-g"
                >
                  <img src={twitter} alt="" className="w-100" />
                </a>
              </Col>
              <Col xs={2} sm={3} md={3} lg={3}>
                <a target="_blank" href="https://medium.com/@admin_17494">
                  <img src={medium} alt="" className="w-100" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FooterBottom;
