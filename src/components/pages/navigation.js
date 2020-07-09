import React, { Component } from 'react';

import NavigationMenu from "./navMenu.js";

export default class Navigation extends Component {
 
    render() {
        return (
            <div className="menu-toggle">
                <button   className="hamburger"><i class="fas fa-bars"></i></button>
                <NavigationMenu/>
                
            </div>
        )
    }
}

