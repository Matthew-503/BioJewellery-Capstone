// Author: Ling Shan Matthew Ng, Sri
// Version 0.2
// Date: 18/1/2023

// Description: Navbar for reuse
// Precondition: Navbar that's able to minimize logo when scrolling, search content inputted, navigate to respective pages
// Postcondition: Basic structure is made

// Input: Currently no input
// Output: Currently no output

// Notes: The animation of the logo will be done soon
// Notes: Styling of the search area will be modified soon


import React from 'react';
import { Button } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom"
import { MdSearch, MdAccountCircle, MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={images.logo} alt="app__logo" />
            </div>

            <ul className="navbar-links">
                <li className="navbar-p">
                    <NavLink to="/">Home</NavLink>
                </li>

                <li className="navbar-p">
                    <NavLink to="/categories">Shop</NavLink>
                </li>

                <li className="navbar-p">
                    <NavLink to="/about">About Us</NavLink>
                </li>
            </ul>

            <div className="navbar-input">
                <input type='email' placeholder='' />

                <a href="#login" className="navbar-icons">
                    <MdSearch />
                </a>
            </div>
            <div className="navbar-login">
                <a href="#login" className="navbar-icons">
                    <FaShoppingCart />
                    <Button>0 items</Button>
                </a>

                <Link to="/login" className="navbar-icons">
                    <MdAccountCircle />
                </Link>
            </div>

            <div className="navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="navbar-smallscreen_overlay app__flex-center index__slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="navbar-overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="navbar-smallscreen_links">
                            <li>
                                <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
                            </li>

                            <li>
                                <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
                            </li>

                            <li>
                                <a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a>
                            </li>

                            <li>
                                <a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a>
                            </li>

                            <li>
                                <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;