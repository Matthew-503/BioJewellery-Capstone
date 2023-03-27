// Author: Sri Guru
// Version: 1.0
// Date: 14/03/2023

// Description: This component displays the saved addresses and option to add new shipping address

import './Address.css';
import Spinner from '../Spinner/Spinner'
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAddress, getAddresses, createAddress } from '../../features/addressFeatures/addressSlice'
import { user } from '../../features/accountFeatures/accountSlice'

const Address = () => { 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state) => state.auth)
    const { shippingAddress, isError, isSuccess, isLoading, message }= useSelector((state) => state.address);
    const [showModal, setShowModal] = useState(false);

    const [address, setAddress] = useState({
        street: '',
        city: '',
        province: '',
        country:'',
        postalCode: '',
    });

    // useEffect(() => {
    //     if(isError){
    //       console.log(message)
    //     }
    //     if(!user){
    //       navigate('/login')
    //     } 

    //     dispatch(getAddresses())

    // }, [user, navigate, isError, message, dispatch])
    
    if(isLoading){
        return <Spinner />
    }

    // //the selected addressId will be passed to get address obj and saved in shippingAddress state
    // function onAddressSelect(event, addressId){
    //     event.preventDefault();
    //     dispatch(getAddress({addressId}))
    // }
    
    //TODO: Changes: Removing addresses field from user, no saved addresses list for user
    //Just display shipping address from user account and change button for changing it.

    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = () => setShowModal(true);
    
    const handleInputChange = (event) => {
        setAddress({
          ...address,
          [event.target.name]: event.target.value,
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        //Todo: save the shipping address in the database
        //func call to create address object and save in DB
        //after func call req fulfilled, it added to addresses array
        //new address displayed in address radio list, when user selects it, automatically set as shipping address
        dispatch(createAddress({address})).then(() => {
            handleCloseModal();
        })
        .catch(() => {
            alert('Error in creating and saving address!')
        })
    };

    return (
        <>
           {shippingAddress && <div>
                <p>Shipping Address</p>
                <div>
                    <p>Street</p>
                    {shippingAddress.street}
                </div>
                <div>
                    <p>City</p>
                    {shippingAddress.city}
                </div>
                <div>
                    <p>Province</p>
                    {shippingAddress.province}
                </div>
                <div>
                    <p>Country</p>
                    {shippingAddress.country}
                </div>
                <div>
                    <p>Postal Code</p>
                    {shippingAddress.postalCode}
                </div>
           </div> }    
                 
           {/* {addresses && (<div>
                <p>Your addresses</p>
                <div>{addresses.map(address => (
                    <div key={address._id}>
                        <label>
                            <input
                                type="radio"
                                name="address"
                                value={address._id}
                                onChange={() => onAddressSelect(address._id)}
                            />
                            {address.street}, {address.city}, {address.province}, {address.country}, {address.postalCode}
                        </label>
                    </div>))
                }</div>
            </div>)} */}

            <div>
            <button onClick={handleShowModal}>Add Address</button>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                        <Modal.Title>Enter a new address</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group controlId="formStreet">
                        <Form.Label>Street</Form.Label>
                        <Form.Control
                            type="text"
                            name="street"
                            value={address.street}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            value={address.city}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formProvince">
                        <Form.Label>Province</Form.Label>
                        <Form.Control
                            type="text"
                            name="province"
                            value={address.province}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPostalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            type="text"
                            name="postalCode"
                            value={address.postalCode}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                   
                    <Button type="submit">Save address</Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>                    
                </Modal.Footer>
            </Modal> 
            </div>
        </>
    )
};

export default Address;