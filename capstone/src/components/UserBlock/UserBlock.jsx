import React from 'react';
import {useState} from 'react';


import './UserBlock.css';

const UserBlock = (account) => {
    return (
        <div className="user__block-container">
            <div className="user__details">
                <h2 className="user__name">{account.name}</h2>
                <h3 className="user__email">{account.email}</h3>
            </div>

            <button 
                className="suspend"
            ></button>

            <button 
                className="appeal"
            ></button>

            <button 
                className="delete"
            ></button>

        </div>
    )
}

export default UserBlock;