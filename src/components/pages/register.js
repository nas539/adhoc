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

export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            confirmPassword: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: "none"
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.username === "" || this.state.password === "" || this.state.confirmPassword === "") {
            this.setState({
                errorMessage: "blank field"
            })
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({
                errorMessage: "mismatched passwords"
            })
        } else {
            fetch("http://127.0.0.1:5000/user/add", { 
            mode: "no-cors",
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
         })
         .then(response => response.json())
         .then(data => {
             console.log(data)

             if (data === "Username taken") {
                 this.setState({
                     errorMessage: "username taken"
                 })
             }
             else {
        
            this.setState({
                errorMessage: "none"
            })
            Cookies.set("username", this.state.username)
            this.props.history.push("/login")
        }
         })
         .catch(error => {
             console.log(error)
             this.setState({
                errorMessage: "fetch error"
             })

         })
        }

    }
    

    render() {
        return (
                <div className="register-page-wrapper" >
                    <Header />
                    <StyleRoot>
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
                                onClick={this.handleSubmit}>
                                    Register
                            </button>
                        </div>
                    </StyleRoot>
                    <Footer />   
                </div>  
        )
    }
}