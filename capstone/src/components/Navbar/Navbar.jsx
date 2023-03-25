// Author: Ling Shan Matthew Ng, Sri, Naomy Tung
// Version 1.0
// Date: 17/03/2023

// Description: Navbar for reuse
// Precondition: Navbar that's able to minimize logo when scrolling, search content inputted, navigate to respective pages
// Postcondition: Basic structure is made

// Input: Currently no input
// Output: Currently no output

// Notes: The animation of the logo will be done soon
// Notes: Styling of the search area will be modified soon


import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink, Link, useNavigate } from "react-router-dom"
import { MdSearch, MdAccountCircle, MdOutlineClose } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { updateItemCount } from '../../features/cartFeatures/cartSlice';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import { DropdownMenu } from '../../components';
import { useAuth } from '../../features/ProtectedRouteUser';
import { Navigate, Outlet } from "react-router-dom";
import { logout, reset } from '../../features/accountFeatures/accountSlice'

const Navbar = () => {
    const navigate = useNavigate()
    const isAuth = useAuth();
    const { cartProducts, itemCount } = useSelector((state) => state.cart);


    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(updateItemCount());

    }, [dispatch, itemCount]);

    const [toggleMenu, setToggleMenu] = React.useState(false);

    const [openDropdownMenu, setopenDropdownMenu] = useState(false);

    const onPerfilClick = () => {
        if (isAuth) {
            setopenDropdownMenu(!openDropdownMenu);
        }
        else {
            navigate('/login');
        }
    }

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
                    <NavLink to="/aboutus">About Us</NavLink>
                </li>
            </ul>

            <div className="navbar-input">
                <input className='navbar-input-search' type='text' placeholder='Search BioJewellery' />

                <a href="#login">
                    <MdSearch className="navbar-icons" />
                </a>
            </div>

            <div className="navbar-input">
                <a href="/cart">
                    <FaShoppingCart className="navbar-icons" />
                </a>
                <p className='navbar-cart-count'>{itemCount}</p>
            </div>

            <div className="navbar-input">
                <a href="#login" onClick={onPerfilClick}>
                    <MdAccountCircle className="navbar-icons" />
                </a>
            </div>
            {/* <div className="navbar-login">
                <a href="/cart" className="navbar-icons">
                    <FaShoppingCart />
                    <p className='navbar-cart-count'>{itemCount}</p>
                </a>
                <a className="navbar-icons" onClick={onPerfilClick}>
                    <MdAccountCircle className="navbar-icons" />
                </a>
            </div> */}
            {
                openDropdownMenu && <DropdownMenu />
            }


            {/* for mobile view display */}
            <div className="navbar-smallscreen">
                <GiHamburgerMenu color='var(--color-golden)' fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="navbar-smallscreen_overlay app__flex-center index__slide-bottom">
                        <MdOutlineClose fontSize={18} className="navbar-overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="navbar-smallscreen_links">
                            <li>
                                <a href="/" onClick={() => setToggleMenu(false)}>Home</a>
                            </li>

                            <li>
                                <a href="/categories" onClick={() => setToggleMenu(false)}>Shop</a>
                            </li>

                            <li>
                                <a href="/aboutus" onClick={() => setToggleMenu(false)}>About Us</a>
                            </li>

                            <li>
                                <a href="/login" onClick={() => setToggleMenu(false)}>Login</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;