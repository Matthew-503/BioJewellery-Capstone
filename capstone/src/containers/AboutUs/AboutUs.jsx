// Author: Ling Shan Matthew Ng
// Version 0.2
// Date: 7/2/2023

// Description: This is the login page
// Precondition: A login page that contains the login form and proper styling
// Postcondition: Login page reformatting

// Input: Currently no input available
// Output: Currently no specific output

import React, { useState } from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Link } from "react-router-dom"

import './AboutUs.css';
import { AboutCompany, AboutHeader, AboutProduction, AboutSustain } from '../AboutUs';



const AboutUs = () => {

    return (
        <div className='about'>
            <AboutHeader />
            <AboutCompany />
            <AboutSustain />
        </div>
    );
};

export default AboutUs;

