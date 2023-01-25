// Author: Ling Shan Matthew Ng
// Version 0.1
// Date: 17/1/2023

// Description: This is the shop category with 4 cards
// Precondition: A category page with required categories with title and button
// Postcondition: Shop category page all required functions

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the title text and button align centered 
// Notes: Will implement related images


import React from 'react';

import { Article } from '../../components';
// import { SubHeading } from '../../components';

import { gallery02, gallery03, gallery04, gallery01 } from './import.js';


import './ShopCategory.css';

const ShopCategory = () => {
    return (
        <div className="category category__section-padding" id="blog">

            {/* <SubHeading title="Chef's word" /> */}

            <div className="category__container">
                <div className="category__container-card">
                    <Article

                        imgUrl={gallery02}

                        text="Popular"
                    />

                    <Article

                        imgUrl={gallery03}

                        text="Trending"
                    />

                    <Article

                        imgUrl={gallery04}

                        text="Most Saved"
                    />

                    <Article

                        imgUrl={gallery01}

                        text="On Sale"
                    />
                </div>
            </div>
        </div>
    )
}

export default ShopCategory