import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Register from "./register";
import Appointment from "./appointmentView";
import SaveTheDate from './saveTheDate'




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
                    <li><NavLink to="/appointment">Daily</NavLink></li>
                    <li><NavLink to="/savethedate">AddEvent</NavLink></li>
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


