import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">DriveShare</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{justifyContent: "end"}} id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/login" className="nav-link">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/signup" className="nav-link">Sign Up</Nav.Link>
            {/* Add more Nav.Link components for additional links */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
