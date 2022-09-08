import React from "react";
import { NavDropdown } from "react-bootstrap";

const BusinessDropdown = () => {
  return (
    <NavDropdown title="Business" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/how-to-use">How to use</NavDropdown.Item>
      <NavDropdown.Item href="/rate-fee">Rate & Fees</NavDropdown.Item>
      <NavDropdown.Item href="/security">Security</NavDropdown.Item>
      <NavDropdown.Item href="/reviews">Reviews</NavDropdown.Item>
      <NavDropdown.Item href="/refer">Refer Friend</NavDropdown.Item>
    </NavDropdown>
  );
};

export default BusinessDropdown;
