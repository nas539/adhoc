import React, { Component } from 'react';

import NavigationMenu from "./navMenu.js";

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: <NavigationMenu/>,
            display: true,
        }
    }
    toggle() {
        this.setState((displayState) => ({
            display: !displayState.display
        }))
    }

    render() {
        return (
            <div className="menu-toggle">
                <button  onClick={() => this.toggle()} className="hamburger"><i class="fas fa-bars"></i></button>
                {!this.state.display && this.state.menu}
                
            </div>
        )
    }
}

