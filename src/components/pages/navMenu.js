import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Register from "./register";
import MonthView from "./monthView";


export default class NavigationMenu extends Component {
 
    render() {
     return ( 
        <div className="menu-toggle">
            <HashRouter className="nav" >
            <div > 
              <ul className="header" >
                   <li><NavLink  exact to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/monthview">MonthView</NavLink></li>
              </ul>
              <div className="content">
                                <Route exact path="/" component={Home}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/register" component={Register}/>
                                <Route path="/monthview" component={MonthView}/>  
                        </div>
                    </div>
            </HashRouter>
        </div>
        )
     }
}


