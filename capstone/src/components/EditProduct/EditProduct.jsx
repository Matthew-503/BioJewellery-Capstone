import React, { Component } from 'react'
import EmployeeMenu from '../EmployeeMenu/EmployeeMenu';
import Uploader from '../Uploader/Uploader';
import './EditProduct.css';

class EditProduct extends Component {
   
    render() 
    { 
        return(
            <div className="flex__center">
                <form>

                    <div className="edit_employee-menu">
                        <EmployeeMenu />
                    </div>

                    <div className="edit__name">    
                        <h1 className="edit_title">Edit Product</h1>

                        <div className="edit__product-info">    
                            <p>Product Information</p>
                        </div>
                    </div>

                    <div className="edit__product-uploader">
                        <div classNmae="edit__uploader">
                            <Uploader />
                        </div>  
                    </div>

                    <div className="edit__product-name">
                        <label>
                            Product Name<br/>
                            <input name="name" type="text" className="edit__input-name" placeholder="XXXX"/><br/>
                        </label>
                    </div>    

                    <div className="edit__product-desc"> 
                        <label>
                            Product Description<br/> 
                            <input name="descrption" type="text" className="edit__input-desc" placeholder="XXXX"/><br/>
                        </label>
                    </div>

                    <ul className="edit__price-prod">
                        <li className="edit__product-price">
                            <label>
                                <h3 className="input__name">Price </h3>
                                    <input name="price" type="number" className="edit__input-price" placeholder="100,00"/><br/>
                            </label>
                        </li>

                        <li className="edit__product-stock">
                            <label>
                                <h3 className="input__name">In-Stock</h3>
                                    <input name="stock" type="number" className="edit__input-stock" placeholder="10"/><br/>
                            </label>
                        </li>
                    </ul> 
                    
                    <div className="edit__buttons">
                        <button className="edit__button-save" >Save</button>
                        <button className="edit__button-cancel">Cancel</button>  
                    </div>             
                </form>     
            </div>
    );
    }
}

export default EditProduct;