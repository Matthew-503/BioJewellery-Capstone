// // Author: Ling Shan Matthew Ng
// // Version 0.1
// // Date: 18/1/2023

// // Description: Navbar for reuse
// // Precondition: Navbar that's able to minimize logo when scrolling, search content inputted, navigate to respective pages
// // Postcondition: Basic structure is made

// // Input: Currently no input
// // Output: Currently no output

// // Notes: The animation of the logo will be done soon
// // Notes: Styling of the search area will be modified soon


// import React from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { FaShoppingCart } from 'react-icons/fa';
// import { MdSearch, MdAccountCircle, MdOutlineRestaurantMenu } from 'react-icons/md';

// import images from '../../constants/images';
// import './Navbar.css';

// const Navbar = () => {
//     const [toggleMenu, setToggleMenu] = React.useState(false);
//     return (
//         <nav className="app__navbar">
//             <div className="app__navbar-logo">
//                 <img src={images.logo} alt="app__logo" />
//             </div>

//             <ul className="app__navbar-links">
//                 <li className="p__opensans-nav">
//                     <a href="#home">Home</a>
//                 </li>

//                 <li className="p__opensans-nav">
//                     <a href="#shop">Shop</a>
//                 </li>

//                 <li className="p__opensans-nav">
//                     <a href="#about">About Us</a>
//                 </li>
//             </ul>

//             <div className="app__navbar-input">
//                 <input type='email' placeholder='' />

//                 <a href="#login" className="app__navbar-icons">
//                     <MdSearch />
//                 </a>
//             </div>

//             <div className="app__navbar-login">
//                 <a href="#login" className="app__navbar-icons">
//                     <FaShoppingCart />
//                 </a>

//                 <a href="#login" className="app__navbar-icons">
//                     <MdAccountCircle />
//                 </a>
//             </div>

//             {/* <div className="app__navbar-smallscreen">
//                 <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
//                 {toggleMenu && (
//                     <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
//                         <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
//                         <ul className="app__navbar-smallscreen_links">
//                             <li>
//                                 <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
//                             </li>

//                             <li>
//                                 <a href="#shop" onClick={() => setToggleMenu(false)}>Shop</a>
//                             </li>

//                             <li>
//                                 <a href="#about" onClick={() => setToggleMenu(false)}>About Us</a>
//                             </li>
//                         </ul>
//                     </div>
//                 )}
//             </div> */}
//         </nav>
//     );
// };

// export default Navbar;

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { MdSearch, MdAccountCircle, MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="app__logo" />
            </div>

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