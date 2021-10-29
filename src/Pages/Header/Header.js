import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../Hooks/UseAuth';

const Header = () => {
    const {user, logout} = UseAuth()
    return (
        <div>
           
<>
  <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#tours">Tours</Nav.Link>
      <Nav.Link as={HashLink} to="/addtours">Add Tours</Nav.Link>
      {user?.email ?
          <Button onClick={logout} variant="light">Logout</Button> :
          <Nav.Link as={HashLink} to="/login">Login</Nav.Link>}

      
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
  </Navbar>
  
  
</>
        </div>
    );
};

export default Header;