import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import star from "../../assets/kindpng_1382559.png";
import image from "../../assets/quote-icon-sm.svg";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import "./Reviews.css";
import finger from "../../assets/backhand-index-pointing-down-joypixels.gif";

const Reviews = () => {
  return (
    <>
      <NavBarComp />
      <div className="reviews__container">
        <Container>
          <Row className="g-3">
            <div className="col-11">
              <h1>Listen, What Our Customers Say</h1>
            </div>
            <div className="col-1">
              <img src={finger} className="w-100" alt="" />
            </div>
          </Row>
          <Row className="g-3">
            <Col sm={12} md={6} lg={4}>
              <Card className="shadow section2__card">
                <Card.Body className="d-flex flex-column  align-items-center">
                  <img src={image} alt="" className="mb-3" />
                  <img src={star} className="review__star" alt="" />
                  <p>
                    I have completed 6 months using this app. It is an easy,
                    fast and trustworthy app. It is available for all the time
                    during day and night, it means you can transfer money at
                    your ease and whenever you want. Highly recommended.
                  </p>
                  <h5>- Gagandeep Bhalla</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card className="shadow section2__card">
                <Card.Body className="d-flex flex-column  align-items-center">
                  <img src={image} alt="" className="mb-3" />

                  <img src={star} className="review__star" alt="" />
                  <p>
                    The best app to send money abroad. After using this app, I
                    have never used any other app. It’s simple to use and they
                    don’t even charge any fee. I compared it with other apps;
                    they charge a fee even on min amount.
                  </p>
                  <h5>- Jasleen Singh</h5>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card className="shadow section2__card">
                <Card.Body className="d-flex flex-column  align-items-center">
                  <img src={image} alt="" className="mb-3" />

                  <img src={star} className="review__star" alt="" />
                  <p>
                    I have been using this since its launch. I am surprised by
                    the app's update. The developers are giving us really great
                    fixes on the bugs and errors. The interface has become
                    really smooth after the update, the notifications are coming
                    on time, no need to wait for a longer time for the process,
                    it happens in a minute. Wow! Paypenny is killing. I am sure
                    it will become no. 1 really soon because of the faster
                    transactions, zero fees, no hidden charges, and 24/7
                    availability. All my friends in the hostel use paypenny.
                  </p>
                  <h5>- Navdeep</h5>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Reviews;
