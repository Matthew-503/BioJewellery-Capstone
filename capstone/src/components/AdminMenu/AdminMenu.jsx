// Author: Buola Achor
// Version 0.1
// Date: 16/1/2023

// Description: This is the admin side menu
// Precondition: A admin page already existing 
// Postcondition: direct to pages highlighted by text

// Input: Currently no input available
// Output: Currently no specific output

// Notes: large gap between profile and text

import React from 'react';

import './AdminMenu.css';

const AdminMenu = () => {

    return (
        <nav className="admin__menu">
        
            <div className="admin__photo">
                <CgProfile color='#818181' size={120} />
            </div>

            <li className="admin__text">
                
                    <div className="a__dash">
                        <a href="#Edit">Dashboards</a>
                    </div>
                
                    <div className="a__social">
                        <a href="#Return">Monitor Social Media</a>
                    </div>

                    <div className="a__employee">    
                        <a href="#View">Manage Employees</a>
                    </div>

                    <div className="a__user">    
                        <a href="#Products">Mange Users</a>
                    </div>

                    <div className="a__admin">    
                        <a href="#Products">Add Admin</a>
                    </div>      
            </li>
        </nav>  
    )
}

export default AdminMenu;