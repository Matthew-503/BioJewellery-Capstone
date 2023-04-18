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
    const { user, isError, message } = useSelector((state) => state.auth)
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [userData, setUserData] = useState({
        email: user.email,
        password: user.password,
        name: user.user.name,
        phoneNumber: user.user.phoneNumber,
        street: user.user.address.street,
        city: user.user.address.city,
        province: user.user.address.province,
        postalCode: user.user.address.postalCode,
        country: user.user.address.country
    }); 

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })  
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (newPassword == confirmPassword) {
            setUserData({password: confirmPassword})
        }
        dispatch(updateAccount(userData));
    }

    const handlePasswordChange = (e) => {
        if(e.target.value != user.user.password) {
            setNewPassword(e.target.value); 
        } else {
            setNewPassword(user.user.password)
        }
    }    
    
    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
        if(isError) {
            console.log(message)
        }

        {/*
        if (!user) {
            useNavigate('/home')
        } */}

        return () => {
            dispatch(reset())
        }
        
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [useNavigate, selectedCategory, isError, message]);

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

                                <h3>New Password</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        name="cpassword"
                                        placeholder="Enter Password"
                                        onChange={handlePasswordChange} 
                                    />
                                </div>

                                <h3>New Password</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="password"
                                        name="npassword"
                                        placeholder="Re-enter password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}    
                                    />
                                </div>
                            </div>

                            <div className="account__table-column1">
                                <h1 className='account__header'>
                                    Personal Information
                                </h1>

                                {/* <h3>First Name</h3>
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
                                        id="lastname"
                                        placeholder="Enter Last Name"
                                    />
                            </div> */}

                                <h3>Name</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        name="name"
                                        value={userData.name}
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
                                        value={userData.phoneNumber}
                                        onChange={handleInputChange} 
                                    />
                                </div>

                                <h3>Address</h3>
                                <br />
                                <div className='account__input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        name="street"
                                        value={userData.street}
                                        onChange={handleInputChange}
                                        
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
                                                value={user.city}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <h3>Province</h3>
                                        <br />
                                        <div className='account__input-short'>
                                            <input
                                                className='account__input'
                                                type="text"
                                                name="province"
                                                value={userData.province}
                                                onChange={handleInputChange}
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
                                                value={userData.postalCode}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <h3>Country</h3>
                                        <br />
                                        <div className='account__input-short'>
                                            <input
                                                className='account__input'
                                                type="text"
                                                name="country"
                                                value={userData.country}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="account__action">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                            >
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