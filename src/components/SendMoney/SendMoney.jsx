import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SendMoney.css";
import GetItOnPlayStore from "../GetItOnPlayStore";
import GetItOnAppStore from "../GetItOnAppStore";
import money from "../../assets/kisspng-emoji-flying-cash-money-bag-sticker-banknote-5ac6c21922df96.5501337315229752571429.png";
import india from "../../assets/—Pngtree—republic day india flag vector_5720399.png";
const SendMoney = () => {
  return (
    <div className="send__container">
      <Container>
        <h1> Send Money to India at Zero Charges.</h1>
        <br />

        <Row className="g-3 d-flex justify-content-center">
          <Col sm={12} lg={3}>
            <GetItOnPlayStore />
          </Col>
          <Col sm={12} lg={3}>
            <GetItOnAppStore />
          </Col>
        </Row>
      </Container>
      <img src={money} width={80} alt="" className="money" />
      <img src={india} alt="" width={80} height={100} className="flag" />
    </div>
  );
};

export default SendMoney;
