// Author: Sri Guru
// Version: 1.0
// Date: 14/03/2023

// Description: This component displays the shipping address with edit option

import './Address.css';
import React, { useState } from "react";

const FirstName = 'First Name';
const LastName = 'Last Name';
const Phone = '123 456 789';
const Street = '17 Ave SW';
const City = 'Calgary';
const Postal = 'A3B 0DE';
const Province = 'AB';
const Country = 'Canada';

const Address = () => { 
   
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

    const { firstname, lastname, phone, street, city, postal, province, country } = formData

    const changeHandler = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    return (
        <>
          <div className='order__category'>
                    <p className='order__detail-category'>
                        Shipping address
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
                        {isDisabled ? 'Manage Address' : 'Confirm'}
                    </button>
                </div>
        </>
    )
};

export default Address;