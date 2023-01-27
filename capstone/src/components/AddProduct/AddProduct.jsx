import React, { Component } from 'react';
import EmployeeMenu from '../EmployeeMenu/EmployeeMenu';
import Uploader from '../Uploader/Uploader';
import './AddProduct.css';

class AddProduct extends Component {
   
    render() 
    { 
        return(
            <div className="flex__center">
                <form>

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
                        <div classNmae="add__uploader">
                            <Uploader />
                        </div>  
                    </div> 

                    <div className="add__product-name">
                        <label>
                            <h3 className="input__name">Product Name</h3>
                                <input name="name" type="text" className="add_input-name" placeholder="Product Name"/>
                        </label>
                    </div>

                    <div className="add__product-description">    
                        <label>
                            <h3 className="input__name">Product Description</h3>
                                <input name="descrption" type="text" className="add_input-desc" placeholder="Description"/><br/>
                        </label>
                    </div>

                    <ul className="add__price-prod">
                        <li className="add__product-price">
                            <label>
                                <h3 className="input__name">Price </h3>
                                    <input name="price" type="number" className="add_input-price" placeholder="Price per unit"/><br/>
                            </label>
                        </li>

                        <li className="add__product-stock">
                            <label>
                                <h3 className="input__name">In-Stock</h3>
                                    <input name="stock" type="number" className="add_input-stock" placeholder="Number of Products in Stock"/><br/>
                            </label>
                        </li>
                    </ul>        

                    <div className="add__buttons">
                        <button className="button-save" >Save</button>
                        <button className="button-cancel">Cancel</button>  
                    </div>
                </form>     
            </div>
    );
    }
}

export default AddProduct;