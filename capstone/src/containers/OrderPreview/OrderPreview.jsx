// Author: Sri
// Version 0.1
// Date: 15/03/2023

//Description: This is Order preview Page before Payment. 

import './OrderPreview.css';
import React from "react";
import Address from '../../components/Address/Address'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'

const OrderPreview = () => {
        
    return (
        <>
           {/* <Address/>  */}
           <CheckoutSummary />
        </>
    );
};

export default OrderPreview