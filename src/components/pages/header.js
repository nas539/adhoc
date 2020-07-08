import React from 'react'


export default function header() {
    return (
        <div className="header-wrapper">
            <div className="header-left-column">
            <button className="hamburger"><i class="fas fa-bars"></i></button>
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
