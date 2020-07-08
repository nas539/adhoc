import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";


export default class Register extends Component {
    render() {
        return (
            <div className="register-page-wrapper">
                <Header />
                <div className="body-wrapper">
                    <input type="text" name="username" value="username" placeholder="User Name"/>
                    <input type="text" name="firstName" value="firstName" placeholder="First Name"/>
                    <input type="text" name="LastName" value="lastName" placeholder="Last Name"/>
                    <input type="password" name="password" value="password" placeholder="Enter Password" ></input>
                    <input type="password" name="confirmPassword" value="confirmPassword" placeholder="Confirm Password"></input>
                    <button>Register</button>
                </div>
                <Footer />
            </div>
        )
    }
}