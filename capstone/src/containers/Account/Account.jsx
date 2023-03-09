import React, { useEffect, useState } from "react";
import { images } from '../../constants';
import { SubHeading, ProductDetailBar } from '../../components';

import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";
import SideBarAccount from "./SideBarAccount";

import './Account.css';

const Account = () => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
        // setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <div>
            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "0px solid #3d3d3d", px: { sx: 3, md: 2 } }}>
                    <SideBarAccount selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <table className="account__table">
                        <tbody>
                            <tr>
                                <td rowSpan="5">
                                    Combined Cell
                                </td>
                                <td>
                                    <h1 className='account__header'>
                                        Personal Information
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    First Name
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="firstname"
                                            placeholder="Enter First Name"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Last Name
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="lastname"
                                            placeholder="Enter Last Name"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Email
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="email"
                                            placeholder="Enter Email Address"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Phone Number
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="phone"
                                            placeholder="Enter Phone Number"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h1 className='account__header'>
                                        Account
                                    </h1>
                                </td>
                                <td>
                                    Address
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="address"
                                            placeholder="Enter Address"
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Username
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="text"
                                            id="username"
                                            placeholder="Enter Username"
                                        />
                                    </div>
                                </td>
                                <td>
                                    First Name
                                    <br />
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter First Name"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Password
                                    <br />
                                    <div className='account__input-long'>
                                        <input
                                            className='account__input'
                                            type="password"
                                            id="password"
                                            placeholder="Enter Password"
                                        />
                                    </div>
                                </td>
                                <td colSpan={2}>
                                    First Name
                                    <br />
                                    <input
                                        className='account__input'
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter First Name"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Stack>
        </div>
    );
};

export default Account;
