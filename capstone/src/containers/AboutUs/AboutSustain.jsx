// Author: Ling Shan Matthew Ng
// Version 0.1  
// Date: 18/1/2023

// Description: This is the benefits container. 
// Precondition: A benefits container that contains 3 benefits 
// Postcondition: Benefits container containing all required benefits

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the subheader text have better padding / margins


import React from 'react';
import { TbRefresh } from 'react-icons/tb';
import { MdOutlineEco, MdNaturePeople } from 'react-icons/md';

import { SubHeading } from '../../components';

const AboutSustain = () => (
    <div className='app__benefits app__section-padding about__sus' id='benefits'>

        <h1 className="benefits__h1">
            Sustainability
        </h1>

        <div className='app__card-links'>
            <div className='app__card-links-align'>
                <div className='app__card-links_icons'>
                    <MdOutlineEco />
                </div>

                <h1 className='about__title'>
                    Eco-Friendly
                </h1>

                <p className='benefits__p'>
                    orem ipsum dolor sit ametorem ipsum dolor
                </p>
            </div>

            <div className='app__card-links-align'>
                <div className='app__card-links_icons'>
                    <MdNaturePeople />
                </div>

                <h1 className='about__title'>
                    Nature
                </h1>

                <p className='benefits__p'>
                    orem ipsum dolor sit ametorem ipsum dolor
                </p>
            </div>

            <div className='app__card-links-align'>
                <div className='app__card-links_icons'>
                    <TbRefresh />
                </div>

                <h1 className='about__title'>
                    Sustainable
                </h1>

                <p className='benefits__p'>
                    orem ipsum dolor sit ametorem ipsum dolor
                </p>
            </div>
        </div>
    </div>
);

export default AboutSustain;
