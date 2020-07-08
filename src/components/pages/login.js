import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameInput: "",
            passwordInput: ""
        }
    }

    render() {
        return (
            <div className="login-page-wrapper">
                <Header />
                <div className="body-wrapper">
                    <div className="login-top">
                    <p>Username: </p>
                    <input type="text" name="username" value="username" placeholder="Username"/>
                    </div>
                    <div className="login-middle">
                    <p>Password: </p>
                    <input type="password" name="password" value="password" placeholder="Passwrod"></input>
                    </div>
                    <button>Login</button>
                </div>
                <Footer />
            </div>
        )
    }
}