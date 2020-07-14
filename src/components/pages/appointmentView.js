import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Cookies from "js-cookie"

import Header from './header';
import Footer from './footer';



const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }

export default class MonthView extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: []
        }
        this.getAppointments = this.getAppointments.bind(this);
    }

    getAppointments() {
        
        fetch(`http://127.0.0.1:5000/appointment/get/data${Cookies.get("username")}`, {
            mode: "no-cors",
            method: "GET" })
        .then(response => response.json())
        .then(data => this.setState({ data: data }))
        .catch(error => console.log(error))
        console.log(data)
    
    }
   
    render() {
        return (
            
                <div className="monthview-page-wrapper" >
                    <Header />
                    <StyleRoot>
                        <div className="body-wrapper" style={styles.slideInRight}>
                            <button type="button" onClick={this.getAppointments}>Get Appointments</button>
                        </div>
                    </StyleRoot>
                    <Footer />
                </div>
            
        )
    }
}
