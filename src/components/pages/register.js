import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";


export default class Register extends Component {
    render() {
        return (
            <div className="register-page-wrapper">
                <Header />
                <div className="body-wrapper">
                    <div className="register-section">
                        <p>Username: </p>
                        <input type="text" name="username" value="username" placeholder="User Name"/>
                    </div>
                    <div className="register-section">
                        <p>First Name: </p>
                        <input type="text" name="firstName" value="firstName" placeholder="First Name"/>
                    </div>
                    <div className="register-section">
                        <p>Last Name: </p>
                        <input type="text" name="LastName" value="lastName" placeholder="Last Name"/>
                    </div>
                    <div className="register-section">
                        <p>Password: </p>
                        <input type="password" name="password" value="password" placeholder="Enter Password" ></input>
                    </div>
                    <div className="register-section">
                        <p>Confirm Password: </p>
                        <input type="password" name="confirmPassword" value="confirmPassword" placeholder="Confirm Password"></input>
                    </div>
                    <button>Register</button>
                </div>
                <Footer />
            </div>
        )
    }
}