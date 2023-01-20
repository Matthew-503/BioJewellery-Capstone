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
import { BiSupport } from 'react-icons/bi';
import { FiPackage } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';

import { SubHeading } from '../../components';

import './Benefits.css';

const Benefits = () => (
    <div className='app__benefits section__padding' id='login'>

        <h1 className="app__benefits-headtext">
            Benefits for your expendicy
        </h1>


        <SubHeading title="Benefits For Your Expendicy" />


        <div className='app__benefits-links'>
            <div className='app__benefits-links_work'>
                <div className='app__benefits-links_icons'>
                    <MdPayment />
                </div>

                <h1 className='app__benefits-title'>
                    Payment Method
                </h1>

                <p className='app__benefits-paragraph'>
                    We offer multiple payment methods including crypto currency
                </p>
            </div>

            <div className='app__benefits-links_work'>
                <div className='app__benefits-links_icons'>
                    <FiPackage />
                </div>

                <h1 className='app__benefits-title'>
                    Warranty Policy
                </h1>

                <p className='app__benefits-paragraph'>
                    You have a warrenty within 1 year of purhcace
                </p>
            </div>

            <div className='app__benefits-links_work'>
                <div className='app__benefits-links_icons'>
                    <BiSupport />
                </div>

                <h1 className='app__benefits-title'>
                    Customer Support
                </h1>

                <p className='app__benefits-paragraph'>
                    Our customer support is 24/7
                </p>
            </div>
        </div>
    </div>
);

export default Benefits;
