import React from "react";
import { Card, Container } from "react-bootstrap";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import AccordionComp from "./AccordionComp";
import "./faq.css";
const FAQ = () => {
  return (
    <>
      <NavBarComp />
      <div className="faq__container">
        <Container>
          <h1 className="section__heading text-center my-5">
            Frequently Asked Questions
          </h1>
          <Card className="shadow">
            <Card.Body>
              <AccordionComp />
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
