import React, { useEffect, useState } from "react";
import { images } from '../../constants';
import { SubHeading, ProductDetailBar } from '../../components';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";
import SideBarAccount from "./SideBarAccount";
import { Footer } from '../../containers';
import { Navbar } from '../../components';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './Account.css';

const Account = () => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isSuccess } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        // setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <div>
            <Navbar />
            <div>
                <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                    <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "0px solid #3d3d3d", px: { sx: 3, md: 2 } }}>
                        <SideBarAccount selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className="account">
                        <div className="account__table">
                            <div className="account__table-column1">
                                {/* <div className="account__avatar">
                                    <img src={images.avatar} alt="G_overlay" className="blur" />

                                    <div className="account__overlay">
                                        <ModeEditIcon className="account__icon" />
                                    </div>
                                </div> */}
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
                                        placeholder={user.user.name}
                                    />
                                </div>

                                    <h3>Password</h3>
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="password"
                                            id="password"
                                            placeholder="Enter Password"
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
                                            id="lastname"
                                            placeholder="Enter Last Name"
                                        />
                                    </div>

                                    <h3>Email</h3>
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="email"
                                            placeholder="Enter Email Address"
                                        />
                                    </div>

                                    <h3>Phone Number</h3>
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="phone"
                                            placeholder="Enter Phone Number"
                                        />
                                    </div>

                                    <h3>Address</h3>
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="address"
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
                                                    id="city"
                                                    placeholder="City"
                                                />
                                            </div>

                                            <h3>Province</h3>
                                            <br />
                                            <div className='account__input-short'>
                                                <input
                                                    className='account__input'
                                                    type="text"
                                                    id="province"
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
                                                    id="postalCode"
                                                    placeholder="Postal Code"
                                                />
                                            </div>

                                            <h3>Country</h3>
                                            <br />
                                            <div className='account__input-short'>
                                                <input
                                                    className='account__input'
                                                    type="text"
                                                    id="country"
                                                    placeholder="Country"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="account__action">
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
            </div>

            <div className="account__small-profile">
                <div className='account__small-scroll'>
                    <button className='account__small-category'>Profile</button>
                    <button className='account__small-category'>History</button>
                    <button className='account__small-category'>Review</button>
                    <button className='account__small-category'>Return</button>
                </div>

                <div>
                    <div className="account__small-account">
                        <h1 className='account__small-header'>
                            Account
                        </h1>

                        <div className="account__small-1">
                            <div className="account__small-1-0">
                                <h3>Avatar</h3>

                                <div className="account__small-avatar">
                                    <img src={images.avatar} alt="G_overlay" className="blur" />

                                    <div className="account__small-overlay">
                                        <ModeEditIcon className="account__small-icon" />
                                    </div>
                                </div>
                            </div>

                            <div className="account__small-1-1">
                                <h3>Username</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="username"
                                        placeholder="Enter Username"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-2">
                                <h3>Password</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="password"
                                        id="password"
                                        placeholder="Enter Password"
                                    />
                                </div>
                            </div>
                        </div>

                        <h1 className='account__small-header-1'>
                            Personal Information
                        </h1>

                        <div className="account__small-1">
                            <div className="account__small-1-1">
                                <h3>First Name</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-1">
                                <h3>Last Name</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="lastname"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-3">
                                <h3>Email</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="email"
                                        placeholder="Enter Email Address"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-4">
                                <h3>Phone</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="phone"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-5">
                                <h3>Address</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="address"
                                        placeholder="Enter Address"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-6">
                                <h3>City</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="city"
                                        placeholder="Enter City"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-7">
                                <h3>Postal Code</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="postalCode"
                                        placeholder="Enter Postal Code"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-8">
                                <h3>Province</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="province"
                                        placeholder="Enter Province"
                                    />
                                </div>
                            </div>

                            <div className="account__small-1-8">
                                <h3>Country</h3>

                                <div className='account__small-input-long'>
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="country"
                                        placeholder="Enter Country"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="account__small-action">
                            <button>
                                Save
                            </button>

                            <button>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Account;