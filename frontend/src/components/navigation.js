import logo from '../logo.svg'


import '../style/navigation.css'; // Tell webpack that Button.js uses these styles

import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className="nav-color" expand="lg" variant="dark">
                <Container>
                     <img src={logo} style={{ width: '4rem'}}/> 
                    <Navbar.Brand href="#home">Backen und Lernen für Kinder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Rezept</Nav.Link>
                            <Nav.Link href="#pricing">Kategorie</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Meine Erfolge</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Mein Konto
                            </Nav.Link>
                            <Nav.Link>
                               <img src={logo} style={{ width: '2rem'}}/> 
                            </Nav.Link>
                            <Nav.Link>
                                300 Punkte
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}