// Author: Ling Shan Matthew Ng
// Version 0.3
// Date: 20/1/2023


// Description: This is the home page. 
// Precondition: A home page with required containers and functional carousel
// Postcondition: Home page with a scrollable carousel

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the header text in carousel scroll with the images
// Notes: Will implement the images for background

import React from 'react';

import './App.css';


import { Navbar, EmployeeMenu, AddProduct } from './components';

import { Header, Gallery, Benefits, Footer, ShoppingCart, Blog, Follow, Video, ProductDetail, ShopProduct, OrderConfirmation } from './containers';
// components are things that are reused in multiple containers

const App = () => (
    <div>

        <Navbar />


        <Navbar />

        <Header />
        <Gallery />
        <Video />
        <Follow />
        <Benefits />
        <Footer />

        <Footer />
        {/* <Uploader/> */}
        <AddProduct />


        <Footer />

        <OrderConfirmation />
        <Footer />

        <ShoppingCart />

        <EmployeeMenu />
        <Footer />

        <Navbar />
        <Blog />

        <Navbar />
        <ProductDetail />


    </div>
);

export default App;