// Author: Buola Achor
// Version 0.1
// Date: 18/1/2023

// Description: This is the add product employee page. 
// Precondition: Must be connected and be able to add to the database also have the uploader component
// Postcondition: nothing

// Input: User Product Specifications, 
// Output: Page
import './AddProduct.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import EmployeeMenu from '../EmployeeMenu/EmployeeMenu';
import Uploader from '../Uploader/Uploader';
import { setProduct } from '../../features/productFeatures/productSlice';

function AddProduct(){

    const dispatch = useDispatch();

    const [newProduct, setNewProduct] = useState({});

    const handleImageUpload = (imageFile) => {
        setNewProduct((prevProduct) => ({
          ...prevProduct,
          imageFile: imageFile,
        }));
    };
    
    const changeHandler = (e) => {

        setNewProduct((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setProduct(newProduct));
    };
    
    return (
        <>
            <div className="flex__center">

            <form onSubmit={handleSubmit}>

                <div className="add__employee-menu">
                    <EmployeeMenu />
                </div>

                <div className="add__name">
                    <h1 className="add__title">Add Product</h1>

                    <div className="add__product-info">
                        <p>Product Information</p>
                    </div>
                </div>

                <div className="add__product-uploader">
                        <Uploader onImageUpload={handleImageUpload}/>
                </div>  

                <div className="add__product-name">
                    <label>
                        <h3 className="input__name">Product Name</h3>
                            <input 
                                name="name" 
                                type="text" 
                                required
                                className="add_input-name" 
                                placeholder="Product Name"
                                onChange={changeHandler}
                            />
                    </label>
                </div>

                <div className="add__product-description">    
                    <label>
                        <h3 className="input__name">Product Description</h3>
                            <input 
                                name="description" 
                                type="text" 
                                required
                                className="add_input-desc" 
                                placeholder="Product Description"
                                onChange={changeHandler}
                            />
                            <br/>
                    </label>
                </div>

                <ul className="add__price-prod">
                    <li className="add__product-price">
                        <label>
                            <h3 className="input__name">Price In CAD</h3>
                                <input 
                                    name="price" 
                                    type="number" 
                                    required
                                    className="add_input-price" 
                                    placeholder="Price per unit"
                                    onChange={changeHandler}
                                />
                                <br/>
                        </label>
                    </li>

                    <li className="add__product-stock">
                        <label>
                            <h3 className="input__name">In-Stock</h3>
                                <input 
                                    name="quantity" 
                                    type="number" 
                                    required
                                    className="add_input-stock" 
                                    placeholder="Number of Products in Stock"
                                    onChange={changeHandler}
                                />
                                <br/>
                        </label>
                    </li>
                </ul>        

                <div className="add__buttons">
                    <button className="button-save" type='submit' >Add Product</button>
                    <button className="button-cancel">Cancel</button>  
                </div>
            </form>     

            </div>
        </>
    )
}

    


export default AddProduct;