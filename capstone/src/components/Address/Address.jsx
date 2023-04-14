// Author: Sri Guru
// Version: 1.0
// Date: 14/03/2023

// Description: This component displays the shipping address with edit option

import './Address.css';
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getAddress, updateAddress } from '../../features/addressFeatures/addressSlice';

const Address = () => { 

    const { user } = useSelector((state) => state.auth)
    const { shippingAddress, isSuccess, isLoading, isError, message } = useSelector((state) => state.address)
    
    const [formData, setFormData] = useState({        
        street: shippingAddress.address.street,
        city: shippingAddress.address.city,
        postalCode: shippingAddress.address.postalCode,
        province: shippingAddress.address.province,
        country: shippingAddress.address.country       
    })
    const { street, city, postalCode, province, country } = formData

    const [isDisabled, setIsDisabled] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);

    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        if(isError){
            console.log(message)
        }

        if(!user)
        {
            navigate('/login')
        }
        
        dispatch(getAddress(user.user._id));
                
    }, [user, shippingAddress, navigate, isError, message, dispatch]);

    
    const changeHandler = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const updateAddressHandler = () => {
        
        setIsUpdating(true);
      
        dispatch(updateAddress(user.user._id, formData)
        ).then(() => {
          setIsUpdating(false);
          setIsDisabled(true);
        });
    }
      
    return (
        <>
          <div className='order__category'>
            <p className='order__detail-category'>
                Shipping address
            </p>
           </div>

            <div className='order__detail-long'>
                
                <div>
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
                            id="postalCode"
                            name="postalCode"
                            value={postalCode}
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
                    onClick={isDisabled ? () => {setIsDisabled(false)} : updateAddressHandler}
                    disabled={isUpdating}
                    >
                    {isDisabled ? 'Update Address' : 'Confirm'}
                </button>
            </div>
        </>
    )
};

export default Address;