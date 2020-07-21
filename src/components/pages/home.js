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

export default class Home extends Component {
    render() {
        return (
            <div className="home-page-wrapper" >
                <StyleRoot className="middle">
                <div className="body-wrapper" style={styles.slideInRight}>
                    <p>Looking for a job?</p>                        
                    <p>When necessary or needed</p> 
                    <p>Click <i className="fas fa-user-plus icon"></i>  to add your username</p> 
                    <p>Click <i class="fas fa-sign-in-alt icon"></i> login/out</p> 
                    <p>Click <i className="fas fa-calendar-alt icon"></i> to see you appointments</p> 
                    <p>Click <i class="fas fa-plus-square icon"></i> to add appointments</p>
                </div>
                </StyleRoot>
                <Footer />
            </div>
           
        )
    }
}
