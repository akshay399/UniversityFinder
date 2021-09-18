import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Header.css";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar variant="dark" expand="xl" className="colorNav">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "#E8D454" }}>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" style={{ color: "#E8D454" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" style={{ color: "#E8D454" }}>
                About Us
              </Nav.Link>

              <Nav.Link href="login" style={{ color: "#E8D454" }}>
                Sign in/up
              </Nav.Link>

              <Nav.Link href="register" style={{ color: "#E8D454" }}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
