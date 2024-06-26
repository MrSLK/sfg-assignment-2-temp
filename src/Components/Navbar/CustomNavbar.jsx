import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setUserId } from "../../store/users/reducer/user.reducer"
import { setResetInvitesState } from '../../store/invites/reduders/invites.reducers'; 
import { setResetJobState } from '../../store/jobs/reducer/jobs.reducer';
import { setResetUserState } from '../../store/users/reducer/user.reducer';

const CustomNavbar = () => {

  const { userId, role } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const dashRoute = `/${role}`
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">DriveShare</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ justifyContent: "end" }} id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {userId ? (
              <Nav className="ml-auto">
                <Nav.Link to={dashRoute} className="nav-link" as={NavLink}>Dashboard</Nav.Link>
                <Nav.Link as={NavLink} to="/" onClick={() => {
                  dispatch(setUserId(""));
                  dispatch(setResetInvitesState());
                  dispatch(setResetJobState());
                  dispatch(setResetUserState());
                }} className="nav-link">Log Out</Nav.Link>
              </Nav>
            ) : (
                <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/login" className="nav-link">Login</Nav.Link>
                <Nav.Link as={NavLink} to="/signup" className="nav-link">Sign Up</Nav.Link>
              </Nav>
            )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
