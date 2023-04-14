import React, { useEffect, useState } from "react";
import { images } from '../../constants';
import { SubHeading, ProductDetailBar } from '../../components';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";
import SideBarAccount from "./SideBarAccount";
import { Footer } from '../../containers';
import { Navbar } from '../../components';
import { updateAccount, reset } from "../../features/accountFeatures/accountSlice";

import './Account.css';

const Account = () => {

    const dispatch = useDispatch()
    const { user, isError, message} = useSelector((state) => state.auth)

    const [userData, setUserData] = useState({
        email: user.email,
        password: user.password,
    });

    const handleInputChange =(e) => {
        setUserData({
            userData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData.email)
        dispatch(updateAccount(userData.email));
    }

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        {/* if (!user) {
            useNavigate('/home')
        } */}

        return () => {
            dispatch(reset())
        }
        
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [useNavigate, selectedCategory, isError, message]);

    {/* useEffect(() => {
        // setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]); */}

    return (
        <div>
            <Navbar />
            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "0px solid #3d3d3d", px: { sx: 3, md: 2 } }}>
                    <SideBarAccount selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className="account">
                        <div className="account__table">
                            <div className="account__table-column1">
                                <div className="account__avatar">
                                    <img src={images.avatar} alt="G_overlay" className="blur" />

                                    <div className="account__overlay">
                                        <ModeEditIcon className="account__icon" />
                                    </div>
                                </div>
                                <h1 className='account__header'>
                                    Account
                                </h1>

                                <h3>Username</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="username"
                                        placeholder="Enter Username"
                                    />
                                </div>

                                <h3>Password</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="password"
                                        name="password"
                                        placeholder={user.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="account__table-column1">
                                <h1 className='account__header'>
                                    Personal Information
                                </h1>

                                <h3>First Name</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter First Name"
                                    />
                                </div>

                                <h3>Last Name</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        name="lastname"
                                        placeholder="Enter Last Name"
                                    />
                                </div>

                                <h3>Email</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        name="email"
                                        placeholder={user.password}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <h3>Phone Number</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        name="phone"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>

                                <h3>Address</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        name="address"
                                        placeholder="Enter Address"
                                    />
                                </div>

                                <div className="account__small-table">
                                    <div className="account__table-column2">
                                        <h3>City</h3>
                                        <br />
                                        <div className='account__input-short'>
                                            <input
                                                className='account__input'
                                                type="text"
                                                name="city"
                                                placeholder="City"
                                            />
                                        </div>

                                        <h3>Province</h3>
                                        <br />
                                        <div className='account__input-short'>
                                            <input
                                                className='account__input'
                                                type="text"
                                                name="province"
                                                placeholder="Province"
                                            />
                                        </div>
                                    </div>

                                    <div className="account__table-column2">
                                        <h3>Postal Code</h3>
                                        <br />
                                        <div className='account__input-short'>
                                            <input
                                                className='account__input'
                                                type="text"
                                                name="postalCode"
                                                placeholder="Postal Code"
                                            />
                                        </div>

                                        <h3>Country</h3>
                                        <br />
                                        <div className='account__input-short'>
                                            <input
                                                className='account__input'
                                                type="text"
                                                name="country"
                                                placeholder="Country"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="account__action"
                            onChange={handleSubmit}
                        >
                            <button>
                                Save
                            </button>

                            <button>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Box>
            </Stack>
            <Footer />
        </div>
    );
};

export default Account;