import React from "react";
import { Card, Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import AccordionComp from "./AccordionComp";
import "./faq.css";
const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>PayPenny FAQ</title>
        <link rel="canonical" href="https://www.paypenny.org/" />
        <meta
          name="Send Money to India for free - Paypenny"
          content="Get the highest exchange rates with the coverage of 100+ private & national banks like icici, sbi, pnb and more. Send money to India 24/7 at zero charges."
        />
      </Helmet>
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
