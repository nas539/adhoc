import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
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

        this.state = {
            usernameInput: "",
            passwordInput: ""
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
                        <input type="text" name="username" value="username" placeholder="Username"/>
                        </div>
                        <div className="login-middle">
                        <p>Password: </p>
                        <input type="password" name="password" value="password" placeholder="Passwrod"></input>
                        </div>
                        <button>Login</button>
                    </div>
                    </StyleRoot>
                    <Footer />
                </div>
            
        )
    }
}