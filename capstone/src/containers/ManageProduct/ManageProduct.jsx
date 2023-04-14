import React from 'react';
import { EmployeeProduct, EmpProductItem } from '../../components';
import { EmployeeMenu } from '../../components';

import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Form from 'react-bootstrap/Form';

import AddIcon from '@mui/icons-material/Add';
import { FaSearch } from 'react-icons/fa';

import './ManageProduct.css';
import { Link } from 'react-router-dom';

const ManageProduct = ({ value, onChange }) => {

    const placeholder = <FaSearch />;
    return (
        // <div className="app__center">
        //     <EmployeeMenu />
        //     <h1 className="employee__header">Manage Products</h1>

        //     <div className="employee__add-products">
        //         <div className="employee__add-icon">
        //             <BsPlus color='585555' size={60} />
        //         </div>
        //     </div>

        //     <table className="employee__search-container">
        //         <table className="employee__element-container">
        //             <tr>
        //                 <td>
        //                     <input type="text" placeholder="Search Product" className="employee__search"></input>
        //                 </td>
        //                 <CiSearch color="70908B" size={27} />
        //             </tr>
        //         </table>
        //     </table>

        //     <div className="employee__product">
        //         <EmployeeProduct />
        //     </div>

        //     <div className="employee__add-products">
        //         {/* <AiOutlinePlus /> */}
        //     </div>

        //     <div className="employee__product-search">
        //         <div class="search__container">
        //             <p class="search__title">
        //                 Go ahead, hover over search
        //             </p>
        //             <input type="text" class="search__input" placeholder="Search"></input>
        //         </div>

        //         <div class="credits__container">
        //             <p class="credits__text">Background color: Pantone Color of the Year 2016 <a href="https://www.pantone.com/color-of-the-year-2016" class="credits__link">Rose Quartz</a></p>
        //         </div>
        //     </div>

        //     <div className="employee__product">
        //         <EmployeeProduct />
        //     </div>

        // </div>


        <div>
            <h1>
                Manage Product
            </h1>

            <div>
                <Link to="/addproduct">
                    <AddIcon />
                </Link>
            </div>

            <div>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder="Search Product"
                />
            </div>
           
            <EmpProductItem />
            
        </div>
    )
}

export default ManageProduct;