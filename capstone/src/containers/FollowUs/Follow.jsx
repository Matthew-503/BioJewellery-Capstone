import React from 'react';
import { SubHeading } from '../../components';
import { data, images } from '../../constants';


import { FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

import './Follow.css';

const Follow = () => (
    <div className='app__bg section__padding' id='login'>

        <div className='app__header-section'>
            <h1 className="app__follow-headtext">
                Follow Us
            </h1>

            <p className='app__follow-headtext-p'>
                Get in touch and follow us for the latest news
            </p>
        </div>

        <div className='app__benefits-links'>
            <div className='app__benefits-links_work'>
                <div className='app__follow-links_icons'>
                    <FiInstagram />
                </div>
            </div>

            <div className='app__benefits-links_work'>
                <div className='app__follow-links_icons'>
                    <FaTiktok />
                </div>
            </div>

        </div>
    </div>
)

export default Follow;