// Author: Sri
// Version 0.1
// Date: 09/03/2023

//Description: This is Order Summary Page before Payment. 
//Displays default shippingAddress (with change button), orderTotal and checkout button
//POSTCONDITION: navigate to Stripe payment gateway

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Order.css';

const Order = () => {
    
    const orderTotal = useSelector((state) => state.cart.orderTotal);
    const shippingAddress = useSelector((state) => state.auth.shippingAddress);

    const [address, setAddress] = useState({
        street: '',
        city: '',
        province: '',
        country:'',
        postalCode: '',
      });
        
    const [showModal, setShowModal] = useState(false);
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

        handleCloseModal();
    };
    return (
        <>
            //Display default shipping address from DB
            <div>
              <h3>Shipping Address</h3>
                <div>
                  <p>{shippingAddress.street}</p>
                    <p>{shippingAddress.city}</p>
                    <p>{shippingAddress.province}</p>
                    <p>{shippingAddress.country}</p>
                    <p>{shippingAddress.postalCode}</p>
                </div>
              <button onClick={handleShowModal}>Change</button>
            </div>

            //Pop up window for new shipping address on clicking change button
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                        <Modal.Title>Enter a new shipping address</Modal.Title>
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
                   
                    <Button type="submit">Use this address</Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>                    
                </Modal.Footer>
            </Modal> 


        </>
    );
};

export default Order