import React, { useState } from 'react';

import { Navbar, SubHeading } from '../../components';
import { SwitchDetail } from '../../containers';
import { images } from '../../constants';
import { Link } from "react-router-dom"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import './SignUp.css';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [apartment, setApartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [progress, setProgress] = useState(0);
    const [display, setDisplay] = useState(1);
    const [clickCount, setClickCount] = useState(0);
    const [currentInput, setCurrentInput] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log(name, email, password, confirmPassword, apartment, street, city, province, country, postalCode);
    };

    const handleClick = () => {
        setProgress(prevProgress => (prevProgress + 1) % 3);
        setClickCount(clickCount + 1);

        if (display === 3) {
            setDisplay(1);
        } else {
            setDisplay(display + 1);
        }
    };

    const handleKeyDown = (e, event) => {

        if (e.key === ("Enter") && { confirmPassword } !== null) {
            setCurrentInput(currentInput + 1);
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
        }
        else {
            setCurrentInput(currentInput);
        }
        console.log(name, email, password, confirmPassword, apartment, street, city, province, country, postalCode);


        setProgress(prevProgress => (prevProgress + 1) % 3);
        setClickCount(clickCount + 1);

        if (display === 3) {
            setDisplay(1);
        } else {
            setDisplay(display + 1);
        }

        // event.preventDefault();
        // if (password !== confirmPassword) {
        //     alert('Passwords do not match');
        //     return;
        // }
        // console.log(name, email, password);
    };

    return (
    <>
        <Navbar />
        <div className='signup__overall'>
            <div className='signup'>
                <div className="signup__wrapper">
                    <img src={images.login} alt="G_overlay" className='left' />
                    <h1 className='HeaderText left '>Turn your dreams into reality</h1>
                    {/* <p className='HeaderText '>Start for free and get great offers!</p> */}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='right signup__form'>
                        <h1>Sign Up</h1>

                        <p>Join us to be part of the greater world!</p>
                        {currentInput === 1 && (
                            <div className='signup__details'>
                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="name"
                                        placeholder='Name'
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="email"
                                        id="email"
                                        placeholder='Email'
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="password"
                                        id="password"
                                        placeholder='Password'
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="password"
                                        id="confirmPassword"
                                        placeholder='Confirm Password'
                                        value={confirmPassword}
                                        onKeyDown={handleKeyDown}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                    />
                                </div>
                            </div>
                        )} {currentInput === 2 && (
                            <div>
                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="apartment"
                                        placeholder='Address Complement'
                                        value={apartment}
                                        onChange={(event) => setApartment(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="street"
                                        placeholder='Street Address'
                                        value={street}
                                        onChange={(event) => setStreet(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="city"
                                        placeholder='City'
                                        value={city}
                                        onKeyDown={handleKeyDown}
                                        onChange={(event) => setCity(event.target.value)}
                                    />
                                </div>
                            </div>
                        )} {currentInput === 3 && (
                            <div>
                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="province"
                                        placeholder='State/Province'
                                        value={province}
                                        onChange={(event) => setProvince(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="country"
                                        placeholder='Country'
                                        value={country}
                                        onChange={(event) => setCountry(event.target.value)}
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="postalCode"
                                        placeholder='Postal Code'
                                        value={postalCode}
                                        onChange={(event) => setPostalCode(event.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="signup__link">
                            <div className="ProgressButton">
                                <div className="ProgressBar">
                                    {/* <button onClick={handleClick} className='signup__next-button'>
                                    <BsArrowLeft size={30} className='signup__button-icon' />
                                </button> */}

                                    {/* {
                                    currentInput === 3 ? (
                                        <button onClick={handleClick} className='signup__next-button'>
                                            <BsArrowLeft size={30} className='signup__button-icon' />
                                        </button>
                                    ) : null} */}

                                    <div className="ProgressBar">
                                        <span className={progress === 0 ? 'Active' : ''} />
                                        <span className={progress === 1 ? 'Active' : ''} />
                                        <span className={progress === 2 ? 'Active' : ''} />
                                    </div>
                                    {/* {
                                    clickCount < 2 ? (
                                        <button onClick={handleClick} className='signup__next-button'>
                                            <BsArrowRight size={30} className='signup__button-icon' />
                                        </button>
                                    ) : null} */}
                                </div>

                                <div >
                                    {currentInput === 3 ? (
                                        <button type="submit" className="signup__button">Sign Up</button>
                                    ) : null}
                                </div>
                            </div>

                            <Link to="/login"> 
                                <p className='signup__login'>
                                    Already have an account?
                                    Log in
                                </p>
                            </Link>
                        </div>


                    </div>
                </form>
            </div>

            <div className='signup__smallscreen'>
                <div className='signup__overlay'>
                    <form onSubmit={handleSubmit}>
                        <div className='signup__form'>
                            <div className='signup__header' >
                                <h1>Sign Up </h1>

                                <p>Join us to be part of the greater world!</p>
                            </div>

                            {currentInput === 1 && (
                                <div className='signup__details'>
                                    <div>
                                        <input
                                            className='signup__input'
                                            type="string"
                                            id="name"
                                            placeholder='Name'
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            className='signup__input'
                                            type="email"
                                            id="email"
                                            placeholder='Email'
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            className='signup__input'
                                            type="password"
                                            id="password"
                                            placeholder='Password'
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            className='signup__input'
                                            type="password"
                                            id="confirmPassword"
                                            placeholder='Confirm Password'
                                            value={confirmPassword}
                                            onKeyDown={handleKeyDown}
                                            onChange={(event) => setConfirmPassword(event.target.value)}
                                        />
                                    </div>
                                </div>
                            )} {currentInput === 2 && (
                                <div>
                                    <div>
                                        <input
                                            className='signup__input'
                                            type="string"
                                            id="apartment"
                                            placeholder='Apartment name'
                                            value={apartment}
                                            onChange={(event) => setApartment(event.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            className='signup__input'
                                            type="string"
                                            id="street"
                                            placeholder='Street Address'
                                            value={street}
                                            onChange={(event) => setStreet(event.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            className='signup__input'
                                            type="string"
                                            id="city"
                                            placeholder='City'
                                            value={city}
                                            onKeyDown={handleKeyDown}
                                            onChange={(event) => setCity(event.target.value)}
                                        />
                                    </div>
                                </div>
                            )} {currentInput === 3 && (
                                <div>
                                    <div>
                                        <input
                                            className='signup__input'
                                            type="string"
                                            id="province"
                                            placeholder='State/Province'
                                            value={province}
                                            onChange={(event) => setProvince(event.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            className='signup__input'
                                            type="string"
                                            id="country"
                                            placeholder='Country'
                                            value={country}
                                            onChange={(event) => setCountry(event.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            className='signup__input'
                                            type="string"
                                            id="postalCode"
                                            placeholder='Postal Code'
                                            value={postalCode}
                                            onChange={(event) => setPostalCode(event.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="signup__link">
                                <div className="ProgressButton">
                                    <div className="ProgressBar">
                                        {/* <button onClick={handleClick} className='signup__next-button'>
                                    <BsArrowLeft size={30} className='signup__button-icon' />
                                </button> */}

                                        {/* {
                                    currentInput === 3 ? (
                                        <button onClick={handleClick} className='signup__next-button'>
                                            <BsArrowLeft size={30} className='signup__button-icon' />
                                        </button>
                                    ) : null} */}

                                        <div className="ProgressBar">
                                            <span className={progress === 0 ? 'Active' : ''} />
                                            <span className={progress === 1 ? 'Active' : ''} />
                                            <span className={progress === 2 ? 'Active' : ''} />
                                        </div>
                                        {/* {
                                    clickCount < 2 ? (
                                        <button onClick={handleClick} className='signup__next-button'>
                                            <BsArrowRight size={30} className='signup__button-icon' />
                                        </button>
                                    ) : null} */}
                                    </div>

                                    <div >
                                        {currentInput === 3 ? (
                                            <button type="submit" className="signup__button">Sign Up</button>
                                        ) : null}
                                    </div>
                                </div>

                                <p className='signup__login'>
                                    Already have an account?
                                    <Link to="/"> Log in</Link>
                                </p>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default SignUpForm;


