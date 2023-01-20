import React from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';

import './Follow.css';

const Follow = () => (
    <div className='app__bg app__wrapper section__padding' id='awards'>
        <div className='app__wrapper_info'>
            <SubHeading title='Awards & recognition' />

            <h1 className='app__benefits-headtext'>
                Our Laurels
            </h1>
        </div>

        <div className='app__wrapper_img'>
            <img src={images.laurels} alt='laurels_img' />
        </div>
    </div>
)

export default Follow;