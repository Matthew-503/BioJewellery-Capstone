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
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Box, Stack, Typography } from "@mui/material";

import { toast } from 'react-toastify';
import { login, reset } from '../../features/accountFeatures/accountSlice';
import { Navbar } from '../../components';


import './ResetConfirm.css';




function ResetConfirm() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(username, password);
    // };

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    })

    const { password, confirmPassword } = formData

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

            //if its a regular client it redirect to the logged home page (protected route)
            if (user.user.type === "Client") {
                navigate('/')
            }
            //otherwise it will go to the admin view (protected route)
            else {
                navigate('/editproduct')
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
            password,
            confirmPassword,
        }

        dispatch(login(userData))
    }

    return (
        <>
            <Navbar />

            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={0} sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
                    <div className="account">
                        <div className="account__table">
                            <div className="login__table-column1">
                                <div className="login__img">
                                    <img src={images.login} alt="G_overlay" className="blur" />
                                </div>
                            </div>

                            <div className="reset__table-column2">
                                <form onSubmit={onSubmit}>
                                    <div className='reset__header'>
                                        <h1>
                                            Forget Passowrd
                                        </h1>

                                        <p>Don't worry. We've got your back. </p>
                                    </div>


                                    {isError ? <p className='login__error-message'>{errorMessage}</p> : null}


                                    <input
                                        className='login__input'
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={onChange}
                                        required
                                    />

                                    <input
                                        className='login__input'
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={onChange}
                                        required
                                    />

                                    <div className='login__lower-functions login__forget-link'>
                                        <br />
                                        <button type="submit" className="login__button">Send Conformation Email</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </Stack>


            {/* <div className='login'>
        <div className="login__wrapper">
          <img src={images.login} alt="G_overlay" className='left' />
          <h1 className='HeaderText left '>Turn your dreams into reality</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div className='right login__form'>
            <SubHeading title={"Login"} className='login__subheading' />

            <p>Welcome back! Please enter your details</p>

            {isError ? <p className='login__error-message'>{errorMessage}</p> : null}


            <input
              className='login__input'
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
              required
            />

            <input
              className='login__input'
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              required
            />

            <div className='login__lower-functions login__forget-link'>
              <div className="login__link">
                <Link to="/">Forgot password?</Link>
              </div>
              <br />
              <button type="submit" className="login__button">Login</button>
              <br />
              <Link to='/signup'>
                <button className="login__button">Register</button>
              </Link>
              <br />
              <div className="login__link">
                <Link to="/">Continue as guest</Link>
              </div>
            </div>
          </div>
        </form>
      </div> */}
        </>
    );
};

export default ResetConfirm;
