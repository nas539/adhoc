import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";


export default class Login extends Component {
    render() {
        return (
            <div className="login-page-wrapper">
                <Header />
                <div className="body-wrapper">
                    <input type="text" name="username" value="username"/>
                    <input type="password" name="password" value="password"></input>
                    <button>Login</button>
                </div>
                <Footer />
            </div>
        )
    }
}