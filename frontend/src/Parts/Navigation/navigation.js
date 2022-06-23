// doku
// https://reactrouter.com/docs/en/v6/components/nav-link


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
import { Routes, Route, NavLink } from "react-router-dom";
import MainRecipesPage from '../../Pages/Recipes/mainRecipesPage';
import { Allgemein } from '../../Pages/Description/Allgemein';
import { Getreide } from '../../Pages/Description/Getreide';




export class Navigation extends Component {
    render() {
        let activeClassName = "underline";
        let activeCategory = "active-category";
        let activeRecipes = "active-recipes";
        let activeBackkurs = "active-backkurs";
        return (
            <>
                <div class="nav-custom mt-3">
                    <nav class="header-main">
                        <ul class="nav col-12 col-md-auto">
                            <li>
                                <NavLink
                                    to=""
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : undefined
                                    }
                                    >
                                    <img src={BakeSchool} className="logoNav" alt="Bakeschool logo" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/category"
                                    className={({ isActive }) =>
                                        isActive ? activeCategory : undefined
                                    }
                                    >
                                    Backwelt
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/recipes"
                                    className={({ isActive }) =>
                                        isActive ? activeRecipes : undefined
                                    }
                                    >
                                    Rezept
                                </NavLink>
                            </li>
                            <li><NavLink
                                to="/backkurs"
                                className={({ isActive }) =>
                                    isActive ? activeBackkurs : undefined
                                }
                                >
                                Backkurs
                            </NavLink></li>
                            <li><NavLink
                                to="/aboutus"
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                                >
                                Über uns
                            </NavLink></li>
                        </ul>
                    </nav>
                </div>


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
                    <Route path="category/Allgemein" element={<Allgemein />} />
                    <Route path="category/Getreide" element={<Getreide />} />
                    <Route path="backkurs" element={<Backkurs />} />
                    <Route path="questions" element={<QuestionPage />} />
                </Routes>
            </>
        )
    }
}