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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navLink" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="navLink" href="login">
                Register
              </Nav.Link>

              <Nav.Link className="navLink" href="#">
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
