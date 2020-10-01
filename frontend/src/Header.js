import React from 'react'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="list_header">
                <img src="https://firebasestorage.googleapis.com/v0/b/tiktok-clone-c100c.appspot.com/o/Orange_and_White_Beauty_Logo1-removebg-preview.png?alt=media&token=e93cf076-136b-45e6-bd0c-3b13b818543a" alt=""/>
                <IconButton>
                    <AccountCircleIcon fontSize="large"/>
                </IconButton>
            </div>
    )
}

export default Header
