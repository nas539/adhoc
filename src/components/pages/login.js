import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Cookies from 'js-cookie';

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

        this.state = {
            username: "",
            password: "",
            errorMessage: " Go ahead, login!"
        }
        
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }


    handleLoginChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        Cookies.get("username")
        if (this.state.username === "" || this.state.password === "") {
            this.setState({ errorMessage: "blank field" })
        }
        else {
            fetch("https://nas-back-ad.herokuapp.com/user/verification", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data === "User NOT Verified") {
                    this.setState({ errorMessage: "Information wrong" })
                } else {
                    this.setState({ 
                        errorMessage: "Logged In",
                        
                    })
                    Cookies.set("username", this.state.username)
                    window.location.href=("/#/savethedate")
                }
             })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: "Server has issues" })
             })
        }
    }

    render() {
        return (
            <div className="login-page-wrapper" >
                <StyleRoot>
                <div className="middle">
                    <div className="body-wrapper" style={styles.slideInRight} >
                    <div className="login-top">
                        <p>{this.state.errorMessage}</p>
                        </div>
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
                    </div>
                    </StyleRoot>
                <Footer />
            </div>
        )
    }
}