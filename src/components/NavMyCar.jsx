import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import React from "react";
import "../css/NavMyCar.css";
import AddCar from "./AddCar";

const NavMyCar = ({ AddCarFunc }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar" bg="dark">
        <img src={logo} alt="" />
        <Container>
          <h2>Baniola Renter</h2>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <h6 href="/Homepage">
                <a href="/Homepage">Home</a>
              </h6>
              <h6 href="/contact">
                <a href="contact">Contact Us</a>
              </h6>
              <h6 href="/About">
                <a href="/About">About</a>
              </h6>
            </Nav>
            <Nav>
              <AddCar />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMyCar;
