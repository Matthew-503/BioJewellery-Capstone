import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EmployeeMenu from '../EmployeeMenu/EmployeeMenu';
// import Uploader from '../Uploader/Uploader';
import { setProduct } from '../../features/productFeatures/productSlice';
import './AddProduct.css';

// Author: Buola Achor
// Version 0.1
// Date: 18/1/2023

// Description: This is the add product employee page. 
// Precondition: Must be connected and be able to add to the database also have the uploader component
// Postcondition: nothing

// Input: User Product Specifications, 
// Output: Page

function AddProduct() {
    
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name:'',
        description:'',
        price:'',
        quantity:''
    });

    useEffect(() => {
        console.log(image);
    
    }, [image]);

    const uploadImage = (e) => {
        setImage(e.target.files[0]);
    }
    const changeHandler = (name) => (e) => {

        let value       
        value = e.target.value;

        setNewProduct({ ...newProduct, [name]: value});
        // console.log(newProduct);
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let formData = new FormData();
            formData.append('image', image);
            formData.append('name', newProduct.name);
            formData.append('description', newProduct.description);
            formData.append('price', newProduct.price);
            formData.append('quantity', newProduct.quantity);
            
            dispatch(setProduct(formData));

        } 
        catch (error) {
            console.log(error);
        }
    }
    
    return(
        <div className="flex__center">

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="add__employee-menu">
                    <EmployeeMenu />
                </div>

                <div className="add__name">
                    <h1 className="add__title">Add Product</h1>

                    <div className="add__product-info">
                        <p>Product Information</p>
                    </div>
                </div>

                {/* <div className="add__product-uploader">
                        <Uploader onImageUpload={handleImageUpload}/>
                </div>  */}

                <div className="add__product-uploader">
                    <input 
                        name="image" 
                        type="file" 
                        accept='image/*'
                        className="add_input-name" 
                        required
                        onChange={  uploadImage }
                    />
                </div>  

                <div className="add__product-name">
                    <label>
                        <h3 className="input__name">Product Name</h3>
                            <input 
                                name="name" 
                                type="text" 
                                className="add_input-name" 
                                placeholder="Product Name"
                                required
                                value={newProduct.name}
                                onChange={changeHandler('name')}
                            />
                    </label>
                </div>

                <div className="add__product-description">    
                    <label>
                        <h3 className="input__name">Product Description</h3>
                            <input 
                                name="description" 
                                type="text" 
                                className="add_input-desc" 
                                placeholder="Description"
                                required
                                value={newProduct.description}
                                onChange={changeHandler('description')}
                            /><br/>
                    </label>
                </div>

                <ul className="add__price-prod">
                    <li className="add__product-price">
                        <label>
                            <h3 className="input__name">Price In CAD</h3>
                                <input 
                                    name="price" 
                                    type="number" 
                                    className="add_input-price" 
                                    placeholder="Price per unit"
                                    required
                                    value={newProduct.price}
                                    onChange={changeHandler('price')}
                                /><br/>
                        </label>
                    </li>

                    <li className="add__product-stock">
                        <label>
                            <h3 className="input__name">In-Stock</h3>
                                <input 
                                    name="quantity" 
                                    type="number" 
                                    className="add_input-stock" 
                                    placeholder="Number of Products in Stock"
                                    required
                                    value={newProduct.quantity}
                                    onChange={changeHandler('quantity')}
                                /><br/>
                        </label>
                    </li>
                </ul>        

                <div className="add__buttons">
                    <button className="button-save" type='submit' >Save</button>
                    <button className="button-cancel">Cancel</button>  
                </div>  
            </form>
        </div>
    );
    
}

export default AddProduct;