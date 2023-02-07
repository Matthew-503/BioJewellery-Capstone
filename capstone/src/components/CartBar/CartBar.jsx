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

import './CartBar.css';

const productImage = images.gallery01;

const CartBar = () => {
    return (
        <div className="">
            <div>
                <table className='cartbar__table'>
                    <tr>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cartbar__button">
                                <Link to="/cart">
                                    <button className="cartbar__button">
                                        <FaShoppingCart />  Proceed to Checkout
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
};


export default CartBar;