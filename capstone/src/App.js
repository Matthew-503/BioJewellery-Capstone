// Author: Ling Shan Matthew Ng
// Version 0.4
// Date: 20/1/2023


// Description: This is the home page. 
// Precondition: A home page with required containers and functional carousel
// Postcondition: Home page with a scrollable carousel

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the header text in carousel scroll with the images
// Notes: Have figured out which component is causing issues

import React from 'react';
import { Navbar, AddProduct, EditProduct, EmployeeMenu, Uploader } from './components';
import { Header, Gallery, Video, Follow, Benefits, Footer, Blog, ShopProduct, ProductDetail, OrderConfirmation, ShoppingCart, ShopCategory, Feed } from './containers';
// components are things that are reused in multiple containers

import './App.css';
import SideBar from './components/SideBar/SideBar';

const App = () => (
    <div>

        {/* <Navbar /> */}
        {/* Header causing navbar styling to fail: z-index*/}
        {/* <Header /> */}
        {/* <Gallery /> */}
        {/* <Video /> */}
        {/* <Benefits /> */}
        <Follow />
        {/* <Footer /> */}


        {/* <Navbar /> */}
        <ShopCategory />

        {/* <Navbar /> */}
        {/* <SideBar /> */}
        {/* <ShopProduct /> */}

        <Navbar />
        <Feed />
        <ShopCategory />

        {/* <Navbar /> */}
        {/* <ProductDetail /> */}

        {/* <Navbar /> */}
        {/* <OrderConfirmation /> */}

        {/* <Navbar /> */}
        {/* <ShoppingCart /> */}

        {/* The uploader is causing the spacing issues, have to comment out everything inside css
            Side note: Avoid using a <main> tag.*/}
        {/* <Navbar />
        <Uploader />  */}

        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <AddProduct />  */}

        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <EditProduct />  */}

        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <EmployeeMenu /> */}
    </div>
);

export default App;