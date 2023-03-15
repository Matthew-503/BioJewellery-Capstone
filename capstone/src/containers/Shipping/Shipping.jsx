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

import React, { useState } from 'react';
import productpic from '../../assets/gallery01.png'
import { SubHeading } from '../../components';
import { FaShoppingCart } from 'react-icons/fa';

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

    const [isDisabled, setIsDisabled] = useState(true);

    const toggleDisabled = () => {
        setIsDisabled(!isDisabled);
    }

    const [formData, setFormData] = useState({
        firstname: 'YA',
        lastname: 'BOI',
        phone: '123 456 7890',
        street: 'yaboi Ave SW',
        city: 'Calgary',
        postal: 'A3B 0DE',
        province: 'AB',
        country: 'Canada',

        product: 'Golden Leaf Earring',
        qty: 100,
        totalprice: 100,
        warranty: 'Available 1 year from purchase',
    })

    const { firstname, lastname, phone, street, city, postal, province, country, product, qty, totalprice, warranty } = formData

    const changeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className='order app__section-padding'>
            <SubHeading title={'Order Details'} />
            <div className='order__pt1'>
                <div className='order__category'>
                    <p className='order__detail-category'>
                        {Category1}
                    </p>
                </div>

                <div className='order__detail-long'>
                    <div className='order__detail-short'>
                        <div>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={firstname}
                                disabled={isDisabled}
                                onChange={changeHandler}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={lastname}
                                disabled={isDisabled}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone}
                                disabled={isDisabled}
                                onChange={changeHandler}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                id="street"
                                name="street"
                                value={street}
                                disabled={isDisabled}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>

                    <div className='order__detail-short'>
                        <div>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={city}
                                disabled={isDisabled}
                                onChange={changeHandler}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                id="postal"
                                name="postal"
                                value={postal}
                                disabled={isDisabled}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>

                    <div className='order__detail-short'>
                        <div>
                            <input
                                type="text"
                                id="province"
                                name="province"
                                value={province}
                                disabled={isDisabled}
                                onChange={changeHandler}
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={country}
                                disabled={isDisabled}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                </div>


                <div className='order__button'>
                    <button
                        className='order__button-action'
                        onClick={toggleDisabled}>
                        {isDisabled ? 'Edit' : 'Confirm'}
                    </button>
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
                            Product Name: {product}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            Quantity: {qty}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            Total Price: ${totalprice}
                        </p>
                    </div>

                    <div>
                        <p className='order__detail'>
                            Warranty: {warranty}
                        </p>
                    </div>
                </div>
            </div>

            <div className='order__button'>
                <button
                    className='order__button-submit'
                    type='submit'
                >
                    Proceed to Checkout <FaShoppingCart className='order__button-icon' />
                </button>
            </div>
        </div>
    );
};

export default Shipping
