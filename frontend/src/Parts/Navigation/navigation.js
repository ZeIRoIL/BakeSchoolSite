// Assets
import logo from '../../Assets/img/logo.png';

// Pages
import Home from '../../Pages/mainPage';
import LoginPage from '../../Pages/login';
import AboutUs from '../../Pages/aboutus';
import Backkurs from '../../Pages/backkurs';
import Categorie from '../../Pages/categories';
import RewardPage from '../../Pages/rewardPage';
import { Zucker } from '../../Pages/Description/Zucker';
import { Schokolade } from '../../Pages/Description/Schokolade';
import Recipes from '../../Pages/Recipes/recipes';
import RecipesApi from '../../Pages/Recipes/recipesApi';
import Recipe from '../../Pages/Recipes/recipe';
import RecipeApi from '../../Pages/Recipes/recipeApi';
import QuestionPage from '../../Pages/questionPage';

// Style
import '../../Assets/Style/Navigation/navigation.scss'; // Tell webpack that Button.js uses these styles
 
//picture
import BakeSchool from '../../Assets/img/BakeSchoolLogo.png';

// Components
import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import MainRecipesPage from '../../Pages/Recipes/mainRecipesPage';




export class Navigation extends Component {
    render() {
        return (
            <div>
                <div class="nav-custom">
                    <header class="header-main">
                        <ul class="nav col-12 col-md-auto">
                            <li><a href="/" class=" nav-link px-2 nav-main"><img src={BakeSchool} className="logoNav" alt="Bakeschool logo"/></a></li>
                            <li><a href="/category" class=" nav-link px-2 link-dark nav-back">Backwelt</a></li>
                            <li><a href="/recipes" class=" nav-link px-2 link-dark nav-recipe">Rezepte</a></li>
                            <li><a href="/backkurs" class=" nav-link px-2 link-dark nav-backkurs">Backkurse</a></li>
                            <li><a href="/aboutus" class=" nav-link px-2 link-dark">Über uns</a></li>
                        </ul>
                    </header>
                </div>
                {/* <Navbar collapseOnSelect className="navcustom" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">BackSchool</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/recipes">Rezept</Nav.Link>
                                <Nav.Link href="/category">Kategorie</Nav.Link>
                                <Nav.Link href="/category">Backkurse</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/reward">Belohnungen</Nav.Link>
                                <Nav.Link href="/reward">Über uns</Nav.Link>
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
                </Navbar> */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="category" element={<Categorie />} />
                    <Route path="recipes" element={<RecipesApi />} >
                        <Route
                            index
                            element={
                                <MainRecipesPage />
                            }
                        />
                        <Route path=":recipeId" element={<RecipeApi />} />
                    </Route>

                    <Route path="category/Zucker" element={<Zucker />} />
                    <Route path="category/Schokolade" element={<Schokolade />} />
                    <Route path="backkurs" element={<Backkurs />} />
                    <Route path="questions" element={<QuestionPage />} />
                </Routes>
            </div>
        )
    }
}