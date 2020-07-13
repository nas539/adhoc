import React from 'react';
import { NavLink } from "react-router-dom";


export default function navLoggedOutMenu(props) {

    return (
        <ul className="header" >
                
        <li><NavLink  exact to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        </ul>
    )
}