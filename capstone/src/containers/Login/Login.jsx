// Author: Ling Shan Matthew Ng, Naomy Tung 
// Version 0.2
// Date: 7/2/2023

// Description: This is the login page
// Precondition: A login page that contains the login form and proper styling
// Postcondition: Login page reformatting

// Input: Currently no input available
// Output: Currently no specific output

import React from 'react';
import { useState } from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/accountFeatures/accountSlice'

import './Login.css';




function Login() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(username, password);
    // };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        if (isError) {
          toast.error(message)
          setErrorMessage(' Sorry. Email or password incorrect. Please try again or create a new account.');
        }
    
        if (isSuccess && user) { 
          dispatch(reset())
          //if its a regular client it redirect to the logged home page (protected route)
          if (user.user.type === "Client") {
            navigate('/')
          }
          //otherwise it will go to the admin view (protected route)
          else {
            navigate('/edit')
          }
          
        }
    
       
      }, [user, isError, isSuccess, message, navigate, dispatch])

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const onSubmit = (e) => {
        e.preventDefault()
    
        const userData = {
          email,
          password,
        }
    
        dispatch(login(userData))
      }

    return (
        <>
            <div className='login'>
                <div className="login__wrapper">
                    <img src={images.login} alt="G_overlay" className='left' />
                    <h1 className='HeaderText left '>Turn your dreams into reality</h1>
                    {/* <p className='HeaderText '>Start for free and get great offers!</p> */}
                </div>
                <form onSubmit={onSubmit}>
                    <div className='right login__form'>
                        <SubHeading title={"Login"} className='login__subheading' />

                        <p>Welcome back! Please enter your details</p>
                        
                        {isError ? <p className='login__error-message'>{errorMessage}</p> : null }
                        

                    <input
                        className='login__input'
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={onChange}
                    />

                    <input
                        className='login__input'
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={onChange}
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
        </>
    );
};

export default Login;
