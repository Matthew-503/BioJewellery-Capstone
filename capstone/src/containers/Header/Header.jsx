// Author: Ling Shan Matthew Ng
// Version 0.2
// Date: 18/1/2023

// Description: This is the header container
// Precondition: A header container that has main header, descriptions, and a button
// Postcondition: Header container with all required components

// Input: Currently no input available
// Output: Currently no specific output

// Notes: The background image has been cropped to fit the styling. If any changes are needed, feel free to do the same thing


import React from 'react';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
    <div className='app__header app__wrapper section__padding overlay' id='home'>
        <div className="app__aboutus-overlay flex__center">
            <img src={images.headerImage} alt="G_overlay" />
        </div>

        <div className='app__wrapper_info'>
            <h1 className='app__header-h1'>Discover the beauty of the BioJewerly Collection</h1>
            <p className='p__opensans' style={{ margin: '2rem 0' }}>
                Explore different categories. Find the best deals.
            </p>
            <button type='button' className='custom__button'>
                Shop Now 
            </button>
        </div>
    </div>
);

export default Header;
