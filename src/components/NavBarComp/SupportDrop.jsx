import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const SupportDrop = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <NavDropdown
      className="me-4"
      title="Support"
      id="collasible-nav-dropdown"
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <NavDropdown.Item href="/help">Help</NavDropdown.Item>
      <NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
      <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
    </NavDropdown>
  );
};

export default SupportDrop;
