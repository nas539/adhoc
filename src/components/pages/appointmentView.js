import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Popup from "reactjs-popup";

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
            data: [],
            username: "",
            errorMessage: "Your Appointments "
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
        this.setState({
            errorMessage: "Getting Appointments"
        })
        if (this.state.username === "") {
            this.setState({
                errorMessage: "Enter username"
            })
        }
        fetch(`https://nas-adhoc-backend.herokuapp.com/appointment/get/data/${this.state.username}`, {
            method: "GET",
            header: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                data: data
            })
            if (this.state.data === "") {
                this.setState({
                    errorMessage: "Add appointments"
                })
            } else {
                this.setState({
                    errorMessage: "Your appointments (click for more info)"
                })
            }
         })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMessage: "Server error"
            })
        }) 
    }

    renderAppointments() {
        return (
            <ul>
                {this.state.data.map(item => (
                    <li className="appointment" key={item.id}>
                       <Popup classname="popup" modal trigger={<button>{item.title}: {item.company}</button>}>
                            <ul className="modal-appointment">
                                <li className="modal">Title: {item.title}</li>
                                <li className="modal">Company: {item.company}</li>
                                <li className="modal">Date: {item.date}</li>
                                <li className="modal">Time: {item.time}</li>
                            </ul>
                       </Popup>
                    </li>   
                ))}
            </ul>
        ) 
    }
   
    render() {
        return (
            <div className="monthview-page-wrapper" >
                <StyleRoot className="middle">
                    <div className="body-wrapper" style={styles.slideInRight}>
                        <div className="sheduler-section">
                            <p>Username: </p>
                            <input 
                                type="text" 
                                name="username" 
                                value={this.state.username} 
                                placeholder="Username"
                                onChange={this.handleInputChange}
                            />
                            <button type="button" onClick={this.getAppointments}>Get Appointments</button> 
                        </div>    
                        <div className="appointments">
                            <p id="error">{this.state.errorMessage}</p>
                            {this.renderAppointments()}
                        </div>  
                    </div>
                </StyleRoot>
                <Footer />
            </div> 
        )
    }
}
