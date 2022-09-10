import React from "react";
import { Accordion } from "react-bootstrap";
import { FaqData } from "./FaqData";
import "./faq.css";
const AccordionComp = () => {
  return (
    <>
      {FaqData.map((items) => {
        return (
          <Accordion defaultActiveKey="1" className="my-4">
            <Accordion.Item eventKey={items.id}>
              <Accordion.Header>
                <h5 className="section__sub__heading my-1">{items.ques}</h5>
              </Accordion.Header>
              <Accordion.Body>
                <h5 className="section__sub__heading my-1">{items.ans}</h5>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </>
  );
};

export default AccordionComp;
