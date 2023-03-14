/**
* Author: Buola Achor, Ling Shan Matthew Ng, Nicholas Proc, Naomy Tung, Srineethi Gurumurthi Girahhalskhmi 
* Version 0.1
* Date: 19/1/2023
*
* Description: Thank you for ordering page. 
* Precondition: User purchased a product and confirmed the order
* Postcondition: Thank you page is displayed with correct information about product and user
*
 */

import React from 'react'
import productpic from '../../assets/gallery01.png'
import { SubHeading } from '../../components';

import './Shipping.css';

const Category1 = 'Shipping Details';
const Category2 = 'Payment Method';
const Category3 = 'Product Details';

const FirstName = 'First Name';
const LastName = 'Last Name';
const Phone = '123 456 789';
const Street = '17 Ave SW';
const City = 'Calgary';
const Postal = 'A3B 0DE';
const Province = 'AB';
const Country = 'Canada';

const Card = '1234 5678 9101';
const CardName = 'Name';
const CVV = '001';
const Expiry = '01/01/2024';

const Product = 'Golden Leaf Earing';
const Qty = '100';
const TotalPrice = 100;
const Warranty = 'Available 1 year from purchase';

const Shipping = () => {
    return (
        <div className='order app__section-padding'>
            <SubHeading title={'Thank you for ordering'} />
            <div className='order__pt1'>
                <div className='order__category'>
                    <p className='order__detail-category'>
                        {Category1}
                    </p>
                </div>

                <div className='order__detail-long'>
                    <div className='order__detail-short'>
                        <div>
                            <p className='order__detail'>
                                {FirstName}
                            </p>
                        </div>

                        <div>
                            <p className='order__detail'>
                                {LastName}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p className='order__detail'>
                                {Phone}
                            </p>
                        </div>

                        <div>
                            <p className='order__detail'>
                                {Street}
                            </p>
                        </div>
                    </div>

                    <div className='order__detail-long'>
                        <div className='order__detail-short'>
                            <div>
                                <p className='order__detail'>
                                    {City}
                                </p>
                            </div>

                            <div>
                                <p className='order__detail'>
                                    {Postal}
                                </p>
                            </div>
                        </div>

                        <div className='order__detail-short'>
                            <div>
                                <p className='order__detail'>
                                    {Province}
                                </p>
                            </div>

                            <div>
                                <p className='order__detail'>
                                    {Country}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='order__pt2'>
                <div className='order__category'>
                    <p className='order__detail-category'>
                        {Category2}
                    </p>
                </div>

                <div className='order__detail-long'>
                    <div>
                        <p className='order__detail'>
                            Card Number: {Card}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            Card Name: {CardName}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            CVV: {CVV}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            Expiry Date: {Expiry}
                        </p>
                    </div>
                </div>
            </div>

            <div className='order__pt3'>
                <div className='order__category'>
                    <p className='order__detail-category'>
                        {Category3}
                    </p>
                </div>

                <div className='order__detail-long'>
                    <div>
                        <p className='order__detail'>
                            Product Name: {Product}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            Quantity: {Qty}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            Total Price: ${TotalPrice}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            Warranty: {Warranty}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping
