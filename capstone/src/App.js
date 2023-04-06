// Author: Ling Shan Matthew Ng, Naomy Tung
// Version 1.o
// Date: 25/1/2023


// Description: Contains the navbar and footer, and routing 
// Precondition: A home page with required containers and functional carousel
// Postcondition: Home page with a scrollable carousel

// Input: Currently no input available
// Output: Currently no specific output

// Notes: Aim to make the header text in carousel scroll with the images
// Notes: Have figured out which component is causing issues

import React from 'react';
import { Link, Route, Routes } from "react-router-dom"
import { Navbar, AddProduct, EditProduct, EmployeeMenu, Uploader } from './components';
import { Account, AccountHistory, Home, Header, Gallery, EmployeeReturn, Benefits, Footer, Follow, ShopProduct, ProductDetail, OrderConfirmation, ShoppingCart, UserNavigation, ShopCategory, Feed, Login, EmployeeSettings, AboutUs, EmpAccount, SignUp } from './containers';

import './App.css';
import PaymentCancellation from './containers/PaymentCancellation/PaymentCancellation';
import Shipping from './containers/Shipping/Shipping';

//testing address component - need to be removed
import Address from './components/Address/Address';
import { ProtectedRoute } from './features/ProtectedRoute';
import { ProtectedRouteUser } from './features/ProtectedRouteUser';

const App = () => (
    <div>

        <Routes>
            <Route path="/" element={<UserNavigation />}>
                <Route path="/aboutus" element={<AboutUs />} />
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/categories">
                    <Route index element={<Feed />} />
                    <Route path=":cat" element={<Feed />} />
                </Route>
                <Route path="/products">
                    <Route index element={<ShopProduct />} />
                    <Route path=":name" element={<ProductDetail />} />
                </Route>
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/success" element={<OrderConfirmation />} />
                <Route path="/cancel" element={<PaymentCancellation />} />
                <Route path="/shipping" element={<Shipping />} />
            </Route>
            <Route element={<ProtectedRouteUser />}>
                <Route path="/account" element={<Account />} />
                <Route path="/history" element={<AccountHistory />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/add" element={<EmpAccount />} />
                <Route path="/editproduct" element={<EmpAccount />} />
            </Route>

            

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>



    </div>
);

export default App;