import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { ROUTE_PATHS } from '../../routes';

function Navigation() {
  const getNavLinkClassName = React.useCallback(
    ({ isActive }: { isActive: boolean }) => `nav-link${isActive ? ' active' : ''}`,
    []
  );

  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          Devcademy Weather App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={ROUTE_PATHS.HOME} className={getNavLinkClassName}>
              Location List
            </NavLink>
            <NavLink to={ROUTE_PATHS.ADD_LOCATION} className={getNavLinkClassName}>
              Add Location
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;