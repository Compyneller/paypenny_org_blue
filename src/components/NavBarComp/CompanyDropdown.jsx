import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const CompanyDropdown = () => {
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
      title="Company"
      id="collasible-nav-dropdown"
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <NavDropdown.Item href="/about">About</NavDropdown.Item>
      <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
      <NavDropdown.Item href="/career">Career</NavDropdown.Item>
    </NavDropdown>
  );
};

export default CompanyDropdown;
