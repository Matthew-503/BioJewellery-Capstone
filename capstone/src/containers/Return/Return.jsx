// Author: Nicholas Proc
// Version: 0.1 
// Date: 20/1/2023

// Description: This container is for display the information of a product
// Precondition: There must be a product that can be displayed
// Postcondition: Displays the Product details with the relavent information

// Input 
// N/A
// Output
// Product Detail Container

import React, { useState } from 'react';

import { images } from '../../constants';
import { SubHeading, ProductDetailBar } from '../../components';
import { Rating, ReviewBlock } from '../../components';
import SwitchDetail from '../../components/SwitchProductDetail/SwitchProductDetail';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getProductByName, reset } from '../../features/productFeatures/productSlice';
import './Return.css';

const Return = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <div className="app__gallery return app__section-padding">
            <div>
                <SubHeading title='Return Product' />
            </div>

            <div className='return__product'>
                <div className='return__product-select'>
                    <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>

                <div className='retrun__product-img'>
                    <h1>
                        Product Image
                    </h1>
                </div>

                <div className='return__product-detail'>
                    <h1>
                        Golden Leaf Necklace
                    </h1>

                    <h1>
                        #N90Y3
                    </h1>

                    <h1>
                        $299.99
                    </h1>
                </div>

                <div className='return__product-action'>
                    <div className='return__product-option'>
                        <select id="dropdown" value={selectedOption} onChange={handleOptionSelect}>
                            <option value="">Reason</option>
                            <option value="option1">Shipped the Wrong Item</option>
                            <option value="option2">Damaged Upon Arrival</option>
                            <option value="option3">Didn't Match the Description</option>
                            <option value="option4">Others</option>
                        </select>
                    </div>

                    <div className='return__product-text'>
                        <textarea placeholder='We would love to hear from you...'></textarea>
                    </div>

                </div>
            </div>

            <div className='return__product'>
                <div className='return__product-select'>
                    <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>

                <div className='retrun__product-img'>
                    <h1>
                        Product Image
                    </h1>
                </div>

                <div className='return__product-detail'>
                    <h1>
                        Golden Leaf Necklace
                    </h1>

                    <h1>
                        #N90Y3
                    </h1>

                    <h1>
                        $299.99
                    </h1>
                </div>

                <div className='return__product-action'>
                    <div className='return__product-option'>
                        <select id="dropdown" value={selectedOption} onChange={handleOptionSelect}>
                            <option value="">Reason</option>
                            <option value="option1">Shipped the Wrong Item</option>
                            <option value="option2">Damaged Upon Arrival</option>
                            <option value="option3">Didn't Match the Description</option>
                            <option value="option4">Others</option>
                        </select>
                    </div>

                    <div className='return__product-text'>
                        <textarea placeholder='We would love to hear from you...'></textarea>
                    </div>

                </div>
            </div>
        </div >
    )
};


export default Return;