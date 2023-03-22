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
import { Account, AccountHistory, Home, Header, Gallery, EmployeeReturn, Benefits, Footer, Follow, ShopProduct, ProductDetail, OrderConfirmation, ShoppingCart, UserNavigation, ShopCategory, Feed, Login, EmployeeSettings, AboutUs } from './containers';

import './App.css';
import PaymentCancellation from './containers/PaymentCancellation/PaymentCancellation';
import OrderPreview from './containers/OrderPreview/OrderPreview';

//testing address component - need to be removed
import Address from './components/Address/Address';
import ProtectedRoute from './features/ProtectedRoute';
import ProtectedRouteUser from './features/ProtectedRouteUser';

const App = () => (
    <div>
        
        <Routes>
            <Route path="/" element={<UserNavigation />}>
                <Route path="/aboutus"  element={<AboutUs />} />
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
                {/* <Route path="/orderpreview" element={<OrderPreview />} /> */}
                <Route path="/addresses" element={<Address />} />
            </Route>
            <Route element={<ProtectedRouteUser />}>
                <Route path="/account" element={<Account />} />
                <Route path="/history" element={<AccountHistory />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/add" element={<AddProduct />} />
                <Route path="/editproduct" element={<EditProduct />} />
            </Route>

   
            
            <Route path="/login" element={<Login />} />
            {/* <Route path="/admin">
                
                 <Route index element={<HomeAdmin />} />              
            </Route> */}
            </Routes>
            {/* Route specifications for the Login Page
                <Route path="/login" element={<LoginTemplate />}>
                <Route index element={<Blog />} /> 
                <Route path=":cat" element={<ShopProduct />} />  
                //dont forget to add <Outlet context(){varname: "whatever"}/> in the Login Template     
                //in the other page to use the context const obj = useOutletContext();   
                //use the replace in the Link so it will go back 2 pages   
            </Route>  */}

             {/* <Route path="*" element={<NotFound />}
        <Navbar />
        <Uploader />   */}


        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <AddProduct />  */}


        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <EditProduct />  */}


        {/* The addproduct did not cause spacing issues, but is affecting other divs, have to comment out this component */}
        {/* <EmployeeMenu /> */}
    </div>
);

export default App;