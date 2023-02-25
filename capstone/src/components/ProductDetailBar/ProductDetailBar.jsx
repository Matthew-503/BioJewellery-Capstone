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
import { useSelector } from "react-redux";
const productImage = images.gallery01;

const ProductDetailBar = () => {
    const { selectedProduct, isError, message } = useSelector((state) => state.products);
    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        

    }, [isError, message])
    var productName = null;
    var price = null;
    var description = null;
    var stars = 3;

    // //Default Variable for review block
    // var customerDefaultName = "Very Cool Name";
    // var customerDefaultTitle = "Default Title";
    // var customerDefaultDescription = "Default Description";
    return (
        <div className="">
            <div>
                <table className='detail__table'>
                    <tbody>
                    <tr>
                        <th>Price ${selectedProduct[0].price}</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="detail__stock">
                                In stock
                                <BsCheckCircleFill className='detail__icons' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Quantity: {selectedProduct[0].quantity}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="detail__button">
                                <Link to="/cart">
                                    <button className="detail__button">
                                        <FaShoppingCart />  Add to Cart
                                    </button>
                                </Link>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="detail__star">
                                <Rating starRating={stars} className="detail__rating" />
                                Write a review
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