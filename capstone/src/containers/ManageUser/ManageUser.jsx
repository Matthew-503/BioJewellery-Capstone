import React from 'react';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getAccounts, reset } from '../../features/accountFeatures/accountSlice';

import { UserBlock } from '../../components';

import './ManageUser.css';

const ManageUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { account } = useSelector((state) => state.auth)

    useEffect(() => {
        if(!account) {
            navigate('/home')
        }

        dispatch(getAccounts())

        return () => {
            dispatch(reset())
        }
    }, [account, navigate, dispatch]) 

    return(
        <div className="account__center">
            <div className="account__header-text">
                <h1>
                    Manage Users
                </h1>
            </div>

            <div className="account__search-bar">
                <input 
                    type="text" 
                    className="search__account" 
                    placeholder="Search User">
                </input>
            </div> 

            {/* <section className="account__contents">
                {account.length > 0 ? (
                    <div className="accounts">
                        {account.map((account) => (
                            <UserBlock key={account._id} account={account}/>                 
                        ))}
                    </div>    
                ) : (<h3>There are no accounts available</h3>) }
            </section> */}
        </div>
    )
}

export default ManageUser;