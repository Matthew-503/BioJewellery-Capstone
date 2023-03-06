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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
    };

    return (
        <div className='feedback'>
            <div className="feedback__wrapper">
                <img src={images.feedback} alt="G_overlay" className='left' />
                <h1 className='HeaderText left '>Turn your dreams into reality</h1>
                {/* <p className='HeaderText '>Start for free and get great offers!</p> */}
            </div>
            <form onSubmit={handleSubmit}>
                <div className='right login__form'>
                    <SubHeading title={"Login"} className='login__subheading' />

                    <p>Welcome back! Please enter your details</p>

                    <p className='login__error-message'>
                        Sorry. Email or password incorrect. Please try again or create a new account.
                    </p>

                    <input
                        className='login__input'
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <input
                        className='login__input'
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <div className='login__lower-functions login__forget-link'>
                        <div className="login__link">
                            <Link to="/">Forgot password?</Link>
                        </div>
                        <br />
                        <button type="submit" className="login__button">Login</button>
                        <br />
                        <button type="submit" className="login__button">Register</button>
                        <br />
                        <div className="login__link">
                            <Link to="/">Continue as guest</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Feedback;

