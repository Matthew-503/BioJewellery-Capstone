import React, { Component } from 'react';

import EmployeeMenu from '../../components/EmployeeMenu/EmployeeMenu';
import Uploader from '../../components/Uploader/Uploader';
import { Link } from 'react-router-dom';

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
import { SubHeading, ProductDetailBar, Navbar, EmpProductItem } from '../../components';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import './EmpManage.css';
import EmpSidebar from "./EmpSidebar";

import { useSelector, useDispatch } from "react-redux";
import { getProducts, reset } from '../../features/productFeatures/productSlice';

const EmpManage = (props) => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);
    const { products, isError, message } = useSelector((state) => state.products)

    
    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        dispatch(getProducts())

    }, [isError, message, dispatch])

    const { checked, onChange } = props;

    return (
        <div>
            <Navbar />

            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
                    <EmpSidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <div className='emp__manage'>
                        <h1 className='emp__manage-header'>
                            Manange Products
                        </h1>

                        <Link to="/addproduct">
                            <button className='emp__manage-add'>

                                <AddIcon className='emp__manage-icon ' />

                            </button>
                        </Link>


                        {/* <div className='emp__manage-search'>
                            <input className='navbar-input-search' type='text' placeholder='Search BioJewellery Products' />
                        </div> */}

                        {products.length > 0 ? (
                           
                            <div className="emp__manage-product">
                                {products.map((product) => (<EmpProductItem
                                    key={product._id}
                                    product={product}
                                />))}
                            </div>
                        ) : (<h3>You have not set any products</h3>)}

                    </div>
                </Box>
            </Stack>
        </div>
    )
}
export default EmpManage;