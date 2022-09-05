import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/Logo-01.png";
import interact from "../../assets/Interac_Brand.png";
import earn from "../../assets/Earn-logo.gif";
import { Link } from "react-router-dom";

const NavBarComp = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{
            background: "transparent",
            position: "absolute",
            zIndex: "100",
            width: "100%",
          }}
        >
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="" style={{ height: "10vh" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                  <Nav.Link
                    target="_blank"
                    href="https://www.interac.ca/en/content/life/three-reasons-to-set-up-interac-e-transfer-autodeposit-today/"
                  >
                    <img
                      src={interact}
                      height={60}
                      width={60}
                      style={{ borderRadius: "50%" }}
                      alt=""
                    />
                  </Nav.Link>
                  <Link to="/earn">
                    <img
                      src={earn}
                      height={60}
                      width={60}
                      style={{ borderRadius: "50%" }}
                      alt=""
                    />{" "}
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBarComp;