import React, { Component } from 'react';

import EmployeeMenu from '../../components/EmployeeMenu/EmployeeMenu';
import Uploader from '../../components/Uploader/Uploader';

// Author: Buola Achor
// Version 0.1
// Date: 18/1/2023

// Description: This is the add product employee page. 
// Precondition: Must be connected and be able to add to the database also have the uploader component
// Postcondition: nothing

// Input: User Product Specifications, 
// Output: Page

// class AddProduct extends Component {

//     render() {
//         return (
//             <div className="flex__center">

//                 <form>

//                     <div className="add__employee-menu">
//                         <EmployeeMenu />
//                     </div>

//                     <div className="add__name">
//                         <h1 className="add__title">Add Product</h1>

//                         <div className="add__product-info">
//                             <p>Product Information</p>
//                         </div>
//                     </div>

//                     <div className="add__product-uploader">
//                         <Uploader />
//                     </div>

//                     <div className="add__product-name">
//                         <label>
//                             <h3 className="input__name">Product Name</h3>
//                             <input name="name" type="text" className="add_input-name" placeholder="Product Name" />
//                         </label>
//                     </div>

//                     <div className="add__product-description">
//                         <label>
//                             <h3 className="input__name">Product Description</h3>
//                             <input name="descrption" type="text" className="add_input-desc" placeholder="Description" /><br />
//                         </label>
//                     </div>

//                     <ul className="add__price-prod">
//                         <li className="add__product-price">
//                             <label>
//                                 <h3 className="input__name">Price </h3>
//                                 <input name="price" type="number" className="add_input-price" placeholder="Price per unit" /><br />
//                             </label>
//                         </li>

//                         <li className="add__product-stock">
//                             <label>
//                                 <h3 className="input__name">In-Stock</h3>
//                                 <input name="stock" type="number" className="add_input-stock" placeholder="Number of Products in Stock" /><br />
//                             </label>
//                         </li>
//                     </ul>

//                     <div className="add__buttons">
//                         <button className="button-save" >Save</button>
//                         <button className="button-cancel">Cancel</button>
//                     </div>
//                 </form>

//             </div>
//         );
//     }
// }

import { useEffect, useState } from "react";
import { images } from '../../constants';
import { SubHeading, ProductDetailBar, Navbar } from '../../components';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";

import './EmpAdd.css';
import EmpSidebarAccount from "./EmpSidebarAccount";


const EmpAdd = (props) => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
        // setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    const { checked, onChange } = props;

    return (
        <div>
            <Navbar />

            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
                    <EmpSidebarAccount selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className="emp-account">
                        <div className="emp-account__table">
                            <div className="emp-account__table-column1">
                                <h1 className='emp-account__header'>
                                    Add Products
                                </h1>

                                <h1 className='emp-account__header'>
                                    Product Information
                                </h1>

                                <h3>Product Name</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="text"
                                        id="productname"
                                        placeholder="Product Name"
                                    />
                                </div>

                                <h3>Product Description</h3>
                                <br />
                                <div className='emp-account__input-long'>
                                    <input
                                        className='emp-account__input'
                                        type="text"
                                        id="productdescription"
                                        placeholder="Product Description"
                                    />
                                </div>

                                <div className="emp-account__small-table">
                                    <div className="emp-account__table-column2">
                                        <h3>Price</h3>
                                        <br />
                                        <div className='emp-account__input-short'>
                                            <input
                                                className='emp-account__input'
                                                type="text"
                                                id="productprice"
                                                placeholder="Enter Price"
                                            />
                                        </div>
                                    </div>

                                    <div className="emp-account__table-column2">
                                        <h3>In-Stock</h3>
                                        <br />
                                        <div className='emp-account__input-short'>
                                            <input
                                                className='emp-account__input'
                                                type="number"
                                                id="productstock"
                                                placeholder="Enter Stock Number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="emp-account__table-column3">
                                <Uploader />
                            </div>
                        </div>


                        <div className="emp-account__action">
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
    )
}
export default EmpAdd;