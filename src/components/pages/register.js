import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import Footer from "./footer";

const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }

export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            errorMessage: "Register a username"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
             [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            errorMessage: "Sending"
        })
        if (this.state.username === "" || this.state.password === "" || this.state.confirmPassword === "") {
            this.setState({
                errorMessage: "You didn't fill out an area"
            })   
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                errorMessage: "Mismatched Passwords"
            })   
        } else {
            fetch("https://nas-back-ad.herokuapp.com/user/add", { 
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
         })
         .then(response => response.json())
         .then(data => {
             if (data === "Username taken") {
                 this.setState({
                     errorMessage: "Username Taken"
                 })    
             } else {
                this.setState({
                    errorMessage: "User Created"
                }) 
            }
         })
         .catch(error => {
             this.setState({
                errorMessage: " "
             })   
         })
        }
    }
    

    render() {
        return (
                <div className="register-page-wrapper" >
                    <StyleRoot className="middle">
                        <div className="body-wrapper"style={styles.slideInRight}>
                            <div className="register-section">
                                <p>Username: </p>
                                <input 
                                    type="text" 
                                    name="username" 
                                    value={this.state.username}
                                    placeholder="User Name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            
                            <div className="register-section">
                                <p>Password: </p>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={this.state.password} 
                                    placeholder="Enter Password"
                                    onChange={this.handleChange} 
                                />
                            </div>
                            <div className="register-section">
                                <p>Confirm Password: </p>
                                <input 
                                    type="password" 
                                    name="confirmPassword" 
                                    value={this.state.confirmPassword} 
                                    placeholder="Confirm Password"
                                    onChange={this.handleChange}
                                    />
                            </div>
                            <button 
                                type="submit"
                                onClick={this.handleSubmit}
    
                                >
                                
                                    Register
                            </button>
                            <p>{this.state.errorMessage}</p>
                        </div>
                    </StyleRoot>
                    <Footer />   
                </div>  
        )
    }
}