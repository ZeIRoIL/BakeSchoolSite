// Assets
import logo from '../../Assets/img/logo.svg';


// Pages
import Home from '../../Pages/mainPage';
import LoginPage from '../../Pages/login';
import Categorie from '../../Pages/categories';
import RewardPage from '../../Pages/rewardPage';

// Style
import '../../Assets/Style/navigation/navigation.css'; // Tell webpack that Button.js uses these styles

// Components
import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";

export class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect className="nav-color" expand="lg" variant="dark">
                    <Container>
                        <img src={logo} style={{ width: '4rem' }} />
                        <Navbar.Brand href="/">Backen und Lernen für Kinder</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Rezept</Nav.Link>
                                <Nav.Link href="/categorie">Kategorie</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/reward">Belohnungen</Nav.Link>
                                <Nav.Link eventKey={2} href="/login">
                                    Mein Konto
                                </Nav.Link>
                                <Nav.Link>
                                    <img src={logo} style={{ width: '2rem' }} />
                                </Nav.Link>
                                <Nav.Link>
                                    300 Punkte
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/categorie" element={<Categorie />} />
                    <Route path="/reward" element={<RewardPage />} />
                </Routes>
                </div>
                )
    }
}