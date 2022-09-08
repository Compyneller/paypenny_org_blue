import React from "react";
import { NavDropdown } from "react-bootstrap";

const SupportDrop = () => {
  return (
    <NavDropdown title="Support" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/help">Help</NavDropdown.Item>
      <NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
    </NavDropdown>
  );
};

export default SupportDrop;
