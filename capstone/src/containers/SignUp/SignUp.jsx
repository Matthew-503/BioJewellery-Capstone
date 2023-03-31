import React, { useState } from 'react';

import { Navbar, SubHeading } from '../../components';
import { SwitchDetail } from '../../containers';
import { images } from '../../constants';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/accountFeatures/accountSlice'

import PasswordChecklist from "react-password-checklist"


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
            toast.error('Passwords do not match')
        }
        else {
            const userData = {
              name,
              email,
              password,
              street,
              city,
              province,
              country,
              postalCode,              
              apartment,
        }
      
            dispatch(register(userData))
        }
        //console.log(name, email, password, confirmPassword, apartment, street, city, province, country, postalCode);
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

    const checkPassword = (password) =>
    {
      var re = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
      return re.test(password);
    }
  

    const handleKeyDown = (e, event) => {

        if (e.key === ("Enter") && { confirmPassword } !== null) {
            
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            else if (!checkPassword(password)) {
                alert('Please try a different password');
                return;
            }
            else {
                setCurrentInput(currentInput + 1);
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

    const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const onSubmit = (e) => {
//     e.preventDefault()

//     if (password !== password2) {
//       toast.error('Passwords do not match')
//     } else {
//       const userData = {
//         name,
//         email,
//         password,
//       }

//       dispatch(register(userData))
//     }
//   }

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
                                        name="name"
                                        placeholder='Name'
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Email'
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder='Password'
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder='Confirm Password'
                                        value={confirmPassword}
                                        onKeyDown={handleKeyDown}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                        required
                                    />
                                </div>

                                <br></br>
                                <div class="passwordChecklist">
                                    
                                    <PasswordChecklist
                                            rules={["minLength","specialChar","number","capital","match"]}
                                            minLength={8}
                                            value={password}
                                            valueAgain={confirmPassword}
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
                                        name="apartment"
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
                                        name="street"
                                        placeholder='Street Address'
                                        value={street}
                                        onChange={(event) => setStreet(event.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="city"
                                        name="city"
                                        placeholder='City'
                                        value={city}
                                        onKeyDown={handleKeyDown}
                                        onChange={(event) => setCity(event.target.value)}
                                        required
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
                                        name="province"
                                        placeholder='State/Province'
                                        value={province}
                                        onChange={(event) => setProvince(event.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="country"
                                        name="country"
                                        placeholder='Country'
                                        value={country}
                                        onChange={(event) => setCountry(event.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        className='signup__input'
                                        type="string"
                                        id="postalCode"
                                        name="postalCode"
                                        placeholder='Postal Code'
                                        value={postalCode}
                                        onChange={(event) => setPostalCode(event.target.value)}
                                        required
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
                                            name="name"
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
                                            name="email"
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
                                            name="password"
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
                                            name="confirmPassword"
                                            placeholder='Confirm Password'
                                            value={confirmPassword}
                                            onKeyDown={handleKeyDown}
                                            onChange={(event) => setConfirmPassword(event.target.value)}
                                        />
                                    </div>

                                    <div class="passwordChecklist">
                                    
                                        <PasswordChecklist
                                                rules={["minLength","specialChar","number","capital","match"]}
                                                minLength={8}
                                                value={password}
                                                valueAgain={confirmPassword}
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
                                            name="apartment"
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
                                            name="street"
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
                                            name="city"
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
                                            name="province"
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
                                            name="country"
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
                                            name="postalCode"
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


