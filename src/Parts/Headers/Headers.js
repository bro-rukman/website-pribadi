import React, { Component } from 'react';
import Logo from 'Assets/image/Logo.png'
import {Navbar,NavDropdown,NavbarBrand,Container,Nav} from "react-bootstrap"
class Headers extends Component {
    render() {
        return (
            <div>
                <Navbar bg="white" expand="lg" className="font">
              <Container>
                  <NavbarBrand href="/">
                      <img src={Logo} alt="shortcut-logo" style={{width:40,height:40}}/>
                  </NavbarBrand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="mr-auto">
                          <Nav.Link href="/" className="font-primary font-weight-bold">Hello</Nav.Link>
                          <Nav.Link href="/profile" className="font-primary font-weight-bold">Profile</Nav.Link>
                          <Nav.Link href="/resume" className="font-primary font-weight-bold">Resume</Nav.Link>
                          <NavDropdown title="Portfolio" id="basic-nav-dropdown" className="font-primary font-weight-bold">
                              <NavDropdown.Item href="/portfolioreact" className="font-primary font-weight-bold">User Interface</NavDropdown.Item>
                              <NavDropdown.Divider/>
                              <NavDropdown.Item href="/portfoliocss" className="font-primary font-weight-bold">Javascript</NavDropdown.Item>
                          </NavDropdown>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
              </Navbar>
            </div>
        );
    }
}

export default Headers;