import React from 'react'
import '../Assets/scss/style.scss'
import PortfolioReact from '../Pages/Portfolio'
import {Navbar,NavDropdown,NavbarBrand,Container,Nav} from "react-bootstrap"
import {BrowserRouter as Router,Route } from 'react-router-dom'
import PortfolioCss from '../Pages/PortfolioCss'
import LandingPage from 'Pages/LandingPage'
import Resume from '../Pages/Resume'
import Profile from '../Pages/Profile'
import Logo from 'Assets/image/Logo.png'


export default function NavbarLg() {
    return (
        <Router>
        <>
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
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/profile" exact component={Profile}/>
                    <Route path="/resume" exact component={Resume}/>
                    <Route path="/portfolioreact" component={PortfolioReact}/>
                    <Route path="/portfoliocss" component={PortfolioCss}/>
        </>
        </Router>
    )
}
