// Author: Buola Achor
// Version 0.1
// Date: 16/1/2023

// Description: This is the employee side menu
// Precondition: A employee page already existing 
// Postcondition: direct to pages highlighted by text

// Input: Currently no input available
// Output: Currently no specific output

// Notes: large gap between profile and text

import React from 'react';
import { CgProfile, CgMenuGridR } from "react-icons/cg";
import { TbGridDots } from "react-icons/tb";
import { ImParagraphLeft } from "react-icons/im";
import { BsPersonCheckFill } from "react-icons/bs";
import { HiPencilAlt } from "react-icons/hi";

import './EmployeeMenu.css';
//import images from '../../constants/images';

const EmployeeMenu = () => {

    return (
        <nav className="employee__menu">
        
            <div className="employee__photo">
                <CgProfile color='#818181' size={120} />
            </div>

            <li className="employee__text">
                
                    <div className="e__edit">
                        <a href="#Edit">Edit Page</a>
                        
                    </div>
                
                    <div className="e__return">
                        <a href="#Return">Return Requests</a>
                    </div>

                    <div className="e__kpi">    
                        <a href="#View">View KPIs</a>
                    </div>

                    <div className="e__products">    
                        <a href="#Products">Mange Products</a>
                    </div>    
            </li>
        </nav>  
    )
}

export default EmployeeMenu;