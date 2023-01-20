// Author: Ling Shan Matthew Ng
// Version 0.2
// Date: 15/1/2023

// Description: This is the home page. 
// Precondition: A home page with required containers and functional carousel
// Postcondition: Home page with a scrollable carousel

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the header text in carousel scroll with the images
// Notes: Will implement the images for background


import React from 'react';

import './App.css';
import { Navbar } from './components';
<<<<<<< Updated upstream
import { Header, Gallery, Benefits, Footer } from './containers';
=======
<<<<<<< HEAD
import { Header, Gallery, Benefits, Footer, ProductDetail, ShopCategory, Blog, ShopProduct } from './containers';

=======
import { Header, Gallery, Benefits, Footer, Blog, Follow } from './containers';
// components are things that are reused in multiple containers
>>>>>>> b72ef99157fe3eab4b2f3143b9e6beeaa8cab44b
>>>>>>> Stashed changes

const App = () => (
    <div>
        <Navbar />
        <Header />
        <Gallery />
        <Benefits />
        <Footer />
<<<<<<< Updated upstream
=======

        <Navbar />
        <Blog />
<<<<<<< HEAD

       
        <Navbar />
        <ProductDetail />
=======
        <Follow />
        <Blog />
>>>>>>> b72ef99157fe3eab4b2f3143b9e6beeaa8cab44b
>>>>>>> Stashed changes
    </div>
);

export default App;