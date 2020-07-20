import React, { Component } from 'react';
import { slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Calendar from 'react-calendar';
import Cookies from 'js-cookie';

import Footer from "./footer";

const styles = {
    slideInRight: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
      }
  }
 
export default class SaveTheDateome extends Component {
    constructor(props){
        super(props);

        if (!Cookies.get("username")) {
            alert("You must log in!")
          }

        this.state = {
            date: new Date(),
            title: "",
            company: "",
            time: "",
            username: Cookies.get("username"),
            errorMessage: "Create an Appointment"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = date => {
        this.setState({
              date: date
        });  
      }

      handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
      }

      handleClick(event) {
        event.preventDefault();
        Cookies.get("username")
        this.setState({
            errorMessage: "Sending Appointment",
            username: Cookies.get("username")
        })
        if (this.state.username === "" || this.state.title === "" || this.state.company === "" || this.state.time === "") {
            this.setState({
                errorMessage: "You didn't fill out an area"
            })
        }
        fetch("https://nas-back-ad.herokuapp.com/appointment/add", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    title: this.state.title,
                    company: this.state.company,
                    date: this.state.date,
                    time: this.state.time,
                    username: Cookies.get("username")
                })
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    errorMessage: "Appointment Created"
                })
             })
            .catch(error => {
                console.log(error)
             })
             this.setState({
                errorMessage: "Server Problems"
            })
      }

    render() {
        return (
                <div className="save-the-date-page-wrapper" >
                    <div className="middle-section-wrapper">
                        <StyleRoot className="middle">
                            <div className="body-wrapper"style={styles.slideInRight}>
                                <div className="sheduler-section">
                                        <p>Title: </p>
                                        <input 
                                            type="text" 
                                            name="title" 
                                            value={this.state.title} 
                                            placeholder="ex: Interview, Follow up..."
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="sheduler-section">
                                        <p>Company: </p>
                                        <input 
                                            type="text" 
                                            name="company" 
                                            value={this.state.company} 
                                            placeholder="Company"
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="sheduler-section calendar-wrapper">
                                        <p>Date: </p>
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                        />
                                    </div>
                                    <div className="sheduler-section">
                                        <p>Time: </p>
                                        <input 
                                            type="text" 
                                            name="time" 
                                            value={this.state.time} 
                                            placeholder="ex: 10:00 AM"
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <button type="submit" onClick={this.handleClick}>Save</button>
                                    <p id="error">{this.state.errorMessage}</p>
                            </div>
                        </StyleRoot>
                    </div>
                    <Footer />
                </div>
        )
    }
}