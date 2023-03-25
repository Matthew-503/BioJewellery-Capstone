import { useEffect, useState } from "react";
import { fetchFromAPI } from '../../constants';
import { Box, Stack, Typography } from "@mui/material";
import { SubHeading, ProductDetailBar, Navbar } from '../../components';
import { EmployeeProduct } from '../../components';
import { EmployeeMenu } from '../../components';

import { BsPlus } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Form from 'react-bootstrap/Form';

import './ManageProduct.css';
import EmpSidebarAccount from '../EmpAccount/EmpSidebarAccount';

const ManageProduct = (props) => {

    const [selectedCategory, setSelectedCategory] = useState("Products");
    const [setVideos] = useState(null);

    useEffect(() => {
        // setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    const { checked, onChange } = props;

    return (
        // <div className="app__center">
        //     <EmpSidebarAccount />
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
        // </div>


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




        // <div className="employee__product">
        //             <EmployeeProduct />
        //         </div>

        // <div className="employee__add-products">
        //             <AiOutlinePlus />
        //         </div>

        //         <div className="employee__product-search">
        //         <div class="search__container">
        //                 <p class="search__title">
        //                     Go ahead, hover over search
        //                 </p>
        //                 <input type="text" class="search__input" placeholder="Search"></input>
        //             </div>

        //             <div class="credits__container">
        //                 <p class="credits__text">Background color: Pantone Color of the Year 2016 <a href="https://www.pantone.com/color-of-the-year-2016" class="credits__link">Rose Quartz</a></p>
        //             </div>
        //         </div>

        //         <div className="employee__product">
        //             <EmployeeProduct /> 
        //         </div>
    )
}

export default ManageProduct;