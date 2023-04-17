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
import { Navigate, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import './EmpEdit.css';
import EmpSidebar from "./EmpSidebar";
import { getProductByName, updateProduct, reset } from '../../features/productFeatures/productSlice';
import { Link } from 'react-router-dom';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const EmpEdit = (props) => {
    let { name } = useParams();
    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No Selected file")
    const [imageLink, setImageLink] = useState('')
    const [newData, setNewData] = useState(null);

    const { selectedProduct, isError, message } = useSelector((state) => state.products);



    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        dispatch(getProductByName(name))

        setImageLink(selectedProduct.imageUrl)
        setFileName(selectedProduct.name)
        return () => {
            dispatch(reset())
        }
    }, [name, isError, message, dispatch])

    const uploadImage = (e) => {
        setImage(e.target.files[0]);
        setFileName(e.target.files[0].name);
        setImageLink(URL.createObjectURL(e.target.files[0]));
    }
    const { checked, onChange } = props;

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(imageLink)
            let formData = new FormData();
            formData.append('image', image);
            formData.append('name', newData.name === undefined ? selectedProduct.name : newData.name);
            formData.append('description', newData.description === undefined ? selectedProduct.description : newData.description);
            formData.append('price', newData.price === undefined ? selectedProduct.price : newData.price);
            formData.append('quantity', newData.quantity === undefined ? selectedProduct.quantity : newData.quantity);
            formData.append('id', selectedProduct._id);
            
            dispatch(updateProduct(formData));
            navigate('/manageproduct')
        } 
        catch (error) {
            console.log(error);
        }
    }

    const changeHandler = (name) => (e) => {

        let value       
        value = e.target.value;

        setNewData({ ...newData, [name]: value});
        
    }

    return (
        <div>
            <Navbar />

            <Stack sx={{ flexDirection: { sx: "column", md: "row" }, background: "var(--color-lightgreen)" }}>
                <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
                    <EmpSidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </Box>

                <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        <div className="emp-account">
                            <div className="emp-account__table">
                                <div className="emp-account__table-column1">
                                    <h1 className='emp-account__header'>
                                        Edit {selectedProduct.name}
                                    </h1>

                                    <h3>Product Name</h3>
                                    <br />
                                    <div className='emp-account__input-long'>
                                        <input
                                            className='emp-account__input'
                                            type="text"
                                            name="name"
                                            id="productname"
                                            placeholder="Product Name"
                                            value={newData === null ? selectedProduct.name : newData.name}
                                            onChange={changeHandler('name')}
                                        />
                                    </div>

                                    <h3>Product Description</h3>
                                    <br />
                                    <div className='emp-account__input-long'>
                                        <input
                                            className='emp-account__input'
                                            type="text"
                                            id="productdescription"
                                            name="description" 
                                            placeholder="Product Description"

                                            value={newData === null ? selectedProduct.description : newData.description}
                                            onChange={changeHandler('description')}
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
                                                    name="price" 
                                                    id="productprice"
                                                    placeholder="Enter Price"
                                                    value={newData === null ? selectedProduct.price : newData.price}
                                                    onChange={changeHandler('price')}
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
                                                    name="quantity" 
                                                    id="productstock"
                                                    placeholder="Enter Stock Number"
                                                    value={newData === null ? selectedProduct.quantity : newData.quantity}
                                                    onChange={changeHandler('quantity')}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="emp-account__table-column3">
                                    <div className="upload" onClick={() => document.querySelector(".upload__input").click()}>

                                        <input
                                            name="image"
                                            type="file"
                                            accept='image/*'
                                            className="upload__input"
                                            hidden
                                            onChange={uploadImage}

                                        />
                                        {imageLink ?
                                            <img src={imageLink} alt={fileName} />
                                            :
                                            <>
                                                <div className='upload__icons-upload'>
                                                    <AiOutlineCloudUpload color='#1475cf' size={60} />
                                                </div>

                                                <p>Browse Files to Upload</p>
                                            </>
                                        }
                                        <div>
                                            <h1>{fileName}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="emp-account__action">
                                <button type='submit'>
                                    Save
                                </button>
                                <Link to={"/manageproduct"}>
                                    <button>
                                        Cancel
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </Box>
            </Stack>

        </div>
    )
}
export default EmpEdit;