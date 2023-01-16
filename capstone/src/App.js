// Author: Ling Shan Matthew Ng
// Version 0.1
// Date: 15/1/2023

// Description: This is the home page. 
// Precondition: A home page with required containers and functional carousel
// Postcondition: Home page with a scrollable carousel

// Input: Currently no input available
// Output: Currently no specific output

import React from 'react';

import './App.css';
import { Navbar } from './components';
import { Header, Gallery, Benefits, Footer } from './containers';
// components are things that are reused in multiple containers


const App = () => (
    <div>
        <Navbar />
        <Header />
        <Gallery />
        <Benefits />
        <Footer />
    </div>
);

export default App;