import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Cookies from 'js-cookie';

import Header from "./header";
import Footer from "./footer";


const styles = {
    slideInRight: {

            animation: 'x 1s',
            animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
  }

export default class Login extends Component {
    constructor(props) {
        super(props);

        if (Cookies.get("usernameInput")) {
            this.state.history.push("/appointments")
        }

        this.state = {
            status: "loggedOut",
            usernameInput: "",
            passwordInput: "",
            errorMessage: "none"
        }

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: "none"
        })
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        if (this.state.usernameInput === "" || this.state.passwordInput === "") {
            this.setState({ errorMessage: "blank field" })
        }
        else {
            fetch("http://127.0.0.1:5000/user/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    username: this.state.usernameInput,
                    password: this.state.passwordInput
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
 
                if (data === "User NOT Verified") {
                    this.setState({ errorMessage: "not verified" })
                }
                else {
                    this.setState({ 
                        errorMessage: "none",
                        status: "loggedIn"
                    })
                    Cookies.set("username", this.state.usernameInput)
                    this.state.history.push("/appointments")
                }
             })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: "fetch error" })
             })
        }
    }

    render() {
        return (
                <div className="login-page-wrapper" >
                    <Header />  
                    <StyleRoot>
                    <div className="body-wrapper" style={styles.slideInRight} >
                        <div className="login-top">
                            <p>Username: </p>
                            <input 
                                type="text" 
                                name="username" 
                                usernameInput={this.state.usernameInput}
                                placeholder="Username"
                                onChange={this.handleLoginChange}
                            />
                        </div>
                        <div className="login-middle">
                            <p>Password: </p>
                            <input 
                                type="password" 
                                name="password" 
                                passwordInput={this.state.passwordInput} 
                                placeholder="Password"
                                onChange={this.handleLoginChange}
                            />
                        </div>
                        <button type="submit" onClick={this.handleLoginSubmit}>Login</button>
                    </div>
                    </StyleRoot>
                    <Footer />
                </div>
        )
    }
}