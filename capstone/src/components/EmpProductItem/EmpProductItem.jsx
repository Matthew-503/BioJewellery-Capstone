// import React, { useState } from 'react';
// import './EmpProductItem.css'

// import { MdCloudUpload, MdDelete } from 'react-icons/md';
// import { AiOutlineCloudUpload, AiFillFileImage } from 'react-icons/ai';

// const EmpProductItem = ({ label, defaultOn }) => {
//     const [image, setImage] = useState(null)
//     const [fileName, setFileName] = useState("No Selected file")
//     const [isOn, setIsOn] = useState(defaultOn);

//     const handleToggle = () => {
//         setIsOn(!isOn);
//     };
//     return (
// <div>
//     <div>
//         <h1>
//             Product slot
//         </h1>
//     </div>

//     <div>
//         <h1>
//             Name
//         </h1>

//         <h1>
//             Price
//         </h1>

//         <h1>
//             Description
//         </h1>

//         <h1>
//             Stock
//         </h1>

//         <div>
//             <h1>
//                 Toggle Button
//             </h1>

//             <h1>
//                 Edit
//             </h1>
//         </div>
//     </div>
// </div>
//     )
// }

// export default EmpProductItem;



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
import React, { Component } from 'react';

import EmployeeMenu from '../../components/EmployeeMenu/EmployeeMenu';
import Uploader from '../../components/Uploader/Uploader';
import { useEffect, useState } from "react";
import { images } from '../../constants';
import { SubHeading, ProductDetailBar, Navbar, ToggleButton } from '../../components';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { Switch } from 'antd';
import './EmpProductItem.css';

const EmpProductItem = () => {

    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    const [isDisabled, setIsDisabled] = useState(true);

    const handleToggle = () => {
        setIsDisabled((prevIsDisabled) => !prevIsDisabled);
    };

    return (
        <div className='emp__product-item' style={{ opacity: isDisabled ? 0.5 : 1 }} disabled={isDisabled}>
            <div className='emp__product-item-img'>
                <h1>
                    Product List
                </h1>
            </div>

            <div className='emp__product-item-detail'>
                <div className='emp__product-item-category'>
                    <h1>
                        Name
                    </h1>

                    <h1>
                        Price
                    </h1>

                    <h1>
                        Description
                    </h1>

                    <h1>
                        Stock
                    </h1>
                </div>

                <div className='emp__product-item-description'>
                    <h1>
                        Golden Leaf Necklace
                    </h1>

                    <h1>
                        $ 299.99
                    </h1>

                    <h1>
                        A nice looking golden leaf shaped necklace
                    </h1>

                    <h1>
                        200
                    </h1>

                    <div className='emp__product-item-action'>
                        <div className='emp__product-item-toggle'>
                            <Switch onClick={handleToggle} />
                            {/* {toggle ?
                                <span>
                                    true
                                </span>
                                :
                                <span>
                                    false
                                </span>} */}

                            {/* {isDisabled ? "Disable" : "Enable" } */}

                            <button className='emp__product-item-button'>
                                Edit
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default EmpProductItem;