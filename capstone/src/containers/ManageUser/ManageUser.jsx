import React from 'react';
import { UserBlock } from '../../components';

import './ManageUser.css';

const ManageUser = () => {
    return(
        <div>
            <div className="user__header-text">
                <h1>
                    Manage Users
                </h1>
            </div>

            <div className="user__search-bar">
                <input 
                    type="text"
                    placeholder='Search Users'
                />
            </div> 

            <div>
                {/* <UserBlock /> */ }
            </div> 







        </div>
    )
}

export default ManageUser;