import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Popup from "reactjs-popup";
import Cookies from 'js-cookie';

import Footer from './footer';
import { ImageSlideshow } from 'material-ui/svg-icons';


const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }

export default class MonthView extends Component {
    constructor(props){
        super(props);

        if (!Cookies.get("username")) {
            window.location.href=("/#/login")
          }

        this.state = {
            data: [],
            username: "",
            errorMessage: "Your Appointments ",
            click: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getAppointments = this.getAppointments.bind(this);
    }


    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    getAppointments() {
        Cookies.get("username")
        this.setState({
            username: Cookies.get("username")
        })
        this.setState({
            errorMessage: "Getting Appointments"
        })
        fetch(`https://nas-back-ad.herokuapp.com/appointment/get/data/${Cookies.get("username")}`, {
            method: "GET",
            header: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data
            })
            if (this.state.data.length === 0) {
                this.setState({
                    errorMessage: "Add appointments"
                })
            } else {
                this.setState({
                    errorMessage: "Your appointments",
                    click: "click below for more info"
                })
            }
         })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMessage: "..."
            })
        }) 
        
        
    }
   

    renderAppointments() {
        return (
            <div>
                {this.state.data.map(item => (
                    <p className="appointment" key={item.id}>
                       <Popup classname="popup" modal trigger={<button>{item.title}: {item.company}</button>} position="center center">
                            <div className="modal-appointment">
                                <p className="modal">Title: {item.title}</p>
                                <p className="modal">Company: {item.company}</p>
                                <p className="modal">Date: {item.date}</p>
                                <p className="modal">Time: {item.time}</p>
                            </div>
                       </Popup>
                    </p>   
                ))}
            </div>
        ) 
    }
   
    render() {
        return (
            <div className="monthview-page-wrapper" >
                <StyleRoot className="middle">
                    <div className="body-wrapper" style={styles.slideInRight}>
                        <div className="sheduler-section">
                           
                            <button type="button" onClick={this.getAppointments}>Get Appointments</button> 
                            <div className="appointments">
                            <p id="error">{this.state.errorMessage}</p>
                            <p id="error">{this.state.click}</p>
                            {this.renderAppointments()}
                        </div>
                        </div>    
                          
                    </div>
                </StyleRoot>
                <Footer />
            </div> 
        )
    }
}
