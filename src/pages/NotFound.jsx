import React from "react";
import { Container } from "react-bootstrap";
import image from "../assets/undraw_page_not_found_re_e9o6.svg";
const NotFound = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <img src={image} alt="PayPenny 404 Not Found" className="w-100" />
    </Container>
  );
};

export default NotFound;
