import React from 'react';
import { NavLink } from "react-router-dom";


export default function navLoggedInMenu(props) {

    return (
        <ul className="header" >
            <li><NavLink  exact to="/">Home</NavLink></li>
            <li><NavLink to="/appointment">Daily</NavLink></li>
            <li><NavLink to="/savethedate">AddEvent</NavLink></li>   
        </ul>
    )
}