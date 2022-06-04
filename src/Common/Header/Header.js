import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
  const { user, logout } = useAuth();
  // console.log(user)


  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header p-1.5"
        // variant="dark"
        sticky="top"
      >
        <Navbar.Brand as={Link} to="/">
          admin create and dashboard
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="home"  >
              Home
            </Nav.Link>          
            <Nav.Link as={Link} to="/register" className="home"  >
              Register
            </Nav.Link>          

            {user?.email && (
              <>
                <Nav.Link as={Link} to="/dashboard" className="home">
                  Dashboard
                </Nav.Link>
              </>
            )}

            {
              user?.email ? <button className='bg-warning rounded' onClick={logout}>logout</button> : <Nav.Link as={Link} to="/login" className="home">
                Login
              </Nav.Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;