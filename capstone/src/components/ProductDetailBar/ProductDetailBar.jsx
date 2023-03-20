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

import React from 'react';

import { images } from '../../constants';
import { Rating, ReviewBlock, SubHeading } from '../../components';
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect } from "react";
import './ProductDetailBar.css';
import { useSelector, useDispatch } from "react-redux";
import {addItemToCart} from '../../features/cartFeatures/cartSlice';
const productImage = images.gallery01;

const ProductDetailBar = () => {
    const { selectedProduct, isError, message } = useSelector((state) => state.products);
  
    const dispatch = useDispatch();
    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        

    }, [isError, message])
    
    let stars = 3;

 
    // //Default Variable for review block
    // var customerDefaultName = "Very Cool Name";
    // var customerDefaultTitle = "Default Title";
    // var customerDefaultDescription = "Default Description";
    return (
        <div className="detail__bar">
            <div>
                <table className='detail__table'>
                    <tbody>
                    <tr>
                        <th>Price ${299}</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="detail__bar-stock">
                                In stock
                                <BsCheckCircleFill className='detail__bar-icons' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {selectedProduct.name}
                        </td>
                    </tr>
                    <tr>
                        <td>Quantity: {selectedProduct.quantity}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="detail__bar-add-button">
                                <Link to="/cart">
                                    <button className="detail__bar-add-button" onClick={() => dispatch(addItemToCart(selectedProduct))} >
                                        <FaShoppingCart />  Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="detail__bar-star">
                                <Rating starRating={stars} className="detail__bar-rating" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="detail__bar-review-button">
                                <Link to="/cart">
                                    <button className="detail__bar-review-button">
                                        Write a review
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ProductDetailBar;