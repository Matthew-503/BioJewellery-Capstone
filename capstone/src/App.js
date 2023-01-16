// Author: Ling Shan Matthew Ng
// Version 0.1
// Date: 15/1/2023

// Description: This 
// Precondition
// Postcondition

// Input 
// Output


import React from 'react';

import './App.css';
import { Navbar } from './components';
import { Header, Gallery, Benefits, Footer, Blog } from './containers';
// components are things that are reused in multiple containers

const App = () => (
    <div>
        {/* <Navbar />
        <Header />
        <Gallery />
        <Benefits />
        <Footer /> */}

        <Navbar />
        <Blog />
    </div>
);

export default App;