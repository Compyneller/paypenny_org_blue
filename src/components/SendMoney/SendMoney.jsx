import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./SendMoney.css";
import GetItOnPlayStore from "../GetItOnPlayStore";
import GetItOnAppStore from "../GetItOnAppStore";
import money from "../../assets/oie_hsU2o9IW7mhL.png";
import india from "../../assets/indian-flag-png-6828.png";
import arrow from "../../assets/oie_mkXv3OFLB171.png";
const SendMoney = () => {
  return (
    <div className="send__container">
      <Container>
        <Row className="g-3">
          <Col xs={12} sm={12} lg={12}>
            <h1> Send Money to India at Zero Charges.</h1>
            <br />

            <div
              className=" d-flex align-items-center justify-content-center"
              style={{ gap: "1rem" }}
            >
              <GetItOnPlayStore />

              <GetItOnAppStore />
            </div>
          </Col>
          {/* <Col sm={12} lg={3} className="d-flex align-items-center">
            <Row>
              <Col xs={4} sm={4} lg={4}>
                <img src={money} alt="" className="w-100" />
              </Col>
              <Col xs={4} sm={4} lg={4}>
                {" "}
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNjYuNjI1LDg2bC00MC4zMTI1LC0zMi4yNXYyMS42NTg1NmwtMTIwLjkzNzUsNS4yMTY0NHYxMC43NWwxMjAuOTM3NSw1LjIxNjQ0djIxLjY1ODU2eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                  className="w-100"
                  alt=""
                />
              </Col>
              <Col xs={4} sm={4} lg={4}>
                {" "}
                <img src={india} alt="" className="w-100" />
              </Col>
            </Row>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default SendMoney;
