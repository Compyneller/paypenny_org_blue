import React from "react";
import { NavDropdown } from "react-bootstrap";

const CompanyDropdown = () => {
  return (
    <NavDropdown title="Company" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/about">About</NavDropdown.Item>
      <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
      <NavDropdown.Item href="/career">Career</NavDropdown.Item>
    </NavDropdown>
  );
};

export default CompanyDropdown;
