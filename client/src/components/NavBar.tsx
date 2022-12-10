import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavBar = ({signedInUser}: any) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>RATIOC</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <Link to={'/login'}>{signedInUser}</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
