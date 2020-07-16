import React, { Component } from 'react';
import { Route, HashRouter, NavLink } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Register from "./register";
import Appointment from "./appointmentView";
import SaveTheDate from './saveTheDate';





export default class NavigationMenu extends Component {
    
 
    render() {
     return ( 
        <div className="menu-toggle">
            <HashRouter className="nav" >
                <div> 
                    <ul className="header" >
                        <li><NavLink  exact to="/"><i className="fas fa-home"></i></NavLink></li>
                        <li><NavLink to="/register"><i className="fas fa-user-plus"></i></NavLink></li>
                        <li><NavLink to="/appointment"><i className="fas fa-calendar-alt"></i></NavLink></li>
                        <li><NavLink to="/savethedate"><i className="fas fa-plus-square"></i></NavLink></li>   
                    </ul>
                   
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/appointment" component={Appointment}/>  
                        <Route path="/savethedate" component={SaveTheDate}/> 
                    </div>
                </div>
            </HashRouter>
        </div>
        )
     }
}


