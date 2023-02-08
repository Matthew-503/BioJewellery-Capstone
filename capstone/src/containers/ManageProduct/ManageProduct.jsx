import React from 'react';
import { EmployeeProduct } from '../../components';
import { EmployeeMenu } from '../../components';

import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

import './ManageProduct.css';

const ManageProduct = () => {
    return (
        <div className="app__center">
            <EmployeeMenu />

            <h1 className="employee__header">Manage Products</h1>

                <div className="employee__add-products">
                    <div className="employee__add-icon"> 
                        <BsPlus color='585555' size={60} />
                    </div>    
                </div>

                <table className="employee__search-container">
                    <table className="employee__element-container">
                        <tr>
                            <td>
                                <input type="text" placeholder="Search Product" className="employee__search"></input>
                            </td>
                                <CiSearch color="70908B" size={27}/>
                        </tr>
                    </table>
                </table>

                <div className="employee__product">
                    <EmployeeProduct />
                </div>
        </div>
    )
}

export default ManageProduct;