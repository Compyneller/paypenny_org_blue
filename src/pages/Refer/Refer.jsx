import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import NavBarComp from "../../components/NavBarComp/NavBarComp";
import image from "../../assets/undraw_gifts_0ceh.svg";
const Refer = () => {
  return (
    <>
      <NavBarComp />
      <Container
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ minHeight: "100vh ", padding: "3rem 0" }}
      >
        <h1 className="section__heading">Refer Paypenny to earn rewards</h1>
        <h5 className="section__sub__heading my-4">
          Download the app, make the transfer to your home & share your referral
          codes with your friends & family. Ask them to enter the code in the
          Paypenny app. After every successful invite, you will get rewards in
          your wallet.
        </h5>
        <br />
        <br />
        <h1 className="section__heading">
          FOLLOW 3 SIMPLE STPES TO EARN REWARDS
        </h1>
        <br />
        <br />
        <Row className="g-3">
          <Col sm={12} md={6} lg={4}>
            <Card className="section2__card shadow">
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-customers-moving-and-storage-flaticons-lineal-color-flat-icons.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-4">
                  REFER YOUR FRIENDS
                </h5>
                <p>
                  Share your referral code with your friends & family. Ask them
                  to use your code.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="section2__card shadow">
              <Card.Body>
                <img
                  src="https://img.icons8.com/3d-fluency/344/download.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-4">
                  SUCCESSFUL DOWNLOAD
                </h5>
                <p>Your friend uses your referral code to sign up.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className="section2__card shadow">
              <Card.Body>
                <img
                  src="https://img.icons8.com/external-nawicon-flat-nawicon/344/external-reward-business-nawicon-flat-nawicon.png"
                  height={80}
                  alt=""
                />
                <h5 className="section__sub__heading my-4">YOU EARN REWARD</h5>
                <p>After every successful download, you will get rewards.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <h1 className="section__heading">
          SHARE YOUR REFERRAL CODE AS MANY TIMES AS YOU WANT.
        </h1>
        <Row className="g-3">
          <Col sm={12} lg={6} className="d-flex align-items-center">
            <h5
              className="section__sub__heading my-4"
              style={{ lineHeight: "30px" }}
            >
              Refer Paypenny to your friends today and get rewards in your
              wallet. The more your friends use your referral code, the more you
              can earn. There is no limit to sharing your code, so
              <mark style={{ background: "#FFFF00" }}>
                SHARE YOUR CODE NOW!
              </mark>
            </h5>
          </Col>
          <Col sm={12} lg={6}>
            <img src={image} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Refer;
