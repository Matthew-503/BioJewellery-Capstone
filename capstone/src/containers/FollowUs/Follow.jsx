import React from 'react';
import { SubHeading, Title } from '../../components';
import { data, images } from '../../constants';


import { FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

import './Follow.css';

const Follow = () => (
    <div className='app__bg app__section-padding' id='follow'>

        <div className='follow__context'>
            <h1 className="follow__h1">
                Follow Us

            </h1>

            <p className='follow__p'>
                Get in touch and follow us for the latest news
            </p>
        </div>

        <div className='app__card-links'>
            <div className='app__card-links-align'>
                <div className='app__card-links-icons'>
                    <FiInstagram />
                </div>
            </div>

            <div className='app__card-links-align'>
                <div className='app__card-links-icons'>
                    <FaTiktok />
                </div>
            </div>

        </div>
    </div>
)

export default Follow;