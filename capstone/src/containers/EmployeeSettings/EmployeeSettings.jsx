import React, { Component } from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { EmployeeMenu } from '../../components';

import './EmployeeSettings.css';

const EmployeeSettings = () => {
    return (
        <div className="flex__center">

        <EmployeeMenu />

        <div className="employee__center">
            <form>
            <h1 className="employee__header">Settings</h1>
            
            <h2 className="employee__secondary-header">Personal Information</h2>

                <div className="employee__profile-photo">
                    <BsFillPersonFill color='#818181' size={120} />
                </div>

                <div className="employee__account-information">

                    <h2 className="employee__account-header">Account Information</h2>
                    <label>
                        Current Password<br/>
                        <input name="cpass" type="text" placeholder="Enter Password"/><br/>
                    </label>

                    <label>
                        New Password<br/>
                        <input name="npass" type="text" placeholder="Enter Password"/><br/>
                    </label>

                    <label>
                        Confirm Password<br/>
                        <input name="conpass" type="text" placeholder="Enter Password"/><br/>
                    </label>

                    <label>
                        Address<br/>
                        <input name="address" type="text" placeholder="32 My Address"/><br/>
                    </label>
                </div>

                <div className="employee__personal-information">
                    <label>
                        <input name="fname" type="text" placeholder="Hailey"/><br/>
                    </label>
                    
                    <label>
                        <input name="lname" type="text" placeholder="Johnson"/><br/>
                    </label>
                    
                    <label>
                        Phone Number <br/>
                        <input name="phone" type="number" placeholder="000-000-0000"/><br/>
                    </label>
                    
                    <label>
                        Address<br/>
                        <input name="address" type="text" placeholder="32 My Address"/><br/>
                    </label>

                    <label>
                        <input name="city" type="text" placeholder="Calgary"/><br/>
                    </label>

                    <label>
                        <input name="province" type="text" placeholder="AB"/><br/>
                    </label>
                    
                    <label>
                        <input name="postal" type="text" placeholder="Y7R 717"/><br/>
                    </label>

                    <label>
                        <input name="country" type="text" placeholder="Canada"/><br/>
                    </label>
                </div>

                <div className="employee__priveleges">
        
                </div>

                <div className="employee__settings-button">
                    <button className="settings__button" >Save</button>
                </div>
                              
            </form>
        </div>     
        </div>
    );
}

export default EmployeeSettings;