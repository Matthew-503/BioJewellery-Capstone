import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { BiSearch } from 'react-icons/bi';
import { FaShoppingCart } from 'react-icons/fa';
import { MdSearch, MdAccountCircle, MdOutlineRestaurantMenu } from 'react-icons/md';

// import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            {/* <div className="app__navbar-logo">
                <img src={images.gericht} alt="app__logo" />
            </div> */}

            <ul className="app__navbar-links">
                <li className="p__opensans-nav">
                    <a href="#home">Home</a>
                </li>

                <li className="p__opensans-nav">
                    <a href="#shop">Shop</a>
                </li>

                <li className="p__opensans-nav">
                    <a href="#about">About Us</a>
                </li>
            </ul>

            <div className="app__navbar-input">
                <input type='email' placeholder='' />

                <a href="#login" className="app__navbar-icons">
                    <MdSearch />
                </a>
            </div>

            <div className="app__navbar-login">
                <a href="#login" className="app__navbar-icons">
                    <FaShoppingCart />
                </a>

                <a href="#login" className="app__navbar-icons">
                    <MdAccountCircle />
                </a>
            </div>

            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li>
                                <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
                            </li>

                            <li>
                                <a href="#shop" onClick={() => setToggleMenu(false)}>Shop</a>
                            </li>

                            <li>
                                <a href="#about" onClick={() => setToggleMenu(false)}>About Us</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;