import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const BusinessDropdown = () => {
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
      title="Business"
      id="collasible-nav-dropdown"
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <NavDropdown.Item href="/how-to-use">How to use</NavDropdown.Item>
      <NavDropdown.Item href="/rate-fees">Rate & Fees</NavDropdown.Item>
      <NavDropdown.Item href="/security">Security</NavDropdown.Item>
      <NavDropdown.Item href="/reviews">Reviews</NavDropdown.Item>
      <NavDropdown.Item href="/refer">Refer Friend</NavDropdown.Item>
    </NavDropdown>
  );
};

export default BusinessDropdown;
