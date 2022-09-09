import React from "react";
import { Card, Container } from "react-bootstrap";
import "./AboutQuote.css";
const AboutQuote = () => {
  return (
    <Container>
      <Card className="ratefee__card">
        <Card.Body>
          <img
            src="https://img.icons8.com/ios-filled/344/quote-left.png"
            height={100}
            alt=""
          />
          <h5
            className="section__sub__heading text-dark my-3"
            style={{ fontSize: "25px" }}
          >
            Our Mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </h5>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutQuote;
