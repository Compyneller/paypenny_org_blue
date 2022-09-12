import React from "react";
import { Card, Container } from "react-bootstrap";
import "./AboutQuote.css";
const AboutQuote = () => {
  return (
    <Card className="ratefee__card shadow">
      <Card.Body className="d-flex flex-column">
        <img
          src="https://img.icons8.com/ios-filled/344/quote-left.png"
          height={80}
          width={80}
          alt=""
        />
        <h5
          className=" text-dark my-3"
          style={{
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Great thing in business never done by one person. They're done by a
          team of people.
        </h5>
        <h5
          className="section__sub__heading ms-auto my-3"
          style={{ fontWeight: "bold" }}
        >
          - Steve Jobs
        </h5>
      </Card.Body>
    </Card>
  );
};

export default AboutQuote;
