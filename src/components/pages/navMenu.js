import React, { Component } from 'react';
import { Route, HashRouter, NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

import Home from "./home";
import Login from "./login";
import Register from "./register";
import Appointment from "./appointmentView";
import SaveTheDate from './saveTheDate';


export default class NavigationMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: "lightgray",
            
        }

    }

    

    render() {
        const loggedOutNav =
            <ul className="header" >
                <li><NavLink exact to="/">ad.Hoc</NavLink></li>
                <li><NavLink to="/register"><i className="fas fa-user-plus"></i></NavLink></li>
                <li><NavLink to="/login"><i className="fas fa-sign-in-alt"></i></NavLink></li>
             </ul>

        const loggedInNav =
                <ul className="header" >
                    <li><NavLink exact to="/">ad.Hoc</NavLink></li>
                    <li><NavLink to="/savethedate"><i className="fas fa-plus-square"></i></NavLink></li> 
                    <li><NavLink to="/appointments"><i className="fas fa-calendar-alt"></i></NavLink></li>
                    <li><button onClick={this.props.logOut}>LogOut</button></li>
                </ul>

        return (  
            <div className="menu-toggle" style={{backgroundColor: this.state.backgroundColor}}>
                <HashRouter className="nav" >
                    <div> 
                             {this.props.loggedIn === false ? loggedOutNav : loggedInNav }
                        <div className="content"> 
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/appointments" component={Appointment}/>  
                            <Route path="/savethedate" component={SaveTheDate}/> 
                        </div>
                    </div>
                </HashRouter>
            </div>
        )
     }
}


