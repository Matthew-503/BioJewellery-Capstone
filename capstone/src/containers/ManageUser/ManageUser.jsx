import React from 'react';
import { UserBlock } from '../../components';

import './ManageUser.css';

const ManageUser = () => {
    return(
        <div className="user__center">
            <div className="user__header-text">
                <h1>
                    Manage Users
                </h1>
            </div>

            <div className="user__search-bar">
                <input 
                    type="text" 
                    className="search__user" 
                    placeholder="Search User">
                </input>
            </div> 

            <div>
                {/* <UserBlock /> */ }
            </div> 







        </div>
    )
}

export default ManageUser;