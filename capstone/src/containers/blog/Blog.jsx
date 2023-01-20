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

import { blog02, blog03, blog04, blog05 } from './imports.js';


import './Blog.css';

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">

            {/* <SubHeading title="Chef's word" /> */}

            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupB">
                    <Article

                        imgUrl={blog02}

                        text="Popular"
                    />

                    <Article

                        imgUrl={blog03}

                        text="Trending"
                    />

                    <Article

                        imgUrl={blog04}

                        text="Most Saved"
                    />

                    <Article

                        imgUrl={blog05}

                        text="On Sale"
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog