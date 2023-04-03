import React, { useEffect, useState } from "react";
import { images } from '../../constants';
import { SubHeading, ProductDetailBar } from '../../components';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/accountFeatures/accountSlice'
import { Footer } from '../../containers';
import { Navbar } from '../../components';

import './Reset.css';

const Reset = () => {
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
            email,
            password,
        }

        dispatch(login(userData))
    }

    return (
        <div>
            <Navbar />
            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>

                <Box p={0} sx={{ overflowY: "auto", height: "100vh", flex: 2 }}>
                    <div className="account">
                        <div className="account__table">
                            <div className="reset__table-column1">
                                <div className="reset__img">
                                    <img src={images.login} alt="G_overlay" className="blur" />
                                </div>
                            </div>

                            <div className="reset__table-column2">
                                <h1 className='reset__header'>
                                    Login
                                </h1>

                                <h1 className='reset__message'>
                                    Welcome back! Please enter your details.
                                </h1>

                                {isError ? <p className='login__error-message'>{errorMessage}</p> : null}


                                <input
                                    className='login__input'
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
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
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Stack>
            <Footer />
        </div>
    );
};

export default Reset;