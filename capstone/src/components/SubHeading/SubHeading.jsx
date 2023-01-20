
import React from 'react';
// import { images } from '../../constants';

const SubHeading = ({ title }) => (
    <div style={{ marginBottom: '1rem' }}>
        <p className='p__cormorant'>{title}</p>
        {/* <img src={images.spoon} alt='spoon' className='spoon__img' /> */}
    </div>
);

export default SubHeading;

// Author: Ling Shan Matthew Ng
// Version 0.1
// Date: 18/1/2023

// Description: SubHeading component for reuse
// Precondition: Able to use property title and stylings
// Postcondition: All functions fulfilled

// Input: title
// Output: title

// Notes: 


import React from 'react';

const SubHeading = ({ title }) => (
    <div style={{ marginBottom: '1rem' }}>
        <h1 className='headtext__cormorant'>{title}</h1>
    </div>
);

export default SubHeading;

