import React, { Component } from 'react';
import { Route, HashRouter, NavLink } from "react-router-dom";

import Home from "./home";
import Login from "./login";
import Register from "./register";
import Appointment from "./appointmentView";
import SaveTheDate from './saveTheDate';

export default class NavigationMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: "lightblue"
        }
    }
    
    render() {
     return (  
        <div className="menu-toggle" style={{backgroundColor: this.state.backgroundColor}}>
            <HashRouter className="nav" >
                <div> 
                     <ul className="header" >
                        <li><NavLink onClick={() => this.setState({ backgroundColor: "lightblue" })} exact to="/">ad.Hoc</NavLink></li>
                        <li><NavLink onClick={() => this.setState({ backgroundColor: "rgb(236, 71, 71)" })} to="/register"><i className="fas fa-user-plus"></i></NavLink></li>
                        <li><NavLink onClick={() => this.setState({ backgroundColor: "goldenrod" })} to="/savethedate"><i className="fas fa-plus-square"></i></NavLink></li> 
                        <li><NavLink onClick={() => this.setState({ backgroundColor: "rgb(56, 119, 56)" })} to="/appointments"><i className="fas fa-calendar-alt"></i></NavLink></li>  
                    </ul>
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


