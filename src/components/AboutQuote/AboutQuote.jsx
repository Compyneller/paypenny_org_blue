import React from "react";
import { Card, Container } from "react-bootstrap";
import "./AboutQuote.css";
const AboutQuote = () => {
  return (
    <Card className="ratefee__card shadow">
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
          There is a lot of things to weigh up when a transfer happens, and
          money is a big factor.
        </h5>
      </Card.Body>
    </Card>
  );
};

export default AboutQuote;
