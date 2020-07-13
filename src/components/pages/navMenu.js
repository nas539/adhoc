import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Register from "./register";
import Appointment from "./appointmentView";
import SaveTheDate from './saveTheDate';
import NavLoggedOutMenu from './loggedOutNav';
import NavLoggedInMenu from './loggedInMenu';




export default class NavigationMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: "loggedOut"
        }
    }
 
    render() {
     return ( 
        <div className="menu-toggle">
            <HashRouter className="nav" >
                <div> 
                    {this.state.status === "loggedOut"
                    ? <NavLoggedOutMenu />
                    : <NavLoggedInMenu />}
                   
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


