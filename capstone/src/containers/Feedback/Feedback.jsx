// Author: Ling Shan Matthew Ng
// Version 0.2
// Date: 7/2/2023

// Description: This is the login page
// Precondition: A login page that contains the login form and proper styling
// Postcondition: Login page reformatting

// Input: Currently no input available
// Output: Currently no specific output

import React, { useState } from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Link } from "react-router-dom"

import './Feedback.css';


const Feedback = () => {
    const [title, setTitle] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title);
        console.log(feedback);
    };

    return (
        <div className='feedback'>
            <div className="feedback__wrapper">
                <img src={images.feedback} alt="G_overlay" className='feedback__left' />
                <h1 className='HeaderText left '></h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='right feedback__form'>
                    <SubHeading title={"Feedback"} />

                    <p className='feedback__p'>
                        Your feedback always matters!
                    </p>

                    <div className='feedback__input'>
                        <input
                            className='feedback__input-search'
                            type="text"
                            id="title"
                            placeholder="Title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />

                        <textarea
                            className='feedback__input-search-feedback'
                            type="text"
                            id="feedback"
                            placeholder="Feedback"
                            value={feedback}
                            onChange={(event) => setFeedback(event.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="feedback__button">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Feedback;

