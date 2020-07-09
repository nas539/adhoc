import React from 'react';
import Navigation from './navigation';



export default function header() {
    return (
        <div className="header-wrapper">
            <div className="header-left-column">
                <Navigation />   
            </div>
            
            <div className="logo">
                ad.Hoc
            </div>
            <div className="header-right-column">
                <a href="../pages/login.js">Login</a>
                <a href="../pages/register.js">Register</a>
            </div>
        </div>
    )
}
